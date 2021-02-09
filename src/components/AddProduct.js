import { React, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button, Modal } from 'react-bootstrap'
import './css/AddProduct.css';

const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: Int){
    __typename
    createProduct(data: {
        name: $name, 
        description: $description,
        price: $price,
        image: {connect: {id: "ckk31jam03e1g0a07ruuufb2j"}}
      }) {
        id
      }
}
`;

function Addproducts() { 

  let name, description, price;
  const [createProduct] = useMutation(ADD_PRODUCT);
  const [showModal, setShow] = useState(false);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const add = (e) => {
    e.preventDefault();
    createProduct({variables: {name: name.value, description: description.value, price: parseInt(price.value)}});
  }
  
  return (
      <div> 
        <Button className="button_add" variant="primary" onClick={formShow}>+ Add New</Button>
        <Modal show={showModal} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal_title">ADD GAME FORM</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <form onSubmit={add}>
              <div className="name_Container">
                <label>Name</label>
                <p>It’s the name of your game</p>
                <input type="text" id="newGameName" placeholder="Name" ref={ value => name = value} />
              </div>
              <div className="price_Container">
                <label>Price</label>  
                <p>It will contain the price of your game</p>                   
                <input type="text" id="newGamePrice" placeholder="Price" ref={ value => price = value} />
              </div>
              <div className="description_Container">
                <label>Description</label>
                <p>This field will contain the description of your game</p>
                <textarea rows="2" cols="50" id="newGameDescription" placeholder="Description" ref={ value => description = value} />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button id="cancel_button" className="btn btn-primary" onClick={formClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={add}>Add Game</button>
          </Modal.Footer>
        </Modal>
      </div>          
  )
}

export default Addproducts;