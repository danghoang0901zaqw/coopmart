import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/CommonSection/CommonSection";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../scss/Checkout.scss";
import { useSelector } from "react-redux";
import { selectAmount, selectQuantiy } from "../redux/slices/cartSlice";

const Checkout = () => {
  const totalQuantity=useSelector(selectQuantiy)
  const totalAmount=useSelector(selectAmount)
  return (
    <Helmet title="Checkout">
      <CommonSection title="Check out"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Infomaion</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Address" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Quantity: <span>{totalQuantity}</span>
                </h6>
                <h6>
                  Subtotal: <span>$ {totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <span>$ 0</span>
                </h6>
                <h4>
                  Total Cost: <span>$ {totalAmount}</span>
                </h4>
              <button className=" auth__btn w-100">
                Place an order
              </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
