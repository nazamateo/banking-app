import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteBudget from "./components/PrivateRouteBudget";

import MainPage from "./pages/banking-app/MainPage/MainPage";
import LoginPage from "./pages/banking-app/Login";

import BudgetMainPage from "./pages/budget-app/MainPage/BudgetMainPage";
import BudgetLoginPage from "./pages/budget-app/Login/BudgetLogin";

import ChooseLogin from "./pages/ChooseLoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChooseLogin />} />
      <Route path="/budget/login" element={<BudgetLoginPage />} />
      {
        <Route
          path="/budget/*"
          element={
            <PrivateRouteBudget>
              <BudgetMainPage />
            </PrivateRouteBudget>
          }
        />
      }
      <Route path="/banking/login" element={<LoginPage />} />
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

//Note for Olan
// pseudocode
/* create routing here that will authenticate mainpage, when the admin user has logged in.
create a function that will confirm if username and password corresponds to the input value
if not match, produce an error */
