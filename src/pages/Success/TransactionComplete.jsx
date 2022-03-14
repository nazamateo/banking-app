import React from "react";
import { useParams } from "react-router-dom";
import getInfo from "./transactComplete";
import capitalizeFirstLetter from "../../components/General/Helpers/CapitalizeFirstLetter";

function SuccessTransactionPage() {
  let transactionId = useParams().transactionId;
  const action = getInfo(transactionId).action;

  if (action === "deposit" || action === "withdraw") {
    return <DepositWithdrawSuccessfulPage info={getInfo(transactionId)} />;
  } else {
    return <TransferSuccessfulPage info={getInfo(transactionId)} />;
  }
}

function DepositWithdrawSuccessfulPage({ info }) {
  return (
    <div className="page">
      <h1>{capitalizeFirstLetter(info.action)} Successful!</h1>
      <div>
        <p>Name: {info.accountName}</p>
        <p>Account Number: {info.accountNumber}</p>
        <p>Transaction ID: {info.transactionId}</p>
        <p>Transaction Date: {info.transactionDate}</p>
        <p>Old Balance: ₱{info.oldBalance}</p>
        <p>New Balance: ₱{info.newBalance}</p>
      </div>
    </div>
  );
}

function TransferSuccessfulPage({ info }) {
  return (
    <div className="page">
      <h1>{capitalizeFirstLetter(info.action)} Successful!</h1>
      <p>Transaction ID: {info.sender.transactionId}</p>
      <p>Transaction Date: {info.sender.transactionDate}</p>
      <div>
        <div>
          <p>From: {info.receiver.sender}</p>
          <p>From Account Number: {info.receiver.senderAccountNumber}</p>
          <p>Old Balance: ₱{info.sender.oldBalance}</p>
          <p>New Balance: ₱{info.sender.newBalance}</p>
        </div>
        {/* lagay arrow dito */}
        <div>
          <p>To: {info.sender.receiver}</p>
          <p>To Account Number: {info.sender.receiverAccountNumber}</p>
          <p>Old Balance: ₱{info.receiver.oldBalance}</p>
          <p>New Balance: ₱{info.receiver.newBalance}</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessTransactionPage;
