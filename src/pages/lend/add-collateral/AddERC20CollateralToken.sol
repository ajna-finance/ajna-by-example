// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { ERC20Pool } from 'ajna-core/src/ERC20Pool.sol';

contract AddERC20Collateral {

    address _wstethDaiPool = '0xcd261cd365389a58e6467bb8a83a9e437864e8e5';

    function addCollateral(
        uint256 _amount,
        uint256 _index,
        uint256 _expiry
    ) external {

        ERC20Pool _pool = ERC20Pool(_wstethDaiPool);

        _pool.addCollateral({
            amount: _amount,
            index:  _index,
            expiry: _expiry
        });
    }
}