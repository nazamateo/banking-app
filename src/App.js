import React from "react";
import SideBar from "./components/SideBar/SideBar";
import "./App.scss";

//Pages
import AllUsersPage from "./pages/Users/Users";
import FormPage from "./pages/UsersForm/DisplayForm";
import LoginPage from "./pages/Login/login";

function App() {
  return (
    <div className="main-layout">
      <SideBar />
      {/* <AllUsersPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
