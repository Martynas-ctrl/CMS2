import React from 'react';
import AddProduct from './AddProduct';
import './css/Navbar.css';
    
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h3>Game Store</h3>
        {/* <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => props.show()}>Cart {(props.cart.length)}</button> */}
        <AddProduct />  
    </nav>
  );
};
export default Navbar;