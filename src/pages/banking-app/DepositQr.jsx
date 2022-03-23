import ScanQrImg from "../../components/banking-app/ScanQr";

function DepositQrPage() {
  return (
    <div className="page">
      <h1 className="title">SCAN QR</h1>
      <div className="page-main-content">
        <ScanQrImg />
      </div>
    </div>
  );
}

export default DepositQrPage;
