import { getBankAccounts } from "../../../services/LocalStorage";
import { getBillersArray } from "../../../services/BudgetAppFunctions";

const NameDataListGenerator = ({ accounts }) => {
  return accounts.map((users) => (
    <option key={users.accountNumber} value={users.name}></option>
  ));
};

const AccntNumDataListGenerator = ({ accounts }) => {
  return accounts.map((users) => (
    <option key={users.accountNumber} value={users.accountNumber}></option>
  ));
};

const BillerDataListGenerator = () => {
  return getBillersArray().map((billers) => (
    <option
      key={`${billers.name}${billers.billernickname}`}
      value={`${billers.name}-${billers.billernickname}`}
    ></option>
  ));
};

export {
  NameDataListGenerator,
  AccntNumDataListGenerator,
  BillerDataListGenerator,
};
