import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as Yup from "yup";

function ResendEmail() {
  const validationSchema = Yup.object().shape({

    email: Yup.string().email("*Must be a valid email address"),
  
  
    })
  

  return (
    <div className="mt-80px d-flex flex-column align-items-center">
      <p className="h1-mod">Resend Verification Link</p>
      <p className="p-mod">
       Enter email address below:
      </p>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch("https://mocktherapy.herokuapp.com/user/resend-mail", {
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
            <Button variant="info" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ResendEmail;
