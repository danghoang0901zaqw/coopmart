import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import CommonSection from "../components/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import Products from "../components/Products/Products";
import { addProduct } from "../redux/slices/cartSlice";
import "../scss/ProductDeails.scss";

const ProductDetails = () => {

  const { id } = useParams();
  const [seeMoreDesc, setSeeMoreDesc] = useState(false);
  const [tabName, setTabName] = useState("description");
  const [proRelated, setProRelated] = useState([]);
  const [rating,setRating]=useState(0)
  const [reviewUser,setReviewUser]=useState('')
  const [reviewMessage,setReviewMessage]=useState('')
  const userNameRef=useRef()
  const dispatch = useDispatch();

  const productDetail = products.find((x) => x.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = productDetail;
  const tabspane = ["description", "reviews"];

  const truncate = (str) => {
    return str.length > 111 ? str.slice(0, 111) + " ..." : str;
  };
  useEffect(() => {
    const productRelated = products.filter((x) => x.category === category);
    setProRelated(productRelated);
  }, [category]);

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: productDetail.id,
        productName: productName,
        price: price,
        thumbNailUrl: imgUrl,
        quantity:1
      })
    );
    toast.success('Product add successfully')
  };

  const handleSubmitComment=(e)=>{
    e.preventDefault()
    const reviewObject={
      user:reviewUser,
      text:reviewMessage,
      rating
    }
    setReviewUser('')
    setReviewMessage('')
    userNameRef.current.focus()
    console.log(reviewObject)
    toast.success('Review submit is successfully')
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[productDetail])
  return (
    <Helmet title={productName}>
      <CommonSection />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>{avgRating} (votes)</p>
                </div>
                <div className="d-flex flex-column  gap-2 mb-5">
                  <span className="product__price">${price}</span>
                  <span className="">Category: {category.toUpperCase()}</span>
                </div>
                {seeMoreDesc  ? (
                  <div className="product__desc">
                    <span className="product__desc--text">{shortDesc}</span>
                    <span
                      className="product__desc--btn"
                      onClick={() => setSeeMoreDesc(!seeMoreDesc)}
                    >
                      Hidden away
                    </span>
                  </div>
                ) : (
                  <div className="product__desc">
                    <span className="product__desc--text">
                      {truncate(shortDesc)}
                    </span>
                    {truncate(shortDesc).length>111 && <span
                      className="product__desc--btn"
                      onClick={() => setSeeMoreDesc(!seeMoreDesc)}
                    >
                      See more
                    </span>}
                  </div>
                )}
                <button onClick={handleAddProduct} className="btn__buy">
                  Add to Cart
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tap__wrapper">
                {tabspane?.map((tab) => (
                  <h6
                    key={tab}
                    onClick={() => setTabName(tab)}
                    className={tab === tabName ? "active" : ""}
                  >
                    {tab === "reviews" ? tab + ` ( ${reviews?.length} )` : tab}
                  </h6>
                ))}
              </div>
              {tabName === "description" ? (
                <div className="tab__content mt-3">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-3">
                  <ul>
                    {reviews?.map((review, idx) => (
                      <li key={idx} className="mb-4">
                        <div className="d-flex align-items-center gap-2">
                          <h6>{review?.user}</h6>
                          <span>{review?.rating} (rating)</span>
                        </div>
                        <p>{review?.text}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="review__form">
                    <form onSubmit={handleSubmitComment}>
                      <h4>Leave your experience</h4>
                      <div className="form__group">
                        <input ref={userNameRef} placeholder="Enter your name" value={reviewUser}  onChange={e=>setReviewUser(e.target.value)} />
                      </div>
                      <div className="form__group d-flex align-items-center gap-5">
                        <span onClick={()=>setRating(1)}>
                          1<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={()=>setRating(2)}>
                          2<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={()=>setRating(3)}>
                          3<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={()=>setRating(4)}>
                          4<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={()=>setRating(5)}>
                          5<i className="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="form__group">
                        <textarea value={reviewMessage}  onChange={e=>setReviewMessage(e.target.value)} rows="4" placeholder="Review message  " />
                      </div>
                      <button type="submit" className="btn__buy">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title mb-5"> You might also like</h2>
            </Col>
            <Products data={proRelated} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
