import React, { useState, useEffect } from "react";
import { octokit } from "../Utils/octokit";
import ProjectTile from "../Components/ProjectTile";

function MyProjects() {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    async function onLoad() {
      await octokit
        .request("GET /users/{username}/repos", {
          username: "Ayushjain2205",
        })
        .then((res) => {
          const encoded = res.data;
          console.log(res);
          setRepos(encoded);
        })
        .catch((err) => console.log(err));
    }
    onLoad();
  }, []);
  return (
    <div className='page-content'>
      <h1 className='page-title'>My projects</h1>
      <div className='projects-holder'>
        {repos &&
          repos.map(({ name, html_url, forks_count, stargazers_count }) => (
            <ProjectTile
              name={name}
              html_url={html_url}
              forks_count={forks_count}
              stargazers_count={stargazers_count}
            />
          ))}
      </div>
    </div>
  );
}

export default MyProjects;
