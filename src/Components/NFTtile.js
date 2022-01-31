import React from "react";

function NFTtile({ img, contributor, name, link }) {
  return (
    <div className='nft-tile'>
      <img src={img} alt='' srcset='' />
      <div className='nft-tile-details'>
        <h5 className='name'>{name}</h5>
        <h5 className='contributor'>
          <i class='far fa-user'></i> {contributor}
        </h5>
        <div className='nft-tile-bottom'>
          <button>
            <a
              href='https://testnets.opensea.io/assets/mumbai/0x94fad9a61f13485b1eef372a6dabf8435da7c744/0'
              target='_blank'
            >
              Buy
            </a>
          </button>
          <a href={link}>
            <i class='fab fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NFTtile;
