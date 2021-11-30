import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Left from "./Left";
import Right from "./Right";
import Mid from "./Mid";
import RightMost from "./RightMost";
import Facebook from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import Globe from '@mui/icons-material/PublicOutlined';
const Footer = () => {

  const currentYear = new Date().getFullYear()
  return (
    <>
      <Container className="footer" fluid>
        <Row>
          <Col sm={5}>
            <Left />
          </Col>

          <Col id="leftBlock">
            <Row>
              <Col>
                <Mid />
              </Col>
              <Col>
                <Right />
              </Col>
              <Col>
                <RightMost />
              </Col>
            </Row>
          </Col>

        </Row>
        <Row style={{ paddingTop: "50px" }}>
          <Col>
            <p>
              <Globe/>   India(English)
            </p>
          </Col>

          <Col>
            <Row>
            <Col >
              <Facebook color="white" id ="fb" />
            </Col>
            <Col >
              <InstagramIcon color="white" id ="insta"/>
            </Col>
            <Col >
              <LinkedInIcon color="white" id ="fb"/>
            </Col>
            <Col>
              <TelegramIcon color="white" id ="fb"></TelegramIcon>
            </Col>
            <Col>
              <TwitterIcon color="white" id ="fb"></TwitterIcon>
            </Col>
            <Col>
              <YouTubeIcon color="white"  id ="utube"/>
            </Col>
            </Row>
          </Col>

          <Col>
            <p >
              {" "}
              &copy; All rights are reserved{" - " +currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
