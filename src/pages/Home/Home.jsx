import React, { useState } from "react";
import "./HomeDarkMode.css";
import "./HomeLightMode.css";
import TopLeft from "../../assets/topLeft.svg";
import TopRight from "../../assets/topRight.svg";
import BottomLeft from "../../assets/bottomLeft.svg";
import BottomRight from "../../assets/bottomRight.svg";
import LightIllustration from "../../assets/light-mode-illustrator.svg";
import DarkIllustration from "../../assets/dark-mode-illustrator.svg";
import ToggleLightMode from "../../assets/toggleLightMode.svg";
import ToggleDarkMode from "../../assets/toggleDarkMode.svg";
import Login from "../../components/Login/Login";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <React.Fragment>
      <div className={isDarkMode ? "home-dark-mode" : "home-light-mode"}>
        <div className={isDarkMode ? "leftside-dark" : "leftside-light"}>
          <div className={isDarkMode ? "heading-dark" : "heading-light"}>
            <span>One Stop, Many Solution</span>
            <span>
              One Solution that Speed up your Device Reports and Make Efficient
              way to organize your data.
            </span>
          </div>
          <div className="centerImage">
            <img
              src={isDarkMode ? DarkIllustration : LightIllustration}
              alt=""
            />
          </div>
          <div className="leftSideImages">
            <img className="image1" src={TopLeft} alt="" />
            <img className="image2" src={TopRight} alt="" />
            <img className="image3" src={BottomLeft} alt="" />
            <img className="image4" src={BottomRight} alt="" />
          </div>
        </div>
        <div className="rightside">
          <div className="topbar">
            <div className="toggleButton">
              <img
                onClick={toggleMode}
                src={isDarkMode ? ToggleDarkMode : ToggleLightMode}
                alt=""
              />
            </div>
            <div className="login">
              <Login isDarkMode={isDarkMode} />
            </div>
          </div>
          <div className="footer">
            <div className="footer-info">
              <span>2023 All rights reserved</span>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
