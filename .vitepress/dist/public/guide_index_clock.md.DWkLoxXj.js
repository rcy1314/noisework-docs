import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const k=JSON.parse('{"title":"隐藏式数字时钟","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index/clock.md","filePath":"guide/index/clock.md"}'),e={name:"guide/index/clock.md"},l=p(`<h1 id="隐藏式数字时钟" tabindex="-1">隐藏式数字时钟 <a class="header-anchor" href="#隐藏式数字时钟" aria-label="Permalink to &quot;隐藏式数字时钟&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722270825476.png" alt="1722270825476"></p><p>该效果位于右侧偏上方居中位置，默认隐藏，当鼠标划过时会显示，当点击后会一直显示</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>body中添加代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 隐藏式数字时钟--&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;clock&quot; id=&quot;clock&quot;&gt;00:00:00&lt;/div&gt;</span></span></code></pre></div><p>没有做单独的css和js，所以把代码放入了main中</p><p>在main.js中代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> //*数字时钟*//</span></span>
<span class="line"><span>window.addEventListener(&#39;DOMContentLoaded&#39;, () =&gt; {</span></span>
<span class="line"><span>  const clock = document.getElementById(&#39;clock&#39;);</span></span>
<span class="line"><span>  let isMouseOver = false;</span></span>
<span class="line"><span>  let isMobile = false;</span></span>
<span class="line"><span>  let isClicked = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 检测是否为手机端尺寸</span></span>
<span class="line"><span>  const checkMobile = () =&gt; {</span></span>
<span class="line"><span>    if (window.innerWidth &lt;= 600) {</span></span>
<span class="line"><span>      isMobile = true;</span></span>
<span class="line"><span>      clock.classList.remove(&#39;show&#39;);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      isMobile = false;</span></span>
<span class="line"><span>      if (isClicked) {</span></span>
<span class="line"><span>        clock.classList.add(&#39;show&#39;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 监听窗口大小变化</span></span>
<span class="line"><span>  window.addEventListener(&#39;resize&#39;, checkMobile);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 初始检测一次窗口大小</span></span>
<span class="line"><span>  checkMobile();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  clock.addEventListener(&#39;mouseover&#39;, () =&gt; {</span></span>
<span class="line"><span>    isMouseOver = true;</span></span>
<span class="line"><span>    if (!isMobile) {</span></span>
<span class="line"><span>      clock.classList.add(&#39;show&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  clock.addEventListener(&#39;mouseout&#39;, () =&gt; {</span></span>
<span class="line"><span>    isMouseOver = false;</span></span>
<span class="line"><span>    if (!isMobile &amp;&amp; !isClicked) {</span></span>
<span class="line"><span>      setTimeout(() =&gt; {</span></span>
<span class="line"><span>        if (!isMouseOver) {</span></span>
<span class="line"><span>          clock.classList.remove(&#39;show&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }, 2000);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  clock.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>    isClicked = true;</span></span>
<span class="line"><span>    clock.classList.add(&#39;show&#39;);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setInterval(() =&gt; {</span></span>
<span class="line"><span>    if ((isMouseOver || isClicked) &amp;&amp; !isMobile) {</span></span>
<span class="line"><span>      const date = new Date();</span></span>
<span class="line"><span>      const hours = String(date.getHours()).padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span>      const minutes = String(date.getMinutes()).padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span>      const seconds = String(date.getSeconds()).padStart(2, &#39;0&#39;);</span></span>
<span class="line"><span>      const time = \`\${hours}:\${minutes}:\${seconds}\`;</span></span>
<span class="line"><span>      clock.textContent = time;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }, 1000);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>Main.css中代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 数字时钟 */</span></span>
<span class="line"><span>.clock {</span></span>
<span class="line"><span>	display: none;</span></span>
<span class="line"><span>	position: fixed;</span></span>
<span class="line"><span>	top: 3%;</span></span>
<span class="line"><span>	right: 32%;</span></span>
<span class="line"><span>	text-align: center;</span></span>
<span class="line"><span>	font-size: 20px;</span></span>
<span class="line"><span>	color: #fbf7f7;</span></span>
<span class="line"><span>	background-color: #1514140c;</span></span>
<span class="line"><span>	padding: 10px;</span></span>
<span class="line"><span>	border-radius: 10px;</span></span>
<span class="line"><span>	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.198);</span></span>
<span class="line"><span>	opacity: 0;</span></span>
<span class="line"><span>	transition: opacity 0.5s ease-in-out;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  .clock.show {</span></span>
<span class="line"><span>	opacity: 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  @media (min-width: 768px) {</span></span>
<span class="line"><span>	.clock {</span></span>
<span class="line"><span>	  display: block;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>  }</span></span></code></pre></div>`,11),i=[l];function c(t,o,d,r,u,h){return a(),n("div",null,i)}const m=s(e,[["render",c]]);export{k as __pageData,m as default};
