import ScanQrImg from "../../components/banking-app/ScanQr";

function DepositQrPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className="page">
      <h1 className="title">SCAN QR</h1>
      <div className="page-main-content">
        <ScanQrImg
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default DepositQrPage;
