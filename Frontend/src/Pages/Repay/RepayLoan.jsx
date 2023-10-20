import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { repayLoanSchema } from "../../components/Schemas";
import "./repayLoan.scss";

const initialValues = {
    name: "",
    amount: "",
    term: "",
};

const RepayLoan = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: repayLoanSchema,
            onSubmit: action => {
                action.resetForm();
            },
        });
    return (
        <>
            <section className="section-wrapper">
                <Container>
                    <Row>
                        <Col>
                            <h3>REPAY LOAN</h3></Col>
                        <Form className="form" onSubmit={handleSubmit} >
                            <Form.Group>
                                <Form.Label>Repay Amount</Form.Label>
                                <Form.Control
                                    className="text"
                                    type="text"
                                    placeholder="Enter your amount here"
                                    name="amount"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.amount && touched.amount ? (
                                    <p className="error">{errors.amount}</p>
                                ) : null}
                            </Form.Group>
                            {/* <Form.Group>
                                <Form.Label>Loan Amount</Form.Label>
                                <Form.Control
                                    className="text"
                                    type="number"
                                    placeholder="Amount"
                                    name="amount"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.amount && touched.amount ? (
                                    <p className="error">{errors.amount}</p>
                                ) : null}
                            </Form.Group> */}
                            {/* <Form.Group>
                                <Form.Label>Term</Form.Label>
                                <Form.Control
                                    className="text"
                                    type="text"
                                    placeholder="Enter the weekly term"
                                    name="term"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.term && touched.term ? (
                                    <p className="error">{errors.term}</p>
                                ) : null}
                            </Form.Group> */}
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default RepayLoan;
