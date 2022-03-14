import React from "react";
import { getBankAccounts } from "../../LocalStorage/LocalStorage";

let getFromLocalStorage = getBankAccounts();
const NameDataListGenerator = () => {
  return getFromLocalStorage.map(users => <option value={users.name}></option>);
};

const AccntNumDataListGenerator = () => {
  return getFromLocalStorage.map(users => (
    <option value={users.accountNumber}></option>
  ));
};

export { NameDataListGenerator, AccntNumDataListGenerator };
