import React from "react";
import { userArr } from "./BankDetails";

const Header = () => {
  return (
    <tr>
      <th>name</th>
      <th>email</th>
      <th>age</th>
      <th>address</th>
      <th>Creation Date</th>
      <th>Account Number</th>
    </tr>
  );
};

const Rows = ({ userInfo }) => {
  return userInfo.map(info => (
    <tr>
      <td>{info.name}</td>
      <td>{info.email}</td>
      <td>{info.age}</td>
      <td>{info.address}</td>
      <td>{info.creationDate}</td>
      <td>{info.accountNumber}</td>
    </tr>
  ));
};

const Table = () => {
  return (
    <table>
      <Header />
      <Rows userInfo={userArr} />
    </table>
  );
};
export default Table;
