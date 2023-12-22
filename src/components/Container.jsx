import { useParams, useSearchParams } from "react-router-dom";
import styles from "./Container.module.css";
import Spinner from "./Spinner";
import { getDocs } from "../services/apiDocs";
import { useQuery } from "@tanstack/react-query";

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
  const document = docs?.filter((doc) => doc.id == x.id);

  if (isLoading)
    return (
      <div className={styles.container}>
        <Spinner styles={styles.spinner} size={30} />
      </div>
    );
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
}

export default Container;
