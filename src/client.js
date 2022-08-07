import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
    "https://idgfhkwywbtsofazjdsj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkZ2Zoa3d5d2J0c29mYXpqZHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk4NTMwMDksImV4cCI6MTk3NTQyOTAwOX0.wkuxaqcWyb_bwgXrnPDWzZIPulSGOe2uovzeQswkeEw"
)

// export{
//     supabase
// }