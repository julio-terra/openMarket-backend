import { createContext, useState, useContext } from 'react';
import api from '../services/axios';
import validator from 'validator';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('@auth:token');

    return !!isLogged;
  });
  const [user, setUser] = useState(() => {
    const User = localStorage.getItem('@auth:user');

    return !!User;
  });

  const signIn = async (email, password, setLoading) => {
    setLoading(true)
    if(!email || !password){
      alert('please fill in all fields')
      setLoading(false)
    }else{
      const response = await api.post('/user/login', {email, password});
      if(response.data.error){
        alert(response.data.message)
        setLoading(false)
      }else{
        localStorage.setItem('@auth:user', response.data.user);
        localStorage.setItem('@auth:token', response.data.accessToken);
        setLogged(true);
        setUser(response.data.user)
        setLoading(false);
      }
    }
  }
  const signUp = async (name, email, password, setLoading) => {
    setLoading(true)
    if(!name || !email || !password){
      alert('please fill in all fields')
      setLoading(false)
    }else{
      const isEmail = validator.isEmail(email);
      if(!isEmail){
        alert('enter a valid email')
        setLoading(false)
      }else{
        const isStrongPassword = validator.isStrongPassword(password, {minLowercase: 0, minUppercase: 0, minSymbols: 0})
        if(!isStrongPassword){
          alert('your password is too weak')
          setLoading(false)
        }else{
          const response = await api.post('/user/register', {name, email, password})
          if(response.data.error){
            alert(response.data.message)
            setLoading(false)
          }else{
            signIn(email, password, setLoading)
            setLoading(false)
          }
        }
      }
    }
  }

  const signOut = () => {
    localStorage.removeItem('@auth:user');
    localStorage.removeItem('@auth:token');
    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{logged, user, signIn, signUp, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth}