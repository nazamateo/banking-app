import React from "react";
import TableBalance from "./DisplayUsersBalance";

function AllUsersPage() {
  const directToAddAccountPage = e => {
    e.preventDefault();
    window.location.pathname = "users/newaccount";
  };

  return (
    <div className="page">
      <button type="button" onClick={e => directToAddAccountPage(e)}>
        Add New Account
      </button>
      <TableBalance />
    </div>
  );
}

export default AllUsersPage;
