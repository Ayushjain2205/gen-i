import React, { useState, useEffect } from "react";
import { octokit } from "../Utils/octokit";

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
    </div>
  );
}

export default MyProjects;
