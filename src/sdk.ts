// Importing libraries
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

//Importing private key
// require("dotenv").config();

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key
    "02a31a0a2cc40870b2e7683fe4c237deaa526d3b3ad745618eb7674588d8f1c2",
    // RPC URL, we'll use Polygon Mumbai
    ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
  )
);

// The NFT module address received after initializing the NFT module on the dashboard.
const nftCollectionAddress = "0x453B18Cc5d45962c6337A720C471B485c92dAc6F";

// Initialize the NFT drop module with the contract address.
const nftCollection = sdk.getNFTModule(nftCollectionAddress);

export const getAllNfts = async () => {
  await nftCollection
    .getAll()
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
};

export default getAllNfts;

const mintNft = async () => {
  try {
    await nftCollection.mint({
      name: "thirdweb",
      description:
        "Smart contracts you control. Tools that accelerate your workflow. Intuitive SDKs and widgets for developers.",
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmTLzrdAv2Qd7J2y1ZqpTHHaUT9JebPJTrEKaG5bUfhcCd/images/0000000000000000000000000000000000000000000000000000000000000009.png",
      properties: {},
    });
  } catch (err) {
    console.log(err);
  }
};

// const address = "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0";
export const nfts = async (address) => {
  await nftCollection
    .getOwned(address)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const toAddress = "0x345073bBF6b6704D25e3E0F3fc3F34DEAF0AD920";

// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
const metadata = {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image:
    "https://ipfs.moralis.io:2053/ipfs/QmTLzrdAv2Qd7J2y1ZqpTHHaUT9JebPJTrEKaG5bUfhcCd/images/0000000000000000000000000000000000000000000000000000000000000009.png", // This can be an image url or file
};

export const minter = async () => {
  await nftCollection.mintTo(toAddress, metadata);
};
