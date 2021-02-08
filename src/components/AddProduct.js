import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap'
import './css/AddProduct.css';

const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: Int, $protein: Int){
    __typename
    createProduct(data: {
        name: $name, 
        description: $description,
        price: $price,
        protein: $protein,
        image: {connect: {id: "ckk31jam03e1g0a07ruuufb2j"}}
      }) {
        id
      }
}
`;




function Addproducts() { 
  let name, description, price, protein;
  const [createProduct, { data }] = useMutation(ADD_PRODUCT);
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          + Add New
        </Button>
          <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal_title">ADD PRODUCT FORM</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
                  <form onSubmit={e =>{
                      e.preventDefault();
                      createProduct({variables: {name: name.value, description: description.value, price: parseInt(price.value), protein: parseInt(price.value * 2) }},{data})
                      // console.log(data)
                  }}>
                      <div className="name_Container">
                          <label>Name</label>
                          <p>It’s the name of the product</p>
                          <input type="text" id="newProjectTitle" placeholder="Name" ref={ value => name = value} />
                      </div>
                      <div className="name_Container">
                          <label>Price</label>  
                          <p>It will contain the price of our product</p>                   
                          <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => price = value}/>
                      </div>
                      <div className="name_Container">
                          <label>Description</label>
                          <p>This field will contain the description of our product</p>
                          <textarea rows="2" cols="50" id="newProjectDescription" placeholder="Description" ref={ value => description = value}/>
                      </div>
                      <div className="modal-footer">
                        <button  id="cancel_button" className="btn btn-primary" onClick={handleClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Add Product</button>
                      </div>
                  </form>
                  </Modal.Body>
                  </Modal>
              </div>          
  )
}


export default Addproducts;