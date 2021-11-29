import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Sidebar from './components/sidebar';
import { useAuth } from './hooks/auth';

import Home from './pages/home';
import Search from './pages/search';
import Login from './pages/login'
import Register from './pages/register';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Cart from './components/cart';
import Product from "./pages/product";
import ComingSoon from "./pages/comingSoon";


export default function App() {
  const { logged } = useAuth();
  if(logged){
    return(
    <Router>
      <Navbar />
      <Sidebar />
      <Cart />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/search" component={Search} />
        <Route path="/product/:id" component={Product} />
        <Route path="/profile" component={ComingSoon} />
      </Switch>
      <Footer />
    </Router>
    )
  }else{
    return(
      <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </Router>
    )
  };
};