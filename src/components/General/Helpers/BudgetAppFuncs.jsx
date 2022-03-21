import React from "react";
import { getBankAccounts } from "../../../services/LocalStorage";
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

function saveBudgetEntry(date, amount, type, category) {
  let newBudgetEntry = [];
  newBudgetEntry.month = getMonth(date);
  newBudgetEntry.year = getYear(date);
  newBudgetEntry.amount = amount;
  newBudgetEntry.type = type;
  newBudgetEntry.category = category;
  return newBudgetEntry;
}

function updateBudgetBalance(date, amount, type, category) {
  let bankAccounts = getBankAccounts();
  let currentAppUser = getBudgetAppUSer();
  let newBudgetEntry = saveBudgetEntry(date, amount, type, category);
  currentAppUser.budgetHistory.push(newBudgetEntry);
  if (type === "INCOME") {
    currentAppUser.Budgetbalance += amount;
  } else if (type === "EXPENSE") {
    currentAppUser.Budgetbalance -= amount;
  }
  const index = bankAccounts.findIndex((bankAccount) => {
    return bankAccount.isLoggedIn === true;
  });

  bankAccounts[index] = currentAppUser;
  localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
}

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
}

export { updateBudgetBalance, sumTypeCategory };
