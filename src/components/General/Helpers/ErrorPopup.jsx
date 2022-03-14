import React from "react";
import "./ErrorPopup.scss";

const Popup = ({ handleClose, content }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <p>{content}</p>
        <span className="close-icon" onClick={handleClose}>
          X
        </span>
      </div>
    </div>
  );
};

export default Popup;
