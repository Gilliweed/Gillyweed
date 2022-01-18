import styled from 'styled-components';
import { mobile } from '../../responsive';
import { NavLink } from 'react-router-dom';
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 110%;
  object-fit: cover;
  ${mobile({ height: '20vh' })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const TopCategoriesCard = (props) => {
  return (
    <Container>
      <NavLink to={`/moreProducts/${props.cat}`} exact style={{ color: 'black' }}>
      <Image src={props.img} 
      className = 'rounded-3xl p-2'/>
      <Info className="mt-40">
        <Title className="text-2xl font-bold text-white">{props.head}</Title>
        <Button className="rounded-full bg-green-400 ">SHOP NOW</Button>
      </Info>
      </NavLink>
    </Container>
  );
};

export default TopCategoriesCard;
