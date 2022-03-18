import React from "react";
import TableBalance from "./DisplayUsersBalance";
import { useNavigate } from "react-router-dom";

function AllUsersPage() {
  const navigate = useNavigate();
  const directToAddAccountPage = e => {
    e.preventDefault();
    navigate("newaccount");
  };

  return (
    <div className="page">
      <h1 className="account-list-title">Account List</h1>
      <div className="page-main-content">
        <div className="balance-container-header">
          <h2>Account Details</h2>
          <button
            type="button"
            id="add-account"
            onClick={e => directToAddAccountPage(e)}
          >
            <i className="las la-plus" />
            Add New Account
          </button>
        </div>

        <TableBalance />
      </div>
    </div>
  );
}

export default AllUsersPage;
