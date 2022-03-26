import styles from "./LoginFormContainer.module.scss";

function LogInFormContainer({ children, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer} noValidate>
      <h1>LOGIN</h1>
      {children}
    </form>
  );
}

export default LogInFormContainer;
