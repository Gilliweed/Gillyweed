import react from "react";
import { mobile } from "../../responsive";
import { Card } from "react-bootstrap";
import TopCategoriesCard from "./TopCategoriesCard";
import TopCategroiesData from "../CardsData/TopCategroiesData";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Btn from "../../../../../components/btn/btn";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const TopCategoriesSlider = () => {
  return (
    <>
      <div className="flex ">
        <h2 className=" text-5xl">Collections</h2>
      </div>
      <Container>
        {TopCategroiesData.products.map((product) => (
          <TopCategoriesCard
            img={product.img}
            para={product.text}
            head={product.h1}
            cat = {product.cat}
          />
        ))}
      </Container>

      <Card.Header
        className="border-0 text-right"
        style={{ backgroundColor: "white" }}
      >
        
      </Card.Header>
    </>
  );
};
export default TopCategoriesSlider;
