import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const g=JSON.parse('{"title":"RSS动态卡片","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index/rss.md","filePath":"guide/index/rss.md"}'),e={name:"guide/index/rss.md"},l=p(`<h1 id="rss动态卡片" tabindex="-1">RSS动态卡片 <a class="header-anchor" href="#rss动态卡片" aria-label="Permalink to &quot;RSS动态卡片&quot;">​</a></h1><h2 id="特征" tabindex="-1">特征 <a class="header-anchor" href="#特征" aria-label="Permalink to &quot;特征&quot;">​</a></h2><ul><li>页面加载2秒后自动从右侧弹出</li><li>每隔8秒更换展示订阅标题+日期，可点击进入链接</li><li>支持多个rss源的引入</li><li>带有关闭按钮，点击后即可关闭</li><li>仅在电脑端尺寸下显示，手机端自动隐藏</li></ul><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230820/%E6%88%AA%E5%B1%8F2023-08-20-20.27.12.2eoc9vsplosg.jpg" alt=""></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>除了需要在页面内引入相应的JS和css文件，还需要在body中引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- rss订阅文字代码--&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;rss-container&quot;&gt;</span></span>
<span class="line"><span>            &lt;div id=&quot;rss-item&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;close-button&quot; id=&quot;close-button&quot;&gt;X&lt;/div&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span></code></pre></div><p>rss.js：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    // JavaScript代码-rss</span></span>
<span class="line"><span>    var rssContainer = document.querySelector(&#39;.rss-container&#39;);</span></span>
<span class="line"><span>    var rssItem = document.getElementById(&#39;rss-item&#39;);</span></span>
<span class="line"><span>    var rssSources = [</span></span>
<span class="line"><span>      &#39;https://www.noiseblog.top/atom.xml&#39;,</span></span>
<span class="line"><span>      &#39;https://noisevip.cn/feed&#39;,</span></span>
<span class="line"><span>      // 添加更多的RSS信息源</span></span>
<span class="line"><span>    ];</span></span>
<span class="line"><span>    var currentRssIndex = 0;</span></span>
<span class="line"><span>    var currentRssItemIndex = 0;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    function fetchRssItems(url) {</span></span>
<span class="line"><span>      fetch(&#39;https://api.rss2json.com/v1/api.json?rss_url=&#39; + encodeURIComponent(url))</span></span>
<span class="line"><span>        .then(response =&gt; response.json())</span></span>
<span class="line"><span>        .then(data =&gt; {</span></span>
<span class="line"><span>          rssItem.innerHTML = &#39;&#39;; // 清空之前的RSS项</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          var rssLink = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span>          rssLink.classList.add(&#39;rss-link&#39;);</span></span>
<span class="line"><span>          var item = data.items[currentRssItemIndex];</span></span>
<span class="line"><span>          var pubDate = new Date(item.pubDate);</span></span>
<span class="line"><span>          var formattedDate = pubDate.toLocaleDateString();</span></span>
<span class="line"><span>          rssLink.innerHTML = \`&lt;a href=&quot;\${item.link}&quot; target=&quot;_blank&quot;&gt;\${item.title} - \${formattedDate}&lt;/a&gt;\`;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          rssItem.appendChild(rssLink);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>          currentRssItemIndex = (currentRssItemIndex + 1) % data.items.length;</span></span>
<span class="line"><span>          if (currentRssItemIndex === 0) {</span></span>
<span class="line"><span>            currentRssIndex = (currentRssIndex + 1) % rssSources.length;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 获取并解析所有RSS信息源的数据</span></span>
<span class="line"><span>    rssSources.forEach(source =&gt; {</span></span>
<span class="line"><span>      fetchRssItems(source);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 页面载入后延迟2秒后弹出效果</span></span>
<span class="line"><span>    setTimeout(function() {</span></span>
<span class="line"><span>      rssContainer.classList.add(&#39;open&#39;);</span></span>
<span class="line"><span>    }, 2000);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 点击关闭按钮后隐藏容器</span></span>
<span class="line"><span>    var closeButton = document.getElementById(&#39;close-button&#39;);</span></span>
<span class="line"><span>    closeButton.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>      rssContainer.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 每隔8秒变换一次信息</span></span>
<span class="line"><span>    setInterval(function() {</span></span>
<span class="line"><span>      fetchRssItems(rssSources[currentRssIndex]);</span></span>
<span class="line"><span>    }, 8000);</span></span></code></pre></div><p>rss.css：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>     /* noise主页rss-CSS样式 */</span></span>
<span class="line"><span>     .rss-container {</span></span>
<span class="line"><span>      display: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @media only screen and (min-width: 600px) {</span></span>
<span class="line"><span>      .rss-container {</span></span>
<span class="line"><span>        position: fixed;</span></span>
<span class="line"><span>        top: 70%;</span></span>
<span class="line"><span>        right: -500px;</span></span>
<span class="line"><span>        transform: translateY(-50%);</span></span>
<span class="line"><span>        width: 180px;</span></span>
<span class="line"><span>        background-color: rgba(0, 0, 0, 0.643);</span></span>
<span class="line"><span>        padding: 13px;</span></span>
<span class="line"><span>        border-radius: 10px 0 0 10px;</span></span>
<span class="line"><span>        transition: right 0.3s ease-in-out;</span></span>
<span class="line"><span>        z-index: 300;</span></span>
<span class="line"><span>        color: white;</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>        display: block;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .rss-container.open {</span></span>
<span class="line"><span>        right: 0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .rss-title {</span></span>
<span class="line"><span>        font-size: 13px;</span></span>
<span class="line"><span>        font-weight: bold;</span></span>
<span class="line"><span>        margin-bottom: 10px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      .rss-item {</span></span>
<span class="line"><span>        margin-bottom: 10px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      /* 修改选择器为 .rss-link a */</span></span>
<span class="line"><span>      .rss-link a {</span></span>
<span class="line"><span>        font-size: 13px;</span></span>
<span class="line"><span>        margin-bottom: 2px;</span></span>
<span class="line"><span>        color: white;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      /* 添加关闭按钮样式 */</span></span>
<span class="line"><span>      .close-button {</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        top: 5px;</span></span>
<span class="line"><span>        right: 2px;</span></span>
<span class="line"><span>        cursor: pointer;</span></span>
<span class="line"><span>        color: white;</span></span>
<span class="line"><span>        font-size: 12px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="预览" tabindex="-1">预览： <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览：&quot;">​</a></h2><p>访问；<a href="https://www.noisework.cn" target="_blank" rel="noreferrer">https://www.noisework.cn</a></p><h2 id="附加" tabindex="-1">附加： <a class="header-anchor" href="#附加" aria-label="Permalink to &quot;附加：&quot;">​</a></h2><p>因其rss2json有api更新限制，你可以使用以下代码来获取自己账户下的rss更新显示</p><p>rss.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// JavaScript代码-rss</span></span>
<span class="line"><span>var rssContainer = document.querySelector(&#39;.rss-container&#39;);</span></span>
<span class="line"><span>var rssItem = document.getElementById(&#39;rss-item&#39;);</span></span>
<span class="line"><span>var rssSources = [</span></span>
<span class="line"><span>&#39;https://www.noiseblog.top/atom.xml&#39;,</span></span>
<span class="line"><span>&#39;https://noisevip.cn/feed&#39;,</span></span>
<span class="line"><span>// 添加更多的RSS信息源</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>var currentRssIndex = 0;</span></span>
<span class="line"><span>var currentRssItemIndex = 0;</span></span>
<span class="line"><span>var apiKey = &#39;YOUR_API_KEY&#39;; // 替换为你的API密钥</span></span>
<span class="line"><span>var lastUpdateTimes = {}; // 记录每个RSS源的最后更新时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function fetchRssItems(url) {</span></span>
<span class="line"><span>fetch(\`https://api.rss2json.com/v1/api.json?rss_url=\${encodeURIComponent(url)}&amp;api_key=\${apiKey}\`)</span></span>
<span class="line"><span>.then(response =&gt; response.json())</span></span>
<span class="line"><span>.then(data =&gt; {</span></span>
<span class="line"><span>rssItem.innerHTML = &#39;&#39;; // 清空之前的RSS项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var rssLink = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span>rssLink.classList.add(&#39;rss-link&#39;);</span></span>
<span class="line"><span>var item = data.items[currentRssItemIndex];</span></span>
<span class="line"><span>var pubDate = new Date(item.pubDate);</span></span>
<span class="line"><span>var formattedDate = pubDate.toLocaleDateString();</span></span>
<span class="line"><span>rssLink.innerHTML = \`&lt;a href=&quot;\${item.link}&quot; target=&quot;_blank&quot;&gt;\${item.title} - \${formattedDate}&lt;/a&gt;\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rssItem.appendChild(rssLink);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>currentRssItemIndex = (currentRssItemIndex + 1) % data.items.length;</span></span>
<span class="line"><span>if (currentRssItemIndex === 0) {</span></span>
<span class="line"><span>currentRssIndex = (currentRssIndex + 1) % rssSources.length;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取并解析所有RSS信息源的数据</span></span>
<span class="line"><span>rssSources.forEach(source =&gt; {</span></span>
<span class="line"><span>fetchRssItems(source);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 页面载入后延迟2秒后弹出效果</span></span>
<span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span>rssContainer.classList.add(&#39;open&#39;);</span></span>
<span class="line"><span>}, 2000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 点击关闭按钮后隐藏容器</span></span>
<span class="line"><span>var closeButton = document.getElementById(&#39;close-button&#39;);</span></span>
<span class="line"><span>closeButton.addEventListener(&#39;click&#39;, function() {</span></span>
<span class="line"><span>rssContainer.style.display = &#39;none&#39;;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 每隔8秒变换一次信息</span></span>
<span class="line"><span>setInterval(function() {</span></span>
<span class="line"><span>fetchRssItems(rssSources[currentRssIndex]);</span></span>
<span class="line"><span>}, 8000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定时检查RSS源是否有更新</span></span>
<span class="line"><span>setInterval(function() {</span></span>
<span class="line"><span>rssSources.forEach(source =&gt; {</span></span>
<span class="line"><span>fetch(\`https://api.rss2json.com/v1/api.json?rss_url=\${encodeURIComponent(source)}&amp;api_key=\${apiKey}\`)</span></span>
<span class="line"><span>.then(response =&gt; response.json())</span></span>
<span class="line"><span>.then(data =&gt; {</span></span>
<span class="line"><span>var latestItem = data.items[0];</span></span>
<span class="line"><span>var pubDate = new Date(latestItem.pubDate);</span></span>
<span class="line"><span>if (!lastUpdateTimes[source] || pubDate &gt; lastUpdateTimes[source]) {</span></span>
<span class="line"><span>// 有新的更新，立即刷新显示最新信息</span></span>
<span class="line"><span>fetchRssItems(source);</span></span>
<span class="line"><span>// 更新最后更新时间</span></span>
<span class="line"><span>lastUpdateTimes[source] = pubDate;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>}, 3600000); // 每隔1小时检查一次RSS源是否有更新</span></span></code></pre></div><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722269229303.png" alt="1722269229303"></p>`,18),t=[l];function i(c,r,o,d,u,m){return a(),n("div",null,t)}const v=s(e,[["render",i]]);export{g as __pageData,v as default};
