import React from 'react';
import deleteProduct from './DeleteProduct';
import { gql, useMutation } from '@apollo/client';
import EditProduct from './EditModal';
import Modal from './EditModal';
import AddProduct from './AddProduct';
import './css/Product.css';

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID){
    __typename
    deleteProduct(
        where: { id: $id }
      ) {
        id
        name
        price
      }
}
`;

// console.log(DELETE_PRODUCT);
function Product(props) {
  // console.log(props)
  const [deleteProduct, { data }] = useMutation(DELETE_PRODUCT);
  // console.log(DELETE_PRODUCT);
    
 const removeProduct = (id) => {
    deleteProduct({variables: {id: id }},{data});
    // console.log(id);
  }

  return (
      <div className="col-sm-4">
          <div className="product_card" >
            <img src={props.product.image.url} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">{props.product.name}</h5>
              <p className="card-title">{props.product.protein}</p>
              <p className="card-title">$ {props.product.price}</p>
              <p className="card-title">{props.product.description}</p>
              <div className="product_buttons">
                <Modal id={props.product.id} />
                <button className="btn" onClick={() => removeProduct(props.product.id)}><i className="fa fa-trash"></i> Delete</button>
              </div>
            </div>
          </div>
      </div>
  );
}
export default Product;

//Skicka iden härifrån till edit modal komponenten.