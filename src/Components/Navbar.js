import React from "react";
import { NavLink } from "react-router-dom";

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
        <button className='mint-btn'>Mint</button>
        <img
          src='https://i.postimg.cc/XqR8w6jC/image-88.png'
          alt=''
          srcset=''
        />
      </div>
    </nav>
  );
}

export default Navbar;
