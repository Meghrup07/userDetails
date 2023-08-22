import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { addUser } from "../services/ApiServices";
function FormikForm() {
  const roles = ["Admin", "Teacher", "Student"];

  const useValue = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: " ",
    dob: "",
    role: "",
    pic: "",
  };

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(useValue);

  //   const { firstName, lastName, email, mobileNumber, dob, role, pic } =
  //     userDetails;

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(" First Name is required"),
    lastName: Yup.string().required(" Last Name is required"),
    email: Yup.string().required(" Email is required"),
    mobileNumber: Yup.string().required(" Mobile No. is required"),
    dob: Yup.string().required(" DOB is required"),
  });

  const handleFormSubmit = (userDetails) => {
    // e.preventDefault();
    addUser(userDetails)
      .then((res) => {
        alert("User Added Successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="card p-4">
      <div className="title text-center">
        <h2>Add User Usign Formik Form</h2>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          dob: "",
          role: "",
          pic: "",
          isSubmitting: true,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(true);
            handleFormSubmit(values);
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          dirty,
          handleChange,
          handleBlur,
          isSubmitting,
          handleReset,
          handleSubmit,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label className="form-label">First Name</label>
                  <input
                    className="form-control"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="form-text text-danger">
                    {errors.firstName && touched.firstName && errors.firstName}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label className="form-label">Last Name</label>
                  <input
                    className="form-control"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="form-text text-danger">
                    {errors.lastName && touched.lastName && errors.lastName}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="form-text text-danger">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label className="form-label">mobileNumber</label>
                  <input
                    className="form-control"
                    name="mobileNumber"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="form-text text-danger">
                    {errors.mobileNumber &&
                      touched.mobileNumber &&
                      errors.mobileNumber}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label className="form-label">DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="form-text text-danger">
                    {errors.dob && touched.dob && errors.dob}
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    onChange={handleChange}
                    name="role"
                    value={values.role}
                    onBlur={handleBlur}
                  >
                    {roles.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-2">
                  <label className="form-label">Profile Photo</label>
                  <input
                    className="form-control"
                    name="pic"
                    value={values.pic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
            <div className="btn-wrap mt-3 text-center">
              <button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger ms-3"
                disabled={!dirty}
                onClickCapture={handleReset}
              >
                Reset
              </button>
              <Link to="/" type="button" className="btn btn-warning ms-3">
                Cancel
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
