import React from 'react';
import { gql, useMutation } from '@apollo/client';
import EditButton from './EditModal';
import './css/Product.css';

const DELETE_PRODUCT = gql`
  mutation RemoveProduct($id: ID){
    __typename
    deleteProduct(
        where: { id: $id }
      ) {
        id
      }
}
`;

function Product(props) {

  const [deleteProduct] = useMutation(DELETE_PRODUCT);
   
  const removeProduct = (id) => {
    deleteProduct({variables: {id: id}});
  }

  return (
      <div className="col-sm-4">
        <div className="product_card" >
          <img src={props.product.image.url} className="card-img-top"/>
          <div className="product_card_body">
            <h5 className="product_name">{props.product.name}</h5>
            <p className="product_price">$ {props.product.price}</p>
            <p className="product_description">{props.product.description}</p>
            <div className="product_buttons">
              <EditButton id={props.product.id} />
              <button className="btn" onClick={() => removeProduct(props.product.id)}><i className="fa fa-trash"></i>Delete</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Product;