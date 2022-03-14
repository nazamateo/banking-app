import { useParams } from "react-router-dom";
import { getBankAccountNumber } from "../../components/LocalStorage/LocalStorage";
import capitalizeFirstLetter from "../../components/General/Helpers/CapitalizeFirstLetter";

function IndividualUserPage() {
  const bankAccount = getBankAccountNumber(parseInt(useParams().accountNumber));

  return (
    <div className="page">
      <h1>User details</h1>
      <p>Name: {bankAccount.name}</p>
      <p>E-mail: {bankAccount.email}</p>
      <p>Age: {bankAccount.age}</p>
      <p>Address: {bankAccount.address}</p>
      <p>Creation Date: {bankAccount.creationDate}</p>
      <p>Account Number: {bankAccount.accountNumber}</p>
      <p>Balance: {bankAccount.balance}</p>

      <div>
        <tr>
          <th>Account Number</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Type</th>
          <th>Transaction ID</th>
        </tr>

        {bankAccount.transactionHistory.map(transaction => {
          return (
            <tr>
              <td>{transaction.accountNumber}</td>
              <td>
                {`₱${Math.abs(
                  transaction.newBalance - transaction.oldBalance
                )}`}
              </td>
              <td>{transaction.transactionDate}</td>
              <td>{capitalizeFirstLetter(transaction.action)}</td>
              <td>{transaction.transactionId}</td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}

export default IndividualUserPage;
