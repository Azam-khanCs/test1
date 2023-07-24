import React, { useContext, useState } from "react";
import "./loginLight.css";
import "./loginDark.css";
import DarkLogo from "../../assets/DarkLogo.svg";
import Person from "../../assets/person.svg";
import DarkUser from "../../assets/darkuser.png";
import DarkPassword from "../../assets/DarkPassword.png";
import ShowPassword from "../../assets/showPassword.svg";
import LightLogo from "../../assets/lightLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { context } from "../../context/UserContext";

const Login = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const {
    email,
    password,
    handleSubmit,
    setEmail,
    setPassword,
  } = useContext(context);
  return (
    <div className="login">
      <div className="logo">
        <img src={isDarkMode ? DarkLogo : LightLogo} alt="" />
      </div>
      <h2 className={isDarkMode ? "dark-form-heading" : "light-form-heading"}>
        Sign in to your account
      </h2>

      <form className="form" action="" onSubmit={handleSubmit}>
        <div className={isDarkMode ? "dark-input" : "light-input"}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="UserName"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name">
            <img src={isDarkMode ? DarkUser : Person} alt="" />
          </label>
        </div>
        <div className={isDarkMode ? "dark-input" : "light-input"}>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Userpassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">
            <img src={isDarkMode ? DarkPassword : ShowPassword} alt="" />
          </label>
        </div>
        <div className="checkANDforgot">
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              required
            />
            <label
              className={isDarkMode ? "remember-Dark " : "remember-light"}
              htmlFor="checkbox"
            >
              Remember me
            </label>
          </div>
          <Link className="forgotPassword" href="#">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className={isDarkMode ? "dark-button" : "light-button"}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
