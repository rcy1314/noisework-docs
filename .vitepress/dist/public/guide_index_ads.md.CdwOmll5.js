import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const g=JSON.parse('{"title":"广告位概述","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index/ads.md","filePath":"guide/index/ads.md"}'),l={name:"guide/index/ads.md"},e=p(`<h1 id="广告位概述" tabindex="-1">广告位概述 <a class="header-anchor" href="#广告位概述" aria-label="Permalink to &quot;广告位概述&quot;">​</a></h1><p>该效果位于右上方，默认3秒后弹出并随机加载图文，点击后可进入链接</p><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722268839202.png" alt="1722268839202"></p><h2 id="特征" tabindex="-1">特征 <a class="header-anchor" href="#特征" aria-label="Permalink to &quot;特征&quot;">​</a></h2><ul><li>页面加载2.5秒后自动从右侧弹出</li><li>每隔8秒更换展示</li><li>广告位分组简化且随机循环切换</li><li>带有关闭按钮，点击后即可关闭</li><li>仅在电脑端尺寸下显示，手机端自动隐藏</li></ul><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>需要引入AD.js和AD.css</p><p>其中AD.js为主要，代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 广告位</span></span>
<span class="line"><span>// 广告数组</span></span>
<span class="line"><span>var ads = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230818/11宝.5gadu623kd00.jpg&quot;,</span></span>
<span class="line"><span>    link: &quot;https://noisevip.cn&quot;,</span></span>
<span class="line"><span>    description: &quot;包罗万象-Noise宝藏阁&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E8%B6%85%E5%A4%A7%E6%B5%81%E9%87%8F%E5%8D%A1.png&quot;,</span></span>
<span class="line"><span>    link: &quot;https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=422648&quot;,</span></span>
<span class="line"><span>    description: &quot;超大流量卡优惠办理渠道2&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1704116804-98dd36fd8711e66.png&quot;,</span></span>
<span class="line"><span>    link: &quot;https://www.aipaperpass.com?pic=mLnw&quot;,</span></span>
<span class="line"><span>    description: &quot;AI一键论文-AIPaperPass&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E8%B6%85%E5%A4%A7%E6%B5%81.png&quot;,</span></span>
<span class="line"><span>    link: &quot;https://simhaoka.com/phone/index?id=A7BA17EFD6DC47F6826F0C67B898725A&quot;,</span></span>
<span class="line"><span>    description: &quot;超大流量卡优惠办理手机渠道1&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1689175720-6446d860dbbfe54.png&quot;,</span></span>
<span class="line"><span>    link: &quot;https://www.duomexing.com&quot;,</span></span>
<span class="line"><span>    description: &quot;多么行-AI数字化模型扩展&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/919.png&quot;,</span></span>
<span class="line"><span>    link: &quot;https://www.noisework.cn/soso&quot;,</span></span>
<span class="line"><span>    description: &quot;书签检索-bookmark&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1707542539504.png&quot;,</span></span>
<span class="line"><span>    link: &quot;https://xinghuo.xfyun.cn&quot;,</span></span>
<span class="line"><span>    description: &quot;讯飞星火大模型&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E8%B6%85%E5%A4%A7%E6%B5%81%E9%87%8F%E5%8D%A1.png&quot;,</span></span>
<span class="line"><span>    link: &quot;https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=422648&quot;,</span></span>
<span class="line"><span>    description: &quot;超大流量卡优惠办理渠道2&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/6%20Exercises%20to%20Overcome%20Skill%20Plateaus%20as%20a%20Designer.jpeg&quot;,</span></span>
<span class="line"><span>    link: &quot;https://www.noisework.cn&quot;,</span></span>
<span class="line"><span>    description: &quot;广告位+点击可查看&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230818/2321312.1o5qd8jb6elc.jpg&quot;,</span></span>
<span class="line"><span>    link: &quot;https://www.noisedh.cn&quot;,</span></span>
<span class="line"><span>    description: &quot;超量收录-Noise导航&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E6%A0%AA%E3%82%AD%E3%82%99%E3%83%A3%E3%83%AB%20on%20X.jpeg&quot;,</span></span>
<span class="line"><span>    link: &quot;https://www.noisework.cn&quot;,</span></span>
<span class="line"><span>    description: &quot;广告位+点击可查看&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1695139067-c4ca4238a0b9238.png&quot;,</span></span>
<span class="line"><span>    link: &quot;https://aigc.yizhentv.com/?_f=nobaibao&quot;,</span></span>
<span class="line"><span>    description: &quot;AI视频创作神器一帧秒创&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    image: &quot;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%F0%9D%95%9E%F0%9D%95%A0%F0%9D%95%A6%F0%9D%95%A6%F0%9D%95%9F.jpeg&quot;,</span></span>
<span class="line"><span>    link: &quot;https://www.noisework.cn&quot;,</span></span>
<span class="line"><span>    description: &quot;广告位+点击可查看&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 随机打乱广告数组</span></span>
<span class="line"><span>function shuffle(array) {</span></span>
<span class="line"><span>  var currentIndex = array.length,</span></span>
<span class="line"><span>    temporaryValue,</span></span>
<span class="line"><span>    randomIndex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while (0 !== currentIndex) {</span></span>
<span class="line"><span>    randomIndex = Math.floor(Math.random() * currentIndex);</span></span>
<span class="line"><span>    currentIndex -= 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    temporaryValue = array[currentIndex];</span></span>
<span class="line"><span>    array[currentIndex] = array[randomIndex];</span></span>
<span class="line"><span>    array[randomIndex] = temporaryValue;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return array;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ads = shuffle(ads);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建广告容器</span></span>
<span class="line"><span>var adContainer = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>adContainer.className = &quot;ad-container&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建图片元素</span></span>
<span class="line"><span>var adImage = document.createElement(&quot;img&quot;);</span></span>
<span class="line"><span>adImage.className = &quot;ad-image&quot;;</span></span>
<span class="line"><span>adContainer.appendChild(adImage);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建文字说明元素</span></span>
<span class="line"><span>var adDescription = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>adDescription.className = &quot;ad-description&quot;;</span></span>
<span class="line"><span>adContainer.appendChild(adDescription);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建链接元素</span></span>
<span class="line"><span>var adLink = document.createElement(&quot;a&quot;);</span></span>
<span class="line"><span>adLink.className = &quot;ad-link&quot;;</span></span>
<span class="line"><span>adLink.target = &quot;_blank&quot;;</span></span>
<span class="line"><span>adContainer.appendChild(adLink);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建关闭按钮</span></span>
<span class="line"><span>var closeButton = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>closeButton.className = &quot;close-button&quot;;</span></span>
<span class="line"><span>closeButton.textContent = &quot;X关闭&quot;;</span></span>
<span class="line"><span>adContainer.appendChild(closeButton);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将广告容器添加到页面中</span></span>
<span class="line"><span>document.body.appendChild(adContainer);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示广告容器</span></span>
<span class="line"><span>function showAd() {</span></span>
<span class="line"><span>  adContainer.classList.add(&quot;show&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 隐藏广告容器</span></span>
<span class="line"><span>function hideAd() {</span></span>
<span class="line"><span>  adContainer.classList.remove(&quot;show&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加一个变量来跟踪广告是否已经显示过</span></span>
<span class="line"><span>var adDisplayed = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 当前广告索引</span></span>
<span class="line"><span>var currentIndex = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 更换图片、链接和文字说明的函数</span></span>
<span class="line"><span>function changeAd() {</span></span>
<span class="line"><span>  // 更新图片、链接和文字说明</span></span>
<span class="line"><span>  var nextIndex = (currentIndex + 1) % ads.length;</span></span>
<span class="line"><span>  var nextAd = ads[nextIndex];</span></span>
<span class="line"><span>  adImage.src = nextAd.image;</span></span>
<span class="line"><span>  adLink.href = nextAd.link;</span></span>
<span class="line"><span>  adDescription.textContent = nextAd.description;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 更新当前索引</span></span>
<span class="line"><span>  currentIndex = nextIndex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 如果广告尚未显示过，则添加&quot;点击查看广告&quot;的文本节点</span></span>
<span class="line"><span>  if (!adDisplayed) {</span></span>
<span class="line"><span>    adDisplayed = true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 显示广告容器</span></span>
<span class="line"><span>  showAd();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭广告的函数</span></span>
<span class="line"><span>function closeAd() {</span></span>
<span class="line"><span>  hideAd();</span></span>
<span class="line"><span>  document.body.removeChild(adContainer); // 从DOM中移除广告容器</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 延迟2.5秒后立即弹出广告</span></span>
<span class="line"><span>setTimeout(changeAd, 2500);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定时器，每隔8秒更换图片、链接和文字说明</span></span>
<span class="line"><span>setInterval(changeAd, 8000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 绑定关闭按钮的点击事件</span></span>
<span class="line"><span>closeButton.addEventListener(&quot;click&quot;, closeAd);</span></span></code></pre></div><p>已添加了注释，所以很方便就能看懂，它通过随机的数组来加载显示</p><p>AD.css代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.ad-container {</span></span>
<span class="line"><span>  position: fixed;</span></span>
<span class="line"><span>  top: 22%;</span></span>
<span class="line"><span>  right: -500px;</span></span>
<span class="line"><span>  transform: translateY(-50%);</span></span>
<span class="line"><span>  width: 180px;</span></span>
<span class="line"><span>  height: 160px;</span></span>
<span class="line"><span>  background-color: transparent;</span></span>
<span class="line"><span>  padding: 1px;</span></span>
<span class="line"><span>  box-sizing: border-box;</span></span>
<span class="line"><span>  transition: right 0.3s, border-radius 0.3s; /* 添加圆弧过渡效果 */</span></span>
<span class="line"><span>  z-index: 100;</span></span>
<span class="line"><span>  overflow: hidden;</span></span>
<span class="line"><span>  border-radius: 10px; /* 添加圆弧效果 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 手机端不显示广告位 */</span></span>
<span class="line"><span>@media (max-width: 800px) {</span></span>
<span class="line"><span>  .ad-container {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ad-container.show {</span></span>
<span class="line"><span>  right: 3px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ad-image {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>  object-fit: cover;</span></span>
<span class="line"><span>  filter: blur(0px); /* 初始状态下图片不模糊 */</span></span>
<span class="line"><span>  transition: filter 0.3s; /* 添加过渡效果 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ad-container:hover .ad-image {</span></span>
<span class="line"><span>  filter: blur(5px); /* 鼠标悬停时图片模糊 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ad-link {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 0;</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ad-description {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 50%;</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  color: #fbfbfb;</span></span>
<span class="line"><span>  font-size: 13px;</span></span>
<span class="line"><span>  transform: translateY(-50%);</span></span>
<span class="line"><span>  text-shadow: 0 0 5px rgba(12, 12, 12, 0.8); /* 文字发光效果 */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  transition: filter 0.3s; /* 添加过渡效果 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.ad-container:hover .ad-description {</span></span>
<span class="line"><span>  filter: blur(0px); /* 鼠标悬停时文字清晰 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.close-button {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 5px;</span></span>
<span class="line"><span>  right: 5px;</span></span>
<span class="line"><span>  cursor: pointer;</span></span>
<span class="line"><span>  color: #fbfbfbfe;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其中，设置了在手机尺寸下（你可以修改为其它尺寸）不显示</p>`,13),i=[e];function c(t,o,d,r,u,h){return a(),s("div",null,i)}const m=n(l,[["render",c]]);export{g as __pageData,m as default};
