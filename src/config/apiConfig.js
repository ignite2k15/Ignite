
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ikqmmsmpkotczsurguhr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcW1tc21wa290Y3pzdXJndWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczNjM3NTUsImV4cCI6MjAxMjkzOTc1NX0.A0fXJ61292F0bHkOMmeSASz6M6bSPUQmZqqN8JHzrJA"
const supabase = createClient(supabaseUrl, supabaseKey)

export {supabase}; 