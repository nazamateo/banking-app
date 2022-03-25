import styles from "./ErrorPopup.module.scss";

const Popup = ({ handleClose, children }) => {
  return (
    <div className={styles.popupBox}>
      <div className={styles.box}>
        <>{children}</>
        <span className={styles.closeIcon} onClick={handleClose}>
          X
        </span>
      </div>
    </div>
  );
};

export default Popup;
