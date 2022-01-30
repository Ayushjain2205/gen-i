import React from "react";
import { NavLink } from "react-router-dom";
import { ConnectWallet } from "@3rdweb/react";

function Navbar({ username }) {
  return (
    <nav className='navbar'>
      <div className='pages'>
        <NavLink
          className={(navData) =>
            navData.isActive ? "navbar__link--active" : ""
          }
          to='/explore'
        >
          🛒Explore
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "navbar__link--active" : ""
          }
          to='/myprojects'
        >
          💻My projects
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? "navbar__link--active" : ""
          }
          to='/myprofile'
        >
          🧰 My profile
        </NavLink>
      </div>
      <div className='github-profile'>
        <p class='status-bar-field'>
          <i class='fab fa-github'></i>
          {username}
        </p>
      </div>
      <div className='wallet-holder'>
        <ConnectWallet />
      </div>
    </nav>
  );
}

export default Navbar;
