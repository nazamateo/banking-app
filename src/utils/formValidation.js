function isInputEmpty(value = "") {
  if (value.length === 0) {
    return true;
  }
  return null;
}

function isSpecificInputEmpty(input, label) {
  if (isInputEmpty(input)) {
    return `${label} field is empty.`;
  }

  return null;
}

function isEmailValid(email) {
  const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  if (isInputEmpty(email)) {
    return "E-mail field is empty.";
  }

  if (!regExp.test(email)) {
    return "E-mail is not valid.";
  }

  return null;
}

function isAccountNameInvalid(accountNameReference, accountNameInput = "") {
  if (isInputEmpty(accountNameInput)) {
    return "Name field is empty.";
  }

  if (accountNameReference !== accountNameInput) {
    return "Account name does not exist.";
  }

  return null;
}

function isAccountNumberInvalid(
  accountNumReference,
  accountNumInput = "",
  accountNumReferenceTwo
) {
  if (isInputEmpty(accountNumInput.toString())) {
    return "Account number field is empty.";
  }

  if (accountNumReference !== accountNumInput) {
    return "Account number input is not associated with account name.";
  }

  if (accountNumReference === accountNumReferenceTwo) {
    return "Invalid, sender and receiver is the same.";
  }

  return null;
}

function isAmountInvalid(amount = "", action, amountReference) {
  if (isInputEmpty(amount.toString())) {
    return "Amount field is empty.";
  }
  if (amount <= 0) {
    return "Invalid amount.";
  }

  if (action === "withdraw" && amountReference < amount) {
    return "Insufficient Balance.";
  }
  return null;
}

function transactionValidation(
  accountNameReference,
  accountNameInput,
  accountNumReference,
  accountNumInput,
  amount,
  amountReference,
  action,
  accountNumReferenceTwo
) {
  const errors = {};

  errors.name = isAccountNameInvalid(accountNameReference, accountNameInput);
  errors.accountNumber = isAccountNumberInvalid(
    accountNumReference,
    accountNumInput,
    accountNumReferenceTwo
  );
  errors.amount = isAmountInvalid(amount, action, amountReference);

  return errors;
}

function formInputValidation(name, email, address) {
  const errors = {};

  errors.name = isSpecificInputEmpty(name, "Name");
  errors.email = isEmailValid(email);
  errors.address = isSpecificInputEmpty(address, "Address");

  return errors;
}

function newAccountValidation(
  nameInput,
  emailInput,
  bdayInput,
  addressInput,
  balanceInput
) {
  const balance = isAmountInvalid(balanceInput);
  const bday = isSpecificInputEmpty(bdayInput, "Birthday");

  const { name, email, address } = formInputValidation(
    nameInput,
    emailInput,
    addressInput
  );

  return { name, email, bday, address, balance };
}

function loginValidation(username, password, accounts) {
  const errors = {};

  errors.username = isSpecificInputEmpty(username, "Username");
  errors.password = isSpecificInputEmpty(password, "Password");

  if (
    !accounts.find(
      account => account.username === username && account.password === password
    ) &&
    username &&
    password
  ) {
    errors.username = "Invalid Username";
    errors.password = "Invalid Password";
  }

  return errors;
}

function emailPasswordValidation(email, password, accounts) {
  const errors = {};

  errors.email = isEmailValid(email);
  errors.password = isSpecificInputEmpty(password, "Password");

  if (
    !accounts.find(
      account => account.email === email && account.password === password
    ) &&
    email &&
    password
  ) {
    errors.email = "Invalid E-mail";
    errors.password = "Invalid Password";
  }

  return errors;
}

export {
  transactionValidation,
  formInputValidation,
  loginValidation,
  newAccountValidation,
  emailPasswordValidation,
};
