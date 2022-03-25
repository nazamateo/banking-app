import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateRouteBudget from "./components/PrivateRoute/PrivateRouteBudget";
import MainPage from "./pages/banking-app/MainPage/MainPage";
import LoginPage from "./pages/banking-app/Login";
import BudgetMainPage from "./pages/budget-app/MainPage/BudgetMainPage";
import BudgetLoginPage from "./pages/budget-app/Login/BudgetLogin";
import ChooseAppPage from "./pages/ChooseLoginPage";
import {
  getBankAccounts,
  getAdminAccounts,
  updateAdminAccounts,
  updateBankAccounts,
} from "./services/LocalStorage";

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());
  const [adminAccounts, setAdminAccounts] = useState(getAdminAccounts());

  useEffect(() => {
    updateBankAccounts(bankAccounts);
  }, [bankAccounts]);

  useEffect(() => {
    updateAdminAccounts(adminAccounts);
  }, [adminAccounts]);

  return (
    <Routes>
      <Route path="/" element={<ChooseAppPage />} />

      <Route
        path="/budget/login"
        element={
          <BudgetLoginPage
            setIsUserAuthenticated={setIsUserAuthenticated}
            isUserAuthenticated={isUserAuthenticated}
            bankAccounts={bankAccounts}
            setBankAccounts={setBankAccounts}
          />
        }
      />
      <Route
        path="/banking/login"
        element={
          <LoginPage
            setIsAdminAuthenticated={setIsAdminAuthenticated}
            isAdminAuthenticated={isAdminAuthenticated}
            adminAccounts={adminAccounts}
            setAdminAccounts={setAdminAccounts}
          />
        }
      />

      <Route
        path="/budget/*"
        element={
          <PrivateRouteBudget isAuthenticated={isUserAuthenticated}>
            <BudgetMainPage
              bankAccounts={bankAccounts}
              setBankAccounts={setBankAccounts}
              setIsUserAuthenticated={setIsUserAuthenticated}
              isUserAuthenticated={isUserAuthenticated}
            />
          </PrivateRouteBudget>
        }
      />

      <Route
        path="/banking/*"
        element={
          <PrivateRoute isAuthenticated={isAdminAuthenticated}>
            <MainPage
              bankAccounts={bankAccounts}
              setBankAccounts={setBankAccounts}
              adminAccounts={adminAccounts}
              setAdminAccounts={setAdminAccounts}
              setIsAdminAuthenticated={setIsAdminAuthenticated}
              isAdminAuthenticated={isAdminAuthenticated}
            />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
