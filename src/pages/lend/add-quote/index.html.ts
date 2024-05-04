// metadata
export const version = "0.8.18"
export const title = "Add Quote Token"
export const description = "Adding quote token to a pool in Ajna"

export const keywords = ["add", "lend", "earn", "quote", "token", "interest", "rate"]

export const codes = [
  {
    fileName: "AddQuoteToken.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmltcG9ydCB7IFBvb2wgfSBmcm9tICdham5hLWNvcmUvc3JjL2Jhc2UvUG9vbC5zb2wnOwoKY29udHJhY3QgQWRkTGlxdWlkaXR5IHsKCiAgICBhZGRyZXNzIF93c3RldGhEYWlQb29sID0gJzB4Y2QyNjFjZDM2NTM4OWE1OGU2NDY3YmI4YTgzYTllNDM3ODY0ZThlNSc7CgoKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eSgKICAgICAgICB1aW50MjU2IF9hbW91bnQsCiAgICAgICAgdWludDI1NiBfaW5kZXgsCiAgICAgICAgdWludDI1NiBfZXhwaXJ5CiAgICApIGV4dGVybmFsIHsKCiAgICAgICAgUG9vbCBfcG9vbCA9IFBvb2woX3dzdGV0aERhaVBvb2wpOwoKICAgICAgICBfcG9vbC5hZGRRdW90ZVRva2VuKHsKICAgICAgICAgICAgYW1vdW50OiBfYW1vdW50LAogICAgICAgICAgICBpbmRleDogIF9pbmRleCwKICAgICAgICAgICAgZXhwaXJ5OiBfZXhwaXJ5CiAgICAgICAgfSk7CiAgICB9Cn0=",
  },
  {
    fileName: "AddQuoteTokenExample.sol",
    code: "aW1wb3J0IHsgUG9vbCB9IGZyb20gJ2FqbmEtY29yZS9zcmMvYmFzZS9Qb29sLnNvbCc7CgphZGRyZXNzIF93c3RldGhEYWlQb29sID0gJzB4Y2QyNjFjZDM2NTM4OWE1OGU2NDY3YmI4YTgzYTllNDM3ODY0ZThlNSc7CgpQb29sIF9wb29sID0gUG9vbChfd3N0ZXRoRGFpUG9vbCk7Cgp1aW50MjU2IF9hbW91bnQgPSAxMDAuMCAqIDFlMTg7CnVpbnQyNTYgX2luZGV4ICA9IDI5MDA7CnVpbnQyNTYgX2V4cGlyeSA9IGJsb2NrLnRpbWVzdGFtcCArIDE1OwoKX3Bvb2wuYWRkUXVvdGVUb2tlbih7CiAgICBhbW91bnQ6IF9hbW91bnQsCiAgICBpbmRleDogIF9pbmRleCwKICAgIGV4cGlyeTogX2V4cGlyeQp9KTsKCgo=",
  },
]

const html = `<ul>
<li>Add quote token to a pool in Ajna</li>
</ul>
<p>In order for Ajna to operate without oracles, lenders must lend at a price. Their lent deposit or quote token lent to borrowers at the price they specify and in the worst case acts as a limit order to purchase one collateral token at the price where they deposit.</p>
<p>Much like Uniswap V3, there are a predetermined number of prices (7388 to be exact), in Ajna they are referred to as price buckets or bucket indexes.</p>
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


    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> _amount,
        <span class="hljs-keyword">uint256</span> _index,
        <span class="hljs-keyword">uint256</span> _expiry
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{

        Pool _pool <span class="hljs-operator">=</span> Pool(_wstethDaiPool);

        _pool.addQuoteToken({
            amount: _amount,
            index:  _index,
            expiry: _expiry
        });
    }
}
</code></pre><h3>Examples of adding quote token</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> { <span class="hljs-title">Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/base/Pool.sol&#x27;</span>;

<span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;

Pool _pool <span class="hljs-operator">=</span> Pool(_wstethDaiPool);

<span class="hljs-keyword">uint256</span> _amount <span class="hljs-operator">=</span> <span class="hljs-number">100.0</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">uint256</span> _index  <span class="hljs-operator">=</span> <span class="hljs-number">2900</span>;
<span class="hljs-keyword">uint256</span> _expiry <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">15</span>;

_pool.addQuoteToken({
    amount: _amount,
    index:  _index,
    expiry: _expiry
});


</code></pre>`

export default html
