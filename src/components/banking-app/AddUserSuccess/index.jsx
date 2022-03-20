import { useParams } from "react-router-dom";
import { getBankAccountNumber } from "../../../services/LocalStorage";

function AddUserSuccess() {
  const accountNumber = +useParams().accountNumber;
  const account = getBankAccountNumber(accountNumber);

  return (
    <>
      <h1>Account Successfully Added!</h1>
      <div>
        <p>Name: {account.name} </p>
        <p>Email: {account.email}</p>
        <p>Birthday: {account.bday}</p>
        <p>Address: {account.address}</p>
        <p>Creation Date: {account.creationDate}</p>
        <p>Account Number: {account.accountNumber}</p>
        <p>Balance: {account.formattedbalance}</p>
      </div>
    </>
  );
}

export default AddUserSuccess;
