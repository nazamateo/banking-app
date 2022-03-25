const getBankAccount = (bankAccounts, accountName, accountNumber) =>
  bankAccounts.find(
    bankAccount =>
      bankAccount.name === accountName &&
      bankAccount.accountNumber === accountNumber
  );

const getBankAccountName = (bankAccounts, accountName) =>
  bankAccounts.find(bankAccount => bankAccount.name === accountName);

const getBankAccountNumber = (bankAccounts, accountNumber) =>
  bankAccounts.find(bankAccount => bankAccount.accountNumber === accountNumber);

const updateBankAccountBalance = (
  bankAccounts,
  accountName,
  accountNumber,
  amount,
  action,
  transaction
) => {
  const selectedAccount = getBankAccount(
    bankAccounts,
    accountName,
    accountNumber
  );

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

  return updatedBankAccounts;
};

const transferBankAccountBalance = (
  bankAccounts,
  toAccountName,
  toAccountNumber,
  fromAccountName,
  fromAccountNumber,
  amount,
  senderTransaction,
  receiverTransaction
) => {
  const fromAccount = getBankAccount(
    bankAccounts,
    fromAccountName,
    fromAccountNumber
  );
  fromAccount.balance -= amount;
  fromAccount.transactionHistory.unshift(senderTransaction);

  const toAccount = getBankAccount(
    bankAccounts,
    toAccountName,
    toAccountNumber
  );
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

  return secondUpdateBankAccounts;
};

const addUser = (bankAccounts, userDetails) => {
  const updatedBankAccounts = [...bankAccounts, userDetails];

  return updatedBankAccounts;
};

const updateUser = (
  bankAccounts,
  accountNumber,
  { name, email, bday, address }
) => {
  const selectedAccount = getBankAccountNumber(bankAccounts, accountNumber);

  selectedAccount.name = name;
  selectedAccount.email = email;
  selectedAccount.bday = bday;
  selectedAccount.address = address;

  const updatedBankAccounts = bankAccounts.map(account =>
    account.accountNumber === accountNumber ? { ...selectedAccount } : account
  );

  return updatedBankAccounts;
};

export {
  getBankAccount,
  getBankAccountName,
  getBankAccountNumber,
  updateBankAccountBalance,
  transferBankAccountBalance,
  addUser,
  updateUser,
};
