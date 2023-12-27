import Logout from "../auth/Logout";
import { useUser } from "../auth/useUser";
import UserData from "../auth/UserData";
import styles from "./Header.module.css";

function Header() {
  console.log(<UserData />);
  return (
    <div className={styles.header}>
      <Logout />
      <p className={styles.headerInfo}>
        Hello {<UserData style={styles.username} />}
      </p>
    </div>
  );
}

export default Header;
