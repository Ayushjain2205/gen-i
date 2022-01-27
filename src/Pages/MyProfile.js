import React, { useState, useEffect } from "react";
import { octokit } from "../Utils/octokit";

function MyProfile({ username }) {
  const [code, setCode] = useState(null);
  useEffect(() => {
    async function onLoad() {
      await octokit
        .request("GET /users/{username}", {
          username: `${username}`,
        })
        .then((res) => {
          const encoded = res.data;
          console.log(res);
          setCode(encoded);
        })
        .catch((err) => console.log(err));
    }
    onLoad();
  }, []);
  console.log(code);
  return (
    <div className='page-content'>
      <h1 className='page-title'>My Profile!</h1>
      <div className='profile-holder'>
        <img
          src={code ? code.avatar_url : ""}
          className='profile-img'
          alt=''
          srcset=''
        />
        <div className='details'>
          <h3>{code ? code.name : ""}</h3>
          <p>- {code ? code.bio : ""}</p>
          <p class='status-bar-field detail-tile'>
            <i class='fas fa-folder-open'></i> Repositories -&nbsp;
            {code ? code.public_repos : ""}
          </p>
          <p class='status-bar-field detail-tile'>
            <i class='fas fa-users'></i> Followers - &nbsp;
            {code ? code.followers : ""}
          </p>
          <p class='status-bar-field detail-tile'>
            <i class='fas fa-user-check'></i> Following - &nbsp;
            {code ? code.following : ""}
          </p>
        </div>
      </div>
      <div className='section-title'>
        <img src='https://i.postimg.cc/5tjHN4SM/Full.png' alt='' srcset='' />
        <h4>Minted</h4>
      </div>
    </div>
  );
}

export default MyProfile;
