import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

import './styles.css';

const Register = () =>{
  const history = useHistory();
  const { signUp } = useAuth();
  const [ loading, setLoading ] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSingUp = async () =>{
    await signUp(name, email, password, setLoading);
    history.push('/')
  }
  
  return(
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center bg-primary">
      <div className="bg-dark register-box">
        <h3 className="text-white font-weight-bold">Register</h3>
        <small className="text-white">Enter your details to login and buy.</small>
        <div className="input-group mt-4">
          <div className="input-group-prepend">
            <span className="input-group-text p-0 border-0 bg-primary">
              <span className="mdi mdi-account  mx-3" />
              <input
                type="text" 
                className="form form-control form-control-lg" 
                placeholder="name"
                onChange={e => setName(e.target.value)}
              />
            </span>
          </div>
        </div>
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
            onClick={handleSingUp}
          >
            Register
          </button>
          :
          <button className="btn btn-secondary btn-lg w-100">
            <span class="spinner-border spinner-border-sm" />
          </button>
          }
        </div>
        <div className="col-12 d-flex justify-content-end mt-3">
          <Link
            className="btn btn-outline-secondary btn-sm login col-6"
            to="/"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;