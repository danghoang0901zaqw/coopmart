import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {
  deleteProduct,
  selectAmount,
  selectProduct,
} from "../redux/slices/cartSlice";
import "../scss/Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector(selectProduct);
  const totalAmount = useSelector(selectAmount);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  console.log(cartProducts);
  return (
    <Helmet title={"Cart"}>
      <CommonSection title={"Shopping Cart"}></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartProducts.length === 0 ? (
                <h2 className="fs-4 text-center">No item add to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts?.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <img className="" src={product.imgUrl} alt="" />
                        </td>
                        <td>{product.productName}</td>
                        <td>$ {product.price}</td>
                        <td>{product.quantity}px</td>
                        <td onClick={() => handleDelete(product.id)}>
                          <i className="ri-delete-bin-line"> </i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal:
                  <span className="fs-5 fw-normal">$ {totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Taxes and shipping will calculate in checkout
              </p>
              <div className="mt-3">
                <Link to="/checkout">
                  <button className="btn__buy w-100">Checkout</button>
                </Link>
                <Link to="/shop">
                  <button className="btn__buy w-100">Continue Shopping</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
