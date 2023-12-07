import AppNav from "../components/AppNav";
import MainPart from "../components/MainPart";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <MainPart />
    </div>
  );
}

export default AppLayout;
