import React from "react";
import "./Footer.css";
import Instagram from "../../assets/instagram.png";
// import Facebook from '../../assets/facebook.png'
import Logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Instagram} alt="" />
        </div>
        <div className="logo-footer">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur blur-pr"></div>
      <div className="blur blur-pl"></div>

    </div>
  );
};
