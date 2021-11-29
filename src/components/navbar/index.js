import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import Logo from '../../assets/logo.png';

import './styles.css';

const Navbar = () =>{
  const { signOut } = useAuth();
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  return(
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
      <div className="container">
      <Link
        to="/"
        className="navbar-brand"
      >
        <img src={Logo}
          style={{width: '120px'}}
          alt="..."
        />
      </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={openDrawer}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                to="/profile"
                className="nav-link"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                to="/product/search"
                className="nav-link"
              >
                Search
              </Link>
            </li>
            <li className="nav-item bg-secondary px-4 rounded">
              <div
                className="nav-link"
                onClick={() => signOut()}
              >
                Logout
              </div>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  )
};
export default Navbar;