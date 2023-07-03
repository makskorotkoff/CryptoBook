import { ethers } from "ethers";
import provider from "./provider";

const address = "0xB092f3c6ECaa3b974A482e9d1f9211C0Ddae468D";
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_telegram",
        type: "string",
      },
    ],
    name: "createContact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_telegram",
        type: "string",
      },
      {
        internalType: "string",
        name: "_discord",
        type: "string",
      },
    ],
    name: "createContact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerToContact",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const contactFactory = new ethers.Contract(address, abi, provider);

export default contactFactory;
