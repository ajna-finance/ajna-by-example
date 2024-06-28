// metadata
export const version = "0.8.18"
export const title = "Lender Info"
export const description = "Getting a lenders lpBalance in a bucket"

export const keywords = [
    "add",
    "lend",
    "earn",
    "quote",
    "collateral",
    "get",
    "lpBalance",
    "bucket",
    "timestamp",
    "info",
    "balance",
]

export const codes = [
    {
        fileName: "LenderInfo.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmltcG9ydCB7IFBvb2wgfSBmcm9tICdham5hLWNvcmUvc3JjL2Jhc2UvUG9vbC5zb2wnOwoKY29udHJhY3QgR2V0TGVuZGVyTGlxdWlkaXR5IHsKCiAgICBhZGRyZXNzIF93c3RldGhEYWlQb29sID0gJzB4Y2QyNjFjZDM2NTM4OWE1OGU2NDY3YmI4YTgzYTllNDM3ODY0ZThlNSc7CgoKICAgIGZ1bmN0aW9uIGdldExlbmRlckluZm8oCiAgICAgICAgdWludDI1NiBfaW5kZXgsCiAgICAgICAgYWRkcmVzcyBfbGVuZGVyCiAgICApIGV4dGVybmFsIHsKCiAgICAgICAgUG9vbCBfcG9vbCA9IFBvb2woX3dzdGV0aERhaVBvb2wpOwoKICAgICAgICBfcG9vbC5sZW5kZXJJbmZvKHsKICAgICAgICAgICAgaW5kZXg6ICBfaW5kZXgsCiAgICAgICAgICAgIGxlbmRlcjogX2xlbmRlcgogICAgICAgIH0pOwogICAgfQp9",
    },
    {
        fileName: "LenderInfoExample.sol",
        code: "aW1wb3J0IHsgUG9vbCB9IGZyb20gJ2FqbmEtY29yZS9zcmMvYmFzZS9Qb29sLnNvbCc7CgphZGRyZXNzIF93c3RldGhEYWlQb29sID0gJzB4Y2QyNjFjZDM2NTM4OWE1OGU2NDY3YmI4YTgzYTllNDM3ODY0ZThlNSc7CgpQb29sIF9wb29sID0gUG9vbChfd3N0ZXRoRGFpUG9vbCk7Cgp1aW50MjU2IF9hbW91bnQgPSAxMDAuMCAqIDFlMTg7CnVpbnQyNTYgX2luZGV4ICA9IDI5MDA7CnVpbnQyNTYgX2V4cGlyeSA9IGJsb2NrLnRpbWVzdGFtcCArIDE1OwoKX3Bvb2wuYWRkUXVvdGVUb2tlbih7CiAgICBhbW91bnQ6IF9hbW91bnQsCiAgICBpbmRleDogIF9pbmRleCwKICAgIGV4cGlyeTogX2V4cGlyeQp9KTsKCih1aW50MjU2IGxwQmFsLCB1aW50MjU2IHRpbWVzdGFtcCkgPSBfcG9vbC5sZW5kZXJJbmZvKHsKICAgIGluZGV4OiAgX2luZGV4LAogICAgbGVuZGVyOiBhZGRyZXNzKHRoaXMpCn0pOwoKCg==",
    },
]

const html = `<ul>
<li>get a lenders lpBalance in a bucket</li>
</ul>
<p>In order to track how much a lender has in a bucket, typically used for withdrawing collateral or quote token, their lpBalance in the bucket needs to be retreived.</p>
<p>A lender can effectively perform a swap by depositing collateral or quote token into a bucket then withdrawing the opposite (either collateral or quote token) however the lender will need to assess the amount of "ownership" or lpBalance they have in the bucket before performing the action.</p>
<p>The caller will need to pass two arguments:</p>
<ul>
<li>The bucket index the lender has lp in</li>
<li>The address of the lender</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.18;</span>

<span class="hljs-keyword">import</span> { <span class="hljs-title">Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/base/Pool.sol&#x27;</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GetLenderLiquidity</span> </span>{

    <span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;


    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLenderInfo</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> _index,
        <span class="hljs-keyword">address</span> _lender
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{

        Pool _pool <span class="hljs-operator">=</span> Pool(_wstethDaiPool);

        _pool.lenderInfo({
            index:  _index,
            lender: _lender
        });
    }
}
</code></pre><h3>Examples of getting lender info</h3>
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

(<span class="hljs-keyword">uint256</span> lpBal, <span class="hljs-keyword">uint256</span> timestamp) <span class="hljs-operator">=</span> _pool.lenderInfo({
    index:  _index,
    lender: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)
});


</code></pre>`

export default html
