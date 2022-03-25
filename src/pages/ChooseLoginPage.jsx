import ChooseLogin from "../components/ChoosePage";
import styles from "./banking-app/MainPage/MainPage.module.scss";

function ChooseAppPage() {
  return (
    <div className={styles.choosePage}>
      <ChooseLogin />
    </div>
  );
}

export default ChooseAppPage;
