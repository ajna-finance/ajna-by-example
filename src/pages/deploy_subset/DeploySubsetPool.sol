// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { ERC721Pool }        from 'ajna-core/src/ERC721Pool.sol';
import { ERC721PoolFactory } from 'ajna-core/src/ERC721PoolFactory.sol';

contract PoolDeployer {

    address _ajna = '0x9a96ec9B57Fb64FbC60B423d1f4da7691Bd35079';

    ERC721PoolFactory _poolFactory = IERC721PoolFactory(_ajna);

    function deployERC721Subset(
        address _collateral,
        address _quote,
        uint256[] memory _tokendIds,
        uint256 _interestRate
    ) external {
        _poolFactory.deployPool({
            collateral:   _collateral,
            quote:        _quote,
            tokenIds_:    _tokenIds,
            interestRate: _interestRate
        });
    }
}
