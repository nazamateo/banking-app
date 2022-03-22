import FormInput from "../../forms/FormInput";
import styles from "../Form/Form.module.scss";

const InputFields = () => {
  return (
    <>
      <span className={styles.description}>
        <FormInput
          name="description"
          type="text"
          classNames={{
            label: styles.label,
            input: styles.field,
          }}
          placeholder="Description"
          //label="Name"
          //value={description}
          //onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          required={true}
        />
      </span>
      <span className={styles.amount}>
        <FormInput
          name="amount"
          type="number"
          classNames={{
            label: styles.label,
            input: styles.fieldcost,
          }}
          placeholder="Amount"
          //label="Name"
          //value={description}
          //onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          required={true}
        />
      </span>
      <br></br>
    </>
  );
};

export default InputFields;
