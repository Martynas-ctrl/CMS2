import React from 'react';
import AddProduct from './AddProduct';
import Navbar from './Navbar';
import './css/Header.css';
    
const Header = () => {
  return (
    <div className="header">
      <Navbar />  
      <input type="search" className="filter_input" placeholder="Filter products" /> 
    </div>
  );
};
export default Header;