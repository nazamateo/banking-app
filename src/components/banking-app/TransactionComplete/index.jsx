import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";
import { useParams } from "react-router-dom";
import getInfo from "./transactionFunction";
import styles from "./TransactionComplete.module.scss";

function DepositWithdrawSuccessfulPage({ info }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <i className="las la-check-circle" />
        <h1>{capitalizeFirstLetter(info.action)} SUCCESSFUL!</h1>
      </div>
      <div className={styles.detailsContainer}>
        <h1>Transaction Details</h1>
        <p>
          <span>Name:</span>
          <span>{info.accountName}</span>
        </p>
        <p>
          <span>Account Number:</span> <span>{info.accountNumber}</span>
        </p>
        <p>
          <span>Transaction ID:</span> <span>{info.transactionId}</span>
        </p>
        <p>
          <span>Transaction Date:</span> <span>{info.transactionDate}</span>
        </p>
        <p>
          <span>Old Balance:</span> <span>₱{info.oldBalance}</span>
        </p>
        <p>
          <span>New Balance:</span> <span>₱{info.newBalance}</span>
        </p>
      </div>
    </div>
  );
}

function TransferSuccessfulPage({ info }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <i className="las la-check-circle" />
        <h1>{capitalizeFirstLetter(info.action)} Successful!</h1>
      </div>
      <div className={styles.transactionDetail}>
        <p>
          <span>Transaction ID: </span>
          <span>{info.sender.transactionId}</span>
        </p>
        <p>
          <span>Transaction Date: </span>
          <span>{info.sender.transactionDate}</span>
        </p>
      </div>
      <div className={styles.transferContainer}>
        <div className={styles.transferDetail}>
          <p>
            <span>From: </span> <span>{info.receiver.sender}</span>
          </p>
          <p>
            <span>From Acct. #: </span>
            <span>{info.receiver.senderAccountNumber}</span>
          </p>
          <p>
            <span>Old Balance:</span> <span>₱{info.sender.oldBalance}</span>
          </p>
          <p>
            <span>New Balance:</span> <span>₱{info.sender.newBalance}</span>
          </p>
        </div>
        <i className="las la-arrow-right" />
        <div className={styles.transferDetail}>
          <p>
            <span>To: </span>
            <span>{info.sender.receiver}</span>
          </p>
          <p>
            <span>To Acct. #: </span>
            <span>{info.sender.receiverAccountNumber}</span>
          </p>
          <p>
            <span>Old Balance:</span> <span>₱{info.receiver.oldBalance}</span>
          </p>
          <p>
            <span>New Balance:</span> <span>₱{info.receiver.newBalance}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function SuccessTransaction({ bankAccounts }) {
  const transactionId = useParams().transactionId;
  const action = getInfo(bankAccounts, transactionId).action;

  if (action === "deposit" || action === "withdraw") {
    return (
      <DepositWithdrawSuccessfulPage
        info={getInfo(bankAccounts, transactionId)}
      />
    );
  } else {
    return (
      <TransferSuccessfulPage info={getInfo(bankAccounts, transactionId)} />
    );
  }
}

export default SuccessTransaction;
