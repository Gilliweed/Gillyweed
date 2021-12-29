import react from 'react';
import { mobile } from '../../responsive';
import { Card } from 'react-bootstrap';
import TopCategoriesCard from './TopCategoriesCard';
import TopCategroiesData from '../CardsData/TopCategroiesData';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;

const TopCategoriesSlider = () => {
  return (
    <>
      <h2 style={{ marginLeft: '16px' }}>Top Categories</h2>
      <Container>
        {TopCategroiesData.products.map((product) => (
          <TopCategoriesCard
            img={product.img}
            para={product.text}
            head={product.h1}
          />
        ))}
      </Container>

      <Card.Header
        className="border-0 text-right"
        style={{ backgroundColor: 'white' }}
      >
        <Card.Link className="text-right" href="#">
          <NavLink to="/moreProducts" exact style={{ color: 'black' }}>
            More
          </NavLink>
        </Card.Link>
      </Card.Header>
    </>
  );
};
export default TopCategoriesSlider;
