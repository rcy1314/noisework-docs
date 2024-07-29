import{_ as t,c as n,o as s,a2 as a}from"./chunks/framework.DQS5QPof.js";const m=JSON.parse('{"title":"云盘资源卡片","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/yunpan.md","filePath":"guide/home/yunpan.md"}'),p={name:"guide/home/yunpan.md"},e=a(`<h1 id="云盘资源卡片" tabindex="-1">云盘资源卡片 <a class="header-anchor" href="#云盘资源卡片" aria-label="Permalink to &quot;云盘资源卡片&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/yun.png" alt="yun"></p><p><strong>该组件是使用</strong>fetch请求api并对响应的数据进行定制化处理</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>页面左侧引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;!-- 云盘资源--&gt;</span></span>
<span class="line"><span>		 &lt;div class=&quot;left-div left-time&quot;&gt;</span></span>
<span class="line"><span>			&lt;ul id=&quot;line&quot;&gt;</span></span>
<span class="line"><span>				&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>					&lt;class=&quot;title&quot;&gt;《云盘资源上新情报》</span></span>
<span class="line"><span>						&lt;hr class=&quot;dashed&quot;&gt;</span></span>
<span class="line"><span>					&lt;/div&gt;	</span></span>
<span class="line"><span>					&lt;div class=&quot;ziyuan&quot;&gt;&lt;/div&gt;	</span></span>
<span class="line"><span>			&lt;/ul&gt;</span></span>
<span class="line"><span>		&lt;/div&gt;</span></span>
<span class="line"><span>		&lt;!-- 云盘资源结束--&gt;</span></span></code></pre></div><p>页脚处引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>		// 使用 fetch API 请求网盘资源更新 URL</span></span>
<span class="line"><span>		fetch(&#39;https://www.pan.noisework.cn/api/search&#39;)</span></span>
<span class="line"><span>			.then(response =&gt; response.json())</span></span>
<span class="line"><span>			.then(data =&gt; {</span></span>
<span class="line"><span>				// 检查data是否为null</span></span>
<span class="line"><span>				if (data === null) {</span></span>
<span class="line"><span>					// 如果data为null，显示默认错误消息</span></span>
<span class="line"><span>					const contentDiv = document.querySelector(&#39;.ziyuan&#39;);</span></span>
<span class="line"><span>					const p = document.createElement(&#39;p&#39;);</span></span>
<span class="line"><span>					p.textContent = &#39;请求失败，没有返回有效信息&#39;;</span></span>
<span class="line"><span>					contentDiv.appendChild(p);</span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					// 如果data不是null，检查code字段</span></span>
<span class="line"><span>					if (data.code === 200) {</span></span>
<span class="line"><span>						// 如果code是200，显示title和url字段的信息</span></span>
<span class="line"><span>						const contentDiv = document.querySelector(&#39;.ziyuan&#39;);</span></span>
<span class="line"><span>						data.data.items.forEach(item =&gt; {</span></span>
<span class="line"><span>							const p = document.createElement(&#39;p&#39;);</span></span>
<span class="line"><span>							p.innerHTML = \`&lt;strong&gt;\${item.title}&lt;/strong&gt; - &lt;a href=&quot;\${item.url}&quot; target=&quot;_blank&quot;&gt;链接🔗 &lt;/a&gt;\`;</span></span>
<span class="line"><span>							p.style.margin = &#39;0.2em 0&#39;; // 添加0.2的上下间隔</span></span>
<span class="line"><span>							contentDiv.appendChild(p);</span></span>
<span class="line"><span>						});</span></span>
<span class="line"><span>					} else {</span></span>
<span class="line"><span>						// 如果code不是200，显示msg字段的信息</span></span>
<span class="line"><span>						const contentDiv = document.querySelector(&#39;.ziyuan&#39;);</span></span>
<span class="line"><span>						const p = document.createElement(&#39;p&#39;);</span></span>
<span class="line"><span>						p.textContent = data.message || &#39;请求失败，没有返回有效信息&#39;;</span></span>
<span class="line"><span>						contentDiv.appendChild(p);</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			})</span></span>
<span class="line"><span>			.catch(error =&gt; {</span></span>
<span class="line"><span>				console.error(&#39;请求出错:&#39;, error);</span></span>
<span class="line"><span>			});</span></span>
<span class="line"><span>	&lt;/script&gt;</span></span></code></pre></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><p>不推荐个人引入，因为该请求的api地址为我个人搭建的云盘资源站，我不保证持续维护和长久存在该站，如果失效请更换其它API并修改返回的数据响应</p>`,10),l=[e];function i(c,o,d,r,u,h){return s(),n("div",null,l)}const _=t(p,[["render",i]]);export{m as __pageData,_ as default};
