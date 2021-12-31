import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
//   cursor: pointer;
// `;

// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f5fbfd;
//   position: relative;

//   &:hover ${Info} {
//     opacity: 1;
//   }
// `;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

// const Image = styled.img`
//   height: 75%;
//   z-index: 2;
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.5s ease;
//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;

const Product = ({ item }) => {
  return (
    // <Container>
    //   <Circle />
    //   <Image src={item.img} />
    //   <Info>
    //     <Icon>
    //       <NavLink to="/cart " exact>
    //         <ShoppingCartOutlined />
    //       </NavLink>
    //     </Icon>
    //     <Icon>
    //       <SearchOutlined />
    //     </Icon>
    //     <Icon>
    //       <FavoriteBorderOutlined />
    //     </Icon>
    //   </Info>
    // </Container>
    <>
      <Container>
        <Row></Row>
      </Container>
      <div>
        <Card className=" text-dark border-0">
          <NavLink to="/productDesc " exact>
            <div>
              <div className=" w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
                <img
                  src={item.img}
                  alt={item.img}
                  className="max-w-xl h-96 object-center object-cover z-40"
                />
              </div>
            </div>
            <Card.ImgOverlay className=" text-dark border-0">
              <Card.Title>{item.para}</Card.Title>
            </Card.ImgOverlay>
          </NavLink>
          <div className="mx-2 rounded-xl z-auto">
            <div className="">
              <div className="font-mono text-2xl font-semibold flex m-1 justify-center">
                {item.head}
              </div>
              <div className="text-xl flex m-1 justify-center">
                {item.price}
              </div>
            </div>
            <div className="flex m-1 justify-center">
              {/* <div className="w-6 h-6 m-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-6 m-1 bg-blue-600 rounded-full" />
            <div className="w-6 h-6 m-1 bg-red-400 rounded-full" /> */}
            </div>
            <div className="flex justify-center text-2xl align-middle">
              <StarIcon
                style={{ fontSize: '37px', color: 'rgb(202 138 4 )' }}
              />
              <StarIcon
                style={{ fontSize: '37px', color: 'rgb(202 138 4 )' }}
              />
              <StarIcon
                style={{ fontSize: '37px', color: 'rgb(202 138 4 )' }}
              />
              <StarIcon
                style={{ fontSize: '37px', color: 'rgb(202 138 4 )' }}
              />
            </div>
            <div className="flex justify-center">
              <p> 22 reviews </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Product;
