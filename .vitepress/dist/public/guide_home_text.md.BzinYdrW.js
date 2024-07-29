import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const q=JSON.parse('{"title":"弹出文字通告","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/text.md","filePath":"guide/home/text.md"}'),e={name:"guide/home/text.md"},t=p(`<h1 id="弹出文字通告" tabindex="-1">弹出文字通告 <a class="header-anchor" href="#弹出文字通告" aria-label="Permalink to &quot;弹出文字通告&quot;">​</a></h1><p>该效果位于右侧最上方，默认按顺序显示你想表达的通知文字并循环弹入弹出</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>需要在html中引入Text.js、Text.css</p><p>其中Text.js代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>document.addEventListener(&quot;DOMContentLoaded&quot;, function() {</span></span>
<span class="line"><span>  // 获取弹出框元素</span></span>
<span class="line"><span>  var popup = document.querySelector(&quot;.popup&quot;);</span></span>
<span class="line"><span>  var popupText = document.getElementById(&quot;popupText&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 定义要显示的文字列表</span></span>
<span class="line"><span>  var texts = [&quot;📢：主页已更新&quot;,&quot;🔔：可切换模式风格&quot;,&quot;😃&quot;,&quot;😯&quot;,&quot;🤔&quot;,&quot;🥳&quot;,&quot;🥺&quot;];</span></span>
<span class="line"><span>  var currentIndex = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 更新弹出框文字内容</span></span>
<span class="line"><span>  function updatePopupText() {</span></span>
<span class="line"><span>      popupText.innerHTML = texts[currentIndex];</span></span>
<span class="line"><span>      currentIndex = (currentIndex + 1) % texts.length;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 初始更新文字内容</span></span>
<span class="line"><span>  updatePopupText();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 弹出框弹入</span></span>
<span class="line"><span>  function showPopup() {</span></span>
<span class="line"><span>      popup.style.top = &quot;20px&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 弹出框弹出</span></span>
<span class="line"><span>  function hidePopup() {</span></span>
<span class="line"><span>      popup.style.top = &quot;-100px&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 每隔4秒更新文字内容并弹出</span></span>
<span class="line"><span>  setInterval(function() {</span></span>
<span class="line"><span>      showPopup();</span></span>
<span class="line"><span>      setTimeout(function() {</span></span>
<span class="line"><span>          hidePopup();</span></span>
<span class="line"><span>      }, 3000); // 弹出时间为3秒</span></span>
<span class="line"><span>      updatePopupText(); // 更新文字内容</span></span>
<span class="line"><span>  }, 4000); // 设置时间间隔为4秒</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>Text.css代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.popup {</span></span>
<span class="line"><span>  position: fixed;</span></span>
<span class="line"><span>  top: -100px;</span></span>
<span class="line"><span>  right: 20px;</span></span>
<span class="line"><span>  background-color: rgba(0, 0, 0, 0.555);</span></span>
<span class="line"><span>  color: #fff;</span></span>
<span class="line"><span>  padding: 10px;</span></span>
<span class="line"><span>  border-radius: 10px;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  transition: top 0.5s ease-in-out;</span></span>
<span class="line"><span>  z-index: 200; /* 显示图层 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.popup p {</span></span>
<span class="line"><span>  margin: 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>核心为Text.js</p>`,9),l=[t];function i(o,c,u,d,r,h){return a(),s("div",null,l)}const _=n(e,[["render",i]]);export{q as __pageData,_ as default};
