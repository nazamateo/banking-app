import { useNavigate } from "react-router-dom";
import styles from "./BalanceTableHeader.module.scss";

function BalanceTableHeader() {
  const navigate = useNavigate();
  const directToAddAccountPage = e => {
    e.preventDefault();
    navigate("/banking/users/newaccount");
  };
  return (
    <div className={styles.balanceContainerHeader}>
      <h2>Account Details</h2>
      <button type="button" onClick={directToAddAccountPage}>
        <i className="las la-plus" />
        Add New Account
      </button>
    </div>
  );
}

export default BalanceTableHeader;
