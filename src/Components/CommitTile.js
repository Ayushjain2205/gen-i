import React from "react";

function CommitTile({ url, sha, message, author }) {
  return (
    <div className='commit-tile'>
      <h4 className='commit-title'>
        {message}
        <a target='_blank' className='commit-link' href={url}>
          <i class='fas fa-external-link-alt'></i>
        </a>
      </h4>

      <div className='badge-holder'>
        <div class='status-bar-field badge sha-badge'>
          <i class='fas fa-user'></i>
          &nbsp;{author}
        </div>
        <div class='status-bar-field badge sha-badge'>{sha}</div>
      </div>
      <div className='mint-holder'>
        <button className='mint-btn'>Mint</button>
      </div>
    </div>
  );
}

export default CommitTile;
