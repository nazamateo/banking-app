import React from "react";

function Logo({ link, name, className }) {
  return (
    <div className={className}>
      <img src={link} />
      <p>{name}</p>
    </div>
  );
}

export default Logo;
