---
title: Deploy a Collection Pool
version: 0.8.18
description: Deploying a collection pool in Ajna
keywords: [pool, collection, ERC721, deploy, init, create, pair, factory]
---

- Deploy a Collection Pool

A collection pool consists of a collateral ERC721 token and a quote token creating a unique pair (_BAYC/USDC_). Only one collection pool per pair can exist in the system. The initial interest rate for a pool is set by the pool creator.

Collection pools accept _all_ NFT tokens associated with an NFT collection so long as they share the same address.

In Ajna, each pool is its own contract much like Uniswap V3 and is deployed by the: `PoolFactory`

The pool deployer will need to pass three arguments:

- Collateral ERC721 address
- Quote token address
- An empty array
- Interest rate

```solidity
{{{DeployCollectionPool}}}
```

### Examples of Deploying a Ajna Collection Pool

```solidity
{{{DeployCollectionPoolExample}}}
```
