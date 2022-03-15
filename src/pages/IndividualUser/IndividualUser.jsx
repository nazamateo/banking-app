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

      <table>
        <thead>
          <tr>
            <td>Account Number</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Type</td>
            <td>Transaction ID</td>
          </tr>
        </thead>

        {bankAccount.transactionHistory.map(transaction => {
          return (
            <tbody>
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
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default IndividualUserPage;
