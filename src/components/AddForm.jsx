import { useState } from "react";
import styles from "./AddForm.module.css";
import Button from "./Button";
import { createCategory, getCategory } from "../services/apiCategory";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import toast from "react-hot-toast";
import { createDoc } from "../services/apiDocs";

function AddForm({ setShowForm }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  //////////////////////////////////////////////
  const queryClient = useQueryClient();
  const { mutate: mutateCategory, isLoading: isLoadingCategory } = useMutation({
    mutationFn: createCategory,

    onSuccess: () => {
      toast.success("New category successfully added");
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
    onError: (err) => toast.error(err.message),
  });
  const { mutate: mutateDoc, isLoading: isLoadingDoc } = useMutation({
    mutationFn: createDoc,

    onSuccess: () => {
      toast.success("New document successfully added");
      queryClient.invalidateQueries({ queryKey: ["docs"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  function submitForm(data) {
    mutateDoc({ ...data });
    setShowForm(false);
  }
  function submitError(errors) {
    // console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(submitForm, submitError)}
      className={styles.addForm}>
      <div className={styles.formContainer}>
        <div className={styles.formBox}>
          <p className={styles.formDesc}>File upload:</p>
          <input
            {...register("file", {
              required: "File is required",
            })}
            type="file"
            id="file"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className={styles.visibility}
          />

          <label className={styles.fileBtn} htmlFor="file">
            <HiMiniArrowUpTray className={styles.fileIcon} />
            Add file
          </label>
          <span
            className={`${styles.fileDesc} ${errors?.file ? styles.error : ""}`}
            id="fileChosen">
            {file?.name ? file?.name : "No chosen file"}
          </span>
        </div>

        <div className={styles.formBox}>
          <label htmlFor="category" className={styles.formDesc}>
            Select Category:
          </label>
          <select
            className={`${styles.selectCategory} ${
              errors?.category ? styles.errorBorder : ""
            }`}
            {...register("category", {
              required: "Category is required",
              min: {
                value: 1,
                message: "Category is required",
              },
            })}
            id="category"
            defaultValue={0}>
            <option disabled value="0">
              Please choose an category
            </option>
            {categories?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.categoryBox}>
          <p className={styles.formDesc}>Or create new:</p>
          <div className={styles.categoryInput}>
            <input
              className={styles.selectCategory}
              type="text"
              id="name"
              minLength="2"
              maxLength="10"
              placeholder="Maximum length 10"
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={isLoadingCategory}
            />
            <div
              onClick={() => {
                if (name !== "") {
                  console.log({ name });
                  mutateCategory({ name });
                  setName("");
                }
              }}
              className={styles.btnSave}>
              Save
            </div>
          </div>
        </div>
        <div className={styles.formBox}>
          <Button disabled={isLoadingDoc} type="primary-big">
            Add new document
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddForm;
