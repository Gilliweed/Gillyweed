import React from "react";
import Hero from "./components/Hero";
import Feature from './components/Features';
import Service from './components/Services';
import About from './components/About';
// import { ThemeProvider } from 'theme-ui';
// import theme from '../theme';
import Shop from './components/shop';
import Masonary from './components/BlogHome';
import './home.css';
const Home = () => {
  return (
     <>
       <Hero />
      <Feature/>
      <Service />
      <Shop/>
      <Masonary/>
      {/* <About /> */}
    </>
  );
};
export default Home;
