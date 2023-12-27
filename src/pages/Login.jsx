import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

import { HiOutlineMinus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../auth/useLogin";
import { ClipLoader } from "react-spinners";

const pass1 = "wojtek@xd.pl";
const pass2 = "1234567";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <main className={styles.login}>
      <PageNav />
      <section>
        <div className={styles.login_form}>
          <div className={`${styles.login_tab} ${styles.image}`}>
            <p>Nice to see you again</p>
            <h2>Welcome Back!</h2>
            <HiOutlineMinus className={styles.icon} />
          </div>
          <div className={styles.login_tab}>
            <div className={styles.login_panel}>
              <p className={styles.account_heading}>Login account</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  disabled={isLoading}></input>
                <input
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  disabled={isLoading}></input>
                {/* <div className={styles.check_singed}>
                  <input
                    type="checkbox"
                    id="check"
                    className={styles.checkbox}
                    checked></input>
                  <label htmlFor="check">Keep me singed in</label>
                </div> */}
                <Button type="primary">
                  {!isLoading ? (
                    "Log in"
                  ) : (
                    <ClipLoader color="#fff" size={20} />
                  )}
                </Button>
              </form>
              <Link to="/register" className={styles.account_info}>
                Dont have account?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
