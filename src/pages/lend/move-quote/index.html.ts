// metadata
export const version = "0.8.18"
export const title = "Move Quote Token"
export const description = "Moving quote token in a pool in Ajna"

export const keywords = ["move", "lend", "earn", "quote", "token", "interest", "rate"]

export const codes = [
  {
    fileName: "MoveQuoteToken.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmltcG9ydCB7IFBvb2wgfSBmcm9tICdham5hLWNvcmUvc3JjL2Jhc2UvUG9vbC5zb2wnOwoKY29udHJhY3QgQWRkTGlxdWlkaXR5IHsKCiAgICBhZGRyZXNzIF93c3RldGhEYWlQb29sID0gJzB4Y2QyNjFjZDM2NTM4OWE1OGU2NDY3YmI4YTgzYTllNDM3ODY0ZThlNSc7CgogICAgZnVuY3Rpb24gbW92ZUxpcXVpZGl0eSgKICAgICAgICB1aW50MjU2IF9tYXhBbW91bnQsCiAgICAgICAgdWludDI1NiBfZnJvbUluZGV4LAogICAgICAgIHVpbnQyNTYgX3RvSW5kZXgsCiAgICAgICAgdWludDI1NiBfZXhwaXJ5CiAgICApIGV4dGVybmFsIHsKCiAgICAgICAgUG9vbCBfcG9vbCA9IFBvb2woX3dzdGV0aERhaVBvb2wpOwoKICAgICAgICBfcG9vbC5tb3ZlUXVvdGVUb2tlbih7CiAgICAgICAgICAgIG1heEFtb3VudDogX21heEFtb3VudCwKICAgICAgICAgICAgZnJvbUluZGV4OiBfZnJvbUluZGV4LAogICAgICAgICAgICB0b0luZGV4OiAgIF90b0luZGV4LAogICAgICAgICAgICBleHBpcnk6ICAgIF9leHBpcnkKICAgICAgICB9KTsKICAgIH0KfQ==",
  },
  {
    fileName: "MoveQuoteTokenExample.sol",
    code: "aW1wb3J0IHsgUG9vbCB9IGZyb20gJ2FqbmEtY29yZS9zcmMvYmFzZS9Qb29sLnNvbCc7CgphZGRyZXNzIF93c3RldGhEYWlQb29sID0gJzB4Y2QyNjFjZDM2NTM4OWE1OGU2NDY3YmI4YTgzYTllNDM3ODY0ZThlNSc7Cgp1aW50MjU2IF9tYXhBbW91bnQgPSAxMDAuMCAqIDFlMTg7CnVpbnQyNTYgX2Zyb21JbmRleCA9IDI5MDA7CnVpbnQyNTYgX3RvSW5kZXggICA9IDMwMDA7IC8vIHNpbmNlIGluZGV4ZXMgYXJlIHRoZSBpbnZlcnNlIHRvIHByaWNlLCB0aGUgZGVwb3NpdCBpcyBtb3ZpbmcgdXAKdWludDI1NiBfZXhwaXJ5ICAgID0gYmxvY2sudGltZXN0YW1wICsgMTU7CgpQb29sIF9wb29sID0gUG9vbChfd3N0ZXRoRGFpUG9vbCk7CgpfcG9vbC5tb3ZlUXVvdGVUb2tlbih7CiAgICBtYXhBbW91bnQ6IF9tYXhBbW91bnQsCiAgICBmcm9tSW5kZXg6IF9mcm9tSW5kZXgsCiAgICB0b0luZGV4OiAgIF90b0luZGV4LAogICAgZXhwaXJ5OiAgICBfZXhwaXJ5Cn0pOwo=",
  },
]

const html = `<ul>
<li>Move quote token in a pool in Ajna</li>
</ul>
<p>Rather then removing then re-depositing quote token in a pool lenders can move their deposit without leaving it leaving pool. Lenders can move their deposit upwards freely or downards and accrue the deposit fee.</p>
<p>The lender will need to pass three arguments:</p>
<ul>
<li>Amount of quote token</li>
<li>The bucket index the quote tokens would be added to</li>
<li>Timestamp after which this transaction will revert, preventing inclusion in a block with unfavorable price.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.18;</span>

<span class="hljs-keyword">import</span> { <span class="hljs-title">Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/base/Pool.sol&#x27;</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AddLiquidity</span> </span>{

    <span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">moveLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> _maxAmount,
        <span class="hljs-keyword">uint256</span> _fromIndex,
        <span class="hljs-keyword">uint256</span> _toIndex,
        <span class="hljs-keyword">uint256</span> _expiry
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{

        Pool _pool <span class="hljs-operator">=</span> Pool(_wstethDaiPool);

        _pool.moveQuoteToken({
            maxAmount: _maxAmount,
            fromIndex: _fromIndex,
            toIndex:   _toIndex,
            expiry:    _expiry
        });
    }
}
</code></pre><h3>Examples of adding quote token</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> { <span class="hljs-title">Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/base/Pool.sol&#x27;</span>;

<span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;

<span class="hljs-keyword">uint256</span> _maxAmount <span class="hljs-operator">=</span> <span class="hljs-number">100.0</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">uint256</span> _fromIndex <span class="hljs-operator">=</span> <span class="hljs-number">2900</span>;
<span class="hljs-keyword">uint256</span> _toIndex   <span class="hljs-operator">=</span> <span class="hljs-number">3000</span>; <span class="hljs-comment">// since indexes are the inverse to price, the deposit is moving up</span>
<span class="hljs-keyword">uint256</span> _expiry    <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">15</span>;

Pool _pool <span class="hljs-operator">=</span> Pool(_wstethDaiPool);

_pool.moveQuoteToken({
    maxAmount: _maxAmount,
    fromIndex: _fromIndex,
    toIndex:   _toIndex,
    expiry:    _expiry
});
</code></pre>`

export default html
