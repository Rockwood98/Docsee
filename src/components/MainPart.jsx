import Container from "./Container";
import Header from "./Header";
import styles from "./MainPart.module.css";

function MainPart() {
  return (
    <>
      <Header />
      <div className={styles.mainPart}>
        <Container />
      </div>
    </>
  );
}

export default MainPart;
