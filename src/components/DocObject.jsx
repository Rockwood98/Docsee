import styles from "./docObject.module.css";

function DocObject({ doc }) {
  return (
    <li className={styles.docObj}>
      <h3 className={styles.name}>{doc.docName}</h3>
    </li>
  );
}

export default DocObject;
