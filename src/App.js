import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateRouteBudget from "./components/PrivateRoute/PrivateRouteBudget";
import MainPage from "./pages/banking-app/MainPage/MainPage";
import LoginPage from "./pages/banking-app/Login";
import BudgetMainPage from "./pages/budget-app/MainPage/BudgetMainPage";
import BudgetLoginPage from "./pages/budget-app/Login/BudgetLogin";
import ChooseAppPage from "./pages/ChooseLoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChooseAppPage />} />

      <Route path="/budget/login" element={<BudgetLoginPage />} />
      <Route path="/banking/login" element={<LoginPage />} />

      <Route
        path="/budget/*"
        element={
          <PrivateRouteBudget>
            <BudgetMainPage />
          </PrivateRouteBudget>
        }
      />

      <Route
        path="/banking/*"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
