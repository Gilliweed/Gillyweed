import styled from 'styled-components';
import  moreProduct  from '../CardsData/MoreProductsData';
import Product from './ProductCard';
import ProductList from '../../../ShopPages/MoreProductList';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MoreProducts = () => {
  return (
    <Container>
      {moreProduct.map((MoreProductsData) => (
        <Product img = {MoreProductsData.img} title = {MoreProductsData.title} price = {MoreProductsData.price} desc = {MoreProductsData.desc}  />
      ))}
    </Container>
  );
};

export default MoreProducts;
