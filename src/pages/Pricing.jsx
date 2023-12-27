import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";
import { HiMiniCheckCircle } from "react-icons/hi2";
import Button from "../components/Button";
function Pricing() {
  return (
    <main className={styles.element}>
      <PageNav />
      <section>
        <h2>Choose your pircing plan</h2>
        <div className={styles.plans}>
          <div className={styles.plan}>
            <h3 className={styles.prize}>FREE</h3>
            <p className={styles.paying}>Every month</p>
            <Link to="/">
              <Button type="primary-dark">Try for free</Button>
            </Link>
            <ul className={styles.list}>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> Acces 24/7
              </li>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> 10GB cloud storage{" "}
              </li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h3 className={styles.prize}>19.99$</h3>
            <p className={styles.paying}>Every month</p>
            <Link to="/">
              <Button type="primary">Buy now</Button>
            </Link>
            <ul className={styles.list}>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> Acces 24/7
              </li>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> 100GB cloud
                storage{" "}
              </li>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> Offline access{" "}
              </li>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> File editor{" "}
              </li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h3 className={styles.prize}>39.99$</h3>
            <p className={styles.paying}>Every month</p>
            <Link to="/">
              <Button type="primary-dark">Buy now</Button>
            </Link>
            <ul className={styles.list}>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> Acces 24/7
              </li>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> 250GB cloud
                storage{" "}
              </li>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> Offline access{" "}
              </li>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> File editor{" "}
              </li>
              <li className={styles.list_desc}>
                <HiMiniCheckCircle className={styles.icon} /> Double backups{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
