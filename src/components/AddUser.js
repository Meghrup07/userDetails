import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../services/ApiServices";
import Validation from "../shared/Validations";
import FormikForm from "./FormikForm";

function AddUser() {
  const navigate = useNavigate();

  const roles = ["Admin", "Teacher", "Student"];

  const userValue = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: " ",
    dob: "",
    role: "",
    pic: "",
  };

  const [userDetails, setUserDetails] = useState(userValue);

  const { firstName, lastName, email, mobileNumber, dob, role, pic } =
    userDetails;

  const [errors, setErrors] = useState({});

  const onValueChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    setErrors(Validation(userDetails));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
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
    <div className="container mt-4">
      <div className="card p-4">
        <div className="title text-center">
          <h2>Add User</h2>
        </div>
        <div className="user-form">
          <form onSubmit={handleAddUser}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    className="form-control"
                    onChange={(e) => onValueChange(e)}
                    name="firstName"
                    value={firstName}
                  />
                  {errors.firstName && (
                    <p className="error-message">{errors.firstName}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    className="form-control"
                    onChange={(e) => onValueChange(e)}
                    name="lastName"
                    value={lastName}
                  />
                  {errors.lastName && (
                    <p className="error-message">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    onChange={(e) => onValueChange(e)}
                    name="email"
                    value={email}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Mobile No.</label>
                  <input
                    className="form-control"
                    onChange={(e) => onValueChange(e)}
                    name="mobileNumber"
                    value={mobileNumber}
                  />
                  {errors.mobileNumber && (
                    <p className="error-message">{errors.mobileNumber}</p>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => onValueChange(e)}
                    name="dob"
                    value={dob}
                  />
                  {errors.dob && <p className="error-message">{errors.dob}</p>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                    name="role"
                    value={role}
                  >
                    {roles.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Profile photo</label>
                  <input
                    className="form-control"
                    onChange={(e) => onValueChange(e)}
                    name="pic"
                    value={pic}
                  />
                </div>
              </div>
            </div>
            <div className="btn-wrap text-center">
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <Link to="/" type="button" className="btn btn-warning ms-3">
                Cancel
              </Link>
            </div>
          </form>
        </div>

        <div className="formik-form mt-5">
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default AddUser;
