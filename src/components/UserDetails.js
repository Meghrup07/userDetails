import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../services/ApiServices";

function UserDetails() {
  const [user, setUser] = useState([]);

  const getUserDetails = () => {
    getUsers()
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then((res) => {
        if (window.confirm("Do You Want To Delete?")) {
          alert("User Deleted!");
          getUserDetails();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="container mt-4">
      <div className="btn-page text-end mb-3">
        <Link to="/add" type="button" className="btn btn-primary">
          Add User
        </Link>
      </div>
      <div className="card p-4">
        <div className="title text-center">
          <h2>Users List</h2>
        </div>
        <div className="table-responsive mt-4">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">DOB</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((data) => (
                <tr key={data.id}>
                  <th>{data.id}</th>
                  <td>
                    {data.firstName} {data.lastName}
                  </td>
                  <td>{data.email}</td>
                  <td>{data.mobileNumber}</td>
                  <td>{data.dob}</td>
                  <td>
                    <div className="btn-wrap">
                      <Link
                        to={`/user/${data.id}`}
                        type="button"
                        className="btn btn-info me-2"
                      >
                        View
                      </Link>
                      <Link
                        to={`/edit/${data.id}`}
                        type="button"
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(data.id)}
                        type="button"
                        className="btn btn-danger ms-2"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
