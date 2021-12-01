import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import About from "./pages/AboutUs/about";

import Contact from "./pages/ContactUs/contact";

import Shop from "./pages/Shop/shop";

import Blog from "./pages/Blog/blog";

import Footer from "./components/Footer/footer";

import OoO from "./components/4o4/OoO";

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
        </Routes>
       
        <Footer/>
        <OoO/>
      </main>
    </BrowserRouter>
  );
}

export default App;
