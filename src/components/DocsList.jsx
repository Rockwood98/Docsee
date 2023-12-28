import Spinner from "./Spinner";
import DocObject from "./docObject";
import styles from "./DocsList.module.css";
import Msg from "./Msg";
import Button from "./Button";
import { HiMiniPlus, HiArrowsUpDown, HiMiniMinus } from "react-icons/hi2";
import { useState } from "react";

import AddForm from "./AddForm";
import { useQuery } from "@tanstack/react-query";
import { getDocs } from "../services/apiDocs";

function DocsList() {
  const { isLoading, data: docs } = useQuery({
    queryKey: ["docs"],
    queryFn: getDocs,
  });

  const [showForm, setShowForm] = useState(false);
  if (isLoading) return <Spinner />;
  if (!docs.length)
    return (
      <>
        <Msg message={"Add your first document!"} />
        <Button
          type={`primary`}
          clickEvent={() => {
            setShowForm((show) => !show);
          }}>
          {!showForm ? (
            <>
              <HiMiniPlus className={styles.icon} />
              <p>Add new</p>
            </>
          ) : (
            <>
              <HiMiniMinus className={styles.icon} />
              <p>close form</p>
            </>
          )}
        </Button>
        {showForm && <AddForm setShowForm={setShowForm} docs={docs} />}
      </>
    );
  return (
    <>
      <Button type="secondary-light">
        <HiArrowsUpDown /> Sort
      </Button>
      <ul className={styles.docsList}>
        {docs.map((doc) => (
          <DocObject doc={doc} key={doc.id} />
        ))}
      </ul>
      <Button
        type={`primary`}
        clickEvent={() => {
          setShowForm((show) => !show);
        }}>
        {!showForm ? (
          <>
            <HiMiniPlus className={styles.icon} />
            <p>Add new</p>
          </>
        ) : (
          <>
            <HiMiniMinus className={styles.icon} />
            <p>close form</p>
          </>
        )}
      </Button>
      {showForm && <AddForm setShowForm={setShowForm} docs={docs} />}
    </>
  );
}

export default DocsList;
