import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
    "https://idgfhkwywbtsofazjdsj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkZ2Zoa3d5d2J0c29mYXpqZHNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1OTg1MzAwOSwiZXhwIjoxOTc1NDI5MDA5fQ.nSqbSP4FQ8--ZECeRTKGJVJJW1DdoPF3sZQ5gi9Ewj8"
)