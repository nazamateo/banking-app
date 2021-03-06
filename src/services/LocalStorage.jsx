import React from "react";
import bdo from "../../src/assets/images/Company logos/bdo.png";
import netflix from "../../src/assets/images/Company logos/netflix.png";

const ADMIN_ACCOUNTS = [
  { username: "abc123", password: "abc123", isLoggedIn: false },
  { username: "admin", password: "admin1234", isLoggedIn: false },
];

const BANK_ACCOUNTS = [
  {
    name: "Esmeralda Curry",
    email: "smrldCrry@gmail.com",
    bday: "1995-01-10",
    address:
      "#170 EDAP Building Cenetr, Boni Serrano Road, Camp Aguinaldo,Quezon City,Philippines",
    creationDate: "05/08/19",
    accountNumber: 1,
    balance: 25193.5,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Aida Krause",
    email: "dKrs@gmail.com",
    bday: "1995-01-10",
    address: "Prudential Bank Building,Manila,Philippines",
    creationDate: "06/05/19",
    accountNumber: 2,
    balance: 87377.6,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Cyril Caldwell",
    email: "CyrlCldwll@gmail.com",
    bday: "1995-01-10",
    address: "103 10th Street, New Manila Mariana,Quezon City,Philippines",
    creationDate: "08/05/19",
    accountNumber: 3,
    balance: 94809.8,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Letha Welch",
    email: "LthWlch@gmail.com",
    bday: "1995-01-10",
    address:
      "Onyxson Building 2066 Onyx St. Fabie Estate, Paco, Manila,Manila,Philippines",
    creationDate: "10/25/19",
    accountNumber: 4,
    balance: 10692.35,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Gretchen Young",
    email: "GrtchnYng@gmail.com",
    bday: "1995-01-10",
    address: "Concepcion Street,Sogod,Philippines",
    creationDate: "12/05/19",
    accountNumber: 5,
    balance: 21623.7,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Gilbert Heath",
    email: "GlbrtHth@gmail.com",
    bday: "1995-01-10",
    address:
      "43 Clarinda Soriano Street, B F Resort Village,Las Pinas,Philippines",
    creationDate: "01/31/20",
    accountNumber: 6,
    balance: 84370.1,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Concepcion Rocha",
    email: "CncpcnRch@gmail.com",
    bday: "1995-01-10",
    address:
      "SM Mall of Asia, SM Central Business Park, Bay City,Pasay City,Philippines",
    creationDate: "07/24/20",
    accountNumber: 7,
    balance: 10669.3,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "August Shannon",
    email: "gstShnnn@gmail.com",
    bday: "1995-01-10",
    address: "C Santos Subdivision 1400,Valenzuela,Philippines",
    creationDate: "08/19/20",
    accountNumber: 8,
    balance: 15094.5,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Beatriz Morrison",
    email: "BtrzMrrsn@gmail.com",
    bday: "1995-01-10",
    address:
      "Suite 101, M/F Eastgate Center Building, 169 EDSA,Mandaluyong City,Philippines",
    creationDate: "03/19/21",
    accountNumber: 9,
    balance: 104010.96,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Thomas Oconnell",
    email: "Thmscnnll@gmail.com",
    bday: "1995-01-10",
    address: "486 Tunhua Rd.,Peitun Area,Taiwan",
    creationDate: "05/25/21",
    accountNumber: 10,
    balance: 104848.69,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Ahmad Duffy",
    email: "hmdDffy@gmail.com",
    bday: "1995-01-10",
    address: "Alley 9, Lane 22, Wende Rd.,Neihu Dist.,Taiwan",
    creationDate: "06/07/21",
    accountNumber: 11,
    balance: 32305.77,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Annie Garrison",
    email: "nnGrrsn@gmail.com",
    bday: "1995-01-10",
    address: "62, Chung I 1 Street,Jen Te Hsiang,Taiwan",
    creationDate: "06/09/21",
    accountNumber: 12,
    balance: 67470.34,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Lonnie Fitzpatrick",
    email: "LnnFtzptrck@gmail.com",
    bday: "1995-01-10",
    address: "No. 9-1,Ichang E. Rd.,Taiwan",
    creationDate: "10/06/21",
    accountNumber: 13,
    balance: 113205.33,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Maryellen Herman",
    email: "MryllnHrmn@gmail.com",
    bday: "1995-01-10",
    address: "Bldg. A, Niuchouhsi, Fuhsing Village,Miuhsiung Hsiang,Taiwan",
    creationDate: "02/02/22",
    accountNumber: 14,
    balance: 73788.25,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
  {
    name: "Nazareno Mateo",
    email: "nrma@gmail.com",
    bday: "1995-01-10",
    address: "New Zealand",
    creationDate: "02/02/22",
    accountNumber: 15,
    balance: 500000,
    transactionHistory: [],
    billersArray: [
      {
        link: bdo,
        name: "BDO",
        billeraccountname: "Mateo",
        billeraccountnum: "201100074",
        billernickname: "BDOB1",
      },
      {
        link: netflix,
        name: "NETFLIX",
        billeraccountname: "Mateo",
        billeraccountnum: "201423728",
        billernickname: "House",
      },
    ],
    password: "user123",
    isLoggedIn: false,
  },
];

function getBankAccounts() {
  return JSON.parse(localStorage.getItem("bankAccounts"));
}

function getAdminAccounts() {
  return JSON.parse(localStorage.getItem("adminAccounts"));
}

function updateBankAccounts(bankAccounts) {
  localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
}

function updateAdminAccounts(adminAccounts) {
  localStorage.setItem("adminAccounts", JSON.stringify(adminAccounts));
}

function getDepositTrackers() {
  return JSON.parse(localStorage.getItem("depositTrackers"));
}

function updateDepositTrackers(trackers) {
  localStorage.setItem("depositTrackers", JSON.stringify(trackers));
}

function getBankAccount(accountName, accountNumber) {
  const bankAccounts = JSON.parse(localStorage.getItem("bankAccounts"));

  return bankAccounts.find(bankAccount => {
    return (
      bankAccount.accountNumber === accountNumber &&
      bankAccount.name === accountName
    );
  });
}

function getBankAccountName(accountName) {
  const bankAccounts = getBankAccounts();

  return bankAccounts.find(bankAccount => {
    return bankAccount.name === accountName;
  });
}

function getBankAccountNumber(accountNumber) {
  const bankAccounts = getBankAccounts();

  return bankAccounts.find(bankAccount => {
    return bankAccount.accountNumber === accountNumber;
  });
}

function updateBankAccountBalance(
  accountName,
  accountNumber,
  amount,
  action,
  transaction
) {
  const bankAccounts = getBankAccounts();
  const foundAccount = getBankAccount(accountName, accountNumber);
  const index = bankAccounts.findIndex(obj => {
    return obj.accountNumber === accountNumber;
  });

  if (action === "deposit") {
    foundAccount.balance += amount;
  } else if (action === "withdraw") {
    foundAccount.balance -= amount;
  }

  foundAccount.transactionHistory.unshift(transaction);
  bankAccounts[index] = foundAccount;
  localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
}

function transferBankAccountBalance(
  toaccountName,
  toaccountNumber,
  fromaccountName,
  fromaccountNumber,
  amount,
  senderTransaction,
  receiverTransaction
) {
  const bankAccounts = getBankAccounts();

  const fromAccount = getBankAccount(fromaccountName, fromaccountNumber);
  const fromIndex = bankAccounts.findIndex(obj => {
    return obj.accountNumber === fromaccountNumber;
  });
  fromAccount.balance -= amount;
  fromAccount.transactionHistory.unshift(senderTransaction);
  bankAccounts[fromIndex] = fromAccount;

  const toAccount = getBankAccount(toaccountName, toaccountNumber);
  const toIndex = bankAccounts.findIndex(obj => {
    return obj.accountNumber === toaccountNumber;
  });

  toAccount.balance += amount;

  toAccount.transactionHistory.unshift(receiverTransaction);
  bankAccounts[toIndex] = toAccount;

  localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
}

function LoadDataButton({ className }) {
  const array = [];
  const onClickBtn = (e) => {
    e.preventDefault();
    localStorage.setItem("bankAccounts", JSON.stringify(BANK_ACCOUNTS));
    localStorage.setItem("adminAccounts", JSON.stringify(ADMIN_ACCOUNTS));
    localStorage.setItem("selectedLink", "Dashboard");
    localStorage.setItem("depositTrackers", JSON.stringify(array));
    e.target.remove();
  };

  return (
    <button type="button" onClick={onClickBtn} className={className}>
      Load Initial Data to LocalStorage
    </button>
  );
}

export {
  getBankAccounts,
  getAdminAccounts,
  updateBankAccounts,
  updateAdminAccounts,
  getDepositTrackers,
  updateDepositTrackers,
  LoadDataButton,
  getBankAccount,
  updateBankAccountBalance,
  transferBankAccountBalance,
  getBankAccountName,
  getBankAccountNumber,
};
