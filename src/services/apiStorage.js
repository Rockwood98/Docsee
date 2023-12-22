import supabase from "./supabase";

export async function uploadFile(file, path) {
  const { data, error } = await supabase.storage
    .from("docs")
    .upload(`${path + file.name}`, file);
  if (error) {
    console.error(error);
    throw new Error("File could not be uploaded");
  }
  return data;
}
