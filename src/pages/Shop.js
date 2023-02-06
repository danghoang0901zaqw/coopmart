import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import Products from "../components/Products/Products";
import "../scss/Shop.scss";

import products from "../assets/data/products"; // đât là fake data

const Shop = () => {
  const [productData, setProductData] = useState(products);
  const [searchValue, setSearchValue] = useState("");
  const [sorted, setSorted] = useState("");
  const handleFilter = (e) => {
    const valueFilter = e.target.value;
    const filterProducts = products.filter((x) => x.category === valueFilter);
    setProductData(filterProducts);
  };
  const handleSearch=(e)=>{
    const textVal = e.target.value;
    if (textVal.startsWith(" ")) {
      return;
    }
    setSearchValue(textVal);
  }
  const handleSort=(e)=>{
    setSorted(e.target.value)
    if(sorted==='ascending'){
      productData.sort((a, b)=>a.price - b.price);
    }else{
      productData.sort((a, b)=>b.price - a.price);
    }
  }
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Categories</option>
                  <option value={"sofa"}>Sofa</option>
                  <option value={"mobile"}>Mobile</option>
                  <option value={"chair"}>Chair</option>
                  <option value={"watch"}>Watch</option>
                  <option value={"wireless"}>Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option>Sort By</option>
                  <option value={"ascending"}>Ascending</option>
                  <option value={"descending"}>Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  value={searchValue}
                  onChange={handleSearch}
                  placeholder="Search products..."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productData?.length === 0 ? (
              <h1 className="text-center fs-4">No products are found </h1>
            ) : (
              <Products data={productData} value={searchValue} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
