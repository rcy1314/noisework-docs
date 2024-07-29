import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const m=JSON.parse('{"title":"右键弹出菜单","description":"","frontmatter":{},"headers":[],"relativePath":"guide/right/index.md","filePath":"guide/right/index.md"}'),t={name:"guide/right/index.md"},l=p(`<h1 id="右键弹出菜单" tabindex="-1">右键弹出菜单 <a class="header-anchor" href="#右键弹出菜单" aria-label="Permalink to &quot;右键弹出菜单&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/right.png" alt="right"></p><p>该组件为右键任意位置呼出菜单来实现进一步的交互，可自定义化</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>需要引入Right.js、Right.css</p><p>Right.js代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.onload = () =&gt; {</span></span>
<span class="line"><span>    const menu = document.querySelector(&#39;.menu&#39;)</span></span>
<span class="line"><span>    const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)[&#39;paddingTop&#39;]) - parseInt(getComputedStyle(menu)[&#39;paddingBottom&#39;])</span></span>
<span class="line"><span>    menu.style.height = &#39;0&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    openMenu = e =&gt; {</span></span>
<span class="line"><span>        e.preventDefault()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        menu.style.left = \`\${e.clientX}px\`</span></span>
<span class="line"><span>        menu.style.top = \`\${e.clientY + 5}px\`</span></span>
<span class="line"><span>        menu.style.height = \`\${menuHeight}px\`</span></span>
<span class="line"><span>        menu.classList.add(&#39;is-active&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    colseMenu = () =&gt; {</span></span>
<span class="line"><span>        menu.style.height = &#39;0&#39;</span></span>
<span class="line"><span>        menu.classList.remove(&#39;is-active&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    window.onclick = () =&gt; colseMenu()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let isFullScreen = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function toggleFullScreen() {</span></span>
<span class="line"><span>        if (!isFullScreen) {</span></span>
<span class="line"><span>            if (document.documentElement.requestFullscreen) {</span></span>
<span class="line"><span>                document.documentElement.requestFullscreen();</span></span>
<span class="line"><span>            } else if (document.documentElement.mozRequestFullScreen) {</span></span>
<span class="line"><span>                document.documentElement.mozRequestFullScreen();</span></span>
<span class="line"><span>            } else if (document.documentElement.webkitRequestFullscreen) {</span></span>
<span class="line"><span>                document.documentElement.webkitRequestFullscreen();</span></span>
<span class="line"><span>            } else if (document.documentElement.msRequestFullscreen) {</span></span>
<span class="line"><span>                document.documentElement.msRequestFullscreen();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            isFullScreen = true;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            if (document.exitFullscreen) {</span></span>
<span class="line"><span>                document.exitFullscreen();</span></span>
<span class="line"><span>            } else if (document.mozCancelFullScreen) {</span></span>
<span class="line"><span>                document.mozCancelFullScreen();</span></span>
<span class="line"><span>            } else if (document.webkitExitFullscreen) {</span></span>
<span class="line"><span>                document.webkitExitFullscreen();</span></span>
<span class="line"><span>            } else if (document.msExitFullscreen) {</span></span>
<span class="line"><span>                document.msExitFullscreen();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            isFullScreen = false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function copyContent() {</span></span>
<span class="line"><span>        const textToCopy = document.documentElement.innerHTML;</span></span>
<span class="line"><span>        navigator.clipboard.writeText(textToCopy)</span></span>
<span class="line"><span>            .then(() =&gt; {</span></span>
<span class="line"><span>                console.log(&#39;Text copied to clipboard&#39;);</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            .catch((error) =&gt; {</span></span>
<span class="line"><span>                console.error(&#39;Failed to copy text:&#39;, error);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function refreshPage() {</span></span>
<span class="line"><span>        location.reload();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function goBack() {</span></span>
<span class="line"><span>        window.history.back();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function changeMode() {</span></span>
<span class="line"><span>        // Your code to change the mode goes here</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function showImage() {</span></span>
<span class="line"><span>        var overlay = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>        overlay.style.position = &quot;fixed&quot;;</span></span>
<span class="line"><span>        overlay.style.top = &quot;0&quot;;</span></span>
<span class="line"><span>        overlay.style.left = &quot;0&quot;;</span></span>
<span class="line"><span>        overlay.style.width = &quot;100%&quot;;</span></span>
<span class="line"><span>        overlay.style.height = &quot;100%&quot;;</span></span>
<span class="line"><span>        overlay.style.backgroundColor = &quot;rgba(0, 0, 0, 0.5)&quot;;</span></span>
<span class="line"><span>        overlay.style.zIndex = &quot;9999&quot;;</span></span>
<span class="line"><span>        overlay.onclick = function() {</span></span>
<span class="line"><span>            document.body.removeChild(overlay);</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var image = document.createElement(&quot;img&quot;);</span></span>
<span class="line"><span>        image.src = &quot;https://jsd.cdn.zzko.cn/gh/rcy1314/tuchuang@main/uPic/weixin.png&quot;;</span></span>
<span class="line"><span>        image.style.position = &quot;absolute&quot;;</span></span>
<span class="line"><span>        image.style.top = &quot;50%&quot;;</span></span>
<span class="line"><span>        image.style.left = &quot;50%&quot;;</span></span>
<span class="line"><span>        image.style.transform = &quot;translate(-50%, -50%)&quot;;</span></span>
<span class="line"><span>        image.style.maxWidth = &quot;90%&quot;;</span></span>
<span class="line"><span>        image.style.maxHeight = &quot;90%&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        overlay.appendChild(image);</span></span>
<span class="line"><span>        document.body.appendChild(overlay);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>Right.css代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* {</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>    padding: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu {</span></span>
<span class="line"><span>    position: fixed; /* 修改此处从absolute更改为fixed */</span></span>
<span class="line"><span>    width: 88px;</span></span>
<span class="line"><span>    padding: 4px;</span></span>
<span class="line"><span>    box-shadow: 0 1px 4px rgba(33, 33, 33, 0.846), 0 8px 24px rgba(5, 5, 5, 0.859);</span></span>
<span class="line"><span>    border-radius: 10px;</span></span>
<span class="line"><span>    background: rgba(19, 19, 19, 0.802);</span></span>
<span class="line"><span>    opacity: 0;</span></span>
<span class="line"><span>    visibility: hidden;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    transition: opacity .2s ease, height .3s ease, visibility .3s ease;</span></span>
<span class="line"><span>    z-index: 999999; /* 保持菜单在顶层 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.is-active {</span></span>
<span class="line"><span>    opacity: 1;</span></span>
<span class="line"><span>    visibility: visible;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-list01 {</span></span>
<span class="line"><span>    list-style: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-item {</span></span>
<span class="line"><span>    line-height: 22px;</span></span>
<span class="line"><span>    color: #f0f1f7;</span></span>
<span class="line"><span>    font-size: 16px;</span></span>
<span class="line"><span>    border-radius: 5px;</span></span>
<span class="line"><span>    padding: 8px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: flex-start;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    transition: background .3s ease;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-item:hover {</span></span>
<span class="line"><span>    background: #127de7f7;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-item svg {</span></span>
<span class="line"><span>    margin-right: 8px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-item-divider {</span></span>
<span class="line"><span>    height: 1px;</span></span>
<span class="line"><span>    margin: 4px 8px;</span></span>
<span class="line"><span>    background: #f5f5f6;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-item-danger {</span></span>
<span class="line"><span>    color: #f94a05f7;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-item-danger svg path {</span></span>
<span class="line"><span>    fill: #ee7f7f;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-item svg path {</span></span>
<span class="line"><span>    fill: #f3f5f8;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.menu-item-danger:hover {</span></span>
<span class="line"><span>    background: #b32c2c95;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>html中需要在body中引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;!-- 右键菜单 --&gt;</span></span>
<span class="line"><span>	 &lt;body oncontextmenu=&quot;openMenu(event)&quot;&gt;</span></span>
<span class="line"><span>		&lt;div class=&quot;menu&quot;&gt;</span></span>
<span class="line"><span>			&lt;ul class=&quot;menu-list01&quot;&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item&quot;&gt;</span></span>
<span class="line"><span>					&lt;a href=&quot;https://www.noisework.cn/e/zhichi/&quot; target=&quot;_blank&quot; style=&quot;color: white; text-decoration: none;&quot;&gt;</span></span>
<span class="line"><span>						&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;16&quot; width=&quot;16&quot; viewBox=&quot;0 0 512 512&quot;&gt;</span></span>
<span class="line"><span>							&lt;path d=&quot;M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z&quot;/&gt;</span></span>
<span class="line"><span>						&lt;/svg&gt;</span></span>
<span class="line"><span>						&lt;span style=&quot;margin-left: -4px;&quot;&gt;赞赏&lt;/span&gt;</span></span>
<span class="line"><span>					&lt;/a&gt;</span></span>
<span class="line"><span>				&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item&quot; onclick=&quot;toggleFullScreen()&quot;&gt;</span></span>
<span class="line"><span>					&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;16&quot; width=&quot;16&quot; viewBox=&quot;0 0 512 512&quot;&gt;</span></span>
<span class="line"><span>						&lt;path d=&quot;M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z&quot;/&gt;</span></span>
<span class="line"><span>					&lt;/svg&gt;</span></span>
<span class="line"><span>					&lt;span style=&quot;margin-left: 2px;&quot;&gt;全屏&lt;/span&gt;</span></span>
<span class="line"><span>				&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item&quot; onclick=&quot;refreshPage()&quot;&gt;</span></span>
<span class="line"><span>					&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;16&quot; width=&quot;16&quot; viewBox=&quot;0 0 512 512&quot;&gt;&lt;path d=&quot;M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z&quot;/&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>					&lt;span style=&quot;margin-left: 2.3px;&quot;&gt;刷新&lt;/span&gt;</span></span>
<span class="line"><span>				&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item&quot; onclick=&quot;goBack()&quot;&gt;</span></span>
<span class="line"><span>					&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;16&quot; width=&quot;14&quot; viewBox=&quot;0 0 448 512&quot;&gt;&lt;path d=&quot;M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z&quot;/&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>					&lt;span style=&quot;margin-left: 2.7px;&quot;&gt;返回&lt;/span&gt;</span></span>
<span class="line"><span>				&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item&quot; onclick=&quot;changeMode()&quot;&gt;</span></span>
<span class="line"><span>					&lt;a href=&quot;./index.html&quot; style=&quot;color: white; text-decoration: none;&quot;&gt;</span></span>
<span class="line"><span>						&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;16&quot; width=&quot;16&quot; viewBox=&quot;0 0 512 512&quot;&gt;&lt;path d=&quot;M258.6 0c-1.7 0-3.4 .1-5.1 .5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224H29.4C13.2 224 0 237.2 0 253.4c0 1.7 .1 3.4 .5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480v2.6c0 16.2 13.2 29.4 29.4 29.4c1.7 0 3.4-.1 5.1-.5C344 495 396.4 409.7 381.5 322.7c-2.9-17-8.4-32.9-15.9-47.4L480 288h2.6c16.2 0 29.4-13.2 29.4-29.4c0-1.7-.1-3.4-.5-5.1C495 168 409.7 115.6 322.7 130.5c-17 2.9-32.9 8.4-47.4 15.9L288 32V29.4C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z&quot;/&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>						&lt;span style=&quot;margin-left: -4.5px;&quot;&gt;模式&lt;/span&gt;</span></span>
<span class="line"><span>					&lt;/a&gt;</span></span>
<span class="line"><span>				&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item&quot;&gt;</span></span>
<span class="line"><span>					&lt;a href=&quot;./lianxi/index.html&quot; target=&quot;_blank&quot; style=&quot;color: white; text-decoration: none;&quot;&gt;</span></span>
<span class="line"><span>						&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;16&quot; width=&quot;18&quot; viewBox=&quot;0 0 576 512&quot;&gt;</span></span>
<span class="line"><span>							&lt;path d=&quot;M385.2 167.6c6.4 0 12.6 .3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 .1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 .1 10-9.9 19.6-24.4 19.6z&quot;/&gt;</span></span>
<span class="line"><span>						&lt;/svg&gt;</span></span>
<span class="line"><span>						&lt;span style=&quot;margin-left: -4.5px;&quot;&gt;联系&lt;/span&gt;</span></span>
<span class="line"><span>					&lt;/a&gt;</span></span>
<span class="line"><span>				&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item&quot;&gt;</span></span>
<span class="line"><span>					&lt;a href=&quot;https://github.com/rcy1314/noisework&quot; target=&quot;_blank&quot; style=&quot;color: white; text-decoration: none;&quot;&gt;</span></span>
<span class="line"><span>						&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;16&quot; width=&quot;16&quot; viewBox=&quot;0 0 512 512&quot;&gt;&lt;path d=&quot;M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z&quot;/&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>						&lt;span style=&quot;margin-left: -4.5px;&quot;&gt;主题&lt;/span&gt;</span></span>
<span class="line"><span>					&lt;/a&gt;</span></span>
<span class="line"><span>				&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item-divider&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;li class=&quot;menu-item menu-item-danger&quot;&gt;</span></span>
<span class="line"><span>					&lt;a href=&quot;#&quot; style=&quot;color: white; text-decoration: none;&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span>					&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; height=&quot;16&quot; width=&quot;16&quot; viewBox=&quot;0 0 512 512&quot;&gt;&lt;path d=&quot;M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z&quot;/&gt;&lt;/svg&gt;</span></span>
<span class="line"><span>					&lt;span style=&quot;margin-left: 2px;&quot;&gt;关闭&lt;/span&gt;</span></span>
<span class="line"><span>				&lt;/li&gt;</span></span>
<span class="line"><span>			&lt;/ul&gt;</span></span>
<span class="line"><span>		&lt;/div&gt;</span></span></code></pre></div><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><p>需要注意的是要保证菜单选项必须位于最上层，且不被其它元素干扰</p><p>SVG可自定义引入，还需要注意的一点是我在引入不同的svg图标时发现大小不一，所以在菜单文字和图标的位置上我做了进一步的修改，如果你修改了图标请留意下css中的位置大小数值</p>`,14),e=[l];function i(c,o,u,g,r,q){return a(),s("div",null,e)}const h=n(t,[["render",i]]);export{m as __pageData,h as default};
