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

function saveBudgetEntry(date, amount, type) {
  let currentAppUser = getBudgetAppUSer();
  let newBudgetEntry = [];
  //newBudgetEntry.month = getMonth(date);
  //newBudgetEntry.year = getYear(date);
  newBudgetEntry.transactionDate = date;
  newBudgetEntry.action = "?";
  //newBudgetEntry.transactionId = transactionId;
  newBudgetEntry.mode = "Online";
  newBudgetEntry.amount = amount;

  if (type === "EXPENSE") {
    newBudgetEntry.oldBalance = currentAppUser.balance;
    newBudgetEntry.newBalance = currentAppUser.balance - amount;
  } else if (type === "INCOME") {
    newBudgetEntry.oldBalance = currentAppUser.balance;
    newBudgetEntry.newBalance = currentAppUser.balance + amount;
  }

  return newBudgetEntry;
}

function updateBudgetBalance(date, amount, type) {
  let bankAccounts = getBankAccounts();
  let currentAppUser = getBudgetAppUSer();
  let newBudgetEntry = saveBudgetEntry(date, amount, type);
  currentAppUser.budgetHistory.push(newBudgetEntry);
  if (type === "INCOME") {
    currentAppUser.balance += amount;
  } else if (type === "EXPENSE") {
    currentAppUser.balance -= amount;
  }
  const index = bankAccounts.findIndex((bankAccount) => {
    return bankAccount.isLoggedIn === true;
  });

  bankAccounts[index] = currentAppUser;
  localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
}

/**

function sumTypeCategory(type, category, month, year) {
  let currentAppUser = getBudgetAppUSer();
  let budgetHistory = currentAppUser.budgetHistory;
  let budgetEntriesCategory;
  if (year === "ALL") {
    if (category === "ALL") {
      budgetEntriesCategory = budgetHistory.filter((newBudgetEntry) => {
        newBudgetEntry.type === type && newBudgetEntry.month === month;
      });
    } else {
      budgetEntriesCategory = budgetHistory.filter((newBudgetEntry) => {
        newBudgetEntry.type === type &&
          newBudgetEntry.category === category &&
          newBudgetEntry.month === month;
      });
    }
  } else {
    if (category === "ALL") {
      budgetEntriesCategory = budgetHistory.filter((newBudgetEntry) => {
        newBudgetEntry.type === type &&
          newBudgetEntry.month === month &&
          newBudgetEntry.year === year;
      });
    } else {
      budgetEntriesCategory = budgetHistory.filter((newBudgetEntry) => {
        newBudgetEntry.type === type &&
          newBudgetEntry.category === category &&
          newBudgetEntry.month === month &&
          newBudgetEntry.year === year;
      });
    }
  }

  sumTypeCategory = budgetEntriesCategory.reduce((sum, current) => {
    return sum + current.amount;
  });
  return sumTypeCategory;
} */

export { updateBudgetBalance, getBudgetAppUSer };
