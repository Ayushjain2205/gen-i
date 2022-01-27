import React from "react";

function ProjectTile({ name, html_url, forks_count, stargazers_count }) {
  return (
    <div className='project-tile'>
      <div className='top-row'>
        <h4 className='project-name'>{name}</h4>
        <a href={html_url}>
          <i class='fab fa-github fa-3x'></i>
        </a>
      </div>
      <div className='bottom-row'>
        <div className='bottom-column'>
          <p class='status-bar-field badge'>
            <i class='fas fa-code-branch'></i> Fork {forks_count}
          </p>
          <p class='status-bar-field badge'>
            <i class='fas fa-star'></i> Star {stargazers_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
