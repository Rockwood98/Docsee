import { useParams } from "react-router-dom";
import styles from "./Container.module.css";
import Spinner from "./Spinner";
import { getDocs } from "../services/apiDocs";
import { useQuery } from "@tanstack/react-query";
import CategoryBoxes from "./CategoryBoxes";

function Container() {
  const {
    isLoading,
    data: docs,
    error,
  } = useQuery({
    queryKey: ["docs"],
    queryFn: getDocs,
  });

  const x = useParams();
  console.log(x);
  const document = docs?.filter((doc) => doc.id == x.id);
  const categoryDocs = docs?.filter((doc) => doc.category == x.el);
  console.log(categoryDocs);

  if (isLoading)
    return (
      <div className={styles.container}>
        <Spinner styles={styles.spinner} size={30} />
      </div>
    );
  if (x.id)
    return (
      <div className={styles.container}>
        {document ? (
          <iframe
            className={styles.docContainer}
            src={document[0]?.path}></iframe>
        ) : (
          <p>{error}</p>
        )}
      </div>
    );
  if (x.el)
    return (
      <div className={styles.containerCat}>
        {categoryDocs?.map((el) => (
          <CategoryBoxes document={el} key={el.id} />
        ))}
      </div>
    );
}

export default Container;
