"use strict";

var hre = require("hardhat");

function main() {
  var contactFactory;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(hre.ethers.deployContract("ContactFactory", [], {}));

        case 2:
          contactFactory = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(contactFactory.waitForDeployment());

        case 5:
          console.log("ContactFactory deployed to ".concat(contactFactory.target));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

main()["catch"](function (error) {
  console.error(error);
  process.exitCode = 1;
}); /// address 0xB092f3c6ECaa3b974A482e9d1f9211C0Ddae468D