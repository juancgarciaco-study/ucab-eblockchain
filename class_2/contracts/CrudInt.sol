// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

import "hardhat/console.sol";

contract CrudInt {
    uint256 private crudValue = 0;

    modifier valueRequired(uint256 value) {
        require(value > 0, "Value is required");
        _;
    }

    // CRUD

    // CREATE
    function Create(uint256 value)
        public
        valueRequired(value)
        returns (bool)
    {
        crudValue = value;
        return true;
    }

    // READ
    function Read() public view returns (uint256) {
        return crudValue;
    }

    // UPDATE
    function Update(uint256 value) public valueRequired(value) {
        require(crudValue != 0, "crud not readable, please create first");
        require(
            crudValue != value,
            "new Value and Update value are the same, please change the value"
        );
        crudValue = value;
    }

    // DELETE
    function Delete() public {
        delete crudValue;
    }
}
