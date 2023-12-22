import styles from "./CategoryObject.module.css";

function CategoryObject({ category }) {
  // console.log(category);
  return (
    <li className={styles.categoryObj}>
      <div>{category.name.length > 0 ? category.name : "other"}</div>
    </li>
  );
}

export default CategoryObject;
