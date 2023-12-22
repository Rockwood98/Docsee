import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="../public/logo-light.png"
        alt="DOCSEE logo"
        className={styles.logo}
      />
    </Link>
  );
}
export default Logo;
