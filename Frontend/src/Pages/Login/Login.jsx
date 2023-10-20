import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { loginSchema } from "../../components/Schemas";
import "./login.scss";

const initialValues = {
  firstname: "",
  lastname: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (action) => {
        action.resetForm();
      },
    });
  return (
    <>
      <section className="section-wrapper">
        <Container>
          <Row>
            <Col>
              <h3>LOGIN</h3>
            </Col>
            <Form className="form" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="text"
                  type="text"
                  placeholder="Enter your first name here"
                  name="firstname"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstname && touched.firstname ? (
                  <p className="error">{errors.firstname}</p>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="text"
                  type="text"
                  placeholder="Enter your last name here"
                  name="lastname"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname ? (
                  <p className="error">{errors.lastname}</p>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="text"
                  type="text"
                  placeholder="Enter the password"
                  name="password"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="error">{errors.password}</p>
                ) : null}
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
