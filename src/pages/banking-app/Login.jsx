import Login from "../../components/banking-app/Login";

function LoginPage({
  setIsAdminAuthenticated,
  isAdminAuthenticated,
  adminAccounts,
  setAdminAccounts,
}) {
  return (
    <div className="log-in">
      <Login
        setIsAdminAuthenticated={setIsAdminAuthenticated}
        isAdminAuthenticated={isAdminAuthenticated}
        adminAccounts={adminAccounts}
        setAdminAccounts={setAdminAccounts}
      />
    </div>
  );
}

export default LoginPage;
