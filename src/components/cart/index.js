import { useSelector } from 'react-redux';

import './styles.css';

const Cart = () =>{
  const { costumer } = useSelector((state) => state.cart);
  return(
    <>
    <div className="rounded-circle bg-secondary cart-icon text-white">
      <span className="mdi mdi-cart" />
      <p className="cart-lenght">{costumer.length}</p>
    </div>
    </>
  )
};
export default Cart;