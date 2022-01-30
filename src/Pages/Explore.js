import React from "react";
import { getAllNfts } from "../sdk.ts";
import { BallTriangle } from "react-loader-spinner";

function Explore() {
  // console.log(balance);
  var nfts;
  getAllNfts().then((data) => {
    nfts = data;
    console.log(nfts);
  });
  // mintNft();
  return (
    <div className='page-content'>
      <h1 className='page-title'>Explore!</h1>

      {nfts ? (
        <BallTriangle
          heigth='100'
          width='100'
          color='grey'
          ariaLabel='loading'
        />
      ) : (
        <h1>{nfts}</h1>
      )}
    </div>
  );
}

export default Explore;
