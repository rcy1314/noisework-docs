import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const m=JSON.parse('{"title":"每日60秒读世界","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/days.md","filePath":"guide/home/days.md"}'),t={name:"guide/home/days.md"},e=p(`<h1 id="每日60秒读世界" tabindex="-1">每日60秒读世界 <a class="header-anchor" href="#每日60秒读世界" aria-label="Permalink to &quot;每日60秒读世界&quot;">​</a></h1><p>该组件是使用fetch请求api并对响应的数据进行定制化处理</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>页面右侧引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 60秒读懂世界--&gt;</span></span>
<span class="line"><span>			&lt;div class=&quot;left-div left-time&quot;&gt;</span></span>
<span class="line"><span>				&lt;ul id=&quot;line&quot;&gt;</span></span>
<span class="line"><span>					&lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>						&lt;class=&quot;title&quot;&gt;《每天60秒读懂世界》</span></span>
<span class="line"><span>                            &lt;hr class=&quot;dashed&quot;&gt;</span></span>
<span class="line"><span>						&lt;div class=&quot;content&quot;&gt;&lt;/div&gt;	</span></span>
<span class="line"><span>				&lt;/ul&gt;</span></span>
<span class="line"><span>			&lt;/div&gt;</span></span>
<span class="line"><span>			&lt;!-- 60秒读懂世界结束--&gt;</span></span></code></pre></div><p>页脚处引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>            // 使用 fetch API 请求每日60s URL</span></span>
<span class="line"><span>            fetch(&#39;https://www.wudada.online/Api/ScD&#39;)</span></span>
<span class="line"><span>                .then(response =&gt; response.json())</span></span>
<span class="line"><span>                .then(data =&gt; {</span></span>
<span class="line"><span>                    // 检查data是否为null</span></span>
<span class="line"><span>                    if (data === null) {</span></span>
<span class="line"><span>                        // 如果data为null，显示默认错误消息</span></span>
<span class="line"><span>                        const contentDiv = document.querySelector(&#39;.content&#39;);</span></span>
<span class="line"><span>                        const p = document.createElement(&#39;p&#39;);</span></span>
<span class="line"><span>                        p.textContent = &#39;请求失败，没有返回有效信息&#39;;</span></span>
<span class="line"><span>                        contentDiv.appendChild(p);</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        // 如果data不是null，检查code字段</span></span>
<span class="line"><span>                        if (data.code === &#39;200&#39;) {</span></span>
<span class="line"><span>                            // 如果code是200，显示content字段的信息</span></span>
<span class="line"><span>                            const contentDiv = document.querySelector(&#39;.content&#39;);</span></span>
<span class="line"><span>                            data.data.content.forEach(item =&gt; {</span></span>
<span class="line"><span>                                const p = document.createElement(&#39;p&#39;);</span></span>
<span class="line"><span>                                p.textContent = item.content;</span></span>
<span class="line"><span>                                contentDiv.appendChild(p);</span></span>
<span class="line"><span>                            });</span></span>
<span class="line"><span>                        } else {</span></span>
<span class="line"><span>                            // 如果code不是200，显示msg字段的信息</span></span>
<span class="line"><span>                            const contentDiv = document.querySelector(&#39;.content&#39;);</span></span>
<span class="line"><span>                            const p = document.createElement(&#39;p&#39;);</span></span>
<span class="line"><span>                            p.textContent = data.msg || &#39;请求失败，没有返回有效信息&#39;;</span></span>
<span class="line"><span>                            contentDiv.appendChild(p);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                .catch(error =&gt; {</span></span>
<span class="line"><span>                    console.error(&#39;请求出错:&#39;, error);</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>        &lt;/script&gt;</span></span></code></pre></div>`,7),l=[e];function c(i,o,d,r,u,h){return a(),s("div",null,l)}const _=n(t,[["render",c]]);export{m as __pageData,_ as default};
