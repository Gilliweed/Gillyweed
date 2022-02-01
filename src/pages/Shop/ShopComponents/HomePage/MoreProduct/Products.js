import styled from "styled-components";
// import moreProduct from "../CardsData/MoreProductsData";
import Product from "./ProductCard";
// import ProductList from "../../../ShopPages/MoreProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../../../../components/Footer/gillyLogo.png";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MoreProducts = ({ cat, filter, sort }) => {
  // console.log(cat, filter ,sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filter]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) =>
        [...prev].sort(
          (a, b) => new Date(a.data.createdAt) - new Date(b.data.createdAt)
        )
      );
    } else if (sort === "Price(asc)") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.data.price - b.data.price)
      );
    } else if (sort === "Price(desc)") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.data.price - a.data.price)
      );
    }
  }, [sort]);
  console.log("price ", filteredProducts);
  return (
    <>
      {loading ? (
        <div className="flex justify-center m-5 mt-16">
          <div to="/" className="animate-bounce">
            <img src={logo} className="mx-auto w-14" alt="logo" />
          </div>
          <div className="mt-10 -ml-12 pt-4 pr-4">Loading ...</div>
        </div>
      ) : (
        <Container >
          {cat
            ? filteredProducts.map((data) => <Product data={data}  />)
            : products.map((data) => <Product data={data} />)}
        </Container>
      )}
    </>
  );
};

export default MoreProducts;
