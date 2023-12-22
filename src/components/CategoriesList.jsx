import Spinner from "./Spinner";
import styles from "./CategoriesList.module.css";
import Msg from "./Msg";
import Button from "./Button";
import { HiMiniPlus, HiArrowsUpDown } from "react-icons/hi2";
import CategoryObject from "./CategoryObject";
import { useQuery } from "@tanstack/react-query";
import { getDocs } from "../services/apiDocs";
import { getCategory } from "../services/apiCategory";

function CategoriesList() {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  if (isLoading) return <Spinner />;
  if (!categories.length)
    return (
      <>
        <Msg message={"Add your first document!"} />
        <Button type={`primary`}>
          <HiMiniPlus className={styles.icon} /> Add new
        </Button>
      </>
    );

  return (
    <>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <CategoryObject category={category} key={category.id} />
        ))}
      </ul>
    </>
  );
}

export default CategoriesList;
