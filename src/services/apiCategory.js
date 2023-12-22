import supabase from "./supabase";

export async function getCategory() {
  const { data: category, error } = await supabase.from("category").select("*");

  if (error) {
    console.error(error);
    throw new Error("Category could not be found");
  }

  return category;
}

export async function createCategory(newCategory) {
  const { data, error } = await supabase
    .from("category")
    .insert([newCategory])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Category could not be created");
  }

  return data;
}
export async function deleteCategory(id) {
  const { data, error } = await supabase.from("category").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Category could not be deleted");
  }

  return data;
}
