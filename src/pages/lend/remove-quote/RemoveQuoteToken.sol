// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { Pool } from 'ajna-core/src/base/Pool.sol';

contract RemoveLiquidity {

    address _wstethDaiPool = '0xcd261cd365389a58e6467bb8a83a9e437864e8e5';


    function removeLiquidity(
        uint256 _amount,
        uint256 _index
    ) external {

        Pool _pool = Pool(_wstethDaiPool);

        _pool.removeQuoteToken({
            amount: _amount,
            index:  _index
        });
    }
}