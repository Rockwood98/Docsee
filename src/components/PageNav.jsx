import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

function PageNav() {
  const { isPending: isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return (
    <nav className={styles.nav}>
      <Logo />
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
  );
}

export default PageNav;
