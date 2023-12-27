import { Link } from "react-router-dom";
import styles from "./DocObject.module.css";
import { HiMiniPaintBrush, HiMiniXCircle } from "react-icons/hi2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDoc } from "../services/apiDocs";
import toast from "react-hot-toast";
import { useState } from "react";

function DocObject({ doc }) {
  const [newName, setNewName] = useState("");
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: deleteDoc,
    onSuccess: () => {
      toast.success(`${doc.name} successfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["docs"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  // console.log(queryClient);
  // if(confirm(`Are you sure you want to delete the${doc.name} file?`))
  //     mutate(doc.id);
  // }else {}

  const deleteDocFunction = () => {
    if (confirm(`Are you sure you want to delete the ${doc.name} file?`)) {
      mutate(doc.id);
    }
  };

  // console.log(doc.name.length);

  return (
    <li className={styles.docsContainer}>
      <Link className={styles.docObj} to={`${doc.id}?name=${doc.name}`}>
        <h3 className={styles.name}>
          {doc.name.length >= 10
            ? doc.name.slice(0, 10) + "..." + doc.name.split(".")[1]
            : doc.name}
        </h3>
      </Link>
      <div className={styles.editButtons}>
        {/* <button className={styles.button} disabled={isLoading}>
          <HiMiniPaintBrush className={styles.iconEdit} />
        </button> */}

        <button
          className={styles.button}
          onClick={() => {
            deleteDocFunction();
          }}
          disabled={isLoading}>
          <HiMiniXCircle className={styles.iconDel} />
        </button>
      </div>
    </li>
  );
}

export default DocObject;

{
  /* <form className={styles.editForm}>
<input
  className={styles.editInput}
  value={newName}
  onChange={(e) => setNewName(e.target.value)}
  placeholder="Rename"></input>
<button
  className={styles.editBtn}
  onClick={(e) => {
    e.preventDefault();
    console.log(newName);
  }}>
  save
</button>
</form> */
}
