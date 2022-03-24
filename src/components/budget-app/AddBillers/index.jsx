import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../forms/FormInput";
import styles from "../../banking-app/AddUserForm/UsersForm.module.scss";
import { getBudgetAppUSer } from "../../../services/BudgetAppFunctions";
import { getBankAccounts } from "../../../services/LocalStorage";
import Cards from "./Cards";

const BillersForm = () => {
  return <Cards />;
};

export default BillersForm;
