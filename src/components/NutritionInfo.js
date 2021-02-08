import React from 'react';

function Nutritioninfo(props) {
let total = props.nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 );
  console.log();
  return (
      <div className="col-sm-4">
          <div className="product_card" >
            <div className="card-body">
              <h5 className="card-title">Food: {props.nutrition.foodName}</h5>
              <p className="card-title">Protein:  {props.protein}</p>
              <p className="card-title">Carbs: {props.nutrition.carbs}</p>
              <p className="card-title">Fat: {props.nutrition.fat}</p>
              <p className="card-title">Total Calorie Intake: {props.nutrition.totalCalories}</p>
              <p className="card-title">Total: {total}</p>
            </div>
          </div>
      </div>
  );
}
export default Nutritioninfo;

//Skicka iden härifrån till edit modal komponenten.