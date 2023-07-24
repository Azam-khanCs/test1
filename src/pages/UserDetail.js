import React, { useContext } from "react";
import "./UserDetail.css";
import { context } from "../context/UserContext";

const UserDetail = () => {
  const { password, email } = useContext(context);
  return (
    <div className="userDetail">
      <h1 className="heading">Welcome to the New Page </h1>
      <div className="email">
        <span>User Email is:</span> <span>{email}</span>
      </div>
      <div className="password">
        <span>User Password is:</span> <span>{password}</span>
      </div>
    </div>
  );
};

export default UserDetail;
