import React from "react";
import "./Transport.scss";
import { Col, Container, Row } from "reactstrap";

const Transport = ({servicesData}) => {
  return (
    <section className="transport">
      <Container>
        <Row>
          {servicesData?.map((item,idx) => (
            <Col key={idx} lg="3" md="4">
              <div className="transport__item" style={{background:item.bg}}>
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Transport;
