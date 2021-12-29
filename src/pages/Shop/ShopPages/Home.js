import MainSlider from '../ShopComponents/HomePage/MainCard/MainCarasoule';
import FlashSlider from '../ShopComponents/HomePage/FlashDeal/FlashCarasoule';
import TopRatingSlider from '../ShopComponents/HomePage/TopRating/TopRatingCarasoule';
import MoreForYouSlider from '../ShopComponents/HomePage/MoreForYou/MoreForYouCarasoule';
import NewArrivalSlider from '../ShopComponents/HomePage/NewArraival/NewArrivalCarasoule';
import TopCategoriesSlider from '../ShopComponents/HomePage/TopCategories/TopCategoriesCarasoule';
import FeaturedBrandSlider from '../ShopComponents/HomePage/FeaturedBrand/FeaturedBrandCarasoule';
import Categories from '../ShopComponents/HomePage/Categories/Categories';
import BigDiscountSlider from '../ShopComponents/HomePage/BigDiscount/BigDisCountCarasoule';
// import  Navbar  from './ShopComponents/Navbar';
// import  Footer  from './ShopComponents/Footer';

const Home = () => {
  return (
    <div style={{}}>
      <div className="" style={{}}>
        {/* <Navbar /> */}
       <div style={{ marginTop: '22px' }}></div>
        <MainSlider />
        <div style={{ marginTop: '22px' }}></div>
         <FlashSlider />
        <div style={{ marginTop: '22px' }}></div>
        <TopCategoriesSlider />
        <div style={{ marginTop: '22px' }}></div>
        <MoreForYouSlider />
        <div style={{ marginTop: '22px' }}></div>
        <NewArrivalSlider />
        <div style={{ marginTop: '22px' }}></div>
        <Categories />
        <div style={{ marginTop: '22px' }}></div>
        <TopRatingSlider />
        <div style={{ marginTop: '22px' }}></div>
        <FeaturedBrandSlider />
        <div style={{ marginTop: '22px' }}></div>
        <BigDiscountSlider
        ></BigDiscountSlider>
        <div style={{ marginTop: '22px' }}></div>   
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default Home;