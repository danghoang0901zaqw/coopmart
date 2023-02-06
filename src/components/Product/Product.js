import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Col } from "reactstrap";
import { addProduct } from "../../redux/slices/cartSlice";
import "./Product.scss";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        quantity: 1,
        totalPrice: item.totalPrice,
      })
    );
    toast.success('Product add successfully')
  };
  return (
    <Col lg="3 " md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <img alt="" src={item.imgUrl} />
        </div>
        <div className="pt-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className="">{item.category}</span>
        </div>
        <div className="product__card--bottom d-flex align-items-center justify-content-between p-2 ">
          <span className="price">$ {item.price} </span>
          <span onClick={handleAddProduct}>
            <i className="ri-add-line"></i>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default Product;
