import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import {
  HiCircleStack,
  HiChartPie,
  HiClipboardDocumentList,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Keep your documents safe in one place</h1>
        <div className={styles.homeIcons}>
          <HiCircleStack className={styles.homeIcon} />
          <HiChartPie className={styles.homeIcon} />
          <HiClipboardDocumentList className={styles.homeIcon} />
          <HiDevicePhoneMobile className={styles.homeIcon} />
        </div>
        <p>
          Our trusted app for securely storing and organizing important
          documents. With DocSee, you can effortlessly upload, organize, and
          access your files from anywhere, ensuring the safety and convenience
          of your important information in the digital realm.
        </p>
        <Link to="/app/docs">
          <Button type="primary">Start organizing now</Button>
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
