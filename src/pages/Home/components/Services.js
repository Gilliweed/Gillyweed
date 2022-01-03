import { Container, Row, Col } from "reactstrap";
// import Logo from "../../../assets/s1.svg"
import Ser1 from "../../../assets/s1.svg";
import Ser2 from "../../../assets/s-2.svg";
import Ser3 from "../../../assets/s-3.svg";
import Ser4 from "../../../assets/s-4.svg";
import Ser5 from "../../../assets/s-5.svg";
import Ser6 from "../../../assets/s-6.svg";
const Service = () => {
  const services = [
    {
      title: "Save Electricity",
      desc: "Turn off lights when not in use. Unplug appliances such as TV, Pc.  Household consumes about 30% of worldwide energy.",
      img: Ser1,
    },
    {
      title: "Reduce | Reuse | Recycle",
      desc: "3 R's is best strategy to accommodate the 2.12 billion tonnes of undisposable waste that we produce every year.",
      img: Ser2,
    },
    {
      title: "Drive Less",
      desc: "23% Carbon emission comes from motorized transport, such as cars and trucks. Try to use carpooling. For nearby distance, prefer walking or ride a bicycle",
      img: Ser3,
    },
    {
      title: "Care the Nature",
      desc: "Nature has always flourished us with the best. And now it's our turn to pay back. We should care the nature by Planting trees, Conserving Resources, & Choosing Sustainability.",
      img: Ser4,
    },
    {
      title: "Switch To Solar",
      desc: "Solar energy is a cost-effective, eco-friendly source that does not release harmful gases such as CO2, which pollute the air and have a negative influence on the climate.",
      img: Ser5,
    },
    {
      title: "Plant Your Vegetable",
      desc: "Having your own vegetable garden is like planting your own money and ensures that the food is fresh and nutritious. It also helps to cut down on your carbon footprint.",
      img: Ser6,
    },
  ];

  return (
    <section className="section" id="service">
      <div className="container px-12 ">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="text-center mb-5">
              <h3 className="font-semibold text-3xl md:text-5xl text-emerald-400 mb-3">
                <span className="">
                  Everyday Actions you can take to Save Planet
                </span>
              </h3>
              <p className="text-muted text-lg">
                We all must work together to comprehend the problem and
                contribute our part in achieving carbon neutrality. These are
                the most basic tactics for you to contribute your part.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} sm={6}>
              <div className="shadow-sm shadow-cyan-500 rounded-xl mx-auto mb-5 bg-gradient-to-b from-gray-300 via-gray-100">
                <div className="mx-auto ">
                  <img src={service.img} className="mx-auto " alt="img" />
                </div>
                <div className="pb-10">
                  <h5 className="text-2xl text-center font-semibold pb-2">
                    {service.title}
                  </h5>
                  <p className="text-lg text-center text-gray-500">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
export default Service;
