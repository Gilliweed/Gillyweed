import { Button, Card } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@mui/icons-material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { NavLink } from 'react-router-dom';
// import './TopRating.css';
const TopRatingCard = (props) => {
  return (
    <div>
      <Card className=" text-dark border-0">
        <NavLink to="/productDesc " exact>
          <div>
            <div className=" w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
              <img
                src={props.img}
                alt={props.img}
                className=" w-full h-72 object-center object-contain z-40"
              />
            </div>
          </div>
          <Card.ImgOverlay className=" text-dark border-0">
            <Card.Title>{props.para}</Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <div className="relative -mt-6 rounded-b-xl  z-auto bg-blue-600 text-white">
          <div className="">
            <div className="font-mono text-2xl font-semibold flex m-1 justify-center">
              {props.head}
            </div>
            <div className="text-xl flex m-1 justify-center">{props.price}</div>
          </div>
          <div className="flex m-1 justify-center">
            {/* <div className="w-6 h-6 m-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-6 m-1 bg-blue-600 rounded-full" />
            <div className="w-6 h-6 m-1 bg-red-400 rounded-full" /> */}
          </div>
          <div className='flex justify-center text-2xl align-middle ' >
            <StarRateRoundedIcon style={{fontSize:'22px', color:'rgb(202 138 4 )'}}/>
            <StarRateRoundedIcon style={{fontSize:'22px', color:'rgb(202 138 4 )'}}/>
            <StarRateRoundedIcon style={{fontSize:'22px', color:'rgb(202 138 4 )'}}/>
            <StarRateRoundedIcon style={{fontSize:'22px', color:'rgb(202 138 4 )'}}/>
          </div>
          <div className='flex justify-center'>
            <p> 22 reviews  </p>
            
          </div>
        </div>
      </Card>
    </div>
  );
};
export default TopRatingCard;
