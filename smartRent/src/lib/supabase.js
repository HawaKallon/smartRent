import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://zihcimlostshqbvoyooc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppaGNpbWxvc3RzaHFidm95b29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NzMxMzIsImV4cCI6MjAzMjA0OTEzMn0.U7VoXMRQDDS7vrFQmDPWBVIg8IWH3V_QZBwZ1Bi3lfo'
  );

 