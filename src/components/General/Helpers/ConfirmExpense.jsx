import React from "react";
import "../../pop-up/ConfirmDelete.module.scss";

const Popup = ({ handleClose, content }) => {
  return (
    <>
      {content}
      <span className="close-icon" onClick={handleClose}>
        X
      </span>
    </>
  );
};

export default Popup;
