import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getNFTModule("0x94faD9A61F13485b1eEf372A6dabF8435dA7C744");

const address = "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0";

const balance = async () => {
  await module.balanceOf(address);
};
console.log(balance);

export default balance;
