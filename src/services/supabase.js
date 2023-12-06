import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://opniushtkqsalkvkpzse.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbml1c2h0a3FzYWxrdmtwenNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4OTA4OTQsImV4cCI6MjAxNzQ2Njg5NH0.f7npxh56bmrUG0qzoT5GUNksd2mrkbwemFQv9ZrImeo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
