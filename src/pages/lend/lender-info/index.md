---
title: Lender Info
version: 0.8.18
description: Getting a lenders lpBalance in a bucket
keywords: [add, lend, earn, quote, collateral, get, lpBalance, bucket, timestamp, info, balance]
---

- get a lenders lpBalance in a bucket

In order to track how much a lender has in a bucket, typically used for withdrawing collateral or quote token, their lpBalance in the bucket needs to be retreived.

A lender can effectively perform a swap by depositing collateral or quote token into a bucket then withdrawing the opposite (either collateral or quote token) however the lender will need to assess the amount of "ownership" or lpBalance they have in the bucket before performing the action.

The caller will need to pass two arguments:

- The bucket index the lender has lp in
- The address of the lender

```solidity
{{{LenderInfo}}}
```

### Examples of getting lender info

```solidity
{{{LenderInfoExample}}}
```
