import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { createLoanSchema } from "../../components/Schemas";
import "./createLoan.scss";

const initialValues = {
  name: "",
  amount: "",
  term: "",
};

const CreateLoan = () => {
  const [data, setData] = useState({
    name: "",
    amount: "",
    term: "",
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: createLoanSchema,
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
              <h3>REQUEST FOR LOAN</h3>
            </Col>
            <Form className="form" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  className="text"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter your name here"
                  name="name"
                  value={values?.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="error">{errors.name}</p>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Label>Loan Amount</Form.Label>
                <Form.Control
                  className="text"
                  type="number"
                  autoComplete="off"
                  placeholder="Amount"
                  name="amount"
                  value={values?.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.amount && touched.amount ? (
                  <p className="error">{errors.amount}</p>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Label>Term</Form.Label>
                <Form.Control
                  className="text"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter the weekly term"
                  name="term"
                  value={values?.term}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.term && touched.term ? (
                  <p className="error">{errors.term}</p>
                ) : null}
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CreateLoan;
