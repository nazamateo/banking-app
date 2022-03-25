import styles from "./Button.module.scss";

function Button({ text, handleClick }) {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
