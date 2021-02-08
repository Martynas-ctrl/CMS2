import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap'
import '../App.css';

const ADD_NUTRITION = gql`
  mutation AddNutrition($foodName: String!, $protein: Int!, $carbs: Int!, $fat: Int!, $totalCalories: Int){
    __typename
    createNutritionIntake(data: {
      foodName: $foodName, 
      protein: $protein,
      carbs: $carbs,
      fat: $fat,
      totalCalories: $totalCalories,
      }) {
        id
      }
}
`;


function AddNutrition() {
  let foodName, protein, carbs, fat, totalCalories;
  const [createNutritionIntake, { data }] = useMutation(ADD_NUTRITION);
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
      + New Nutriton
    </Button>
      <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal_title">ADD USER FORM</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalContainer'>
              <form onSubmit={e =>{
                  e.preventDefault();
                  createNutritionIntake({variables: {foodName: foodName.value, protein: parseInt(protein.value), carbs: parseInt(carbs.value), fat: parseInt(fat.value), totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9)} },{data})
                  // console.log(data)
              }}>
                  <div className="name_Container">
                      <label>Food Name</label>
                      <p>It’s the name of the product</p>
                      <input type="text" id="newProjectTitle" placeholder="Name" ref={ value => foodName = value} />
                  </div>
                  <div className="name_Container">
                      <label>Protein</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => protein = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Carbs</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => carbs = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Fat</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => fat = value}/>
                  </div>
                  <div className="modal-footer">
                    <button  id="cancel_button" className="btn btn-primary" onClick={handleClose}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Add Nutrition</button>
                  </div>
              </form>
              </Modal.Body>
              </Modal>
          </div>          
  );
};
export default AddNutrition;