import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";

function SignUp() {
  const validationSchema = Yup.object().shape({

    email: Yup.string().email("*Must be a valid email address"),
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

  return (
    <div className="mt-80px d-flex flex-column align-items-center">
      <p className="h1-mod">Signup</p>
      <p className="p-mod">
        Already signed up? Log in <Link to="/login">here</Link>.
      </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
          password2: "",
          role: ''
        }}
        validationSchema={validationSchema}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch("https://mocktherapy.herokuapp.com/user/signup", {
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

            <Form.Group className="mt-4" controlId="formBasicPasswordConfirm">
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

            <Form.Label className="mb-n1">Sign up as: </Form.Label>
            <Field component="div" name="myRadioGroup">

            <label>
              <input id='radioClient' type="radio" name="role" value="Client" defaultChecked={values.role === "Client"} /> {" "}
              Client
            </label> {" "}
            <label>
              <input is='radioTherapist' type="radio" name="role" value="Therapist" defaultChecked={values.role === "Therapist"} />{" "}
               Therapist
            </label>
            </Field>


            <Button variant="info" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
