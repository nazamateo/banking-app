import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/General/Helpers/PrivateRoute";

import MainPage from "./pages/banking-app/MainPage/MainPage";
import LoginPage from "./pages/banking-app/Login/Login";

import BudgetMainPage from "./pages/budget-app/MainPage/BudgetMainPage";
import BudgetLoginPage from "./pages/budget-app/Login/BudgetLogin";

import ChooseLogin from "./components/General/ChooseLoginPage";

function App() {
  return (
    <Routes>
      <Route path="/choose" element={<ChooseLogin />} />
      <Route path="/login/budget" element={<BudgetLoginPage />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <BudgetMainPage />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
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
