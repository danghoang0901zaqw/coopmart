import React from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../scss/Signup.scss";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth } from "../firebase";
import { storage } from "../firebase";
import { db } from "../firebase";
import { toast } from "react-toastify";

import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      console.log(user)
      setLoading(false);
      toast.success("Account create");
      navigate('/login')
    } catch (error) {
      setLoading(false);
      toast.error("Something went error ");
    }
  };
  return (
    <Helmet title="Sign Up">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center"><h5>Loading...</h5></Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fs-4 fw-bold mb-4">Sign up</h3>
                <Form onSubmit={handleSubmit} className="auth__form">
                  <FormGroup className="form__group">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </FormGroup>
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
                  <FormGroup className="form__group">
                    <input
                      value={cfPassword}
                      onChange={(e) => setCfPassword(e.target.value)}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      className="choose__file"
                      onChange={(e) => setFile(e.target.files[0])}
                      type="file"
                    />
                  </FormGroup>
                  <button type="submit" className="btn__buy login__btn">
                    Create an Account
                  </button>
                  <p>
                    Already have an account ? <Link to="/login">Login</Link>
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

export default Signup;
