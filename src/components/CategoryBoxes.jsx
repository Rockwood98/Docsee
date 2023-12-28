import styles from "./CategoryBoxes.module.css";
import { HiOutlineLink } from "react-icons/hi2";
function CategoryBoxes({ document }) {
  return (
    <div className={styles.categoryBox}>
      <h2>{document.name}</h2>
      <p>Created at: {document.created_at.slice(0, 10)}</p>
      <p>Last modified: {document.lastModified}</p>
      <a href={document.path} target="blank">
        <HiOutlineLink />
      </a>
    </div>
  );
}

export default CategoryBoxes;
