import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editUser, singleUser } from "../services/ApiServices";

function EditUser() {
  const { id } = useParams();
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

  const onValueChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const getSingelUser = () => {
    singleUser(id)
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editUser(id, userDetails)
      .then((res) => {
        alert("User Deatils Updated!");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getSingelUser();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <div className="title text-center">
          <h2>Edit User</h2>
        </div>
        <div className="user-form">
          <form onSubmit={handleUpdate}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                    name="firstName"
                    value={firstName}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                    name="lastName"
                    value={lastName}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                    name="email"
                    value={email}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Mobile No.</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                    name="mobileNumber"
                    value={mobileNumber}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                    name="dob"
                    value={dob}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Role</label>
                  <select
                    class="form-select"
                    onChange={(e) => {
                      onValueChange(e);
                    }}  
                    name="role"
                    value={role}
                  >
                    {roles.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Profile Photo</label>
                  <input
                    className="form-control"
                    onChange={(e) => {
                      onValueChange(e);
                    }}
                    name="pic"
                    value={pic}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="btn-wrap text-center mt-2">
              <button type="submit" className="btn btn-success">
                Update
              </button>
              <Link to="/" type="button" className="btn btn-warning ms-2">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
