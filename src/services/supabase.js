import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dsgdstswuibqxnpetshi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZ2RzdHN3dWlicXhucGV0c2hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNDc0NzcsImV4cCI6MjAxODcyMzQ3N30.aPjNwsj8sElul5gfDhpvxVOJv8c06swwAhvrKTDDolE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
