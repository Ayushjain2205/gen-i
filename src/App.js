import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "./App.css";
import Landing from "./Pages/Landing";
import Homepage from "./Pages/Homepage";

import { UserContext } from "./Contexts/UserContext";

function App() {
  const supabase = createClient(
    "https://xzzkdkhvjsyxhoicwwyd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMTE5NDMzLCJleHAiOjE5NTg2OTU0MzN9.9L3sH7j7kekDlntxqOyaJtaOkQbuAjPxDw1rGHwQDZ0"
  );

  const [user, setUser] = useState("");

  async function checkUser() {
    /* if a user is signed in, update local state */
    const user = supabase.auth.user();
    setUser(user);
  }
  console.log(user);
  useEffect(() => {
    /* when the app loads, check to see if the user is signed in */
    checkUser();
    /* check user on OAuth redirect */
    window.addEventListener("hashchange", function () {
      const user = supabase.auth.user();
      setUser(user);
      window.location.reload(false);
    });
  }, []);

  async function signInWithGithub() {
    /* authenticate with GitHub */
    await supabase.auth.signIn({
      provider: "github",
    });
  }
  async function signOut() {
    /* sign the user out */
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='App'>
        {user ? <Homepage name={user.user_metadata.user_name} /> : <Landing />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
