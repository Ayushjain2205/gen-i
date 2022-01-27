import { useState, useEffect } from "react";
import { octokit } from "../Utils/octokit";

export default function useOctokit(user) {
  const [code, setCode] = useState(null);

  useEffect(() => {
    async function onLoad() {
      await octokit
        .request("GET /users/{username}", {
          username: `${user}`,
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
  return {
    code,
  };
}
