import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <div className = "pt-4 rounded-xl">
        <Card className="text-dark border-1 ">
          <NavLink to="/productDesc " exact>
            <div>
              <div className=" w-56 aspect-w-1 aspect-h-1  rounded-t-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8  hover:rounded-full">
                <img
                  src={props.img}
                  alt={props.img}
                  className="w-56 h-96  object-cover z-40"
                />
              </div>
            </div>
            <Card.ImgOverlay className=" text-dark border-0">
              <Card.Title></Card.Title>
            </Card.ImgOverlay>
          </NavLink>
          <div className="rounded-b-xl bg-blue-200">
            <div className="flex justify-between ml-1">
              <div className="font-mono text-2xl font-semibold flex justify-center">
                {props.title}
              </div>
              <div className="flex justify-end pt-2 pl-2 pr-1">
                <FavoriteBorderOutlined />
                <ShoppingCartOutlined />
              </div>
            </div>
            <div className="w-56 flex justify-between ml-1 ">
              <div>
                <p  className = "flex-col text-xs">{props.desc}</p>
              </div>
              <div className="text-xl flex m-1 justify-center">
                {props.price}
              </div>
            </div>
            <div className="flex m-1 justify-center">
              {/* <div className="w-6 h-6 m-1 bg-slate-800 rounded-full" />
            <div className="w-6 h-6 m-1 bg-blue-600 rounded-full" />
            <div className="w-6 h-6 m-1 bg-red-400 rounded-full" /> */}
            </div>

            <div className="flex justify-start align-middle -mt-2">
              <StarIcon
                style={{ fontSize: "27px", color: "rgb(202 138 4 )" }}
              />
              <StarIcon
                style={{ fontSize: "27px", color: "rgb(202 138 4 )" }}
              />
              <StarIcon
                style={{ fontSize: "27px", color: "rgb(202 138 4 )" }}
              />
              <StarIcon
                style={{ fontSize: "27px", color: "rgb(202 138 4 )" }}
              />
              <p className = "mt-0.5 ml-1"> (22) </p>
            </div>
            <div className="flex justify-center"></div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Product;
