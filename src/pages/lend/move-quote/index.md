---
title: Move Quote Token
version: 0.8.18
description: Moving quote token in a pool in Ajna
keywords: [move, lend, earn, quote, token, interest, rate]
---

- Move quote token in a pool in Ajna

Rather then removing then re-depositing quote token in a pool lenders can move their deposit without leaving it leaving pool. Lenders can move their deposit upwards freely or downards and accrue the deposit fee.

The lender will need to pass three arguments:

- Amount of quote token
- The bucket index the quote tokens would be added to
- Timestamp after which this transaction will revert, preventing inclusion in a block with unfavorable price.

```solidity
{{{MoveQuoteToken}}}
```

### Examples of adding quote token

```solidity
{{{MoveQuoteTokenExample}}}
```
