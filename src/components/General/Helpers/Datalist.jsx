import React from "react";
import { getBankAccounts } from "../../../services/LocalStorage";

const NameDataListGenerator = () => {
  return getBankAccounts().map(users => (
    <option key={users.accountNumber} value={users.name}></option>
  ));
};

const AccntNumDataListGenerator = () => {
  return getBankAccounts().map(users => (
    <option key={users.accountNumber} value={users.accountNumber}></option>
  ));
};

export { NameDataListGenerator, AccntNumDataListGenerator };
