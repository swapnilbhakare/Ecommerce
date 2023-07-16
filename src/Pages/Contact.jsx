import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import stylesheet from "./Contact.module.css";
const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const contact = {
      name,
      email,
      phone,
    };

    fetch(
      "https://the-generics-79cb0-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Contact-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <Container>
      <Form className={stylesheet.form} onSubmit={submitHandler}>
        <Form.Group className={stylesheet["form-group"]}>
          <Form.Label> Name</Form.Label>
          <Form.Control
            className={stylesheet.input}
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className={stylesheet["form-group"]}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={stylesheet.input}
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className={stylesheet["form-group"]}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className={stylesheet.input}
            type="number"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Form.Group>
        <Form.Group className={stylesheet["form-group"]}>
          <Button type="submit" className={stylesheet["submit-form-btn"]}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contact;
