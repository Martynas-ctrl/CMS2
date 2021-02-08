import { gql, useQuery } from '@apollo/client';

const NUTRITION_QUERY = gql`
  query {
    nutritionIntakes {
      id
      foodName
      protein
      carbs
      fat
      totalCalories
    }
  }
`;





export default NUTRITION_QUERY;



















// const addMutation  = gql`
//     mutation addPost($name: String!, $description: String!, $price: String!) {
//       createProduct(name: $name, description: $description, price: $price{
//         id,
//         name
//         description
//         price
//       }) 
//     }
// `;
// const PageWithMutation = graphql(addMutation, {name: 'addPost'})(CreatePage)

// const ADD_PROJECT = gql`
//     mutation {
//       createProduct(data: {
//         name: "The Last of as Part 2", 
//         description: "PS4 exclusive game", 
//         price: 60,
//         savedProducts: {
//           connect: {
//             id: "ckju15w1c0p3g0948phdqs905"
//           }
//         }
//       }) 
//     }
// `;


 
 

  // function newItems() {
  //   let name, description, price;
  //   const [createProduct, { data }] = useMutation(ADD_PROJECT);
  //   return (
  //     <div id="newItems">
  //       <form onSubmit={e =>{
  //         e.preventDefault();
  //         createProduct({variables: {name: name.value, description: description.value, price: price.value}},{data})
  //         console.log(data)
  //     }}>
  //       </form>
  
  //     </div>
  // )
  // }