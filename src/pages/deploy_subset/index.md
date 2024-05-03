---
title: Deploy a Subset Pool
version: 0.8.18
description: Deploying a subset pool in Ajna
keywords: [pool, subset, ERC721, deploy, init, create, pair, factory]
---

- Deploy a Subset Pool

A subset pool consists of a collateral ERC721 token and a quote token creating a unique pair (_BAYC/USDC_). No two subset pools with matching tokenIDS can exist in the system. However, multiple subset pools which include tokenIds that exist in other subset pools are allowed, so long as it is not an exact match. The initial interest rate for a pool is set by the pool creator.

Subset pools accept a _set_ of NFT tokens associated with an NFT collection so long as those ids were included on deployment.

In Ajna, each pool is its own contract much like Uniswap V3 and is deployed by the: `PoolFactory`

The pool deployer will need to pass three arguments:

- Collateral ERC721 address
- Quote token address
- An array of tokenIds
- Interest rate

```solidity
{{{DeploySubsetPool}}}
```

### Examples of Deploying a Ajna Collection Pool

```solidity
{{{DeploySubsetPoolExample}}}
```
