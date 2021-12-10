import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FeedbackIcon from "@mui/icons-material/Feedback";
const Left = () => {
  return (
    <>
      <Row className="left" fluid >
      
        <Col>
          <div className="Icon">
            {" "}
            <LocationOnIcon /> Address :{" "}
          </div>

          <p id="add">
            Gillyweed Private Limited, Building near BMG, 2nd floor, Leo Chowk,
            Opposite Sec-5, Khasapura, Rewari, Haryana 123401, India
            <br />
            CIN : U51109KA2HISJK066107 <br /> Telephone: 1900 100 3038
          </p>
        </Col>
      </Row>
      {/* <Row className="para">
                    <Col className="para">
                        <Facebook color="white" />
                    </Col>
                    <Col className="para">
                        <InstagramIcon color="white" />
                    </Col>
                    <Col className="para">
                        <LinkedInIcon color="white" />
                    </Col>
                    <Col>
                        <TelegramIcon color="white"></TelegramIcon>
                    </Col>
                    <Col>
                        <TwitterIcon color="white"></TwitterIcon>
                    </Col>
                    <Col>
                        <YouTubeIcon color="white" />
                    </Col>
                </Row> */}
    </>
  );
};
export default Left;
