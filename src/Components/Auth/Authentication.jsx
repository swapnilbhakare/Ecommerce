import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import stylesheet from "./Authentication.module.css";
const Authentication = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enterdEmail = emailInputRef.current.value;
    const enterdPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (!isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDg-OMoI65pQQe4hAMrRyWXyScFF6ijePA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDg-OMoI65pQQe4hAMrRyWXyScFF6ijePA";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enterdEmail,
        password: enterdPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed !";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <Container>
        <div className={stylesheet["form-container"]}>
          <h2 style={{ marginBottom: "20px" }}>
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder=" Email "
                required
                ref={emailInputRef}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                ref={passwordInputRef}
              />
            </Form.Group>
            <Form.Group>
              {!isLoading && (
                <Button className={stylesheet.loginButton}>
                  {isLogin ? "Login" : "Create Account"}
                </Button>
              )}
              {isLoading && <p>Sending Requerst...</p>}
            </Form.Group>

            <Button
              type="button"
              className={stylesheet.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Authentication;
