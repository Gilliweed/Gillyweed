import React from "react";
import {Row,Col} from 'react-bootstrap';
import MainSlider from "./ShopComponents/MainCard/MainCarasoule";
import FlashSlider from "./ShopComponents/FlashDeal/FlashCarasoule";
import TopRatingSlider from "./ShopComponents/TopRating/TopRatingCarasoule";
import MoreForYouSlider from "./ShopComponents/MoreForYou/MoreForYouCarasoule";
import NewArrivalSlider from "./ShopComponents/NewArraival/NewArrivalCarasoule";
import TopCategoriesSlider from "./ShopComponents/TopCategories/TopCategoriesCarasoule";
import FeaturedBrandSlider from "./ShopComponents/FeaturedBrand/FeaturedBrandCarasoule";
import Categories from "./ShopComponents/Categories/Categories";
const Shop = () => {
  return (
    <div style={{backgroundColor:"rgb(167, 170, 170)"  }}>
      <div className="" style={{}}>
        <MainSlider />
        <div style={{marginTop:"22px"}}></div>
        <FlashSlider/>
        <div style={{marginTop:"22px"}}></div>
        <TopCategoriesSlider/>
        <div style={{marginTop:"22px"}}></div>
        <MoreForYouSlider/>
        <div style={{marginTop:"22px"}}></div>
        <NewArrivalSlider/>
        <div style={{marginTop:"22px"}}></div>
        <Categories/>
        <div style={{marginTop:"22px"}}></div>
          <TopRatingSlider/>
          <div style={{marginTop:"22px"}}></div>
          <FeaturedBrandSlider/>
          

        
      
        <h1 className="text-center" style={{ paddingTop: "30%" }}>
          Shop
        </h1>
      </div>
    </div>
  );
};
export default Shop;
