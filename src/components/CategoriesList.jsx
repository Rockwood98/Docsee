import Spinner from "./Spinner";
import styles from "./CategoriesList.module.css";
import Msg from "./Msg";
import Button from "./Button";
import { HiMiniPlus, HiArrowsUpDown } from "react-icons/hi2";
import CategoryObject from "./CategoryObject";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getDocs } from "../services/apiDocs";
import { getCategory } from "../services/apiCategory";

function CategoriesList() {
  // const {
  //   isLoading,
  //   data: categories,
  //   error,
  // } = useQuery({
  //   queryKey: ["category"],
  //   queryFn: getCategory,
  // });

  const results = useQueries({
    queries: [
      { queryKey: ["docs"], queryFn: getDocs },
      { queryKey: ["category"], queryFn: getCategory },
    ],
  });
  const { data: docs } = results[0];
  const { isLoading, data: categories, error } = results[1];

  if (isLoading) return <Spinner />;
  if (!categories?.length)
    return (
      <>
        <Msg message={"Add your first document!"} />
      </>
    );

  return (
    <>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <CategoryObject
            docs={docs?.filter((doc) => doc.category === category.id)}
            category={category}
            key={category.id}
          />
        ))}
      </ul>
    </>
  );
}

export default CategoriesList;
