import React from "react";
import styles from "./ConfirmDelete.module.scss";

const Popup = ({ content }) => {
  return (
    <div className={styles.popupBox}>
      <div className={styles.box}>
        <>{content}</>
      </div>
    </div>
  );
};

export default Popup;
