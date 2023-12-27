import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { HiOutlineMinus } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import { useForm } from "react-hook-form";
import { useSingup } from "../auth/useSignup";
import { ClipLoader } from "react-spinners";
function Register() {
  const { signup, isLoading } = useSingup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }) {
    signup(
      { email, password },
      {
        onSettled: reset,
      }
    );
  }
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  disabled={isLoading}
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email address",
                    },
                  })}></input>
                {errors && (
                  <label className={styles.labelCheck} htmlFor="email">
                    {errors?.email?.message}
                  </label>
                )}
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  disabled={isLoading}
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Passwords minimum 8 characters",
                    },
                  })}></input>
                {errors && (
                  <label className={styles.labelCheckPass} htmlFor="password">
                    {errors?.password?.message}
                  </label>
                )}
                <input
                  type="password"
                  id="confirm"
                  disabled={isLoading}
                  placeholder="Repeat password"
                  {...register("confirm", {
                    required: "This field is required",
                    validate: (value) =>
                      value === getValues().password ||
                      "Passwords must be the same",
                  })}></input>
                {errors && (
                  <label className={styles.labelCheckConf} htmlFor="password">
                    {errors?.confirm?.message}
                  </label>
                )}
                {/* <div className={styles.check_singed}>
                  <input
                    type="checkbox"
                    id="check"
                    className={styles.checkbox}></input>
                  <label htmlFor="check">Keep me singed in</label>
                </div> */}
                <Button disabled={isLoading} type="primary">
                  {!isLoading ? (
                    "Sign up"
                  ) : (
                    <ClipLoader color="#fff" size={20} />
                  )}
                </Button>
              </form>
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
