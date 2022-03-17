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
    <div>
      <button
        type="button"
        id="add-account"
        onClick={e => directToAddAccountPage(e)}
      >
        <i className="las la-plus" />
        Add New Account
      </button>
      <TableBalance />
    </div>
  );
}

export default AllUsersPage;
