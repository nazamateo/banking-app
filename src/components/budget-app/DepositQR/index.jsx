import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import { getDepositTrackers } from "../../../services/LocalStorage";
import FormInput from "../../forms/FormInput";
import Button from "../../button/Button";

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
    //kunin mo yung account number kung sino yung naka log in
    e.preventDefault();
    setIsAskedToGenerate(true);

    if (!amount) return;

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
    // trackerList.push({
    //   id: depositTracker,
    //   amount,
    //   accountNumber: loggedInAccount.accountNumber,
    // });

    //need to setTimeout for event loop
    setTimeout(() => {
      const canvas = document.querySelector(".qr-code-container > canvas");
      const img = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      linkRef.current.setAttribute("href", img);
      linkRef.current.setAttribute("download", "qr-deposit.png");
      setDepositTracker(uuidv4());
    }, 0);

    setAmount("");
  };

  return (
    <div>
      <FormInput
        label="Amount: "
        name="amount"
        type="number"
        placeholder="Input amount"
        onChange={e => setAmount(parseFloat(e.target.value))}
        value={amount}
      />

      <Button handleClick={confirmTransaction} text="Confirm" />

      {isAskedToGenerate && (
        <div>
          <div className="qr-code-container">
            <QRCode size={256} value={depositTracker} />
          </div>

          <a ref={linkRef} href="/#">
            Download QR
          </a>
          <h1>
            Please present this QR with the corresponding amount you have
            entered.
          </h1>
        </div>
      )}
    </div>
  );
}

export default DepositQR;
