import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const h=JSON.parse('{"title":"轮播相册","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/photo.md","filePath":"guide/home/photo.md"}'),e={name:"guide/home/photo.md"},t=p(`<h1 id="轮播相册" tabindex="-1">轮播相册 <a class="header-anchor" href="#轮播相册" aria-label="Permalink to &quot;轮播相册&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/ph.png" alt="ph"></p><p>该组件为本地引入图片并嵌入到下方容器实现循环往返式轮播</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>HTML中代码为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;projectItemRightimg&quot;&gt;</span></span>
<span class="line"><span>					&lt;img data-src=&quot;assets/1ae.gif&quot; id=&quot;img-1&quot; alt=&quot;description&quot;&gt;</span></span>
<span class="line"><span>					&lt;img data-src=&quot;assets/2ae.gif&quot; id=&quot;img-1&quot; alt=&quot;description&quot;&gt;</span></span>
<span class="line"><span>					&lt;img data-src=&quot;assets/3ae.gif&quot; id=&quot;img-1&quot; alt=&quot;description&quot;&gt;</span></span>
<span class="line"><span>					&lt;img data-src=&quot;assets/4ae.gif&quot; id=&quot;img-1&quot; alt=&quot;description&quot;&gt;</span></span>
<span class="line"><span>					&lt;img data-src=&quot;assets/5ae.gif&quot; id=&quot;img-1&quot; alt=&quot;description&quot;&gt;</span></span>
<span class="line"><span>					&lt;img data-src=&quot;assets/6ae.gif&quot; id=&quot;img-1&quot; alt=&quot;description&quot;&gt;</span></span>
<span class="line"><span>				&lt;/div&gt;</span></span></code></pre></div><p>css部分为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.projectItemRightimg { </span></span>
<span class="line"><span>    transition: width 0.4s ease;</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    backdrop-filter: blur(10px);</span></span>
<span class="line"><span>    background: rgba(20, 20, 20, 0.396);</span></span>
<span class="line"><span>    height: 120px; /* 设置一个合适的高度，或者根据需要自动调整 */</span></span>
<span class="line"><span>    max-width: 99%;</span></span>
<span class="line"><span>    overflow: hidden; /* 隐藏超出容器的内容 */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  #img-1 {</span></span>
<span class="line"><span>    max-width: 100%;</span></span>
<span class="line"><span>    max-height: 100%;</span></span>
<span class="line"><span>    margin-right: 6px; /* 添加右侧间隔 */</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>JS代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const projectItemRightimg = document.querySelector(&#39;.projectItemRightimg&#39;);</span></span>
<span class="line"><span>const img = document.getElementById(&#39;img-1&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 克隆第一张图片并添加到末尾以实现循环效果</span></span>
<span class="line"><span>const firstImg = projectItemRightimg.firstElementChild.cloneNode(true);</span></span>
<span class="line"><span>projectItemRightimg.appendChild(firstImg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let startX = 0;</span></span>
<span class="line"><span>let scrollLeft = 0;</span></span>
<span class="line"><span>let autoScrollInterval = null;</span></span>
<span class="line"><span>const autoScrollSpeed = 0.5; // 调整自动滑动的速度，值越小滑动越慢</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleMouseDown(e) {</span></span>
<span class="line"><span>    e.preventDefault();</span></span>
<span class="line"><span>    startX = e.pageX - projectItemRightimg.offsetLeft;</span></span>
<span class="line"><span>    scrollLeft = projectItemRightimg.scrollLeft;</span></span>
<span class="line"><span>    document.addEventListener(&#39;mousemove&#39;, handleMouseMove);</span></span>
<span class="line"><span>    document.addEventListener(&#39;mouseup&#39;, handleMouseUp);</span></span>
<span class="line"><span>    document.addEventListener(&#39;mouseleave&#39;, handleMouseUp);</span></span>
<span class="line"><span>    stopAutoScroll(); // 当用户开始手动滑动时，停止自动滑动</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleMouseMove(e) {</span></span>
<span class="line"><span>    const x = e.pageX - projectItemRightimg.offsetLeft;</span></span>
<span class="line"><span>    const walk = (x - startX) * 3; // 滑动速度</span></span>
<span class="line"><span>    projectItemRightimg.scrollLeft = scrollLeft - walk;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleMouseUp() {</span></span>
<span class="line"><span>    document.removeEventListener(&#39;mousemove&#39;, handleMouseMove);</span></span>
<span class="line"><span>    document.removeEventListener(&#39;mouseup&#39;, handleMouseUp);</span></span>
<span class="line"><span>    document.removeEventListener(&#39;mouseleave&#39;, handleMouseUp);</span></span>
<span class="line"><span>    startAutoScroll(); // 当用户停止手动滑动时，重新开始自动滑动</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleTouchStart(e) {</span></span>
<span class="line"><span>    startX = e.touches[0].pageX - projectItemRightimg.offsetLeft;</span></span>
<span class="line"><span>    scrollLeft = projectItemRightimg.scrollLeft;</span></span>
<span class="line"><span>    stopAutoScroll(); // 当用户开始触摸滑动时，停止自动滑动</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleTouchMove(e) {</span></span>
<span class="line"><span>    e.preventDefault();</span></span>
<span class="line"><span>    const x = e.touches[0].pageX - projectItemRightimg.offsetLeft;</span></span>
<span class="line"><span>    const walk = (x - startX) * 3; // 滑动速度</span></span>
<span class="line"><span>    projectItemRightimg.scrollLeft = scrollLeft - walk;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function startAutoScroll() {</span></span>
<span class="line"><span>    autoScrollInterval = setInterval(() =&gt; {</span></span>
<span class="line"><span>        projectItemRightimg.scrollLeft += autoScrollSpeed;</span></span>
<span class="line"><span>        // 检查是否滚动到了克隆的图片区域，这里减去2是位移的缓冲</span></span>
<span class="line"><span>        if (projectItemRightimg.scrollLeft &gt;= projectItemRightimg.scrollWidth - projectItemRightimg.clientWidth - 2) {</span></span>
<span class="line"><span>            // 如果滚动到了克隆的图片，立即返回到正确的位置</span></span>
<span class="line"><span>            projectItemRightimg.scrollLeft = 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }, 16); //大约每秒60帧</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function stopAutoScroll() {</span></span>
<span class="line"><span>    if (autoScrollInterval) {</span></span>
<span class="line"><span>        clearInterval(autoScrollInterval);</span></span>
<span class="line"><span>        autoScrollInterval = null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 懒加载功能</span></span>
<span class="line"><span>function lazyLoad() {</span></span>
<span class="line"><span>    const lazyImages = document.querySelectorAll(&#39;img[data-src]&#39;);</span></span>
<span class="line"><span>    const config = {</span></span>
<span class="line"><span>        root: null,</span></span>
<span class="line"><span>        rootMargin: &#39;0px&#39;,</span></span>
<span class="line"><span>        threshold: 0.1</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let observer = new IntersectionObserver((entries, self) =&gt; {</span></span>
<span class="line"><span>        entries.forEach(entry =&gt; {</span></span>
<span class="line"><span>            if (entry.isIntersecting) {</span></span>
<span class="line"><span>                let img = entry.target;</span></span>
<span class="line"><span>                img.src = img.dataset.src;</span></span>
<span class="line"><span>                img.removeAttribute(&#39;data-src&#39;);</span></span>
<span class="line"><span>                self.unobserve(img);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }, config);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    lazyImages.forEach(image =&gt; {</span></span>
<span class="line"><span>        observer.observe(image);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化懒加载</span></span>
<span class="line"><span>document.addEventListener(&#39;DOMContentLoaded&#39;, lazyLoad);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加事件监听器</span></span>
<span class="line"><span>projectItemRightimg.addEventListener(&#39;mousedown&#39;, handleMouseDown);</span></span>
<span class="line"><span>projectItemRightimg.addEventListener(&#39;touchstart&#39;, handleTouchStart);</span></span>
<span class="line"><span>projectItemRightimg.addEventListener(&#39;touchmove&#39;, handleTouchMove);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开始自动滑动</span></span>
<span class="line"><span>startAutoScroll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 图片弹出监听</span></span>
<span class="line"><span>function pop(imgPath) {</span></span>
<span class="line"><span>    document.getElementById(&#39;popupImage&#39;).src = imgPath;</span></span>
<span class="line"><span>    document.getElementById(&#39;imagePopup&#39;).style.display = &#39;block&#39;;</span></span>
<span class="line"><span>    document.getElementById(&#39;imagePopup&#39;).addEventListener(&#39;click&#39;, closePopup);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function closePopup() {</span></span>
<span class="line"><span>    document.getElementById(&#39;imagePopup&#39;).style.display = &#39;none&#39;;</span></span>
<span class="line"><span>    document.getElementById(&#39;imagePopup&#39;).removeEventListener(&#39;click&#39;, closePopup);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,10),l=[t];function i(c,o,r,u,d,g){return a(),n("div",null,l)}const f=s(e,[["render",i]]);export{h as __pageData,f as default};
