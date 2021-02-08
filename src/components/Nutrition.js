import { useQuery } from '@apollo/client';
import NUTRITION_QUERY from './NutritionQuery';
import Nutritioninfo from './NutritionInfo';



import {React, useState, useEffect} from 'react'


function Nutrition () {

const [nutritions, setNutritions] = useState([]);
const { loading, error, data } = useQuery(NUTRITION_QUERY);
console.log(NUTRITION_QUERY);
console.log(data);
const getDatas = () => {
  if(loading) 
      return <p>Loading user...</p>
  if(error)
      return <p>Error ...</p>
  if(data) {
      setNutritions(data.nutritionIntakes)
      console.log(data);
  }
} 
   
useEffect(() => {
  getDatas();
  console.log(nutritions);
  console.log((nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 )));
})
     return (
          <div>
            <div className="container mt-4">
                <div className="row">
                    {nutritions.map(nutrition => <Nutritioninfo key={nutrition.id} nutrition={nutrition} />)}
                </div>
              </div>
            </div>
          )
}

      

export default Nutrition;