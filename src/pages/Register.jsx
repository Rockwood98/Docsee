import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { HiOutlineMinus } from "react-icons/hi";
import { Link } from "react-router-dom";
function Register() {
  return (
    <main className={styles.login}>
      <PageNav />
      <section>
        <div className={styles.login_form}>
          <div className={`${styles.login_tab} ${styles.image}`}>
            <p>Nice to see you</p>
            <h2>Welcome!</h2>
            <HiOutlineMinus className={styles.icon} />
          </div>
          <div className={styles.login_tab}>
            <div className={styles.login_panel}>
              <p className={styles.account_heading}>Create account</p>
              <form>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Repeat password"></input>
                <div className={styles.check_singed}>
                  <input
                    type="checkbox"
                    id="check"
                    className={styles.checkbox}></input>
                  <label htmlFor="check">Keep me singed in</label>
                </div>
              </form>
              <Link to="/login" className="btn-prmiary">
                Create account
              </Link>
              <Link to="/login" className={styles.account_info}>
                Already a member?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
