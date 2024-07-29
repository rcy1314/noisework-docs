import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.DQS5QPof.js";const b=JSON.parse('{"title":"头像配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/logo.md","filePath":"guide/home/logo.md"}'),e={name:"guide/home/logo.md"},t=p(`<h1 id="头像配置" tabindex="-1">头像配置 <a class="header-anchor" href="#头像配置" aria-label="Permalink to &quot;头像配置&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logol.png" alt="logol"></p><p>头像配置分两部分，html中head标签开始处找到</p><p>一、手机端头像</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 手机页面头部logo --&gt;		</span></span>
<span class="line"><span>				&lt;div class=&quot;index-logo&quot; style=&quot;background-image: url(./assets/tou.png);&quot;&gt;</span></span>
<span class="line"><span>				&lt;/div&gt;</span></span></code></pre></div><p>二、电脑端头像</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;noise-left&quot;&gt;</span></span>
<span class="line"><span>			&lt;div class=&quot;logo&quot; style=&quot;background-image: url(./assets/logo3.png);&quot;&gt;		</span></span>
<span class="line"><span>			&lt;/div&gt;</span></span></code></pre></div><p>其中电脑端css效果为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.logo {</span></span>
<span class="line"><span>    flex-shrink: 0;</span></span>
<span class="line"><span>    width: 90%;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    aspect-ratio: 1/1;</span></span>
<span class="line"><span>    margin-top: 50px;</span></span>
<span class="line"><span>    background-size: cover;</span></span>
<span class="line"><span>    border-radius: 50%;</span></span>
<span class="line"><span>    object-fit: cover; /* 裁剪图片以适应圆形遮罩 */</span></span>
<span class="line"><span>    transition: transform 0.5s; /* 添加旋转动画 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.logo:hover {</span></span>
<span class="line"><span>    transform: rotate(360deg); /* 鼠标悬停时旋转360度 */</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>手机端css效果为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.index-logo {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>    width: 40%; /* 图像宽度为父元素的40% */</span></span>
<span class="line"><span>    height: 0; /* 高度为0，通过padding-bottom保持宽高比 */</span></span>
<span class="line"><span>    padding-bottom: 40%; /* 保持宽高比为1:1 */</span></span>
<span class="line"><span>    background-size: cover; /* 背景图像覆盖整个元素 */</span></span>
<span class="line"><span>    background-position: center; /* 背景图像居中 */</span></span>
<span class="line"><span>    border-radius: 50%; /* 圆形遮罩 */</span></span>
<span class="line"><span>    background-repeat: no-repeat; /* 不重复背景图像 */</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,11),l=[t];function i(o,c,d,r,g,u){return n(),a("div",null,l)}const v=s(e,[["render",i]]);export{b as __pageData,v as default};
