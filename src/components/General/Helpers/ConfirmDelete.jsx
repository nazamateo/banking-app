import React from "react";
import "./ConfirmDelete.scss";

const Popup = ({ handleClose, content }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <>{content}</>
        <span className="close-icon" onClick={handleClose}>
          X
        </span>
      </div>
    </div>
  );
};

export default Popup;
