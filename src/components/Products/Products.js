import React from "react";

import "./Products.scss";
import Product from "../Product/Product";

const Products = ({ data, value }) => {
  return (
    <>
      {value
        ? data
            ?.filter((x) =>
              x.productName.toUpperCase().includes(value.toUpperCase())
            )
            ?.map((item, idx) => <Product key={idx} item={item} />)
        : data?.map((item, idx) => <Product key={idx} item={item} />)}
    </>
  );
};

export default Products;
