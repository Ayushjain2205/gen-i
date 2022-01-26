import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xzzkdkhvjsyxhoicwwyd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMTE5NDMzLCJleHAiOjE5NTg2OTU0MzN9.9L3sH7j7kekDlntxqOyaJtaOkQbuAjPxDw1rGHwQDZ0"
);

export default { supabase };
