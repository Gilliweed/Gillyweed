import styled from 'styled-components';
import { popularProducts } from './MoreProductsData';
import Product from './ProductCard';
import ProductList from '../ShopPages/MoreProductList';
import Navbar from './Navbar';
import { Col, Row } from 'react-bootstrap';
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MoreProducts = () => {
  return (
    <Container>
      
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default MoreProducts;
