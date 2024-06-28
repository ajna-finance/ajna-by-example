---
title: Remove Quote Token
version: 0.8.18
description: Removing quote token from a pool in Ajna
keywords: [remove, lend, earn, quote, token, exit, withdraw]
---

- Remove quote token from a pool in Ajna

Lenders can either have collateral token or quote token (sometimes reffered to as deposit) in a price bucket. Their LpBalance in the bucket can be used to assess how much ownership over the buckets contents they have.

Once a lender has (I) confirmed that they have a lpbalance in the bucket with `lenderInfo` and (II) confirmed the bucket has quote token with `bucketInfo` they can call `removeQuoteToken` to withdraw quote token from the bucket.

The lender will need to pass three arguments:

- Amount of quote token (can also pass `type(uint256).max` to withdraw all quote token)
- The bucket index the quote tokens would be removed from

```solidity
{{{RemoveQuoteToken}}}
```

### Examples of removing quote token

```solidity
{{{RemoveQuoteTokenExample}}}
```
