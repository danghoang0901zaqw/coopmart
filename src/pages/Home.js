import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import HeroImg from "../assets/images/hero-img.png";
import "../scss/Home.scss";
import { Link } from "react-router-dom";
import Transport from "../components/Transport/Transport";
import servicesData from "../assets/data/serviceData";
import products from "../assets/data/products";
import Products from "../components/Products/Products";
import CounterTimer from "../assets/images/counter-timer-img.png";
import Clock from "../components/Clock/Clock";

const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    const productFilterTrending = products.filter(
      (item) => item.category === "chair"
    );
    const productFilterBestSales = products.filter(
      (item) => item.category === "sofa"
    );
    const productFilterMobile = products.filter(
      (item) => item.category === "mobile"
    );
    const productFilterWireless = products.filter(
      (item) => item.category === "wireless"
    );
    const productFilterPopular = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(productFilterTrending);
    setBestSalesProducts(productFilterBestSales);
    setMobileProducts(productFilterMobile);
    setWirelessProducts(productFilterWireless);
    setPopularProducts(productFilterPopular);
  }, []);
  console.log(trendingProducts)
  console.log(bestSalesProducts)
  console.log(mobileProducts)
  console.log(wirelessProducts)
  console.log(popularProducts)
  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__title">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, pariatur. Excepturi omnis cum fugit autem
                  assumenda. Iure at id facere.
                </p>
                <button className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img alt="" className="" src={HeroImg} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Transport servicesData={servicesData} />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <Products data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <Products data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top--content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3 ">Quantity Armchair</h3>
              </div>
              <Clock />
              <button className="buy__btn store__btn">
                <Link to="/shop">Visit Store</Link>
              </button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img alt="" src={CounterTimer} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>New Arrivals</h2>
            </Col>
            <Products data={mobileProducts} />
            <Products data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Popular in Category</h2>
            </Col>
            <Products data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
