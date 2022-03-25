import styles from "./FormInput.module.scss";

function FormInput({
  name,
  label,
  type,
  list,
  onChange,
  value,
  autoComplete,
  disabled,
  placeholder,
  error,
}) {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        list={list}
        id={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        disabled={disabled}
        placeholder={placeholder}
      />
      <p>{error}</p>
    </>
  );
}

export default FormInput;
