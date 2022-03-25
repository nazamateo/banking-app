import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "../../forms/FormInput";
import styles from "./EditUser.module.scss";
import { updateUser, getBankAccountNumber } from "../../../utils/bankAccounts";
import { formInputValidation } from "../../../utils/formValidation";

const EditForm = ({ bankAccounts, setBankAccounts }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bday, setBday] = useState("");
  const [address, setAddress] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [balance, setBalance] = useState("");
  const [errors, setErrors] = useState("");
  const accountNumber = +useParams().accountNumber;
  const navigate = useNavigate();

  useEffect(() => {
    const getAccountDetails = () => {
      const selectedBankAccount = getBankAccountNumber(
        bankAccounts,
        accountNumber
      );

      setName(selectedBankAccount.name);
      setEmail(selectedBankAccount.email);
      setBday(selectedBankAccount.bday);
      setAddress(selectedBankAccount.address);
      setCreationDate(selectedBankAccount.creationDate);
      setBalance(selectedBankAccount.balance);
    };
    getAccountDetails();
  }, []);

  const handleSubmitData = e => {
    e.preventDefault();

    const errors = formInputValidation(name, email, address);

    if (Object.values(errors).some(error => error !== null)) {
      setErrors(errors);
      return;
    }

    const updatedUserDetails = { name, email, bday, address };

    setBankAccounts(
      updateUser(bankAccounts, accountNumber, updatedUserDetails)
    );

    navigate(-1);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmitData} noValidate>
        <div className={styles.divname}>
          <FormInput
            name="name"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
            error={errors.name}
          />
        </div>

        <div className={styles.divemail}>
          <FormInput
            name="email"
            type="email"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
            error={errors.email}
          />
        </div>

        <div className={styles.divage}>
          <FormInput
            name="birthday"
            type="date"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Birthday"
            value={bday}
            onChange={e => setBday(e.target.value)}
          />
        </div>

        <div className={styles.divaddr}>
          <FormInput
            name="address"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            autoComplete="off"
            error={errors.address}
          />
        </div>

        <div className={styles.divdate}>
          <FormInput
            name="creationDate"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Creation Date"
            value={creationDate}
            disabled={true}
          />
        </div>

        <div className={styles.acct}>
          <FormInput
            name="accountNumber"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Account Number"
            value={accountNumber}
            disabled={true}
          />
        </div>

        <div className={styles.divbal}>
          <FormInput
            name="balance"
            type="number"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Balance (₱)"
            value={balance}
            disabled={true}
          />
        </div>

        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
