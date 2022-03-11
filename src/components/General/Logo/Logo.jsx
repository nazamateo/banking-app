import React from "react";
import "./Logo.scss";

function Logo({ link, name }) {
  return (
    <div className="logo-container">
      <img src={link} className="logo" />
      <p>{name}</p>
    </div>
  );
}

export default Logo;
