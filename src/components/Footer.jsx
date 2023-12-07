import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; Copyright {new Date().getFullYear()} by Docsee Inc.</p>
    </footer>
  );
}

export default Footer;
