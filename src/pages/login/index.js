import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom'

import './styles.css';

const Login = () =>{
  const [ loading, setLoading ] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signIn} = useAuth();

  return(
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center bg-primary">
      <div className="bg-dark login-box">
        <h3 className="text-white font-weight-bold">Login</h3>
        <small className="text-white">Enter your details to login and buy.</small>
        <div className="input-group mt-4">
          <div className="input-group-prepend">
            <span className="input-group-text p-0 border-0 bg-primary">
              <span className="mdi mdi-email mx-3" />
              <input
                type="email" 
                className="form form-control form-control-lg" 
                placeholder="email"
                onChange={e => setEmail(e.target.value)}
              />
            </span>
          </div>
        </div>
        <div className="input-group mt-4">
          <div className="input-group-prepend">
            <span className="input-group-text p-0 border-0 bg-primary">
              <span className="mdi mdi-lock mx-3" />
              <input
                type="password" 
                className="form form-control form-control-lg" 
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
              />
            </span>
          </div>
        </div>
        <div className="col-12 mt-3">
        {!loading?
          <button
            className="btn btn-secondary btn-lg w-100"
            onClick={() => signIn(email, password, setLoading)}
          >
            Access
          </button>
          :
          <button className="btn btn-secondary btn-lg w-100">
            <span class="spinner-border spinner-border-sm" />
          </button>
          }
        </div>
        <div className="col-12 d-flex justify-content-end mt-3">
          <Link
            className="btn btn-outline-secondary btn-sm register col-6"
            to="/register" 
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
};
export default Login;