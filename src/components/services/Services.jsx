import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import servicesData from "../../assets/data/serviceData";
import "./services.css";

const Services = () => {
  return (
    <section className="services section__space">
      <Container>
        <Row>
          {servicesData.map((item, i) => (
            <Col className="my-1" lg={3} md={4} sm={6} key={item.icon}>
              <motion.div whileHover={{scale:1.1}} className="service__item" style={{background: `${item.bg}`}}>
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
