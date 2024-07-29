import{_ as t,c as s,o as a,a2 as n}from"./chunks/framework.DQS5QPof.js";const h=JSON.parse('{"title":"音乐部件","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/music.md","filePath":"guide/home/music.md"}'),p={name:"guide/home/music.md"},e=n(`<h1 id="音乐部件" tabindex="-1">音乐部件 <a class="header-anchor" href="#音乐部件" aria-label="Permalink to &quot;音乐部件&quot;">​</a></h1><p>部件采用的是嵌入式引入</p><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/music2.png" alt="music2"></p><p>代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &lt;!--音乐--&gt;</span></span>
<span class="line"><span>	 &lt;link rel=&quot;stylesheet&quot; href=&quot;./css/home-APlayer.min.css&quot;&gt;  </span></span>
<span class="line"><span>	 &lt;script src=&quot;./js/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>	 &lt;script src=&quot;./js/APlayer.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>	 &lt;script src=&quot;./js/Meting.min.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 音乐挂件代码--&gt;</span></span>
<span class="line"><span>			&lt;div class=&quot;left-div-music&quot;&gt;</span></span>
<span class="line"><span>							   &lt;div class=&quot;swiper-slide&quot;&gt;</span></span>
<span class="line"><span>								 &lt;div class=&quot;aplayer-wrap&quot;&gt;</span></span>
<span class="line"><span>									 &lt;meting-js</span></span>
<span class="line"><span>									  preload=&quot;none&quot;</span></span>
<span class="line"><span>									   server=&quot;netease&quot;</span></span>
<span class="line"><span>									   type=&quot;playlist&quot;</span></span>
<span class="line"><span>									   id=&quot;128460001&quot;&gt;</span></span>
<span class="line"><span>								   &lt;/meting-js&gt;  </span></span>
<span class="line"><span>								 &lt;/div&gt;</span></span>
<span class="line"><span>							  &lt;/div&gt; 	   </span></span>
<span class="line"><span>				&lt;/ul&gt;</span></span>
<span class="line"><span>			  &lt;/div&gt;</span></span></code></pre></div><p>其中，home-APlayer.min.css定制化了窗口大小位置等</p><p>id为网易云音乐歌单id</p><p>不推荐再对home-APlayer.min.css进行修改，除非你修改了页面的整体布局</p>`,9),i=[e];function l(c,o,u,r,d,g){return a(),s("div",null,i)}const q=t(p,[["render",l]]);export{h as __pageData,q as default};
