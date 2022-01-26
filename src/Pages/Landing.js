import React, { useState, useEffect, useContext } from "react";
import "../Styles/Landing.css";

import { UserContext } from "../Contexts/UserContext";

import { createClient } from "@supabase/supabase-js";

function Landing() {
  const supabase = createClient(
    "https://xzzkdkhvjsyxhoicwwyd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMTE5NDMzLCJleHAiOjE5NTg2OTU0MzN9.9L3sH7j7kekDlntxqOyaJtaOkQbuAjPxDw1rGHwQDZ0"
  );

  var [date, setDate] = useState(new Date());
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  async function checkUser() {
    /* if a user is signed in, update local state */
    const user = supabase.auth.user();
    setUser(user);
  }

  async function signInWithGithub() {
    /* authenticate with GitHub */
    await supabase.auth.signIn({
      provider: "github",
    });
    const user = supabase.auth.user();
    setUser(user);
  }
  return (
    <div>
      <div className='startbar'>
        <div id='startbutton' className='startbutton-off'>
          <b>Start</b>
        </div>
        <div className='time'>
          {date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
      </div>

      <div id='menu'>
        <div className='sidebar'></div>
        <div className='headline'>Windows 98</div>
        <ul className='menu-content'>
          <li
            className='item more'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/v1474990247/directory_program_group_small_fqw8rr.ico)",
            }}
          >
            Programs
            <ul className='dropdown-content'>
              <li
                className='dropdown-item'
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/penry/image/upload//w_65,h_65,c_lpad/v1474990266/msie2_ks3wek.png)",
                }}
              >
                Internet Explorer
              </li>
              <li
                className='dropdown-item'
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/penry/image/upload/v1474990270/notepad_file_kf9wqx.ico)",
                }}
              >
                Notepad
              </li>
            </ul>
          </li>
          <li
            className='item more'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/w_65,h_65,c_lpad/v1474990246/directory_pictures_ualddt.png)",
            }}
          >
            Photos
          </li>
          <li
            className='item more'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload//w_40,h_40,c_lpad/v1474990234/cd_audio_cd_mcloiq.png)",
            }}
          >
            Music
          </li>
          <li
            className='item more'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/c_lpad,g_center,r_0,w_65/v1474990261/media_player_file_sqjlgm.png)",
            }}
          >
            Videos
          </li>
          <li
            className='item'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/q_100/v1474990280/settings_gear_zxd7tf.ico)",
            }}
          >
            Settings
          </li>
          <li
            className='item'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/q_100/v1474990279/search_file_2_yy4muv.ico)",
            }}
          >
            Find
          </li>
          <li
            className='item'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/v1474990254/help_book_small_ra0uhc.ico)",
            }}
          >
            Help
          </li>
          <li
            className='item'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico)",
            }}
          >
            Run
          </li>
          <li
            className='item'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/v1474990258/key_win_anpnfo.ico)",
            }}
          >
            Log off
          </li>
          <li
            className='item'
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/penry/image/upload/v1474990281/shut_down_normal_t24or4.ico)",
            }}
          >
            Shutdown
          </li>
        </ul>
      </div>

      <div className='desktop'>
        <img
          className='desktop-icons'
          src='https://i.postimg.cc/SNCNWP4W/Frame-596.png'
          alt=''
          srcset=''
        />
        <div className='window' style={{ display: "block" }}>
          <div className='title-bar'>
            <div className='title-bar-text'>Welcome to GEN-I !</div>
            <div className='title-bar-controls'>
              <button aria-label='Minimize'></button>
              <button aria-label='Maximize'></button>
              <button aria-label='Close'></button>
            </div>
          </div>
          <div className='window-body'>
            <h4>
              Hey! Welcome to _ _ GEN-<span style={{ color: "red" }}>I</span> _
              _
            </h4>
            <button className='connect-github' onClick={signInWithGithub}>
              <i class='fab fa-github'></i>
              Connect Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
