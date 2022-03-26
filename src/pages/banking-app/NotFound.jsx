import styles from "./MainPage/MainPage.module.scss";
function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}> 404 </h1>
      <h2 className={styles.title}>Page not found</h2>
      <p className={styles.description}>
        The page you are looking for doesn't exist.
      </p>
      <p className={styles.description}>
        Click any links in the sidebar to choose an existing link.
      </p>
    </div>
  );
}

export default NotFoundPage;
