import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../ShopComponents/Navbar";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import { mobile } from "../ShopComponents/responsive";
import { publicRequest } from "../../../requestMethods";
import logo from "../../../../src/components/Footer/gillyLogo.png";

import { CartState } from "../context/contex";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 30%;
  // border-color : black;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`
  size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

// const Button = styled.button`
//   padding: 15px;
//   border: 2px solid teal;
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;
//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;
// const ButtonRemove = styled.button`
//   padding: 15px;
//   border: 2px solid teal;
//   cursor: pointer;
//   font-weight: 500;
//   &:hover {
//     background-color: #f8f4f4;
//   }
// `;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get("products/find/" + id);
        // {`/productDesc/${data._id}`}
        console.log("nothing in ", res.data);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log("nothing in ", product);
  console.log("id ", id);
  console.log(cart);
  return (
    <Container>
      <Navbar />
      {loading ? (
        <div className="flex justify-center m-5 mt-16">
          <div to="/" className="animate-bounce">
            <img src={logo} className="mx-auto w-14" alt="logo" />
          </div>
          <div className="mt-10 -ml-12 pt-4 pr-4">Loading ...</div>
        </div>
      ) : (
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} className="rounded-2xl" />
          </ImgContainer>
          <InfoContainer>
            <Title className="text-4xl">{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>₹ {product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color :</FilterTitle>
                {product.color?.map((c) => (
                  <FilterColor
                    color={c}
                    key={c}
                    onClick={() => setColor(c)}
                    className="border-2"
                  />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size :</FilterTitle>
                <FilterSize
                  onChange={(e) => setSize(e.target.value).toUpperCase()}
                >
                  {product.size?.map((size) => (
                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove
                  onClick={() => handleQuantity("dec")}
                  // onChange={(e) =>
                  //   dispatch({
                  //     type: "CHANGE_CART_QTY",
                  //     payload: {
                  //       id: product._id,
                  //       qty: { quantity },
                  //     },
                  //   })
                  // }
                />
                <Amount>{quantity} </Amount>
                <Add
                  onClick={() => handleQuantity("inc")}
                  // onChange={(e) =>
                  //   dispatch({
                  //     type: "CHANGE_CART_QTY",
                  //     payload: {
                  //       id: product._id,
                  //       qty: { quantity },
                  //     },
                  //   })
                  // }
                />
              </AmountContainer>
              {cart.some((p) => p._id === product._id) ? (
                <Button
                  variant="outline-danger"
                  className="h-14 "
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product,
                    });
                  }}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  disabled={!product.inStock}
                  variant="outline-success"
                  className="h-14 "
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    });
                  }}
                >
                  {!product.inStock ? "Out of Stock" : " ADD TO CART "}
                  <ShoppingCartOutlined />
                </Button>
              )}
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}

      {/* <Newsletter /> */}
    </Container>
  );
};

export default Product;
