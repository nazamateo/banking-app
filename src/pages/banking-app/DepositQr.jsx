import ScanQrImg from "../../components/banking-app/ScanQr";
import styles from "./MainPage/MainPage.module.scss";
function DepositQrPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>SCAN QR</h1>
      <div className={styles.pageMainContent}>
        <ScanQrImg
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default DepositQrPage;
