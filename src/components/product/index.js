import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import './styles.css';

const Product = ({_id, photo, name, price}) =>{
  const dispatch = useDispatch();
  const { costumer } = useSelector((state) => state.cart);
  const add = () =>{
    dispatch({type: '@cart/SET_CUSTOMER'})
    console.log(costumer)
  }
  const to = `/product/${_id}`;
  return(
    <div className="bg-dark product bg-dark">
      <img
        className="bg-white"
        src={photo}
        alt="..." 
      />
      <Link to={to}>
        <h5 onClick={() => window.scrollTo(0,0)}>{name}</h5>
      </Link>
      <div>
        <button
          className="btn btn-secondary"
        >
          add to cart
        </button>
        <badge className="badge badge-secondary">{price},00</badge>
      </div>
    </div>
  )
};

export default Product;