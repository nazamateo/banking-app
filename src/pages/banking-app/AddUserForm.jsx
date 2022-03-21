import React from "react";
import UserForm from "../../components/banking-app/AddUserForm";

function FormPage() {
  return (
    <div className="page">
      <h1 className="title">ADD BANK ACCOUNT FORM</h1>
      <div className="page-main-content">
        <UserForm />
      </div>
    </div>
  );
}

export default FormPage;
