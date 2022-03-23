import { useNavigate } from "react-router-dom";
import { updateBankAccountBalance } from "../../../services/LocalStorage";
import QrCodeScanner from "./QrCodeScanner";
import DateToday from "../../General/Helpers/DateToday";
import styles from "./ScanQr.module.scss";

const DATE_TODAY = DateToday();

function ScanQrImg() {
  const navigate = useNavigate();

  const depositAmount = scannedTransactionId => {
    const trackers = JSON.parse(localStorage.getItem("depositTracker"));
    const selectedTracker = trackers.find(
      tracker => tracker.id === scannedTransactionId
    );

    const bankAccounts = JSON.parse(localStorage.getItem("bankAccounts"));
    const selectedBankAccount = bankAccounts.find(
      bankAccount => bankAccount.accountNumber === selectedTracker.accountNumber
    );

    const updatedTrackers = trackers.filter(
      tracker => tracker.id !== scannedTransactionId
    );

    const transactionDetail = {
      accountName: selectedBankAccount.name,
      accountNumber: selectedBankAccount.accountNumber,
      transactionDate: DATE_TODAY,
      transactionId: scannedTransactionId,
      action: "deposit",
      oldBalance: selectedBankAccount.balance,
      newBalance: selectedBankAccount.balance + selectedTracker.amount,
      mode: "OTC",
    };

    updateBankAccountBalance(
      selectedBankAccount.name,
      selectedBankAccount.accountNumber,
      selectedTracker.amount,
      "deposit",
      transactionDetail
    );

    localStorage.setItem("depositTracker", JSON.stringify(updatedTrackers));
  };

  const onScanResult = scannedId => {
    depositAmount(scannedId);
    navigate(`/banking/complete/${scannedId}`);
  };

  return (
    <div className={styles.QrContainer}>
      <QrCodeScanner
        fps={10}
        qrbox={250}
        disableFlip={false}
        onScanSuccess={onScanResult}
      />
    </div>
  );
}

export default ScanQrImg;
