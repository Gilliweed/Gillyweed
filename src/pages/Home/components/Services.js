import { Container, Row, Col } from "reactstrap";
// import Logo from "../../../assets/s1.svg"
import Ser1 from '../../../assets/s1.svg'
import Ser2 from '../../../assets/s-2.svg'
import Ser3 from '../../../assets/s-3.svg'
import Ser4 from '../../../assets/s-4.svg'
import Ser5 from '../../../assets/s-5.svg'
import Ser6 from '../../../assets/s-6.svg'
const Service = () => {
  const services = [
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" ,img:Ser1},
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" ,img:Ser2},
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" ,img:Ser3},
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" ,img:Ser4},
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" ,img:Ser5},
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" ,img:Ser6},
  ]
  
  return (
    <section className="section" id="service">
      <div className="container px-12 ">
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="text-center mb-5">
              <h3 className="font-semibold text-3xl md:text-5xl text-emerald-400"><span className="">What We Do</span></h3>
              <p className="text-muted text-lg">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} sm={6}>
                <div className="shadow-sm shadow-cyan-500 rounded-xl mx-auto mb-5 bg-gradient-to-b from-gray-300 via-gray-100">
                  <div className="mx-auto ">
                  <img src={service.img} className="mx-auto " alt="img"/>
                  </div>
                  <div className="pb-10">
                  <h5 className="text-2xl text-center font-semibold">{service.title}</h5>
                  <p className="text-lg text-center text-gray-500">{service.desc}</p>
                  </div>

                </div>
              </Col>
            )
          }
        </Row>
      </div>
    </section>
  );
}
export default Service;