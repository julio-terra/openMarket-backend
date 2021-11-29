import { useEffect, useState } from 'react';
import api from '../../services/axios';
import Slider from '../../components/slider';
import Products from '../../components/product';

import './styles.css';

const Product = ({match}) =>{
  const [productData, setproductData] = useState();
  const [productsData, setProductsData] = useState();
  const [userData, setUserData] = useState();
  useEffect(() =>{
    const request = async () =>{
      const productResponse = await api.get(`product/${match.params.id}`);
      setproductData(productResponse.data.product);
      const userResponse = await api.get(`user/${productResponse.data.product.user_id}`);
      setUserData(userResponse.data.user);
      const productsResponse = await api.get('/products');
      setProductsData(productsResponse.data.products);
    }
    request();
  },[match.params.id])
  return(
    <div className="bg-primary product-page-container">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row">    
          <div className="col-12 col-lg-7 bg-white rounded product-page-img">
            <img
            src={productData?.photo}
            alt="..."
            />
          </div>
          <div className="col-12 col-lg-5 px-0 px-lg-3 mt-3 mt-lg-0">
            <div className="text-secondary product-page-box">
              <small>new</small>
              <h3>{productData?.name}</h3>
              <h1 className="mt-3">${productData?.price},00</h1>
              <h5 className="mt-3">shop: {userData?.name}</h5>
              <p className="mt-2">category: {productData?.category}</p>
              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-secondary w-100"
                  >
                    buy
                  </button>
                </div>
                <div className="col-12 mt-2">
                  <button
                    className="btn btn-outline-secondary w-100"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 product-page-slide">
          <h3 className="text-secondary">{productData?.category}</h3>
          <Slider>
            {
              productsData?.filter(p =>p.category === productData.category)
              .map(e =>(
                <div className="p-1">
                  <Products {...e}/>
                </div>
              ))
            }
          </Slider>
        </div>
        <div className="col-12 product-page-slide">
          <h3 className="text-secondary">more of: {userData?.name}</h3>
          <Slider>
            {
              productsData?.filter(p =>p.user_id === userData._id)
              .map(e =>(
                <div className="p-1">
                  <Products {...e}/>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Product;