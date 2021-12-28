import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../node_modules/swiper/swiper.scss";
import "../node_modules/swiper/swiper.min.css";
// import "swiper/modules/effect-cards/effect-cards.min.css";

import About from "./pages/AboutUs/about";

import Contact from "./pages/ContactUs/contact";

import Shop from "./pages/Shop/Shop";

import Blog from "./pages/Blog/blog";

import Footer from "./components/Footer/footer";

import Article from "./pages/Blog/Article/article";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>       
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/shop" element={<Shop />} />

          <Route exact path="/blog" element={<Blog />} />

          <Route exact path="/article" elemnet={<Article />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/signIn" element={<SignIn />} />
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;