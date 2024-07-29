import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const u=JSON.parse('{"title":"背景前景","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index/background.md","filePath":"guide/index/background.md"}'),c={name:"guide/index/background.md"},t=p(`<h1 id="背景前景" tabindex="-1">背景前景 <a class="header-anchor" href="#背景前景" aria-label="Permalink to &quot;背景前景&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722262172960.png" alt="1722262172960"></p><h2 id="核心" tabindex="-1">核心 <a class="header-anchor" href="#核心" aria-label="Permalink to &quot;核心&quot;">​</a></h2><p>在main.css中可找到默认的前景和背景设置 <img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722258910375.png" alt=""></p><p>如果你想把默认的改为随机的则需要把url部分改为API请求，比如我之前用replit做的一个，但因为replit目前已改了政策导致无法再直接使用，所以不再推荐默认的为API请求</p><h2 id="基于js请求的随机图" tabindex="-1">基于js请求的随机图 <a class="header-anchor" href="#基于js请求的随机图" aria-label="Permalink to &quot;基于js请求的随机图&quot;">​</a></h2><p>比上述默认再大一级的是引入的随机js文件-suiji-picture.js</p><p>html部分引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;div id=&quot;sence&quot;&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;background&quot; data-depth=&quot;0.8&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;bg&quot; data-depth=&quot;0.6&quot;&gt;&lt;/div&gt;   </span></span>
<span class="line"><span>		&lt;script src=&quot;js/suiji-picture.js&quot;&gt;&lt;/script&gt; </span></span>
<span class="line"><span>    &lt;/div&gt;</span></span></code></pre></div><p>js代码为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var imageUrls = [</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/5557j.4leby4kmx5a0.jpg&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/Dungeon.86tfxtuodsw.jpg&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230418/09.45yi39hb3xo0.jpg&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/3432.1wdm7a7jplb4.jpg&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/asfa.yls71bi1eog.jpg&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/ffass.omhkiqmx0ww.jpg&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/fasfasf.1qt1n1e9q8yo.jpg&#39;,</span></span>
<span class="line"><span>    // 这里随机背景壁纸-添加更多图片URL...</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  var randomIndex = Math.floor(Math.random() * imageUrls.length);</span></span>
<span class="line"><span>  var randomImageUrl = imageUrls[randomIndex];</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  var randomImageElement = document.getElementById(&#39;background&#39;);</span></span>
<span class="line"><span>  randomImageElement.style.backgroundImage = &#39;url(&#39; + randomImageUrl + &#39;)&#39;;</span></span>
<span class="line"><span>//°. * 。.:*・° ✰.。.:*・° ✰.。.:*°. * 。.:*・° ✰.。.:*・° ✰.。.:*°. * 。.:*・° ✰.。.:*・° ✰.。.:*</span></span>
<span class="line"><span>  var imageUrls = [</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/023.5se6p3kcd840.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物5.34tnn2jnn1q0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/004.47zk9hg17zg0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物4.6u794zv9r5w0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物11.7ldvybjc00s0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物41.1maz1wruetnk.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物17.3v6jydd7z4i0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物1.3idck6fcxqo0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物28.32bk8ikwy4a0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物22.6vhc266zg900.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物25.5j6k4o4lqa40.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230706/213d.51b3hpotx9s0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/028.5teioy5ve2c0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物45.4x3k6s924ns0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230305/人物24.1rx0saszu6cg.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物48.67uswm33xes0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物49.5elqamd33io0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物50.567n54xp81s0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物34.s8gkq0h3dls.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/029.71q4mgfwdo00.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/011.3eqe3vsal0m0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/021.4uqonnvv0xw0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230706/xiaohuangren.60nxvrux8c80.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/007.4ra12856l3q0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/006.5fr6malj99o0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230706/0052.4nzyymaa8za0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/003.70upv2n3s9w0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/001.3jr66nchfja0.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/025.4kt2ai85mx60.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/026.3v8fb37c3i40.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/022.6i76zb73k240.png&#39;,</span></span>
<span class="line"><span>    &#39;https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/024.38y8lpvx5ug0.png&#39;,</span></span>
<span class="line"><span>    // 这里添加随机前景人物图-添加更多图片URL...</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  var randomIndex = Math.floor(Math.random() * imageUrls.length);</span></span>
<span class="line"><span>  var randomImageUrl = imageUrls[randomIndex];</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  var randomImageElement = document.getElementById(&#39;bg&#39;);</span></span>
<span class="line"><span>  randomImageElement.style.backgroundImage = &#39;url(&#39; + randomImageUrl + &#39;)&#39;;</span></span></code></pre></div><p>你需要根据自己需求来更改图片URL，代码中我引入的为我个人的cdn链接，不保证一直有效，如果失效了，你可以把图片下载后本地引入</p><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><p>需要注意的是，在制作背景和前景图过程中，前景人物分辨率为1920*1036</p><p>背景图分辨率为1920*1080</p>`,15),e=[t];function i(o,l,r,d,h,g){return a(),s("div",null,e)}const y=n(c,[["render",i]]);export{u as __pageData,y as default};
