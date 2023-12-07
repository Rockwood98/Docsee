import Spinner from "./Spinner";
import DocObject from "./docObject";
import styles from "./DocsList.module.css";
import Msg from "./Msg";

function DocsList({ docs, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!docs.length)
    return (
      <>
        <Msg message={"Add your first document!"} />
        <div>+ ADD NEW</div>
      </>
    );
  return (
    <>
      <span>Sort</span>
      <ul className={styles.docsList}>
        {docs.map((doc) => (
          <DocObject doc={doc} key={doc.id} />
        ))}
      </ul>
      <div>+ ADD NEW</div>
    </>
  );
}

export default DocsList;
