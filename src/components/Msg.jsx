import styles from "./Msg.module.css";
import { HiDocument } from "react-icons/hi2";
function Msg({ message }) {
  return (
    <p className={styles.message}>
      <span>
        <HiDocument className={styles.icon} />
      </span>{" "}
      {message}
    </p>
  );
}

export default Msg;
