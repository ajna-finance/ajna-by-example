// metadata
export const version = "0.8.18"
export const title = "Deploy a Collection Pool"
export const description = "Deploying a collection pool in Ajna"

export const keywords = [
    "pool",
    "collection",
    "ERC721",
    "deploy",
    "init",
    "create",
    "pair",
    "factory",
]

export const codes = [
    {
        fileName: "DeployCollectionPool.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmltcG9ydCB7IEVSQzcyMVBvb2wgfSAgICAgICAgZnJvbSAnYWpuYS1jb3JlL3NyYy9FUkM3MjFQb29sLnNvbCc7CmltcG9ydCB7IEVSQzcyMVBvb2xGYWN0b3J5IH0gZnJvbSAnYWpuYS1jb3JlL3NyYy9FUkM3MjFQb29sRmFjdG9yeS5zb2wnOwoKY29udHJhY3QgUG9vbERlcGxveWVyIHsKCiAgICBhZGRyZXNzIF9ham5hID0gJzB4OWE5NmVjOUI1N0ZiNjRGYkM2MEI0MjNkMWY0ZGE3NjkxQmQzNTA3OSc7CgogICAgRVJDNzIxUG9vbEZhY3RvcnkgX3Bvb2xGYWN0b3J5ID0gSUVSQzcyMVBvb2xGYWN0b3J5KF9ham5hKTsKCiAgICBmdW5jdGlvbiBkZXBsb3lFUkM3MjFDb2xsZWN0aW9uKAogICAgICAgIGFkZHJlc3MgX2NvbGxhdGVyYWwsCiAgICAgICAgYWRkcmVzcyBfcXVvdGUsCiAgICAgICAgdWludDI1NiBfaW50ZXJlc3RSYXRlCiAgICApIGV4dGVybmFsIHsgCiAgICAgICAgdWludDI1NltdIG1lbW9yeSBfdG9rZW5kSWRzOyAvLyBlbXB0eQoKICAgICAgICBfcG9vbEZhY3RvcnkuZGVwbG95UG9vbCh7CiAgICAgICAgICAgIGNvbGxhdGVyYWw6ICAgX2NvbGxhdGVyYWwsCiAgICAgICAgICAgIHF1b3RlOiAgICAgICAgX3F1b3RlLAogICAgICAgICAgICB0b2tlbklkc186ICAgIF90b2tlbklkcywKICAgICAgICAgICAgaW50ZXJlc3RSYXRlOiBfaW50ZXJlc3RSYXRlCiAgICAgICAgfSk7CiAgICB9Cn0K",
    },
    {
        fileName: "DeployCollectionPoolExample.sol",
        code: "RVJDNzIxUG9vbEZhY3RvcnkgX3Bvb2xGYWN0b3J5ID0gSUVSQzcyMVBvb2xGYWN0b3J5KF9ham5hKTsKCmFkZHJlc3MgX2NvbGxhdGVyYWwgICA9IGFkZHJlc3MoKTsgLy8gV0VUSAphZGRyZXNzIF9xdW90ZSAgICAgICAgPSBhZGRyZXNzKCk7IC8vIERBSQp1aW50MjU2IF9pbnRlcmVzdFJhdGUgPSAwLjA1ICogMWUxODsgLy8gMC4wNSUgaW50ZXJlc3QgcmF0ZQoKdWludDI1NltdIG1lbW9yeSBfdG9rZW5JZHM7IC8vIGludGVudGlvbmFsbHkgZW1wdHkKCl9wb29sRmFjdG9yeS5kZXBsb3lQb29sKHsKICAgIGNvbGxhdGVyYWw6ICAgX2NvbGxhdGVyYWwsCiAgICBxdW90ZTogICAgICAgIF9xdW90ZSwKICAgIHRva2VuSWRzXzogICAgX3Rva2VuSWRzLAogICAgaW50ZXJlc3RSYXRlOiBfaW50ZXJlc3RSYXRlCn0pOwo=",
    },
]

const html = `<ul>
<li>Deploy a Collection Pool</li>
</ul>
<p>A collection pool consists of a collateral ERC721 token and a quote token creating a unique pair (<em>BAYC/USDC</em>). Only one collection pool per pair can exist in the system. The initial interest rate for a pool is set by the pool creator.</p>
<p>Collection pools accept <em>all</em> NFT tokens associated with an NFT collection so long as they share the same address.</p>
<p>In Ajna, each pool is its own contract much like Uniswap V3 and is deployed by the: <code>PoolFactory</code></p>
<p>The pool deployer will need to pass three arguments:</p>
<ul>
<li>Collateral ERC721 address</li>
<li>Quote token address</li>
<li>An empty array</li>
<li>Interest rate</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.18;</span>

<span class="hljs-keyword">import</span> { <span class="hljs-title">ERC721Pool</span> }        <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/ERC721Pool.sol&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title">ERC721PoolFactory</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/ERC721PoolFactory.sol&#x27;</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">PoolDeployer</span> </span>{

    <span class="hljs-keyword">address</span> _ajna <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0x9a96ec9B57Fb64FbC60B423d1f4da7691Bd35079&#x27;</span>;

    ERC721PoolFactory _poolFactory <span class="hljs-operator">=</span> IERC721PoolFactory(_ajna);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deployERC721Collection</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _collateral,
        <span class="hljs-keyword">address</span> _quote,
        <span class="hljs-keyword">uint256</span> _interestRate
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{ 
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> _tokendIds; <span class="hljs-comment">// empty</span>

        _poolFactory.deployPool({
            collateral:   _collateral,
            quote:        _quote,
            tokenIds_:    _tokenIds,
            interestRate: _interestRate
        });
    }
}
</code></pre><h3>Examples of Deploying a Ajna Collection Pool</h3>
<pre><code class="language-solidity">ERC721PoolFactory _poolFactory <span class="hljs-operator">=</span> IERC721PoolFactory(_ajna);

<span class="hljs-keyword">address</span> _collateral   <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(); <span class="hljs-comment">// WETH</span>
<span class="hljs-keyword">address</span> _quote        <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(); <span class="hljs-comment">// DAI</span>
<span class="hljs-keyword">uint256</span> _interestRate <span class="hljs-operator">=</span> <span class="hljs-number">0</span><span class="hljs-number">.05</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>; <span class="hljs-comment">// 0.05% interest rate</span>

<span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> _tokenIds; <span class="hljs-comment">// intentionally empty</span>

_poolFactory.deployPool({
    collateral:   _collateral,
    quote:        _quote,
    tokenIds_:    _tokenIds,
    interestRate: _interestRate
});
</code></pre>`

export default html
