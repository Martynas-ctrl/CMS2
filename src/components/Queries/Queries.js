import { gql } from '@apollo/client';

const PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      price
      description
      image {
        id
        url
      }
    }
  }
`;

export default PRODUCTS_QUERY;