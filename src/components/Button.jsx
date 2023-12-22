import styles from "./Button.module.css";
function Button({ clickEvent, children, type, addStyles }) {
  return (
    <button
      onClick={clickEvent}
      className={`${styles.btn} ${styles[type]} ${addStyles}`}>
      {children}
    </button>
  );
}

export default Button;
