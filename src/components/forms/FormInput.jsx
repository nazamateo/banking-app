function FormInput({
  name,
  label,
  type,
  list,
  classNames,
  onChange,
  value,
  autoComplete,
  disabled,
  pattern,
  required,
  placeholder,
  error,
}) {
  return (
    <>
      <label htmlFor={name} className={classNames.label}>
        {label}
      </label>
      <input
        type={type}
        list={list}
        className={classNames.input}
        id={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        disabled={disabled}
        pattern={pattern}
        required={required}
        placeholder={placeholder}
      />
      <p>{error}</p>
    </>
  );
}

export default FormInput;
