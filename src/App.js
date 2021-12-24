import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import About from "./pages/AboutUs/about";

import Contact from "./pages/ContactUs/contact";

import Shop from "./pages/Shop/Shop";

import Blog from "./pages/Blog/blog";

import Footer from "./components/Footer/footer";


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

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/signIn" element={<SignIn />} />
        </Routes>

        {/* <Footer /> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
