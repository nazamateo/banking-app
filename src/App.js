import React from "react";
import SideBar from "./components/SideBar/SideBar";
import AllUsersPage from "./pages/Users/Users";
import FormPage from "./pages/UsersForm/DisplayForm";
import "./App.scss";

function App() {
  return (
    <div className="main-layout">
      <SideBar />
      <FormPage/>


    </div>
  );
}

export default App;
