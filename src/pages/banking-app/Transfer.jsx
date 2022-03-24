import TransferFunc from "../../components/banking-app/Transfer/index";

function TransferPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className="page">
      <h1 className="title">TRANSFER FORM</h1>
      <div className="page-main-content ">
        <TransferFunc
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default TransferPage;
