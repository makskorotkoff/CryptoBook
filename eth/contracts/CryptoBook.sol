// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract ContactFactory {
    mapping(address => address) public ownerToContact;

    modifier onlyNewRecords() {
        require(
            ownerToContact[msg.sender] == address(0),
            "Contact already created"
        );
        _;
    }

    function createContact(
        string memory _telegram,
        string memory _discord
    ) public onlyNewRecords {
        Contact contact = new Contact(msg.sender, _telegram, _discord);
        ownerToContact[msg.sender] = address(contact);
    }

    function createContact(string memory _telegram) public onlyNewRecords {
        Contact contact = new Contact(msg.sender, _telegram, "");
        ownerToContact[msg.sender] = address(contact);
    }
}

contract Contact {
    address public owner;
    string public telegram;
    string public discord;
    string public desc;

    constructor(
        address _owner,
        string memory _telegram,
        string memory _discord
    ) {
        owner = _owner;
        telegram = _telegram;
        discord = _discord;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Not an owner");
        _;
    }

    function setTelegram(string memory _telegram) public onlyOwner {
        telegram = _telegram;
    }

    function setDiscord(string memory _discord) public onlyOwner {
        telegram = _discord;
    }

    function setDesc(string memory _desc) public onlyOwner {
        desc = _desc;
    }
}
