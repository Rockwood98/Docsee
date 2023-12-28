import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { HiMiniBars4, HiXMark } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";
import { useState, useRef, useEffect } from "react";

function PageNav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [width, setWidth] = useState(0);

  const handleWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowSize();
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  useEffect(() => {
    if (width >= 544) setMobileNav(false);
    if (width <= 543) setMobileNav(true);
  }, [width]);

  const { isPending: isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return (
    <>
      {!mobileNav && (
        <nav className={styles.nav}>
          {width >= 544 ? (
            <Logo />
          ) : (
            <Link to="/">
              <p className={styles.logoDocsee}>
                Doc<span>see</span>
              </p>
            </Link>
          )}
          <ul>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/product">About us</NavLink>
            </li>
            <li>
              {!user?.id?.length > 0 && <NavLink to="/login">Log in</NavLink>}
            </li>
          </ul>
        </nav>
      )}

      <button
        onClick={() => setMobileNav((width) => !width)}
        className={`${styles.mobileNavBtn} ${styles.active}`}>
        {mobileNav ? (
          <HiMiniBars4 className={styles.colorDark} />
        ) : (
          <HiXMark className={styles.colorWhite} />
        )}
      </button>
    </>
  );
}

export default PageNav;
