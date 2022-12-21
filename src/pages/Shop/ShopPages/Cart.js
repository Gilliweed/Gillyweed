import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import { mobile } from "../ShopComponents/responsive";
import { CartState } from "../context/contex";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 240px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 20px;
  margin-top: 21px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  // width: 100%;
  padding: 10px;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState();

  // useEffect(() => {
  //   setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  // }, [cart]);
  // console.log( cart);
  return (
    <Container>
      {/* <Navbar />
      <Announcement /> */}
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({Product.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
        </Top>
        <Bottom>
          {cart.products.length > 0 ? (
            <>
              <Info>
                {cart.products.map((product) => (
                  <Product className="p-2 m-4 border-1 -mt-4 border-black rounded-xl">
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b>
                          {product._id}
                        </ProductId>
                        <div className="flex">
                          <b>Color:</b>
                          <ProductColor
                            className="ml-2 mt-0.5 border-2 border-black "
                            color={product.color}
                          ></ProductColor>
                        </div>
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <Button
                        className="bg-white w-20 rounded-xl text-red-700 border-red-600 border-1 ml-52 -mt-20"
                        // onClick={() => {
                        //   dispatch({
                        //     type: "REMOVE_FROM_CART",
                        //     payload: product,
                        //   });
                        // }}
                      >
                        Remove
                      </Button>
                      <ProductAmountContainer>
                        <Add
                          // onClick={() => {
                          //   dispatch({
                          //     type: "Increment",
                          //     payload: product,
                          //   });
                          // }}
                       />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove />
                      </ProductAmountContainer>
                      <ProductPrice>Price: ₹{product.price}</ProductPrice>
                      <ProductPrice>Total Price: ₹{product.quantity*product.price}</ProductPrice>
                    </PriceDetail>
                  </Product>
                ))}
                <Hr />
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>₹ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>₹ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
                </SummaryItem>
                <Button className="bg-black text-white  rounded-xl w-full">
                  CHECKOUT NOW
                </Button>
              </Summary>
            </>
          ) : (
            <>
              <h1 classname=" align-middle text-xl">Cart is Empty </h1>
            </>
          )}
        </Bottom>
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
};

export default Cart;
