import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Header';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin/Signin';
import Home from './pages/Home/Home';

import '../node_modules/swiper/swiper.scss';
import '../node_modules/swiper/swiper.min.css';
// import "swiper/modules/effect-cards/effect-cards.min.css";

import About from './pages/AboutUs/about';

import Contact from './pages/ContactUs/contact';

import Shop from './pages/Shop/Shop';

import Blog from './pages/Blog/blog';

// import Footer from "./components/footer/footer";

import Article from './pages/Blog/Article/article';

import Cart from './pages/Shop/ShopPages/Cart';

import MoreProductList from './pages/Shop/ShopPages/MoreProductList';

// import ProductDesc fro
import ProductDesc from './pages/Shop/ShopPages/ProductDesc';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main>
        {/* <Navbar /> */}

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/shop" element={<Shop />} />

          <Route exact path="/blog" element={<Blog />} />

          <Route exact path="/article" elemnet={<Article />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/signIn" element={<SignIn />} />

          <Route exact path="/cart" element={<Cart />} />

          <Route exact path="/moreProducts" element={<MoreProductList />} />

          <Route exact path="/productDesc" element={<ProductDesc />} />
        </Routes>
        {/* <NewsLetter /> */}
        {/* <Footer /> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
