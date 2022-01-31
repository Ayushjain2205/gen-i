import React, { useState } from "react";
import Overlay from "react-overlay-component";

function CommitTile({ url, sha, message, author }) {
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    // top: `5em`,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };

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
        <button
          className='mint-btn'
          onClick={() => {
            setOverlay(true);
          }}
        >
          Mint
        </button>
      </div>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <div class='window'>
          <div class='title-bar'>
            <div class='title-bar-text mint-title'>Mint!</div>
            <div class='title-bar-controls'>
              <button aria-label='Minimize'></button>
              <button aria-label='Maximize'></button>
              <button
                aria-label='Close'
                onClick={() => {
                  setOverlay(false);
                }}
              ></button>
            </div>
          </div>
          <div class='window-body'>
            <div className='mint-modal-top'>
              <h1 className='mint-commit'>{message}</h1>
            </div>
            <div className='mint-modal-bottom'>
              <div className='mint-modal-left'>
                <img
                  src='https://cloudflare-ipfs.com/ipfs/QmXsF3XSvyp3NyfXr479Vc4J7cRFzNxqUzzKZRDN1DxvRn/0.png'
                  alt=''
                  srcset=''
                />
              </div>
              <div className='mint-modal-right'>
                <div class='inputWrapper'>
                  <label for='name'>Name</label>
                  <input id='name' type='text' value={message} />
                </div>
                <div class='inputWrapper'>
                  <label for='contri'>Contributor</label>
                  <input id='contri' type='text' value={author} />
                </div>
                <div class='inputWrapper'>
                  <label for='hash'>SHA-256 Hash</label>
                  <input id='hash' type='text' value={sha} />
                </div>
                <div class='inputWrapper'>
                  <label for='link'>Link</label>
                  <input id='link' type='text' value={url} />
                </div>
                <button className='mint-btn'>Mint</button>
              </div>
            </div>
          </div>
        </div>
      </Overlay>
    </div>
  );
}

export default CommitTile;
