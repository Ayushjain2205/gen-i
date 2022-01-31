import React, { useState, useEffect } from "react";
import { octokit } from "../Utils/octokit";
import { useWeb3 } from "@3rdweb/hooks";
import { minter } from "../sdk.ts";

function MyProfile({ username }) {
  const { address } = useWeb3();
  //   nfts(address);
  minter();
  //   console.log(address);
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
  return (
    <div className='page-content'>
      <h1 className='page-title'>My Profile!</h1>
      <div className='profile-holder'>
        {code && (
          <img src={code.avatar_url} className='profile-img' alt='' srcset='' />
        )}
        {code && (
          <div className='details'>
            <h3>{code.name}</h3>
            <p>- {code.bio}</p>
            <p class='status-bar-field detail-tile'>
              <i class='fas fa-folder-open'></i> Repositories -&nbsp;
              {code.public_repos}
            </p>
            <p class='status-bar-field detail-tile'>
              <i class='fas fa-users'></i> Followers - &nbsp;
              {code.followers}
            </p>
            <p class='status-bar-field detail-tile'>
              <i class='fas fa-user-check'></i> Following - &nbsp;
              {code.following}
            </p>
          </div>
        )}
      </div>
      <div className='section-title'>
        <img src='https://i.postimg.cc/5tjHN4SM/Full.png' alt='' srcset='' />
        <h4>Minted</h4>
      </div>
      <h2>You have not minted any NFTs yet!</h2>
    </div>
  );
}

export default MyProfile;
