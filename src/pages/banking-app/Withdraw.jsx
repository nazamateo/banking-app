import WithdrawFunc from "../../components/banking-app/Withdraw/index";

function WithdrawPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className="page">
      <h1 className="title">WITHDRAW FORM</h1>
      <div className="page-main-content">
        <WithdrawFunc
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default WithdrawPage;
