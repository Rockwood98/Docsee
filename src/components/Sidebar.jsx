import { Outlet, useSearchParams } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
//

function Sidebar() {
  // const { isLoading } = useQuery({
  //   queryKey: ["docs"],
  //   queryFn: getDocs,
  // });

  // if (isLoading) return <Spinner />;

  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
