import {
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";

import { NavLink } from "react-router-dom";

const Product = ({data}) => {
  return (
    <>
      <div className="pt-4 border-0">
        <Card className="text-dark  border-0 hover:h-96">
          <NavLink to={`/productDesc/${data._id}`} exact>
            <div>
              <div className=" border-1 aspect-w-1 aspect-h-1  rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
                <img
                  src={data.img}
                  alt={data.img}
                  className="w-64 h-80    object-cover z-40 "
                />
              </div>
            </div>
            <Card.ImgOverlay className=" text-dark border-0">
              <Card.Title></Card.Title>
            </Card.ImgOverlay>
          </NavLink>
          <div className="rounded-b-xl">
            <div className="flex justify-between ml-1">
              <div className="font-mono text-2xl font-semibold flex justify-center">
                {data.title}
              </div>
              <div className="flex justify-end pt-2 pl-2 pr-1">
                <StarIcon
                  className="text-red-500"
                  style={{ fontSize: "27px" }}
                />
                <p className="mt-0.5 ml-1 font-semibold"> 5.0 </p>
                <p className="mt-0.5 ml-1 text-slate-700"> (22) </p>
              </div>
            </div>
            <div className="w-56 flex justify-between ml-1 ">
              <div>
                <p className="flex-col text-xs">{data.desc}</p>
              </div>
            </div>
            <div className="flex m-1 justify-center">
              {/* <div className="w-6 h-6 m-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-6 m-1 bg-blue-600 rounded-full" />
            <div className="w-6 h-6 m-1 bg-red-400 rounded-full" /> */}
            </div>

            <div className="flex justify-between -mt-2 ml-2 ">
              <div className="text-xl flex m-1 justify-center">
                ₹{data.price}
              </div>
              {/* <FavoriteBorderOutlined className = ""/> */}
              <div className="my-1 mr-1 ml-2 px-2 bg-blue-500 text-white rounded-xl">
                 {/* <Btn styles="bg-red-400 text-white"> */}
                   Add to cart <ShoppingCartOutlined />
                {/* </Btn>  */}
              </div>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Product;
