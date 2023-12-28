import { useNavigate, useParams } from "react-router-dom";
import { HiArrowSmallLeft } from "react-icons/hi2";
import styles from "./DocInfo.module.css";
import Button from "./Button";
import { getDocs } from "../services/apiDocs";
import { useQueries, useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { getCategory } from "../services/apiCategory";

function DocInfo() {
  const results = useQueries({
    queries: [
      { queryKey: ["docs"], queryFn: getDocs },
      { queryKey: ["category"], queryFn: getCategory },
    ],
  });
  const { isLoading, data: docs, error } = results[0];
  const { data: category } = results[1];

  const navigate = useNavigate();
  const x = useParams();

  const document = docs?.filter((doc) => doc.id == x.id);

  const categories = category?.filter((cat) => cat.id == document[0]?.category);

  if (isLoading) return <Spinner />;
  if (document)
    return (
      <>
        <ul className={styles.docInfo}>
          <li>
            Name:<span>{document[0]?.name}</span>
          </li>
          <li>
            Category:
            {categories && <span>{categories[0]?.name}</span>}
          </li>
          <li>
            Type: <span>{document[0]?.type}</span>
          </li>
          <li>
            Size: <span>{Math.floor(document[0]?.size / 1000)} KB</span>
          </li>
          <li>
            Last modification:<span>{document[0]?.lastModified}</span>
          </li>
        </ul>

        <Button
          addStyles={styles.buttonPos}
          type="secondary"
          clickEvent={() => navigate("/app/docs")}>
          <HiArrowSmallLeft /> Back
        </Button>
      </>
    );
  if (error) return <p>{error}</p>;
}

export default DocInfo;

// const [searchParams, setSearchParams] = useSearchParams();

// const id = searchParams.get("id");
