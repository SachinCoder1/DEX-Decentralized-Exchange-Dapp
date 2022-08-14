// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Bitcoin is ERC20, Ownable {


    /* Constructor */
    constructor() ERC20("Bitcoin", "BTC"){}

    /* Logics */

    function mint(address _to, uint256 _amount) external payable {
        _mint(_to, _amount);
    }

    receive() external payable {

    }


}