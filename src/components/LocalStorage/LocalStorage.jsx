//shall be in login page
import React from "react";
import { getFromLocalStorage } from "../../pages/Users/DisplayUsersBalance";

const adminAccount = { username: "abc123", password: "abc123" };
let bankAccounts = [
  {
    name: "Esmeralda Curry",
    email: "smrldCrry@gmail.com",
    age: "45",
    address:
      "#170 EDAP Building Cenetr, Boni Serrano Road, Camp Aguinaldo,Quezon City,Philippines",
    creationDate: "05/08/19",
    accountNumber: 0,
    balance: 5000,
  },
  {
    name: "Esmeralda Curry",
    email: "smrldCrry@gmail.com",
    age: "45",
    address:
      "#170 EDAP Building Cenetr, Boni Serrano Road, Camp Aguinaldo,Quezon City,Philippines",
    creationDate: "05/08/19",
    accountNumber: 1,
    balance: 25193.5,
  },
  {
    name: "Aida Krause",
    email: "dKrs@gmail.com",
    age: "59",
    address: "Prudential Bank Building,Manila,Philippines",
    creationDate: "06/05/19",
    accountNumber: 2,
    balance: 87377.6,
  },
  {
    name: "Cyril Caldwell",
    email: "CyrlCldwll@gmail.com",
    age: "41",
    address: "103 10th Street, New Manila Mariana,Quezon City,Philippines",
    creationDate: "08/05/19",
    accountNumber: 3,
    balance: 94809.8,
  },
  {
    name: "Letha Welch",
    email: "LthWlch@gmail.com",
    age: "43",
    address:
      "Onyxson Building 2066 Onyx St. Fabie Estate, Paco, Manila,Manila,Philippines",
    creationDate: "10/25/19",
    accountNumber: 4,
    balance: 10692.35,
  },
  {
    name: "Gretchen Young",
    email: "GrtchnYng@gmail.com",
    age: "28",
    address: "Concepcion Street,Sogod,Philippines",
    creationDate: "12/05/19",
    accountNumber: 5,
    balance: 21623.7,
  },
  {
    name: "Gilbert Heath",
    email: "GlbrtHth@gmail.com",
    age: "34",
    address:
      "43 Clarinda Soriano Street, B F Resort Village,Las Pinas,Philippines",
    creationDate: "01/31/20",
    accountNumber: 6,
    balance: 84370.1,
  },
  {
    name: "Concepcion Rocha",
    email: "CncpcnRch@gmail.com",
    age: "49",
    address:
      "SM Mall of Asia, SM Central Business Park, Bay City,Pasay City,Philippines",
    creationDate: "07/24/20",
    accountNumber: 7,
    balance: 10669.3,
  },
  {
    name: "August Shannon",
    email: "gstShnnn@gmail.com",
    age: "42",
    address: "C Santos Subdivision 1400,Valenzuela,Philippines",
    creationDate: "08/19/20",
    accountNumber: 8,
    balance: 15094.5,
  },
  {
    name: "Beatriz Morrison",
    email: "BtrzMrrsn@gmail.com",
    age: "59",
    address:
      "Suite 101, M/F Eastgate Center Building, 169 EDSA,Mandaluyong City,Philippines",
    creationDate: "03/19/21",
    accountNumber: 9,
    balance: 104010.96,
  },
  {
    name: "Thomas Oconnell",
    email: "Thmscnnll@gmail.com",
    age: "62",
    address: "486 Tunhua Rd.,Peitun Area,Taiwan",
    creationDate: "05/25/21",
    accountNumber: 10,
    balance: 104848.69,
  },
  {
    name: "Ahmad Duffy",
    email: "hmdDffy@gmail.com",
    age: "58",
    address: "Alley 9, Lane 22, Wende Rd.,Neihu Dist.,Taiwan",
    creationDate: "06/07/21",
    accountNumber: 11,
    balance: 32305.77,
  },
  {
    name: "Annie Garrison",
    email: "nnGrrsn@gmail.com",
    age: "52",
    address: "62, Chung I 1 Street,Jen Te Hsiang,Taiwan",
    creationDate: "06/09/21",
    accountNumber: 12,
    balance: 67470.34,
  },
  {
    name: "Lonnie Fitzpatrick",
    email: "LnnFtzptrck@gmail.com",
    age: "29",
    address: "No. 9-1,Ichang E. Rd.,Taiwan",
    creationDate: "10/06/21",
    accountNumber: 13,
    balance: 113205.33,
  },
  {
    name: "Maryellen Herman",
    email: "MryllnHrmn@gmail.com",
    age: "43",
    address: "Bldg. A, Niuchouhsi, Fuhsing Village,Miuhsiung Hsiang,Taiwan",
    creationDate: "02/02/22",
    accountNumber: 14,
    balance: 73788.25,
  },
];

const formatmyBalance = balance => {
  return Intl.NumberFormat("en-PH", {
    currency: "PHP",
    style: "currency",
  }).format(balance);
};

bankAccounts = bankAccounts.map(user => {
  return {
    ...user,
    formattedbalance: formatmyBalance(user.balance),
  };
});

function getBankAccounts() {
  return JSON.parse(localStorage.getItem("bankAccounts"));
}

function getAdminAccounts() {
  return JSON.parse(localStorage.getItem("adminAccounts"));
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

function updateBankAccountBalance(accountName, accountNumber, amount, action) {
  const bankAccounts = getFromLocalStorage
  const foundAccount = getBankAccount(accountName, accountNumber);
  const index = bankAccounts.findIndex(obj => {
    return obj.accountNumber === accountNumber;
  });



  if (action === "deposit") {
    foundAccount.balance += amount;
  } else if (action === "withdraw") {
    foundAccount.balance -= amount;
  }

  foundAccount.formattedbalance = Intl.NumberFormat("en-PH", {
    currency: "PHP",
    style: "currency",
  }).format(foundAccount.balance);

  bankAccounts[index] = foundAccount;
  localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
}

function transferBankAccountBalance(toaccountName, toaccountNumber,fromaccountName, fromaccountNumber, amount) {
  const bankAccounts = getFromLocalStorage

  const fromAccount = getBankAccount(fromaccountName, fromaccountNumber);
  const fromindex = bankAccounts.findIndex(obj => {
    return obj.accountNumber === fromaccountNumber;
  });
  fromAccount.balance-=amount
  fromAccount.formattedbalance = Intl.NumberFormat("en-PH", {
    currency: "PHP",
    style: "currency",
  }).format(fromAccount.balance);
  bankAccounts[fromindex] = fromAccount;



  const toAccount = getBankAccount(toaccountName, toaccountNumber);
  const toindex = bankAccounts.findIndex(obj => {
    return obj.accountNumber === toaccountNumber;
  });
toAccount.balance+=amount
toAccount.formattedbalance = Intl.NumberFormat("en-PH", {
  currency: "PHP",
  style: "currency",
}).format(toAccount.balance);
  bankAccounts[toindex] = toAccount;
 
  localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
}

function LoadDataButton() {
  const onClickBtn = e => {
    e.preventDefault();
    localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
    localStorage.setItem("adminAccounts", JSON.stringify(adminAccount));
    e.target.remove();
  };

  return (
    <button type="button" onClick={e => onClickBtn(e)}>
      Load Data
    </button>
  );
}

export {
  getBankAccounts,
  getAdminAccounts,
  LoadDataButton,
  getBankAccount,
  updateBankAccountBalance,
  transferBankAccountBalance
};
