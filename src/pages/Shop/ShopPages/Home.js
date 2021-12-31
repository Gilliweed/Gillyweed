import MainSlider from '../ShopComponents/HomePage/MainCard/MainCarasoule';
import FlashSlider from '../ShopComponents/HomePage/FlashDeal/FlashCarasoule';
import TopRatingSlider from '../ShopComponents/HomePage/TopRating/TopRatingCarasoule';
import MoreForYouSlider from '../ShopComponents/HomePage/MoreForYou/MoreForYouCarasoule';
import NewArrivalSlider from '../ShopComponents/HomePage/NewArraival/NewArrivalCarasoule';
import TopCategoriesSlider from '../ShopComponents/HomePage/TopCategories/TopCategoriesCarasoule';
import FeaturedBrandSlider from '../ShopComponents/HomePage/FeaturedBrand/FeaturedBrandCarasoule';
import Categories from '../ShopComponents/HomePage/Categories/Categories';
import BigDiscountSlider from '../ShopComponents/HomePage/BigDiscount/BigDisCountCarasoule';
import  Navbar  from '../ShopComponents/Navbar';
import { Col, Container, Row } from 'react-bootstrap';


const Home = () => {
  return (
    <div style={{}}>
      <div className="" style={{}}>       
        <div className="my-14"><MainSlider /></div>
        <div className="lg:mx-10">
          <Row>
            <Col xs={12}><div className="my-8"><FlashSlider  /></div> </Col>
            <Col xs={12}><div classname="my-8"><TopCategoriesSlider /></div> </Col>
            <Col xs={12}><div className="my-8"><NewArrivalSlider /></div> </Col>
            <Col lg={6}><div className="my-8 "><FeaturedBrandSlider /></div> </Col>
            <Col lg={6}><div className="my-8"> <BigDiscountSlider /></div> </Col>
            <Col xs={12}><div className="my-8"> <TopRatingSlider /></div> </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Home;