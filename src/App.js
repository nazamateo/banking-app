import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/General/Helpers/PrivateRoute";

import MainPage from "./pages/banking-app/MainPage/MainPage";
import LoginPage from "./pages/banking-app/Login/Login";
function App() {
  return (
    <Routes>
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
