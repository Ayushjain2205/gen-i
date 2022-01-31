import React from "react";
import { getAllNfts } from "../sdk.ts";
import NFTtile from "../Components/NFTtile";
import { nfts } from "../Helpers/seeder";

function Explore() {
  const nft_list = nfts;
  return (
    <div className='page-content'>
      <div className='section-title'>
        <img src='https://i.postimg.cc/L5kH1H4H/msie1-1.png' alt='' srcset='' />
        <h1 className='page-title'>Explore!</h1>
      </div>

      <div className='nfts-holder'>
        {nft_list &&
          nft_list.map(({ name, image, properties }, index) => {
            return (
              <NFTtile
                name={name}
                img={image}
                contributor={properties.contributor}
                link={properties.link}
                index={index}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Explore;
