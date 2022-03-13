import React from "react";
import TableBalance from "./DisplayUsersBalance";

function AllUsersPage() {
  return (
    <div className="page">
      <button type="button">Add New Account</button>
      <TableBalance />
    </div>
  );
}

export default AllUsersPage;
