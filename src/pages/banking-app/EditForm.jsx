import EditForm from "../../components/banking-app/EditUser/index";

function EditFormPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className="page">
      <h1 className="title">EDIT ACCOUNT DETAILS FORM</h1>
      <div className="page-main-content">
        <EditForm
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default EditFormPage;
