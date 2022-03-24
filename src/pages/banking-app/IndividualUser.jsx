import IndividualUser from "../../components/banking-app/IndividualUser/index";

function IndividualUserPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className="page">
      <h1 className="title">STATEMENT OF ACCOUNT</h1>
      <IndividualUser
        bankAccounts={bankAccounts}
        setBankAccounts={setBankAccounts}
      />
    </div>
  );
}

export default IndividualUserPage;
