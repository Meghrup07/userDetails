import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { singleUser } from "../services/ApiServices";

function UserInfoCard() {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const getSingleUser = () => {
    singleUser(id)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <div className="container mt-5">
      <div className="page-btn mb-4 text-end">
        <Link to="/" type="button" className="btn btn-primary">
          User Lists
        </Link>
      </div>

      <div className="card p-4">
        <h2 className="text-center"> User Info</h2>
        {userInfo && (
          <div className="detail-card mt-4" key={userInfo.id}>
            <div className="card-description">
              <h2 className="card-description-title">
                {userInfo.firstName} {userInfo.lastName}
              </h2>

              <span className="card-description-profession">
                Email: {userInfo.email}
              </span>

              <span className="card-description-company">
                Mobile No: {userInfo.mobileNumber}
              </span>

              <span className="card-description-company">
                Role: {userInfo.role}
              </span>

              <div className="card-description-social">
                <span className="card-description-social-follow">
                  DOB: {userInfo.dob}
                </span>
              </div>
            </div>
            <img alt="img" src={userInfo.pic} className="card-image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserInfoCard;
