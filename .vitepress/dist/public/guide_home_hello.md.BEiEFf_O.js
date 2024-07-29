import{_ as s,c as n,o as a,a2 as t}from"./chunks/framework.DQS5QPof.js";const g=JSON.parse('{"title":"时间问候卡片","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/hello.md","filePath":"guide/home/hello.md"}'),p={name:"guide/home/hello.md"},e=t(`<h1 id="时间问候卡片" tabindex="-1">时间问候卡片 <a class="header-anchor" href="#时间问候卡片" aria-label="Permalink to &quot;时间问候卡片&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/hel.png" alt="hel"></p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>html侧边标签中添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>			&lt;!-- 时间代码--&gt;</span></span>
<span class="line"><span>		    &lt;div class=&quot;left-div left-time&quot;&gt;</span></span>
<span class="line"><span>				&lt;ul id=&quot;line1&quot;&gt;	</span></span>
<span class="line"><span>					&lt;div id=&quot;lbl&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>					&lt;div id=&quot;clock&quot;&gt;&lt;/div&gt;			</span></span>
<span class="line"><span>				&lt;/ul&gt;</span></span>
<span class="line"><span>				&lt;/div&gt;</span></span>
<span class="line"><span>			   &lt;!-- 时间结束--&gt;</span></span></code></pre></div><p>并在页脚引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &lt;!-- 时间 --&gt;</span></span>
<span class="line"><span>			&lt;span id=&quot;RGB&quot;&gt;&lt;/span&gt; </span></span>
<span class="line"><span>		  &lt;meta charset=&quot;utf-8&quot;&gt;   </span></span>
<span class="line"><span>	  &lt;div id=&quot;main&quot;&gt;  </span></span>
<span class="line"><span>	  &lt;div id=&quot;show_time0&quot; style=&quot;&quot;&gt;</span></span>
<span class="line"><span>	  &lt;script&gt;</span></span>
<span class="line"><span>	  //显示时间</span></span>
<span class="line"><span>	  //setInterval(&quot;show_time0.innerHTML=new Date().toLocaleString()+&#39; 星期&#39;+&#39;日一二三四五六&#39;.charAt(new Date().getDay());&quot;,1000);</span></span>
<span class="line"><span>	  &lt;/script&gt;</span></span>
<span class="line"><span>	  &lt;/div&gt;</span></span>
<span class="line"><span>	  &lt;script&gt;  </span></span>
<span class="line"><span>	  //定义</span></span>
<span class="line"><span>	  setInterval(&quot;fun(show_time)&quot;,1);</span></span>
<span class="line"><span>	  function fun(timeID){ </span></span>
<span class="line"><span>	  var date = new Date();  //创建对象  </span></span>
<span class="line"><span>	  var y = date.getFullYear();     //获取年份  </span></span>
<span class="line"><span>	  var m =date.getMonth()+1;   //获取月份  返回0-11  </span></span>
<span class="line"><span>	  var d = date.getDate(); // 获取日  </span></span>
<span class="line"><span>	  var w = date.getDay();   //获取星期几  返回0-6   (0=星期天) </span></span>
<span class="line"><span>	  var ww = &#39; 星期&#39;+&#39;日一二三四五六&#39;.charAt(new Date().getDay()) ;//星期几</span></span>
<span class="line"><span>	  var h = date.getHours();  //时</span></span>
<span class="line"><span>	  var minute = date.getMinutes()  //分</span></span>
<span class="line"><span>	  var s = date.getSeconds(); //秒</span></span>
<span class="line"><span>	  var sss = date.getMilliseconds() ; //毫秒</span></span>
<span class="line"><span>	  if(m&lt;10){</span></span>
<span class="line"><span>	  m = &quot;0&quot;+m;</span></span>
<span class="line"><span>	  }</span></span>
<span class="line"><span>	  if(d&lt;10){</span></span>
<span class="line"><span>	  d = &quot;0&quot;+d;</span></span>
<span class="line"><span>	  }</span></span>
<span class="line"><span>	  if(h&lt;10){</span></span>
<span class="line"><span>	  h = &quot;0&quot;+h;</span></span>
<span class="line"><span>	  }</span></span>
<span class="line"><span>	  </span></span>
<span class="line"><span>	  if(minute&lt;10){</span></span>
<span class="line"><span>	  minute = &quot;0&quot;+minute;</span></span>
<span class="line"><span>	  }</span></span>
<span class="line"><span>	  </span></span>
<span class="line"><span>	  if(s&lt;10){</span></span>
<span class="line"><span>	  s = &quot;0&quot;+s;</span></span>
<span class="line"><span>	  }</span></span>
<span class="line"><span>	  </span></span>
<span class="line"><span>	  if(sss&lt;10){</span></span>
<span class="line"><span>	  sss = &quot;00&quot;+sss;</span></span>
<span class="line"><span>	  }else if(sss&lt;100){</span></span>
<span class="line"><span>	  sss = &quot;0&quot;+sss;</span></span>
<span class="line"><span>	  }</span></span>
<span class="line"><span>	  </span></span>
<span class="line"><span>	  document.getElementById(timeID.id).innerHTML =  y+&quot;-&quot;+m+&quot;-&quot;+d+&quot;   &quot;+h+&quot;:&quot;+minute+&quot;     &quot;+ww;</span></span>
<span class="line"><span>	  //document.write(y+&quot;-&quot;+m+&quot;-&quot;+d+&quot;   &quot;+h+&quot;:&quot;+minute+&quot;:&quot;+s);  </span></span>
<span class="line"><span>	  }</span></span></code></pre></div><p>css中的代码部分为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#clock {</span></span>
<span class="line"><span>    font-family: &#39;Arial&#39;, sans-serif;</span></span>
<span class="line"><span>    font-size: 13px;</span></span>
<span class="line"><span>    color: #faf6f6; /* 时钟文字颜色 */</span></span>
<span class="line"><span>    justify-content: center; /* 水平居中 */</span></span>
<span class="line"><span>  }</span></span></code></pre></div>`,9),l=[e];function i(c,o,u,d,r,h){return a(),n("div",null,l)}const m=s(p,[["render",i]]);export{g as __pageData,m as default};
