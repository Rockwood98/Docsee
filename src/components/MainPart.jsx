import Container from "./Container";
import styles from "./MainPart.module.css";
// import Container from "./Container";
function MainPart() {
  return (
    <div className={styles.mainPart}>
      <Container />
    </div>
  );
}

export default MainPart;
