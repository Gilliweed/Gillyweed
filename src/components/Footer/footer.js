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
import { ReactComponent as Logo } from '../../assets/gillyweed.svg';
// import { ReactComponent as Backgrd } from '../../assets/background.jpg';
import background from '../../assets/backgroundd.webp';
const Footer = () => {

  const currentYear = new Date().getFullYear()
  return (
    <div className="" style={{ backgroundImage: `url(${background})` }} >
      <Container className="footer"  fluid>
          <Row className="">
            <Col id="logocol"> <Logo className="logo" /> </Col>
          </Row>
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
        {/* </Row> */}
        <Row >
          <Col lg style={{ }}>
            <Row>
              <Col >
                <Facebook color="black" id="fb" />
              </Col>
              <Col >
                <InstagramIcon color="black" id="insta" />
              </Col>
              <Col >
                <LinkedInIcon color="black" id="fb" />
              </Col>
              <Col>
                <TelegramIcon color="black" id="fb"></TelegramIcon>
              </Col>
              <Col>
                <TwitterIcon color="black" id="fb"></TwitterIcon>
              </Col>
              <Col>
                <YouTubeIcon color="black" id="utube" />
              </Col>
            </Row>
          </Col>

          <Col style={{  }, { textAlign: "center" }}>
            <p >
              {" "}
              &copy; All rights are reserved{" - " + currentYear}
            </p>
          </Col>
        </Row>
      </Container>

    </div>
  );
};
export default Footer;