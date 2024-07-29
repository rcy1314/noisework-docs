import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const f=JSON.parse('{"title":"隐藏式页脚","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index/footer.md","filePath":"guide/index/footer.md"}'),e={name:"guide/index/footer.md"},t=p(`<h1 id="隐藏式页脚" tabindex="-1">隐藏式页脚 <a class="header-anchor" href="#隐藏式页脚" aria-label="Permalink to &quot;隐藏式页脚&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/footer.png" alt="footer"></p><p>该效果位于最下方居中位置，默认隐藏，当鼠标划过时会显示</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>body中添加代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!--隐藏式页脚--&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;footer&quot;&gt;</span></span>
<span class="line"><span>        &lt;p&gt;本站已运行: &lt;span id=&quot;days&quot;&gt;&lt;/span&gt;&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;p&gt; ღゝ◡╹ノ♡ &lt;a href=&quot;https://www.noisework.cn&quot;&gt;Noise主页&lt;/a&gt;&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span></code></pre></div><p>没有做单独的css和js，所以把代码放入了main中</p><p>在main.js中代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//*footer*//</span></span>
<span class="line"><span> // 计算站点运行天数</span></span>
<span class="line"><span> var startDate = new Date(&#39;2020/12/09&#39;);</span></span>
<span class="line"><span> var currentDate = new Date();</span></span>
<span class="line"><span> var daysElement = document.getElementById(&#39;days&#39;);</span></span>
<span class="line"><span> var days = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));</span></span>
<span class="line"><span> daysElement.textContent = days + &#39;天&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 监听鼠标移动事件</span></span>
<span class="line"><span> document.addEventListener(&#39;mousemove&#39;, function(event) {</span></span>
<span class="line"><span>   var footer = document.getElementById(&#39;footer&#39;);</span></span>
<span class="line"><span>   var windowHeight = window.innerHeight;</span></span>
<span class="line"><span>   var y = event.clientY;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // 判断鼠标位置是否在页面底部</span></span>
<span class="line"><span>   if (y &gt;= windowHeight - 50) {</span></span>
<span class="line"><span>     footer.style.display = &#39;block&#39;; // 显示footer</span></span>
<span class="line"><span>   } else {</span></span>
<span class="line"><span>     footer.style.display = &#39;none&#39;; // 隐藏footer</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> });</span></span></code></pre></div><p>Main.css中代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* footer */</span></span>
<span class="line"><span> #footer {</span></span>
<span class="line"><span>	position: fixed;</span></span>
<span class="line"><span>	bottom: 0;</span></span>
<span class="line"><span>	left: 0;</span></span>
<span class="line"><span>	width: 100%;</span></span>
<span class="line"><span>	font-size: 10px;</span></span>
<span class="line"><span>	color: #f1ebeb;</span></span>
<span class="line"><span>	text-align: center;</span></span>
<span class="line"><span>	display: none; /* 初始时隐藏 */</span></span>
<span class="line"><span>  }</span></span></code></pre></div>`,11),l=[t];function i(o,c,d,r,h,g){return a(),n("div",null,l)}const m=s(e,[["render",i]]);export{f as __pageData,m as default};
