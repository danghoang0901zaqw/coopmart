import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../scss/Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setLoading(false);
      toast.success("Login successfully");
      navigate("/cart");
      console.log(user);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5>Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fs-4 fw-bold mb-4">Login</h3>
                <Form className="auth__form" onSubmit={handleSubmit}>
                  <FormGroup className="form__group">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <button type="submit" className="btn__buy login__btn">
                    Login
                  </button>
                  <p>
                    Don't have an account ?
                    <Link to="/signup">Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
