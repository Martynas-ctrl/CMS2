import { useQuery } from '@apollo/client';
import PRODUCTS_QUERY from './all-products/Queries';
import Product from './Product';
import AddProduct from './AddProduct';
import Cart from './Cart';
import Navbar from './Navbar';
import CreateProduct from './all-products/createProduct'
import Modal from './EditModal';
import Pagination from 'react-bootstrap-4-pagination';
import './css/Pagination.css';


import {React, useState, useEffect} from 'react'

let paginationConfig = {
  totalPages: 7,
  currentPage: 1,
  showMax: 5,
  size: "lg",
  threeDots: true,
  prevNext: true,
  onClick: function (page) {
    //  console.log(page);
   }
};

function Allproducts () {

const [allProducts, setAllProducts] = useState([]);
const { loading, error, data } = useQuery(PRODUCTS_QUERY);
console.log(PRODUCTS_QUERY);
// console.log(data);
const getData = () => {
  if(loading) 
      return <p>Loading products...</p>
  if(error)
      return <p>Error ...</p>
  if(data) {
      setAllProducts(data.products)
      // console.log(data.products);
  }
} 
   
useEffect(() => {
  getData();
  // console.log(allProducts);
})

     return (
          <div>
            <div className="container mt-4">
                <div className="row">
                    {allProducts.map(product => <Product key={product.id} product={product} />)}
                </div>
              </div>
              <Pagination {...paginationConfig} />
              </div>
          )
}

      

export default Allproducts;