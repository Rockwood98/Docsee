import { Link } from "react-router-dom";
import styles from "./CategoryObject.module.css";
import { HiMiniXCircle } from "react-icons/hi2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../services/apiCategory";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

function CategoryObject({ category, docs }) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success(`${category.name} successfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["category"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  // console.log(queryClient);
  // if(confirm(`Are you sure you want to delete the${doc.name} file?`))
  //     mutate(doc.id);
  // }else {}

  const deleteCategoryFunction = () => {
    if (confirm(`Are you sure you want to delete category ${category.name}?`)) {
      mutate(category.id);
    }
  };

  console.log(category);
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.container}>
      <Link
        className={styles.CategoriesBox}
        to={`${category.id}?name=${category.name}`}>
        <li className={styles.categoryObj}>
          <div className={styles.categoryBox}>
            <span className={styles.catCount}>{docs.length}</span>
            {category.name.length >= 9
              ? category.name.slice(0, 5) + "..."
              : category.name}
          </div>
        </li>
      </Link>
      {docs.length <= 0 && (
        <button
          className={styles.button}
          onClick={() => {
            deleteCategoryFunction();
          }}
          disabled={isLoading}>
          <HiMiniXCircle className={styles.iconDel} />
        </button>
      )}
    </div>
  );
}

export default CategoryObject;
