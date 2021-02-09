import React from 'react';
import img from './Images/game store logo.svg';
import Search from './Search';
import AddProduct from './AddProduct';
import './css/Header.css';
import './css/Search.css';
    
const Header = () => {
  return (
      <div className="header">
        <div className="container">
          <img src={img} className="logo" alt="website logo"></img>
          <h3>Game Store</h3> 
        </div>
        <div className="container_search_input">
          <Search />
        </div>
          <AddProduct />  
      </div>
  );
};

export default Header;