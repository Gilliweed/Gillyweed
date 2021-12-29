// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
import Home from './ShopPages/Home';
import Cart from '../Shop/ShopPages/Cart';
import Navbar from './ShopComponents/Navbar';
import Footer from './ShopComponents/Footer';
import MoreProductList from './ShopComponents/Products';
import NewsLetter from '../../components/NewsLetter';
import {Example} from './ShopComponents/HomePage/FlashDeal/FlashDealCard';
const Shop = () => {
  return (
    <div style={{}}>
      <Navbar />
      <div className="" style={{}}>
        <Home/>
        {/* <MoreProductList /> */}
        <div className='bg-blue'>
          here it is imported
          <Example />
        </div>
      </div>
      <NewsLetter />
      {/* <Footer /> */}
    </div>
  );
};
export default Shop;
