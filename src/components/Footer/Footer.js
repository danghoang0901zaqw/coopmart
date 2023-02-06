import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-white">Coopmart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              unde accusamus velit officia dolor ipsum fugit facere provident
              labore nesciunt?
            </p>
          </Col>
          <Col lg="3">
            <div className="footer__quick--link">
              <h4 className="footer__quick--title">Top Categoies</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick--link">
              <h4 className="footer__quick--title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Privacy Policy </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick--link">
              <h4 className="footer__quick--title">Contact</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center  gap-2 text-white ">
                    <span>
                      <i className="ri-map-pin-line"></i>
                    </span>
                    <p className="text-white"> 63, Nguyen Hoang, Bien Hoa, Dong Nai</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center  gap-2 text-white ">
                    <span>
                      <i className="ri-phone-line"></i>
                    </span>
                    <p className="text-white"> + 8448240175</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center  gap-2 text-white ">
                    <span>
                      <i className="ri-mail-line"></i>
                    </span>
                    <p className="text-white">danghoang0901zaqw@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright text-white m-5 text-center">
              Coppy Right {year} developed by Tran Dang Hoang. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
