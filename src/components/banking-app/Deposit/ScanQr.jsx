import styles from "./Deposit.module.scss";
import { useNavigate } from "react-router-dom";

function ScanQr() {
  const navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();
    navigate("qr");
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.scanBtn}>
        <i className="las la-qrcode" />
        Scan QR Code
      </button>
    </div>
  );
}

export default ScanQr;
