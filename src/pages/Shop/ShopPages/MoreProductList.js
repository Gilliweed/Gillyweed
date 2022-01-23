import styled from "styled-components";
import Navbar from "../ShopComponents/Navbar";
// import Announcement from "../components/Announcement";
import MoreProducts from "../ShopComponents/HomePage/MoreProduct/Products";
// import Newsletter from "../components/Newsletter";

import { mobile } from "../ShopComponents/responsive";
import { useLocation } from "react-router-dom";
import { React, useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  // fetch cat from params
  const cat = (location.pathname.split("/")[2]);
const title = cat.toUpperCase();
  // let apply filters, so we use hooks
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value.toLowerCase ();
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleEvent = (e) => {
    const value = e.target.value.toLowerCase();
    setSort({
      [e.target.name]: value,
    });
  };
  // console.log(sort);
  // console.log(filter);
  return (
    <Container>
      <Navbar />
      {/*<Announcement /> */}
      <Title className = "text-3xl">{title}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option >Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option >Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>Xl</Option>
            <Option>XXl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select name="sort" onChange={handleEvent}>
            <Option>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <MoreProducts  cat ={cat} filter ={filters} sort = {sort} />
      {/* <Newsletter />*/}
    </Container>
  );
};

export default ProductList;
