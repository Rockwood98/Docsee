import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="docs">Docs</NavLink>
        </li>
        <li>
          <NavLink to="categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
