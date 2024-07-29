import{_ as s,c as t,o as n,a2 as a}from"./chunks/framework.DQS5QPof.js";const h=JSON.parse('{"title":"摸鱼日历","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/moyu.md","filePath":"guide/home/moyu.md"}'),p={name:"guide/home/moyu.md"},e=a(`<h1 id="摸鱼日历" tabindex="-1">摸鱼日历 <a class="header-anchor" href="#摸鱼日历" aria-label="Permalink to &quot;摸鱼日历&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/mo.png" alt="mo"></p><p>该组件是使用fetch请求api并对响应的数据进行定制化处理</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>页面右侧引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 摸鱼日历--&gt;</span></span>
<span class="line"><span>			&lt;div class=&quot;left-div left-time&quot;&gt;</span></span>
<span class="line"><span>				&lt;ul id=&quot;line2&quot;&gt;</span></span>
<span class="line"><span>				 &lt;li&gt;</span></span>
<span class="line"><span>				&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>					&lt;img id=&quot;moyuImage&quot; src=&quot;loading.gif&quot; alt=&quot;摸鱼日历图片&quot;&gt;</span></span>
<span class="line"><span>				&lt;/div&gt;</span></span>
<span class="line"><span>			&lt;/li&gt;</span></span>
<span class="line"><span>		&lt;/ul&gt;</span></span>
<span class="line"><span>	&lt;/div&gt;</span></span>
<span class="line"><span>	&lt;!-- 摸鱼日历结束--&gt;</span></span></code></pre></div><p>页脚处引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>			// 当文档加载完毕时执行</span></span>
<span class="line"><span>			document.addEventListener(&#39;DOMContentLoaded&#39;, function() {</span></span>
<span class="line"><span>				// 获取摸鱼日历API的URL</span></span>
<span class="line"><span>				var apiURL = &#39;https://api.vvhan.com/api/moyu?type=json&#39;;</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>				// 使用fetch API请求摸鱼日历API</span></span>
<span class="line"><span>				fetch(apiURL)</span></span>
<span class="line"><span>					.then(function(response) {</span></span>
<span class="line"><span>						// 确保响应的状态是OK的</span></span>
<span class="line"><span>						if (!response.ok) {</span></span>
<span class="line"><span>							throw new Error(&#39;Network response was not ok: &#39; + response.statusText);</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>						// 解析JSON响应</span></span>
<span class="line"><span>						return response.json();</span></span>
<span class="line"><span>					})</span></span>
<span class="line"><span>					.then(function(data) {</span></span>
<span class="line"><span>						// 假设API返回的图片URL在data.url中</span></span>
<span class="line"><span>						// 更新图片元素的src属性并显示图片</span></span>
<span class="line"><span>						var moyuImage = document.getElementById(&#39;moyuImage&#39;);</span></span>
<span class="line"><span>						moyuImage.src = data.url;</span></span>
<span class="line"><span>					})</span></span>
<span class="line"><span>					.catch(function(error) {</span></span>
<span class="line"><span>						// 在控制台打印错误信息</span></span>
<span class="line"><span>						console.error(&#39;Error fetching moyu calendar:&#39;, error);</span></span>
<span class="line"><span>						// 在页面上显示错误信息</span></span>
<span class="line"><span>						var moyuImage = document.getElementById(&#39;moyuImage&#39;);</span></span>
<span class="line"><span>						moyuImage.alt = &#39;获取失败，请稍后再试。&#39;;</span></span>
<span class="line"><span>					});</span></span>
<span class="line"><span>			});</span></span>
<span class="line"><span>		&lt;/script&gt;</span></span></code></pre></div>`,8),l=[e];function i(c,o,r,d,u,m){return n(),t("div",null,l)}const _=s(p,[["render",i]]);export{h as __pageData,_ as default};
