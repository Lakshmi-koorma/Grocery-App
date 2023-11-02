import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

function RegisterPage() {
  //   const [user, setUser] = useState({
  //     firstname: "",
  //     email: "",
  //     mobile: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    firstname: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
        values
      )
      .then(
        (response) => {
          console.log(response.data);
          setRequestResponse({
            textMessage: "login successfull, thank you!",
            alertClass: "alert alert-success",
          });
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
    firstname: Yup.string().required("firstname is required"),
    email: Yup.string()
      .required("email is requred")
      .email("email must be valid email adress"),
    mobile: Yup.string().required("mobile is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be atleast 6 charecters"),
  });

  //   const validate = (values) => {
  //     let errors = {};

  //     if (!values.firstname) {
  //       errors.firstname = "firstname required";
  //     }

  //     if (!values.email) {
  //       errors.email = "email required";
  //     } else if (
  //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //     ) {
  //       errors.email = "email must be valid email adress";
  //     }

  //     if (!values.mobile) {
  //       errors.mobile = "mobile number required";
  //     }

  //     if (!values.password) {
  //       errors.password = "password required";
  //     }
  //     return errors;
  //   };

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className=" wrapper">
            <div className={requestResponse.alertClass}>
              {requestResponse.textMessage}
            </div>
            <h2>{formik.values.firstname}</h2>
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">FirstName</label>
                <input
                  type="text"
                  name="firstname"
                  value={formik.values.firstname}
                  className={
                    formik.touched.firstname && formik.errors.firstname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <small className="text-danger">
                    {formik.errors.firstname}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formik.values.mobile}
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="register"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              {" "}
              Already Registerd?<Link to="/login">click here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
export default RegisterPage;
