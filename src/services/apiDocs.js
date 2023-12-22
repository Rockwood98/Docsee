import { v4 } from "uuid";
import supabase, { supabaseUrl } from "./supabase";

export async function getDocs() {
  const { data, error } = await supabase.from("docs").select("*");

  if (error) {
    console.error(error);
    throw new Error("Docs could not be loaded");
  }

  return data;
}
export async function createDoc(newDoc) {
  const { name, type, size, lastModifiedDate: lastModified } = newDoc.file[0];
  const category = newDoc.category;
  const newData = {
    name,
    type,
    size,
    category,
    lastModified,
  };
  const docName = `${v4()}-${newData.name}`.replaceAll("/", "");
  const docPath = `${supabaseUrl}/storage/v1/object/public/docs/${docName}`;
  const { data, error } = await supabase
    .from("docs")
    .insert([{ ...newData, path: docPath }]);
  if (error) {
    console.error(error);
    throw new Error("Document could not be added");
  }

  const { error: storageErr } = await supabase.storage
    .from("docs")
    .upload(docName, newDoc.file[0]);

  if (storageErr) {
    await supabase.from("docs").delete().eq("id", data.id);
    console.error(storageErr);
    throw new Error("File could not be uploaded");
  }

  return data;
}

export async function deleteDoc(id) {
  const { data, error } = await supabase.from("docs").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Document could not be deleted");
  }

  return data;
}
