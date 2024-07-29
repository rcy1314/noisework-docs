import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const g=JSON.parse('{"title":"手机端导航选项","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/nav.md","filePath":"guide/home/nav.md"}'),e={name:"guide/home/nav.md"},l=p(`<h1 id="手机端导航选项" tabindex="-1">手机端导航选项 <a class="header-anchor" href="#手机端导航选项" aria-label="Permalink to &quot;手机端导航选项&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722025631227.png" alt="1722025631227"></p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>html中引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 在手机尺寸下显示的导航按钮 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;mobile-nav-button&quot;&gt;</span></span>
<span class="line"><span>	&lt;i class=&quot;fa-solid fa-list&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span></code></pre></div><p>css代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 在手机尺寸下显示的按钮样式 */</span></span>
<span class="line"><span>@media screen and (max-width: 800px) {</span></span>
<span class="line"><span>    .mobile-nav-button {</span></span>
<span class="line"><span>      display: block;</span></span>
<span class="line"><span>      position: fixed;</span></span>
<span class="line"><span>      top: 15px;</span></span>
<span class="line"><span>      left: 10px;</span></span>
<span class="line"><span>      z-index: 199000;</span></span>
<span class="line"><span>      width: 50px;</span></span>
<span class="line"><span>      height: 50px;</span></span>
<span class="line"><span>      background-color: #232730f5; /* 方块按钮的背景颜色 */</span></span>
<span class="line"><span>      color: #fff;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>      line-height: 50px; /* 垂直居中 */</span></span>
<span class="line"><span>      border-radius: 6px;</span></span>
<span class="line"><span>      cursor: pointer;</span></span>
<span class="line"><span>      transition: all 0.02s ease-in-out; /* 过渡效果 */</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    /* 侧边栏的弹出样式 */</span></span>
<span class="line"><span>    .noise-left {</span></span>
<span class="line"><span>      display: none;</span></span>
<span class="line"><span>      position: fixed;</span></span>
<span class="line"><span>      top: 2;</span></span>
<span class="line"><span>      width: 50%;</span></span>
<span class="line"><span>      height: 100%;</span></span>
<span class="line"><span>      background-color:  #0d0e11ed;  /* 弹出层的背景颜色 */</span></span>
<span class="line"><span>      z-index: 99900; /* 确保弹出层在按钮下面 */</span></span>
<span class="line"><span>      transition: left 0.1s ease-in-out;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  /* 侧边栏弹出时按钮的位置 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 显示侧边栏 */</span></span>
<span class="line"><span>    .noise-left.show {</span></span>
<span class="line"><span>      left: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /* 侧边栏不显示的元素 */</span></span>
<span class="line"><span>@media screen and (max-width: 800px) {</span></span>
<span class="line"><span>    .logo {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  /* 在非手机尺寸下隐藏按钮 */</span></span>
<span class="line"><span>  @media screen and (min-width: 800px) {</span></span>
<span class="line"><span>    .mobile-nav-button {</span></span>
<span class="line"><span>      display: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>js代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//手机左侧弹出</span></span>
<span class="line"><span>document.addEventListener(&#39;DOMContentLoaded&#39;, function() {</span></span>
<span class="line"><span>    var mobileNavButton = document.querySelector(&#39;.mobile-nav-button&#39;);</span></span>
<span class="line"><span>    var noiseLeft = document.querySelector(&#39;.noise-left&#39;);</span></span>
<span class="line"><span>    mobileNavButton.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>      if (noiseLeft.style.display === &#39;block&#39;) {</span></span>
<span class="line"><span>        noiseLeft.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        noiseLeft.style.display = &#39;block&#39;;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  // 切换侧边栏的显示状态</span></span>
<span class="line"><span>  if (noiseLeft.classList.contains(&#39;show&#39;)) {</span></span>
<span class="line"><span>    noiseLeft.classList.remove(&#39;show&#39;);</span></span>
<span class="line"><span>    mobileNavButton.style.left = &#39;10px&#39;; </span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    noiseLeft.classList.add(&#39;show&#39;);</span></span>
<span class="line"><span>    mobileNavButton.style.left = &#39;50%&#39;; </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>});</span></span></code></pre></div>`,9),i=[l];function t(c,o,d,r,h,u){return a(),n("div",null,i)}const b=s(e,[["render",t]]);export{g as __pageData,b as default};
