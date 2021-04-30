import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

function LogIn() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("*Must be a valid email address"),
    password: Yup.string()
      .required("*Password is required")
      .min(7, "*Password must have at least 7 characters"),
  });

  return (
    <div className="mt-80px d-flex flex-column align-items-center">
      <p className="h1-mod">Login.</p>
      <p className="p-mod">
        Haven't signed up yet? Sign up <Link to="/signup">here</Link>
      </p>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch("https://mocktherapy.herokuapp.com/user/signin", {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-type": "application/json"},
          })
            .then((response) => response.text())
            .catch((err) => console.log(err))
            .then(response => console.log('Success:', response))
          console.log(values)
          setSubmitting(true);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-4" controlId="formBasicEmail">
              <Form.Label className="mb-n1">Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onChange={handleChange}
                className={touched.email && errors.email ? "error" : null}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
              />
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mt-4" controlId="formBasicPassword">
              <Form.Label className="mb-n1">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                onChange={handleChange}
                className={touched.password && errors.password ? "error" : null}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
              />{" "}
              {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ) : null}
            </Form.Group>

            <p className="p-mod">Forgot password? Click <Link to='/forgotPassword'>here</Link> to reset.</p>
            <p className="p-mod">Haven't received verification link in your email. Click <Link to='/resendEmail'>here</Link> to resend.</p>

                <div className="d-flex justify-content-center">
            <Button variant="info" type="submit" disabled={isSubmitting}>
              Submit
            </Button>

                </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LogIn;
