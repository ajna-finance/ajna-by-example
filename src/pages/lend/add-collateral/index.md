---
title: Add Quote Token
version: 0.8.18
description: Adding quote token to a pool in Ajna
keywords: [add, lend, earn, quote, token, interest, rate]
---

- Add collateral to a pool in Ajna

Lenders can insert collateral token into a price bucket at any time. This facilitates the swapping of either quote token for collateral or collateral token for quote tokens.

Much like Uniswap V3, there are a predetermined number of prices (7388 to be exact), in Ajna they are referred to as price buckets or bucket indexes.

For an ERC20 collateral pool the lender will need to pass three arguments:

- Amount of collateral token
- The bucket index the quote tokens would be added to
- Timestamp after which this transaction will revert, preventing inclusion in a block with unfavorable price.

```solidity
{{{AddERC20CollateralToken}}}
```

For a ERC721 collateral pool the lender will need to pass three arguments:

- An array of tokenIds
- The bucket index the quote tokens would be added to
- Timestamp after which this transaction will revert, preventing inclusion in a block with unfavorable price.

```solidity
{{{AddERC721CollateralToken}}}
```

### Examples of adding ERC20 collateral token

```solidity
{{{AddERC20CollateralExample}}}
```

### Examples of adding ERC721 collateral token

```solidity
{{{AddERC721CollateralExample}}}
```
