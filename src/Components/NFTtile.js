import React from "react";

function NFTtile({ img, contributor, name, link, index }) {
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
              href={`https://testnets.opensea.io/assets/mumbai/0x453b18cc5d45962c6337a720c471b485c92dac6f/${index}`}
              target='_blank'
            >
              Buy
            </a>
          </button>
          <a href={link} target='_blank'>
            <i class='fab fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NFTtile;
