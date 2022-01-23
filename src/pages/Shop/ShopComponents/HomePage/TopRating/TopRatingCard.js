import { Button, Card } from "react-bootstrap";
import { ShoppingCartOutlined } from "@mui/icons-material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { NavLink } from "react-router-dom";
// import './TopRating.css';
const TopRatingCard = ({data}) => {
  return (
    <div>
      <Card className=" text-dark border-0">
        <NavLink to={`/productDesc/${data._id}` } exact>
          <div>
            <div className=" w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
              <img
                src={data.img}
                alt={data.img}
                className=" w-full h-72 object-center object-contain z-40"
              />
            </div>
          </div>
          <Card.ImgOverlay className=" text-dark border-0 -mt-2 -ml-2">
            <Card.Title className=" flex">
              <StarRateRoundedIcon
                style={{ fontSize: "25px", color: "rgb(202 138 4 )" }}
              />
              <p className="mt-0.5 ml-1 font-semibold"> {data.rating} </p>
              <p className="mt-0.5 ml-1 text-slate-700"> ({data.nocomments}) </p>
            </Card.Title>
          </Card.ImgOverlay>
        </NavLink>
        <div className="relative -mt-6 rounded-b-xl  z-auto bg-blue-600 text-white">
          <div className="">
            <div className="font-mono text-2xl font-semibold flex m-1 justify-center">
              {data.title}
            </div>
            <div className="font-mono text-2xl font-semibold flex m-1 justify-center">
              ₹{data.price}
            </div>
            <div className="font-mono  flex m-1 justify-center">
              {data.desc}
             
            </div>
            {/* <div className="text-xl flex m-1 justify-center">{data.price}</div> */}
          </div>
          <div className="flex m-1 justify-center">
            {/* <div className="w-6 h-6 m-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-6 m-1 bg-blue-600 rounded-full" />
            <div className="w-6 h-6 m-1 bg-red-400 rounded-full" /> */}
          </div>
        </div>
      </Card>
    </div>
  );
};
export default TopRatingCard;
