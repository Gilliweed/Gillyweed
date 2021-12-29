import { Container, Row, Col } from "reactstrap";
// import Logo from "../../../assets/s1.svg"
import Logo from "./s1.svg";
const Service = () => {
  const services = [
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: "../../../assets/s-1.svg",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: "../../../assets/s-2.svg",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: "../../../assets/s-3.svg",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: "../../../assets/s-4.svg",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: "../../../assets/s-5.svg",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      img: "../../../assets/s-6.svg",
    },
  ];

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Services</span>
              </h3>
              <p className="text-muted">
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <div className="mb-5">
                  <img src={Logo} alt="jst" />
                </div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  {service.title}
                </h5>
                <p className="text-muted mb-4">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
