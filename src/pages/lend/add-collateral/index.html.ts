// metadata
export const version = "0.8.18"
export const title = "Add Collateral Token"
export const description = "Adding quote token to a pool in Ajna"

export const keywords = [
    "add",
    "lend",
    "earn",
    "quote",
    "token",
    "interest",
    "rate",
]

export const codes = [
    {
        fileName: "AddERC20CollateralExample.sol",
        code: "aW1wb3J0IHsgRVJDMjBQb29sIH0gZnJvbSAnYWpuYS1jb3JlL3NyYy9FUkMyMFBvb2wuc29sJzsKCmFkZHJlc3MgX3dzdGV0aERhaVBvb2wgPSAnMHhjZDI2MWNkMzY1Mzg5YTU4ZTY0NjdiYjhhODNhOWU0Mzc4NjRlOGU1JzsKCkVSQzIwUG9vbCBfcG9vbCA9IEVSQzIwUG9vbChfd3N0ZXRoRGFpUG9vbCk7Cgp1aW50MjU2IF9hbW91bnQgPSAwLjAwMSAqIDFlMTg7CnVpbnQyNTYgX2luZGV4ICA9IDIyNDA7CnVpbnQyNTYgX2V4cGlyeSA9IGJsb2NrLnRpbWVzdGFtcCArIDE1OwoKX3Bvb2wuYWRkQ29sbGF0ZXJhbCh7CiAgICBhbW91bnQ6IF9hbW91bnQsCiAgICBpbmRleDogIF9pbmRleCwKICAgIGV4cGlyeTogX2V4cGlyeQp9KTsKCgo=",
    },
    {
        fileName: "AddERC20CollateralToken.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmltcG9ydCB7IEVSQzIwUG9vbCB9IGZyb20gJ2FqbmEtY29yZS9zcmMvRVJDMjBQb29sLnNvbCc7Cgpjb250cmFjdCBBZGRFUkMyMENvbGxhdGVyYWwgewoKICAgIGFkZHJlc3MgX3dzdGV0aERhaVBvb2wgPSAnMHhjZDI2MWNkMzY1Mzg5YTU4ZTY0NjdiYjhhODNhOWU0Mzc4NjRlOGU1JzsKCiAgICBmdW5jdGlvbiBhZGRDb2xsYXRlcmFsKAogICAgICAgIHVpbnQyNTYgX2Ftb3VudCwKICAgICAgICB1aW50MjU2IF9pbmRleCwKICAgICAgICB1aW50MjU2IF9leHBpcnkKICAgICkgZXh0ZXJuYWwgewoKICAgICAgICBFUkMyMFBvb2wgX3Bvb2wgPSBFUkMyMFBvb2woX3dzdGV0aERhaVBvb2wpOwoKICAgICAgICBfcG9vbC5hZGRDb2xsYXRlcmFsKHsKICAgICAgICAgICAgYW1vdW50OiBfYW1vdW50LAogICAgICAgICAgICBpbmRleDogIF9pbmRleCwKICAgICAgICAgICAgZXhwaXJ5OiBfZXhwaXJ5CiAgICAgICAgfSk7CiAgICB9Cn0=",
    },
    {
        fileName: "AddERC721CollateralExample.sol",
        code: "aW1wb3J0IHsgRVJDNzIxUG9vbCB9IGZyb20gJ2FqbmEtY29yZS9zcmMvRVJDNzIxUG9vbC5zb2wnOwoKYWRkcmVzcyBfd3N0ZXRoRGFpUG9vbCA9ICcweGNkMjYxY2QzNjUzODlhNThlNjQ2N2JiOGE4M2E5ZTQzNzg2NGU4ZTUnOwoKRVJDNzIxUG9vbCBfcG9vbCA9IEVSQzcyMVBvb2woX3dzdGV0aERhaVBvb2wpOwoKdWludDI1NiBfaW5kZXggID0gMjI0MDsKdWludDI1NiBfZXhwaXJ5ID0gYmxvY2sudGltZXN0YW1wICsgMTU7CnVpbnQyNTZbXSBtZW1vcnkgX3Rva2VuSWRzID0gbmV3IHVpbnQyNTZbXSgzKTsKCi8vIHN1YnNldCBwb29sIGFjY2VwdHMgRVJDNzIxIHRva2VucyB3LyBpZHM6IDEsIDIsIDMKX3Rva2VuSWRzWzBdID0gMTsKX3Rva2VuSWRzWzFdID0gMjsKX3Rva2VuSWRzWzJdID0gMzsKCl9wb29sLmFkZENvbGxhdGVyYWwoewogICAgdG9rZW5JZHNfOiBfdG9rZW5JZHMsCiAgICBpbmRleDogICAgIF9pbmRleCwKICAgIGV4cGlyeTogICAgX2V4cGlyeQp9KTsK",
    },
    {
        fileName: "AddERC721CollateralToken.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmltcG9ydCB7IEVSQzcyMVBvb2wgfSBmcm9tICdham5hLWNvcmUvc3JjL0VSQzcyMVBvb2wuc29sJzsKCmNvbnRyYWN0IEFkZENvbGxhdGVyYWwgewoKICAgIGFkZHJlc3MgX3dzdGV0aERhaVBvb2wgPSAnMHhjZDI2MWNkMzY1Mzg5YTU4ZTY0NjdiYjhhODNhOWU0Mzc4NjRlOGU1JzsKCiAgICBmdW5jdGlvbiBhZGRDb2xsYXRlcmFsKAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBfdG9rZW5JZHMsCiAgICAgICAgdWludDI1NiBfaW5kZXgsCiAgICAgICAgdWludDI1NiBfZXhwaXJ5CiAgICApIGV4dGVybmFsIHsKCiAgICAgICAgRVJDNzIxUG9vbCBfcG9vbCA9IEVSQzcyMVBvb2woX3dzdGV0aERhaVBvb2wpOwoKICAgICAgICBfcG9vbC5hZGRDb2xsYXRlcmFsKHsKICAgICAgICAgICAgdG9rZW5JZHM6IF90b2tlbklkcywKICAgICAgICAgICAgaW5kZXg6ICAgIF9pbmRleCwKICAgICAgICAgICAgZXhwaXJ5OiAgIF9leHBpcnkKICAgICAgICB9KTsKICAgIH0KfQ==",
    },
]

const html = `<ul>
<li>Add collateral to a pool in Ajna</li>
</ul>
<p>Lenders can insert collateral token into a price bucket at any time. This facilitates the swapping of either quote token for collateral or collateral token for quote tokens.</p>
<p>Much like Uniswap V3, there are a predetermined number of prices (7388 to be exact), in Ajna they are referred to as price buckets or bucket indexes.</p>
<p>For an ERC20 collateral pool the lender will need to pass three arguments:</p>
<ul>
<li>Amount of collateral token</li>
<li>The bucket index the quote tokens would be added to</li>
<li>Timestamp after which this transaction will revert, preventing inclusion in a block with unfavorable price.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.18;</span>

<span class="hljs-keyword">import</span> { <span class="hljs-title">ERC20Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/ERC20Pool.sol&#x27;</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AddERC20Collateral</span> </span>{

    <span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addCollateral</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> _amount,
        <span class="hljs-keyword">uint256</span> _index,
        <span class="hljs-keyword">uint256</span> _expiry
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{

        ERC20Pool _pool <span class="hljs-operator">=</span> ERC20Pool(_wstethDaiPool);

        _pool.addCollateral({
            amount: _amount,
            index:  _index,
            expiry: _expiry
        });
    }
}
</code></pre><p>For a ERC721 collateral pool the lender will need to pass three arguments:</p>
<ul>
<li>An array of tokenIds</li>
<li>The bucket index the quote tokens would be added to</li>
<li>Timestamp after which this transaction will revert, preventing inclusion in a block with unfavorable price.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.18;</span>

<span class="hljs-keyword">import</span> { <span class="hljs-title">ERC721Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/ERC721Pool.sol&#x27;</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AddCollateral</span> </span>{

    <span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addCollateral</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> _tokenIds,
        <span class="hljs-keyword">uint256</span> _index,
        <span class="hljs-keyword">uint256</span> _expiry
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{

        ERC721Pool _pool <span class="hljs-operator">=</span> ERC721Pool(_wstethDaiPool);

        _pool.addCollateral({
            tokenIds: _tokenIds,
            index:    _index,
            expiry:   _expiry
        });
    }
}
</code></pre><h3>Examples of adding ERC20 collateral token</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> { <span class="hljs-title">ERC20Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/ERC20Pool.sol&#x27;</span>;

<span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;

ERC20Pool _pool <span class="hljs-operator">=</span> ERC20Pool(_wstethDaiPool);

<span class="hljs-keyword">uint256</span> _amount <span class="hljs-operator">=</span> <span class="hljs-number">0</span><span class="hljs-number">.001</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">uint256</span> _index  <span class="hljs-operator">=</span> <span class="hljs-number">2240</span>;
<span class="hljs-keyword">uint256</span> _expiry <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">15</span>;

_pool.addCollateral({
    amount: _amount,
    index:  _index,
    expiry: _expiry
});


</code></pre><h3>Examples of adding ERC721 collateral token</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> { <span class="hljs-title">ERC721Pool</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/ERC721Pool.sol&#x27;</span>;

<span class="hljs-keyword">address</span> _wstethDaiPool <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0xcd261cd365389a58e6467bb8a83a9e437864e8e5&#x27;</span>;

ERC721Pool _pool <span class="hljs-operator">=</span> ERC721Pool(_wstethDaiPool);

<span class="hljs-keyword">uint256</span> _index  <span class="hljs-operator">=</span> <span class="hljs-number">2240</span>;
<span class="hljs-keyword">uint256</span> _expiry <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">15</span>;
<span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> _tokenIds <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](<span class="hljs-number">3</span>);

<span class="hljs-comment">// subset pool accepts ERC721 tokens w/ ids: 1, 2, 3</span>
_tokenIds[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
_tokenIds[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
_tokenIds[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;

_pool.addCollateral({
    tokenIds_: _tokenIds,
    index:     _index,
    expiry:    _expiry
});
</code></pre>`

export default html
