// metadata
export const version = "0.8.18"
export const title = "Remove Quote Token"
export const description = "Removing quote token from a pool in Ajna"

export const keywords = [
    "remove",
    "lend",
    "earn",
    "quote",
    "token",
    "exit",
    "withdraw",
]

export const codes = [
    {
        fileName: "RemoveQuoteToken.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmltcG9ydCB7IFBvb2wgfSBmcm9tICdham5hLWNvcmUvc3JjL2Jhc2UvUG9vbC5zb2wnOwoKY29udHJhY3QgUmVtb3ZlTGlxdWlkaXR5IHsKCiAgICBhZGRyZXNzIF93c3RldGhEYWlQb29sID0gJzB4Y2QyNjFjZDM2NTM4OWE1OGU2NDY3YmI4YTgzYTllNDM3ODY0ZThlNSc7CgoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpcXVpZGl0eSgKICAgICAgICB1aW50MjU2IF9hbW91bnQsCiAgICAgICAgdWludDI1NiBfaW5kZXgKICAgICkgZXh0ZXJuYWwgewoKICAgICAgICBQb29sIF9wb29sID0gUG9vbChfd3N0ZXRoRGFpUG9vbCk7CgogICAgICAgIF9wb29sLnJlbW92ZVF1b3RlVG9rZW4oewogICAgICAgICAgICBhbW91bnQ6IF9hbW91bnQsCiAgICAgICAgICAgIGluZGV4OiAgX2luZGV4CiAgICAgICAgfSk7CiAgICB9Cn0=",
    },
    {
        fileName: "RemoveQuoteTokenExample.sol",
        code: "aW1wb3J0IHsgUG9vbCB9IGZyb20gJ2FqbmEtY29yZS9zcmMvYmFzZS9Qb29sLnNvbCc7CmltcG9ydCB7IFBvb2xJbmZvVXRpbHMgfSBmcm9tICdham5hLWNvcmUvc3JjL1Bvb2xJbmZvVXRpbHMuc29sJzsKCmFkZHJlc3MgX3dzdGV0aERhaVBvb2wgPSAnMHhjZDI2MWNkMzY1Mzg5YTU4ZTY0NjdiYjhhODNhOWU0Mzc4NjRlOGU1JzsKClBvb2wgX3Bvb2wgPSBQb29sKF93c3RldGhEYWlQb29sKTsKUG9vbEluZm9VdGlscyBfcG9vbEluZm8gPSBuZXcgUG9vbEluZm9VdGlscygpOwoKdWludDI1NiBfYW1vdW50ID0gMTAwLjAgKiAxZTE4Owp1aW50MjU2IF9pbmRleCAgPSAyOTAwOwp1aW50MjU2IF9leHBpcnkgPSBibG9jay50aW1lc3RhbXAgKyAxNTsKCih1aW50MjU2IGxwLCB1aW50MjU2IGFkZGVkQW1vdW50KSA9IF9wb29sLmFkZFF1b3RlVG9rZW4oewogICAgYW1vdW50OiBfYW1vdW50LAogICAgaW5kZXg6ICBfaW5kZXgsCiAgICBleHBpcnk6IF9leHBpcnkKfSk7CgoodWludDI1NiBfbHAsIHVpbnQyNTYgdGltZXN0YW1wKSA9IF9wb29sLkxlbmRlckluZm8oewogICAgaW5kZXg6IF9pbmRleCwKICAgIGxlbmRlcjogYWRkcmVzcyh0aGlzKQp9KTsKCih1aW50MjU2IF9xdW90ZUFtb3VudCkgPSBfcG9vbEluZm8ubHBUb1F1b3RlVG9rZW5zKHsKICAgICAgICBham5hUG9vbDogYWRkcmVzcyhfcG9vbCksCiAgICAgICAgbHA6IF9scCwKICAgICAgICBpbmRleDogX2luZGV4Cn0pCgoodWludDI1NiByZW1vdmVkQW1vdW50LCB1aW50MjU2IGxwUmVkZWVtZWQpID0gX3Bvb2wucmVtb3ZlUXVvdGVUb2tlbih7CiAgICBhbW91bnQ6IF9xdW90ZUFtb3VudCwKICAgIGluZGV4OiAgX2luZGV4Cn0pOwoKCgoK",
    },
]

const html = `<ul>
<li>Remove quote token from a pool in Ajna</li>
</ul>
<p>Lenders can either have collateral token or quote token (sometimes reffered to as deposit) in a price bucket. Their LpBalance in the bucket can be used to assess how much ownership over the buckets contents they have.</p>
<p>Once a lender has (I) confirmed that they have a lpbalance in the bucket with <code>lenderInfo</code> and (II) confirmed the bucket has quote token with <code>bucketInfo</code> they can call <code>removeQuoteToken</code> to withdraw quote token from the bucket.</p>
<p>The lender will need to pass three arguments:</p>
<ul>
<li>Amount of quote token (can also pass <code>type(uint256).max</code> to withdraw all quote token)</li>
<li>The bucket index the quote tokens would be removed from</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.18;</span>

<span class="hljs-keyword">import</span> { <span class="hljs-title">Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/base/Pool.sol&#x27;</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">RemoveLiquidity</span> </span>{

    <span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;


    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> _amount,
        <span class="hljs-keyword">uint256</span> _index
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{

        Pool _pool <span class="hljs-operator">=</span> Pool(_wstethDaiPool);

        _pool.removeQuoteToken({
            amount: _amount,
            index:  _index
        });
    }
}
</code></pre><h3>Examples of removing quote token</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> { <span class="hljs-title">Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/base/Pool.sol&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title">PoolInfoUtils</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/PoolInfoUtils.sol&#x27;</span>;

<span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;

Pool _pool <span class="hljs-operator">=</span> Pool(_wstethDaiPool);
PoolInfoUtils _poolInfo <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> PoolInfoUtils();

<span class="hljs-keyword">uint256</span> _amount <span class="hljs-operator">=</span> <span class="hljs-number">100.0</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">uint256</span> _index  <span class="hljs-operator">=</span> <span class="hljs-number">2900</span>;
<span class="hljs-keyword">uint256</span> _expiry <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">15</span>;

(<span class="hljs-keyword">uint256</span> lp, <span class="hljs-keyword">uint256</span> addedAmount) <span class="hljs-operator">=</span> _pool.addQuoteToken({
    amount: _amount,
    index:  _index,
    expiry: _expiry
});

(<span class="hljs-keyword">uint256</span> _lp, <span class="hljs-keyword">uint256</span> timestamp) <span class="hljs-operator">=</span> _pool.LenderInfo({
    index: _index,
    lender: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)
});

(<span class="hljs-keyword">uint256</span> _quoteAmount) <span class="hljs-operator">=</span> _poolInfo.lpToQuoteTokens({
        ajnaPool: <span class="hljs-keyword">address</span>(_pool),
        lp: _lp,
        index: _index
})

(<span class="hljs-keyword">uint256</span> removedAmount, <span class="hljs-keyword">uint256</span> lpRedeemed) <span class="hljs-operator">=</span> _pool.removeQuoteToken({
    amount: _quoteAmount,
    index:  _index
});




</code></pre>`

export default html
