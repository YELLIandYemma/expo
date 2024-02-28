import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xbahfmjwraulnkyvfkom.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiYWhmbWp3cmF1bG5reXZma29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMDMwNzcsImV4cCI6MjAxNzg3OTA3N30.FKOzVWMnRaiHjPN7ppq8PhqUcGOO-59Kqj2OLKWYmNU";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export function useSupabaseClient() {
  return supabase;
}
