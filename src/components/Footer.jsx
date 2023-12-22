import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; Copyright {new Date().getFullYear()} by Docsee:<br></br>Wojciech
        Charemski | PAW14 AGH
      </p>
    </footer>
  );
}

export default Footer;
