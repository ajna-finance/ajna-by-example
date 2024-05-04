// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { ERC721Pool } from 'ajna-core/src/ERC721Pool.sol';

contract AddCollateral {

    address _wstethDaiPool = '0xcd261cd365389a58e6467bb8a83a9e437864e8e5';

    function addCollateral(
        uint256[] calldata _tokenIds,
        uint256 _index,
        uint256 _expiry
    ) external {

        ERC721Pool _pool = ERC721Pool(_wstethDaiPool);

        _pool.addCollateral({
            tokenIds: _tokenIds,
            index:    _index,
            expiry:   _expiry
        });
    }
}