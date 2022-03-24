import { getBankAccounts } from "../../../services/LocalStorage";
import { getBillersArray } from "../../../services/BudgetAppFunctions";

const NameDataListGenerator = ({ accounts }) => {
  return accounts.map(users => (
    <option key={users.accountNumber} value={users.name}></option>
  ));
};

const AccntNumDataListGenerator = ({ accounts }) => {
  return accounts.map(users => (
    <option key={users.accountNumber} value={users.accountNumber}></option>
  ));
};

const AccntDataListGenerator = () => {
  return getBankAccounts().map(users => (
    <option key={users.name} value={users.name}></option>
  ));
};

const BillerDataListGenerator = () => {
  return getBillersArray().map(billers => (
    <option
      key={`${billers.bankname}${billers.billeraccountnum}`}
      value={`${billers.bankname}${billers.billeraccountnum}`}
    ></option>
  ));
};

export {
  NameDataListGenerator,
  AccntNumDataListGenerator,
  AccntDataListGenerator,
  BillerDataListGenerator,
};
