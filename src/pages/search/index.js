import { useEffect, useState } from 'react';
import Product from '../../components/product';
import api from '../../services/axios';

import './styles.css';
const Search = () =>{
  const [productData, setProductData] = useState();
  const [response, setResponse] = useState();
  useEffect(() =>{
    const products = async () =>{
      const productResponse = await api.get('/products');
      setResponse(productResponse.data.products);
      setProductData(productResponse.data.products);
    }
    products();
  }, [])
  const [search, setSearch] = useState("");
  const handleChange = e => {
    setSearch(e.target.value);
    setProductData(
      response?.filter(
        product => (
          product
          .name
          .toLowerCase()
          .includes(search.toLowerCase())
        )
      )
    )
  };
  return(
    <div className="bg-primary">
      <div className="container d-flex flex-column flex-xl-row mt-5 search-container">
        <div className="col-12 col-xl-3 text-secondary mt-3 px-2">
          <div className="input-group">
            <div className="input-group-prepend w-100">
              <span className="input-group-text p-0 border-0 bg-dark text-secondary">
                <input
                  type="search" 
                  className="form form-control form-control-lg bg-dark text-secondary" 
                  placeholder="search"
                  onChange={handleChange}
                />
                <span className="mdi mdi-magnify mx-3" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-9 d-flex flex-wrap">
          {
            productData?.map((e) =>(
              <div className="col-12 col-md-6 col-lg-4 px-2 mt-3">
                <Product {...e} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default Search;