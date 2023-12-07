import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./PageNotFound.module.css";
import { HiMiniArrowLongLeft } from "react-icons/hi2";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className={styles.notfound}>
      <PageNav />
      <section>
        <h2>Page not found </h2>

        <p>
          Sorry, we can't seem to find the page you're looking for.Try going
          back to the previous page.
        </p>
        <button onClick={() => navigate(-1)}>
          <HiMiniArrowLongLeft className={styles.icon} /> Go back
        </button>
      </section>
    </main>
  );
}

export default PageNotFound;
