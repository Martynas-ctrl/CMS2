import { React, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Modal } from 'react-bootstrap';
import './css/EditModal.css';

const UPDATE_PRODUCT = gql`
  mutation EditProduct($name: String!, $description: String!, $price: Int, $id: ID){
    __typename
    updateProduct(
        where: { id: $id }
        data: {
        name: $name, 
        description: $description,
        price: $price,
      }) {
        id
      }
}
`;

function Editproducts(props) { 

  let name, description, price;
  const id = props.id;
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [showModal, setShow] = useState(false);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const update = (e) => {
    e.preventDefault();
    updateProduct({variables: {id: id, name: name.value, description: description.value, price: parseInt(price.value)}});
  }

  return (
      <div key={id}>
        <button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</button>
        <Modal show={showModal} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPDATE GAME FORM</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <form onSubmit={update}>
              <div className="name_Container">
                <label>Game Name</label>
                <p>Update the name of your game</p>
                <input type="text" id="updateGameName" placeholder="Update Name" ref={ value => name = value} />
              </div>
              <div className="price_Container">
                <label>Game Price</label>
                <p>Update the price of your game</p>
                <input type="text" id="updateGamePrice" placeholder="Update Price" ref={ value => price = value} />
              </div>
              <div className="description_Container">
                <label>Game Description</label>
                <p>Update the description of your game</p>
                <textarea rows="2" cols="50" id="updateGameDescription" placeholder="Update Description" ref={ value => description = value} />
              </div>  
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button id="cancel_button" className="btn btn-primary" onClick={formClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={update}>Update Game</button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default Editproducts;