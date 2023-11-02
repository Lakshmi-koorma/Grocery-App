import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    axios
      .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/login", values)
      .then(
        (response) => {
          console.log(response.data);
          setRequestResponse({
            textMessage: "login successfull, thank you!",
            alertClass: "alert alert-success",
          });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/");
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email must be a valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div className={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount>
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        type="text"
                        name="email"
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        type="text"
                        name="password"
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      value="Login"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>

            <br />
            <p className="text-center">
              Need to Register?<Link to="/register">click here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
export default LoginPage;
