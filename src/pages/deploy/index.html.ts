// metadata
export const version = "0.8.18"
export const title = "Deploy a Pool"
export const description = "Deploying a pool in Ajna"

export const keywords = [
    "pool",
    "deploy",
    "init",
    "create",
    "pair",
    "factory",
]

export const codes = [
    {
        fileName: "DeployPool.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmltcG9ydCB7IEVSQzIwUG9vbCB9ICAgICAgICBmcm9tICdham5hLWNvcmUvc3JjL0VSQzIwUG9vbC5zb2wnOwppbXBvcnQgeyBFUkMyMFBvb2xGYWN0b3J5IH0gZnJvbSAnYWpuYS1jb3JlL3NyYy9FUkMyMFBvb2xGYWN0b3J5LnNvbCc7Cgpjb250cmFjdCBQb29sRGVwbG95ZXIgewoKICAgIGFkZHJlc3MgX2FqbmEgPSAnMHg5YTk2ZWM5QjU3RmI2NEZiQzYwQjQyM2QxZjRkYTc2OTFCZDM1MDc5JzsKCiAgICBFUkMyMFBvb2xGYWN0b3J5IF9wb29sRmFjdG9yeSA9IElFUkMyMFBvb2xGYWN0b3J5KF9ham5hKTsKCiAgICBmdW5jdGlvbiBkZXBsb3lFUkMyMCgKICAgICAgICBhZGRyZXNzIF9jb2xsYXRlcmFsLAogICAgICAgIGFkZHJlc3MgX3F1b3RlLAogICAgICAgIHVpbnQyNTYgX2ludGVyZXN0UmF0ZQogICAgKSBleHRlcm5hbCB7CiAgICAgICAgX3Bvb2xGYWN0b3J5LmRlcGxveVBvb2woewogICAgICAgICAgICBjb2xsYXRlcmFsOiAgIF9jb2xsYXRlcmFsLAogICAgICAgICAgICBxdW90ZTogICAgICAgIF9xdW90ZSwKICAgICAgICAgICAgaW50ZXJlc3RSYXRlOiBfaW50ZXJlc3RSYXRlCiAgICAgICAgfSk7CiAgICB9Cn0K",
    },
    {
        fileName: "DeployPoolExample.sol",
        code: "RVJDMjBQb29sRmFjdG9yeSBfcG9vbEZhY3RvcnkgPSBJRVJDMjBQb29sRmFjdG9yeShfYWpuYSk7CgphZGRyZXNzIF9jb2xsYXRlcmFsICAgPSBhZGRyZXNzKCk7IC8vIFdFVEgKYWRkcmVzcyBfcXVvdGUgICAgICAgID0gYWRkcmVzcygpOyAvLyBEQUkKdWludDI1NiBfaW50ZXJlc3RSYXRlID0gMC4wNSAqIDFlMTg7IC8vIDAuMDUlIGludGVyZXN0IHJhdGUKCl9wb29sRmFjdG9yeS5kZXBsb3lQb29sKHsKICAgIGNvbGxhdGVyYWw6ICAgX2NvbGxhdGVyYWwsCiAgICBxdW90ZTogICAgICAgIF9xdW90ZSwKICAgIGludGVyZXN0UmF0ZTogX2ludGVyZXN0UmF0ZQp9KTsK",
    },
]

const html = `<ul>
<li>Create a Ajna Pool</li>
</ul>
<p>A pool consists of a quote token and a collateral token creating a unique pair (<em>WETH/USDC</em>). Only one pool per pair can exist in the system. The initial interest rate for a pool is set by the pool creator.</p>
<p>In Ajna, each pool is its own contract much like Uniswap V3 and is deployed by the: <code>PoolFactory</code></p>
<p>The pool deployer will need to pass three arguments:</p>
<ul>
<li>Collateral token address</li>
<li>Quote token address</li>
<li>Interest rate</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.18;</span>

<span class="hljs-keyword">import</span> { <span class="hljs-title">ERC20Pool</span> }        <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/ERC20Pool.sol&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title">ERC20PoolFactory</span> } <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">&#x27;ajna-core/src/ERC20PoolFactory.sol&#x27;</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">PoolDeployer</span> </span>{

    <span class="hljs-keyword">address</span> _ajna <span class="hljs-operator">=</span> <span class="hljs-string">&#x27;0x9a96ec9B57Fb64FbC60B423d1f4da7691Bd35079&#x27;</span>;

    ERC20PoolFactory _poolFactory <span class="hljs-operator">=</span> IERC20PoolFactory(_ajna);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deployERC20</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _collateral,
        <span class="hljs-keyword">address</span> _quote,
        <span class="hljs-keyword">uint256</span> _interestRate
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _poolFactory.deployPool({
            collateral:   _collateral,
            quote:        _quote,
            interestRate: _interestRate
        });
    }
}
</code></pre><h3>Examples of Deploying a Ajna Pool</h3>
<p><em>Hooks are not mandatory, you can create a pool without a hook</em></p>
<pre><code class="language-solidity">ERC20PoolFactory _poolFactory <span class="hljs-operator">=</span> IERC20PoolFactory(_ajna);

<span class="hljs-keyword">address</span> _collateral   <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(); <span class="hljs-comment">// WETH</span>
<span class="hljs-keyword">address</span> _quote        <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(); <span class="hljs-comment">// DAI</span>
<span class="hljs-keyword">uint256</span> _interestRate <span class="hljs-operator">=</span> <span class="hljs-number">0</span><span class="hljs-number">.05</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>; <span class="hljs-comment">// 0.05% interest rate</span>

_poolFactory.deployPool({
    collateral:   _collateral,
    quote:        _quote,
    interestRate: _interestRate
});
</code></pre>`

export default html
