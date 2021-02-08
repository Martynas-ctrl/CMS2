import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap';
import EditImage from './Images/EditIcon.png';
import './css/EditModal.css';

const UPDATE_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: Int, $id: ID,){
    __typename
    updateProduct(
        where: { id: $id, }
        data: {
        name: $name, 
        description: $description,
        price: $price,
      }) {
        id
      }
}
`;

// constructor(props) {
//     super(props);
//     this.state = {
//       show: false,
//   };

// onSubmit = () => {
//     this.setState({ 
//       show: !this.state.show,
//   });
// }



function Editproducts(props) { 
  let name, description, price;
  const [updateProduct, { data }] = useMutation(UPDATE_PRODUCT);
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(props);
  const id = props.id;
  return (
      <div key={id}>
        {/* <Button variant="primary" onClick={handleShow}>
          Edit
        </Button> */}
        
        {/* <button class="btn_edit"><img src={EditImage} className="edit_icon" alt="Edit Icon" /> Edit</button> */}
        <button className="btn_edit">
        <i class='far fa-edit'></i> Edit
        </button>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT PRODUCT FORM</Modal.Title>
        </Modal.Header>
          <Modal.Body className='modalContainer'>
          <form onSubmit={e =>{
                      e.preventDefault();
                      updateProduct({variables: { id: id, name: name.value, description: description.value, price: parseInt(price.value) }},{data})
                      // console.log(data, id);
                  }}>
                      <div>
                          <label>Product Name</label>
                          <input type="text" id="newProjectTitle" ref={ value => name = value} />
                      </div>
                      <div>
                          <label>Description</label>
                          <input type="text" id="newProjectDescription" ref={ value => description = value}/>
                      </div>
                      <div>
                          <label>Price</label>
                          <div>                               
                              <input type="text"  aria-label="Recipient's username" ref={ value => price = value}/>
                          </div>
                      </div>
                      <div className="modal-footer">
                          <button type="submit" className="btn btn-primary">Edit Product</button>
                      </div>
                      
                  </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            </Modal.Footer>
            </Modal>
              </div>  

  )
}


//När jag klickar på edit knappen i product.js då kommer det upp ett modal och i den renderar jag ut formulär för uppdatering av produkten.

export default Editproducts;