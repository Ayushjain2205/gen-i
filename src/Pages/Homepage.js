import React, { useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import { UserContext } from "../Contexts/UserContext";

function Homepage(props) {
  const supabase = createClient(
    "https://xzzkdkhvjsyxhoicwwyd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMTE5NDMzLCJleHAiOjE5NTg2OTU0MzN9.9L3sH7j7kekDlntxqOyaJtaOkQbuAjPxDw1rGHwQDZ0"
  );
  console.log(props);
  const { user, setUser } = useContext(UserContext);
  async function signOut() {
    /* sign the user out */
    await supabase.auth.signOut();
    setUser(null);
  }
  return (
    <div className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>GEN-I</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button aria-label='Close'></button>
        </div>
      </div>
      <div className='window-body'>
        <p>Just testing!</p>
        <h1>Hello!{props.name}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
}

export default Homepage;
