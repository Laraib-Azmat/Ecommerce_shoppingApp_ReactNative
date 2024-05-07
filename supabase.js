import { createClient } from "@supabase/supabase-js";



const supabaseUrl = 'https://tuizpkzdskdlknfgaplo.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1aXpwa3pkc2tkbGtuZmdhcGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MDExOTMsImV4cCI6MjAzMDQ3NzE5M30.h_e35rmNz_tj0Q1PI-mbwyjFV2NDv8DfbXwYvbUqfKY";


export const supabase = createClient(supabaseUrl, supabaseAnonKey);