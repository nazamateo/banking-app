import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QrCodeScanner from "./QrCodeScanner";
import DateToday from "../../../utils/DateToday";
import styles from "./ScanQr.module.scss";
import {
  getDepositTrackers,
  updateDepositTrackers,
} from "../../../services/LocalStorage";
import {
  updateBankAccountBalance,
  getBankAccountNumber,
} from "../../../utils/bankAccounts";

function ScanQrImg({ bankAccounts, setBankAccounts }) {
  const navigate = useNavigate();
  const [depositTrackers, setDepositTrackers] = useState(getDepositTrackers());

  useEffect(() => {
    updateDepositTrackers(depositTrackers);
  }, [depositTrackers]);

  const depositAmount = scannedTransactionId => {
    const selectedTracker = depositTrackers.find(
      tracker => tracker.id === scannedTransactionId
    );

    const selectedBankAccount = getBankAccountNumber(
      bankAccounts,
      selectedTracker.accountNumber
    );

    const updatedTrackers = depositTrackers.filter(
      tracker => tracker.id !== scannedTransactionId
    );

    const transactionDetail = {
      accountName: selectedBankAccount.name,
      accountNumber: selectedBankAccount.accountNumber,
      transactionDate: DateToday(),
      transactionId: scannedTransactionId,
      action: "deposit",
      oldBalance: selectedBankAccount.balance,
      newBalance: selectedBankAccount.balance + selectedTracker.amount,
      mode: "OTC",
    };

    const updatedAccount = updateBankAccountBalance(
      bankAccounts,
      selectedBankAccount.name,
      selectedBankAccount.accountNumber,
      selectedTracker.amount,
      "deposit",
      transactionDetail
    );

    setBankAccounts(updatedAccount);
    setDepositTrackers(updatedTrackers);

    navigate(`/banking/complete/${scannedTransactionId}`);
  };

  const onScanResult = scannedId => {
    depositAmount(scannedId);
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
