// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { Pool } from 'ajna-core/src/base/Pool.sol';

contract AddLiquidity {

    address _wstethDaiPool = '0xcd261cd365389a58e6467bb8a83a9e437864e8e5';

    function moveLiquidity(
        uint256 _maxAmount,
        uint256 _fromIndex,
        uint256 _toIndex,
        uint256 _expiry
    ) external {

        Pool _pool = Pool(_wstethDaiPool);

        _pool.moveQuoteToken({
            maxAmount: _maxAmount,
            fromIndex: _fromIndex,
            toIndex:   _toIndex,
            expiry:    _expiry
        });
    }
}