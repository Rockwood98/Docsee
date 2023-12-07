import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Keep your documents safe in one place</h1>
        <p>
          Our trusted app for securely storing and organizing important
          documents. With DocSee, you can effortlessly upload, organize, and
          access your files from anywhere, ensuring the safety and convenience
          of your important information in the digital realm.
        </p>
        <Link to="/app" className="btn-prmiary">
          Start organizing now
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
