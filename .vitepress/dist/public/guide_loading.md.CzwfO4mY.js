import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const b=JSON.parse('{"title":"载入介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/loading.md","filePath":"guide/loading.md"}'),e={name:"guide/loading.md"},l=p(`<h1 id="载入介绍" tabindex="-1">载入介绍 <a class="header-anchor" href="#载入介绍" aria-label="Permalink to &quot;载入介绍&quot;">​</a></h1><p>该载入效果可以帮助进入页面时对加载各类js文件进行视觉缓冲，从而避免感觉加载时过多页面空白</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>html中添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- loading加载--&gt; </span></span>
<span class="line"><span>    &lt;div id=&quot;spinner-container&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;spinner&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span></code></pre></div><p>并引入js及css文件</p><p>在body结尾上方添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;script src=&quot;js/loading.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>在head中引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;./css/loading.css&quot;&gt;</span></span></code></pre></div><h2 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h2><p>可在css中定制化效果，代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#spinner-container {</span></span>
<span class="line"><span>  position: fixed;</span></span>
<span class="line"><span>  top: 0;</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>  background-color: rgba(0, 0, 0, 0.8);</span></span>
<span class="line"><span>  z-index: 9999;</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.spinner {</span></span>
<span class="line"><span>  border: 6px solid rgba(0, 0, 0, 0.1); /* 增加边框宽度 */</span></span>
<span class="line"><span>  border-radius: 50%;</span></span>
<span class="line"><span>  width: 65px; /* 增大宽度 */</span></span>
<span class="line"><span>  height: 65px; /* 增大高度 */</span></span>
<span class="line"><span>  animation: spin 1s linear infinite;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@keyframes spin {</span></span>
<span class="line"><span>  0% {</span></span>
<span class="line"><span>    border-top: 6px solid #007bff; /* 增加边框宽度 */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  20% {</span></span>
<span class="line"><span>    border-top: 6px solid #00ff00;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  40% {</span></span>
<span class="line"><span>    border-top: 6px solid #ffff00;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  60% {</span></span>
<span class="line"><span>    border-top: 6px solid #ff00ff;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  80% {</span></span>
<span class="line"><span>    border-top: 6px solid #ff0000;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  100% {</span></span>
<span class="line"><span>    border-top: 6px solid #007bff;</span></span>
<span class="line"><span>    transform: rotate(360deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,13),i=[l];function t(c,o,d,r,h,g){return a(),n("div",null,i)}const f=s(e,[["render",t]]);export{b as __pageData,f as default};
