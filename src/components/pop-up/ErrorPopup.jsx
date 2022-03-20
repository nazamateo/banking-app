import styles from "./ErrorPopup.module.scss";

const Popup = ({ handleClose, content }) => {
  return (
    <div className={styles.popupBox}>
      <div className={styles.box}>
        <>{content}</>
        <span className={styles.closeIcon} onClick={handleClose}>
          X
        </span>
      </div>
    </div>
  );
};

export default Popup;
