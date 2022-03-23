import { getBankAccounts } from "./LocalStorage";
function getMonth(date) {
  let month;
  month = date.getMonth();
  return month;
}

function getYear(date) {
  let year;
  year = date.getFullYear();
  return year;
}

function getBudgetAppUSer() {
  let bankAccounts = getBankAccounts();
  return bankAccounts.find((bankAccount) => {
    return bankAccount.isLoggedIn === true;
  });
}

function getBillersArray() {
  let currentAppUser = getBudgetAppUSer();
  return currentAppUser.billersArray;
}

export { getBudgetAppUSer, getBillersArray };
