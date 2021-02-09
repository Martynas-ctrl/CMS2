import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import PRODUCTS_QUERY from './Queries/Queries';
import Product from './Product';
import Pagination from 'react-bootstrap-4-pagination';
import './css/Allproducts.css';
import './css/Pagination.css';

let paginationConfig = {
  totalPages: 7,
  currentPage: 1,
  showMax: 5,
  size: "lg",
  threeDots: true,
  prevNext: true,
  onClick: function (page) {
     console.log(page);
   }
};

function Allproducts () {

const [allProducts, setAllProducts] = useState([]);
const { loading, error, data } = useQuery(PRODUCTS_QUERY);

const getData = () => {
  if(loading) 
    return <p>Loading products...</p>
  if(error)
    return <p>Error...</p>
  if(data) {
    setAllProducts(data.products);
  }
} 
   
useEffect(() => {
  getData();
})

  return (
      <div className="main_content_container">
        <div className="row">
          {allProducts.map(product => <Product key={product.id} product={product} />)}
        </div>
        <div>
          <Pagination {...paginationConfig} />
        </div>  
      </div>
  )
}

export default Allproducts;