import React from "react";
import "./CommonSection.scss";
import { Container } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <div>
      <section className="common__section">
        <Container className="text-center">
          <h1>{title}</h1>
        </Container>
      </section>
    </div>
  );
};

export default CommonSection;