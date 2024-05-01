// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import { ERC20Pool }        from 'ajna-core/src/ERC20Pool.sol';
import { ERC20PoolFactory } from 'ajna-core/src/ERC20PoolFactory.sol';

contract PoolDeployer {

    address _ajna = '0x9a96ec9B57Fb64FbC60B423d1f4da7691Bd35079';

    ERC20PoolFactory _poolFactory = IERC20PoolFactory(_ajna);

    function deployERC20(
        address _collateral,
        address _quote,
        uint256 _interestRate
    ) external {
        _poolFactory.deployPool({
            collateral:   _collateral,
            quote:        _quote,
            interestRate: _interestRate
        });
    }
}
