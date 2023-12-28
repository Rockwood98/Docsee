import { useNavigate, useParams } from "react-router-dom";
import styles from "./CategoryInfo.module.css";
import Spinner from "./Spinner";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Button from "./Button";
import { getDocs } from "../services/apiDocs";
import { getCategory } from "../services/apiCategory";
import { useQueries } from "@tanstack/react-query";
function CategoryInfo() {
  const results = useQueries({
    queries: [
      { queryKey: ["docs"], queryFn: getDocs },
      { queryKey: ["category"], queryFn: getCategory },
    ],
  });
  const { isLoading, data: category, error } = results[1];
  const { data: docs } = results[0];
  //   const { data: category } = results[1];

  const navigate = useNavigate();
  const x = useParams();

  console.log(x);
  const categoryInfo = category?.filter((cat) => cat.id == x.el);
  const documentInfo = docs?.filter(
    (doc) => doc?.category == categoryInfo[0]?.id
  );

  if (isLoading) return <Spinner />;
  if (documentInfo)
    return (
      <>
        <div className={styles.categoryContainer}>
          <h2 className={styles.heading}>{categoryInfo[0]?.name}:</h2>
          <ul className={styles.listBox}>
            {documentInfo?.map((doc) => (
              <li className={styles.listEl} key={doc.id}>
                {doc?.name}
              </li>
            ))}
          </ul>
        </div>
        <Button type="secondary" clickEvent={() => navigate("/app/categories")}>
          <HiArrowSmallLeft /> Back
        </Button>
      </>
    );
  if (error) return <p>{error}</p>;
}

export default CategoryInfo;
