---
title: Deploy a Pool
version: 0.8.18
description: Deploying a pool in Ajna
keywords: [pool, deploy, init, create, pair, factory]
---

- Create a Ajna Pool

A pool consists of a quote token and a collateral token creating a unique pair (_WETH/USDC_). Only one pool per pair can exist in the system. The initial interest rate for a pool is set by the pool creator.

In Ajna, each pool is its own contract much like Uniswap V3 and is deployed by the: `PoolFactory`

The pool deployer will need to pass three arguments:

- Collateral token address
- Quote token address
- Interest rate

```solidity
{{{DeployPool}}}
```

### Examples of Deploying a Ajna Pool

_Hooks are not mandatory, you can create a pool without a hook_

```solidity
{{{DeployPoolExample}}}
```
