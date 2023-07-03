"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ethers = require("ethers");

var _provider = _interopRequireDefault(require("./provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var address = "0xB092f3c6ECaa3b974A482e9d1f9211C0Ddae468D";
var abi = [{
  inputs: [{
    internalType: "string",
    name: "_telegram",
    type: "string"
  }],
  name: "createContact",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "_telegram",
    type: "string"
  }, {
    internalType: "string",
    name: "_discord",
    type: "string"
  }],
  name: "createContact",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "ownerToContact",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}];
var contactFactory = new _ethers.ethers.Contract(address, abi, _provider["default"]);
var _default = contactFactory;
exports["default"] = _default;