import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import { getDepositTrackers } from "../../../services/LocalStorage";
import FormInput from "../../forms/FormInput";
import Button from "../../button/Button";
import styles from "./DepositQr.module.scss";
import { isAmountInvalid } from "../../../utils/formValidation";

function DepositQR({ bankAccounts }) {
  const [depositTrackers, setDepositTrackers] = useState(getDepositTrackers());
  const [depositTracker, setDepositTracker] = useState(uuidv4());
  const [amount, setAmount] = useState("");
  const [isAskedToGenerate, setIsAskedToGenerate] = useState(false);
  const [error, setError] = useState();
  const linkRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("depositTrackers", JSON.stringify(depositTrackers));
  }, [depositTrackers]);

  const confirmTransaction = e => {
    e.preventDefault();

    const errorMessage = isAmountInvalid(amount);

    if (error !== null) {
      setError(errorMessage);
      return;
    }

    setIsAskedToGenerate(true);
    const loggedInAccount = bankAccounts.find(
      bankAccount => bankAccount.isLoggedIn === true
    );

    setDepositTrackers([
      ...depositTrackers,
      {
        id: depositTracker,
        amount,
        accountNumber: loggedInAccount.accountNumber,
      },
    ]);

    setTimeout(() => {
      const canvas = document.querySelector("canvas");
      const img = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      linkRef.current.setAttribute("href", img);
      linkRef.current.setAttribute("download", "qr-deposit.png");
    }, 0);
  };

  return (
    <>
      {!isAskedToGenerate && (
        <>
          <FormInput
            label="Amount: "
            name="amount"
            type="number"
            placeholder="Input amount"
            onChange={e => setAmount(parseFloat(e.target.value))}
            value={amount}
            error={error}
          />

          <Button handleClick={confirmTransaction} text="Confirm" />
        </>
      )}

      {isAskedToGenerate && (
        <div className={styles.qrCodeContainer}>
          <h1>
            Please present this QR with the corresponding amount you have
            entered.
          </h1>
          <QRCode size={256} value={depositTracker} />
          <a ref={linkRef} href="/#">
            Download QR
          </a>
        </div>
      )}
    </>
  );
}

export default DepositQR;
