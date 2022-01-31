import React, { useState, useEffect } from "react";
import { octokit } from "../Utils/octokit";
import { useParams } from "react-router-dom";
import CommitTile from "../Components/CommitTile";

function Project({ username }) {
  const [commits, setCommits] = useState(null);
  let params = useParams();
  useEffect(() => {
    async function onLoad() {
      await octokit
        .request("GET /repos/{owner}/{repo}/commits", {
          owner: `${username}`,
          repo: `${params.repoName}`,
        })
        .then((res) => {
          const encoded = res.data;
          console.log(res);
          setCommits(encoded);
        })
        .catch((err) => console.log(err));
    }
    onLoad();
  }, []);

  return (
    <div className='page-content'>
      <div className='section-title'>
        <img
          src='https://i.postimg.cc/mkFSftWD/directory-open-file-mydocs-1.png'
          alt=''
          srcset=''
        />
        <h1 className='page-title'>{params.repoName}</h1>
      </div>

      <div className='commit-holder'>
        {commits &&
          commits.map(({ commit, sha, author }) => {
            const url = `https://github.com/${author.login}/${params.repoName}/commit/${sha}`;
            console.log(author.login);
            return (
              <CommitTile
                url={url}
                sha={sha}
                message={commit.message}
                author={author.login}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Project;
