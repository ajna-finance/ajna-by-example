---
title: Add Quote Token
version: 0.8.18
description: Adding quote token to a pool in Ajna
keywords: [add, lend, earn, quote, token, interest, rate]
---

- Add quote token to a pool in Ajna

In order for Ajna to operate without oracles, lenders must lend at a price. Their lent deposit or quote token lent to borrowers at the price they specify and in the worst case acts as a limit order to purchase one collateral token at the price where they deposit.

Much like Uniswap V3, there are a predetermined number of prices (7388 to be exact), in Ajna they are referred to as price buckets or bucket indexes.

The lender will need to pass three arguments:

- Amount of quote token
- The bucket index the quote tokens would be added to
- Timestamp after which this transaction will revert, preventing inclusion in a block with unfavorable price.

```solidity
{{{AddQuoteToken}}}
```

### Examples of adding quote token

```solidity
{{{AddQuoteTokenExample}}}
```
