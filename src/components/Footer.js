import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap'
import '../App.css';

const ADD_USER = gql`
  mutation AddUser($fullName: String!, $gender: String!, $age: Int!, $height: Int!, $weight: Int!, $total: Int!){
    __typename
    createUserInfo(data: {
      fullName: $fullName, 
      gender: $gender,
      age: $age,
      height: $height,
      weight: $weight,
      total: $total,
      }) {
        id
      }
}
`;


function Footer() {
  let fullName, gender, age, height, weight, total;
  const [createUserInfo, { data }] = useMutation(ADD_USER);
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
      + New User
    </Button>
      <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal_title">ADD USER FORM</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalContainer'>
              <form onSubmit={e =>{
                  e.preventDefault();
                  createUserInfo({variables: {fullName: fullName.value, gender: gender.value, age: parseInt(age.value), height: parseInt(height.value), weight: parseInt(weight.value), total: parseInt(weight.value * 10) + parseInt(height.value * 6.25) - parseInt(age.value * 5) + 5   } },{data})
                  // console.log(data)
              }}>
                  <div className="name_Container">
                      <label>Name</label>
                      <p>It’s the name of the product</p>
                      <input type="text" id="newProjectTitle" placeholder="Name" ref={ value => fullName = value} />
                  </div>
                  <div className="name_Container">
                      <label>Age</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => age = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Weight</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => weight = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Height</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => height = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Description</label>
                      <p>This field will contain the description of our product</p>
                      <textarea rows="2" cols="50" id="newProjectDescription" placeholder="Description" ref={ value => gender = value}/>
                  </div>
                  <div className="modal-footer">
                    <button  id="cancel_button" className="btn btn-primary" onClick={handleClose}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                  </div>
              </form>
              </Modal.Body>
              </Modal>
          </div>          
  );
};
export default Footer;