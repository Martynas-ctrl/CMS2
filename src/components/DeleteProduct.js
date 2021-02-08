// import React, { Component } from 'react';
// import { gql, useMutation } from '@apollo/client';

// const DELETE_PRODUCT = gql`
//   mutation DeleteProduct($id: Int){
//     __typename
//     deleteProduct(
//         where: { id: $id }
//       ) {
//         id
//         name
//         price
//       }
// }
// `;

// function Deleteproduct() { 
//   let name, description, price;
//   const [deleteProduct, { data }] = useMutation(DELETE_PRODUCT);
    
//   removeProduct(() => {
//     deleteProduct({variables: {id: parseInt(product.id) }},{data})
//   })

//   return (
   
//     <div className="container mt-4">
//         <button>Hejsan!</button>
//       </div>
//   )
  
// }

// export default Deleteproduct;