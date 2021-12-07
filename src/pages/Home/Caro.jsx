import { height } from "@mui/system";
import React from "react";
import { Carousel, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import CaroData from "./CaroData";
import img1 from "./img1.jpg"
// import "bootstrap/dist/css/bootstrap.min.css";
const Caro = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-7 col-12">
          <Carousel interval={3000} pause='hover' touch={true} className=" text-center shadow-lg rounded justify-content-center mx-3 my-3">
            {
              CaroData.map((val, index) => {
                return (
                  <Carousel.Item className="justify-content-center "  >
                    <Card.Img src={val.img} />
                    <Card.ImgOverlay>
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Text>
                        {val.text}
                      </Card.Text>
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>

                  </Carousel.Item>

                )

              })
            }
            <Carousel.Item>
              <Card >
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>

              </Card>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-md-4 mx-auto  mt-3 col-11">

          <Card border="light">

            <div className="row shadow">
              <div className="col-9">
                <Card.Text >
                  fhththgthfhfghftgh

                </Card.Text>
              </div>
            <div className="col-3 my-auto">
              <Card.Img src={img1} >

              </Card.Img>
            </div>
            </div>
            <div className="row shadow my-3">
              <div className="col-9">
                <Card.Text >
                  fhththgthfhfghftgh

                </Card.Text>
              </div>
            <div className="col-3 my-auto">
              <Card.Img src={img1} >

              </Card.Img>
            </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Caro;