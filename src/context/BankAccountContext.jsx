import { createContext, useState } from "react";
import { getBankAccounts, updateBankAccounts } from "../services/LocalStorage";
import { useNavigate } from "react-router-dom";

export const BankAccountsContext = createContext();

const BankAccountsProvider = ({ children }) => {
  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());
  const navigate = useNavigate();

  const getBankAccount = (accountName, accountNumber) =>
    bankAccounts.find(
      bankAccount =>
        bankAccount.name === accountName &&
        bankAccount.accountNumber === accountNumber
    );

  const getBankAccountName = accountName =>
    bankAccounts.find(bankAccount => bankAccount.name === accountName);

  const getBankAccountNumber = accountNumber =>
    bankAccounts.find(
      bankAccount => bankAccount.accountNumber === accountNumber
    );

  const updateBankAccountBalance = (
    accountName,
    accountNumber,
    amount,
    action,
    transaction
  ) => {
    const selectedAccount = getBankAccount(accountName, accountNumber);

    if (action === "deposit") {
      selectedAccount.balance += amount;
    } else if (action === "withdraw") {
      selectedAccount.balance -= amount;
    }

    selectedAccount.transactionHistory.unshift(transaction);

    const updatedBankAccounts = bankAccounts.map(bankAccount =>
      bankAccount.accountNumber === accountNumber
        ? { ...selectedAccount }
        : bankAccount
    );

    setBankAccounts(updatedBankAccounts);
    updateBankAccounts(updatedBankAccounts);

    navigate(`/banking/complete/${transaction.transactionId}`);
  };

  const transferBankAccountBalance = (
    toAccountName,
    toAccountNumber,
    fromAccountName,
    fromAccountNumber,
    amount,
    senderTransaction,
    receiverTransaction
  ) => {
    const fromAccount = getBankAccount(fromAccountName, fromAccountNumber);
    fromAccount.balance -= amount;
    fromAccount.transactionHistory.unshift(senderTransaction);

    const toAccount = getBankAccount(toAccountName, toAccountNumber);
    toAccount.balance += amount;
    toAccount.transactionHistory.unshift(receiverTransaction);

    const updatedBankAccounts = bankAccounts.map(bankAccount =>
      bankAccount.accountNumber === fromAccountNumber
        ? { ...fromAccount }
        : bankAccount
    );

    const secondUpdateBankAccounts = updatedBankAccounts.map(bankAccount =>
      bankAccount.accountNumber === toAccountNumber
        ? { ...toAccount }
        : bankAccount
    );

    setBankAccounts(secondUpdateBankAccounts);
    updateBankAccounts(secondUpdateBankAccounts);

    navigate(`/banking/complete/${senderTransaction.transactionId}`);
  };

  const addUser = userDetails => {
    const updatedBankAccounts = [...bankAccounts, userDetails];
    setBankAccounts(updatedBankAccounts);
    updateBankAccounts(updatedBankAccounts);

    navigate(`/banking/users/newaccount/success/${userDetails.accountNumber}`);
  };

  const updateUser = (accountNumber, { name, email, bday, address }) => {
    const selectedAccount = getBankAccountNumber(accountNumber);

    selectedAccount.name = name;
    selectedAccount.email = email;
    selectedAccount.bday = bday;
    selectedAccount.address = address;

    const updatedBankAccounts = bankAccounts.map(account =>
      account.accountNumber === accountNumber ? { ...selectedAccount } : account
    );

    setBankAccounts(updatedBankAccounts);
    updateBankAccounts(updatedBankAccounts);

    navigate(`/banking/users`);
  };

  return (
    <BankAccountsContext.Provider
      value={{
        bankAccounts,
        setBankAccounts,
        getBankAccountName,
        getBankAccountNumber,
        updateBankAccountBalance,
        transferBankAccountBalance,
        addUser,
        updateUser,
      }}
    >
      {children}
    </BankAccountsContext.Provider>
  );
};

export default BankAccountsProvider;
