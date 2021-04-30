import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("*Password is required")
      .min(7, "*Password must have at least 7 characters"),
    password2: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both passwords need to be the same"
      ),
    }),
  });
  let { id } = useParams();
  let { token } = useParams();

  return (
    <div className="mt-80px d-flex flex-column align-items-center">
      <p className="h1-mod">Reset Password</p>
      

      <Formik
        initialValues={{
          password: "",
          password2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch(`https://mocktherapy.herokuapp.com/user/change-password/${id}/${token}`, {
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
            <Row>
              <Col>
                
        
                <Form.Group className="mt-4" controlId="formPassword">
                  <Form.Label className="mb-n1">Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    onChange={handleChange}
                    className={
                      touched.password && errors.password ? "error" : null
                    }
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                  />{" "}
                  {touched.password && errors.password ? (
                    <div className="error-message">{errors.password}</div>
                  ) : null}
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mt-4" controlId="formPasswordConfirm">
                  <Form.Label className="mb-n1">Confirm Password</Form.Label>
                  <Form.Control
                    name="password2"
                    type="password"
                    onChange={handleChange}
                    className={
                      touched.password2 && errors.password2 ? "error" : null
                    }
                    onBlur={handleBlur}
                    value={values.password2}
                    placeholder="Enter password"
                  />{" "}
                  {touched.password2 && errors.password2 ? (
                    <div className="error-message">{errors.password2}</div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>

    


            <Button variant="info" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <div className="mt-5"></div>
      <div className="mt-5"></div>
    </div>
  );
}

export default ResetPassword;
