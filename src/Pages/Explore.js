import React from "react";
import { getAllNfts } from "../sdk.ts";
import NFTtile from "../Components/NFTtile";

function Explore() {
  const nfts = [
    {
      name: "Contribution 1",
      description: "Testing",
      image:
        "https://cloudflare-ipfs.com/ipfs/QmQs5VrXNonAWKwmQDHchMTB1qZBg6i3UG3dzXo2CNfktQ/0.png",
      external_url: "",
      background_color: "",
      properties: {
        contributor: "johnDoe",
        "commit-hash": "alsdjacliksdasdcl",
      },
      id: "0",
      uri: "ipfs://QmSTBVo8UBYkU92dMrdta9f78ugnkw2TePiZTpNoAXxKwq/0",
    },
    {
      name: "Contribution 1",
      description: "Testing",
      image:
        "https://cloudflare-ipfs.com/ipfs/QmQs5VrXNonAWKwmQDHchMTB1qZBg6i3UG3dzXo2CNfktQ/0.png",
      external_url: "",
      background_color: "",
      properties: {
        contributor: "johnDoe",
        "commit-hash": "alsdjacliksdasdcl",
      },
      id: "0",
      uri: "ipfs://QmSTBVo8UBYkU92dMrdta9f78ugnkw2TePiZTpNoAXxKwq/0",
    },
  ];
  console.log(nfts[0].properties["commit-hash"]);
  return (
    <div className='page-content'>
      <div className='section-title'>
        <img src='https://i.postimg.cc/L5kH1H4H/msie1-1.png' alt='' srcset='' />
        <h1 className='page-title'>Explore!</h1>
      </div>

      <div className='nfts-holder'>
        {nfts &&
          nfts.map(({ name, image, properties }) => {
            return (
              <NFTtile
                name={name}
                img={image}
                contributor={properties.contributor}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Explore;
