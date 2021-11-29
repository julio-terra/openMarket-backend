import { useState, useEffect } from 'react';
import api from '../../services/axios';

import Slider from '../../components/slider';
import Product from '../../components/product';

import './styles.css';

const Home = () =>{
  const [productData, setProductData] = useState();
  useEffect(() =>{
    const products = async () =>{
      const productResponse = await api.get('/products');
      setProductData(productResponse.data.products);
    }
    products();
  }, [])
  return(
    <div className="container-fluid bg-primary">
      <div className="container home-section">
        <h3 className="text-secondary">technology</h3>
        <Slider className="mt-5">
          {
          productData?.filter(p =>p.category === 'technology')
          .map(e =>(
            <div className="p-1">
              <Product {...e} />
            </div>
          ))
          }
        </Slider>
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-outline-secondary">
            view more
          </button>
        </div>
      </div>
      <div className="container home-section">
        <h3 className="text-secondary">fashion</h3>
        <Slider className="mt-5">
          {
          productData?.filter(p =>p.category === 'fashion')
          .map(e =>(
            <div className="p-1">
              <Product {...e} />
            </div>
          ))
          }
        </Slider>
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-outline-secondary">
            view more
          </button>
        </div>
      </div>
      <div className="container home-section">
        <h3 className="text-secondary">portion</h3>
        <Slider className="mt-5">
          {
          productData?.filter(p =>p.category === 'portion')
          .map(e =>(
            <div className="p-1">
              <Product {...e} />
            </div>
          ))
          }
        </Slider>
        <div className="d-flex justify-content-end mt-4 pb-5">
          <button className="btn btn-outline-secondary">
            view more
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;