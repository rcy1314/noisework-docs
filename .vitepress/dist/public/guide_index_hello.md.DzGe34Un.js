import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const h=JSON.parse('{"title":"问候弹窗","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index/hello.md","filePath":"guide/index/hello.md"}'),e={name:"guide/index/hello.md"},t=p(`<h1 id="问候弹窗" tabindex="-1">问候弹窗 <a class="header-anchor" href="#问候弹窗" aria-label="Permalink to &quot;问候弹窗&quot;">​</a></h1><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/image.dzd4jidhtwg.jpg" alt="width=2500&amp;height=1469"></p><p>支持两种效果</p><h2 id="一、简单的问候" tabindex="-1">一、简单的问候 <a class="header-anchor" href="#一、简单的问候" aria-label="Permalink to &quot;一、简单的问候&quot;">​</a></h2><p>需要引入的head处js（已存入本地）这里是cdn</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &lt;script src=&quot;https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdn.staticfile.org/layer/3.1.1/layer.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>弹窗信息body处引入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>   &lt;!-- 弹窗信息提醒代码开始 --&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>    window.addEventListener(&#39;load&#39;, function() {</span></span>
<span class="line"><span>        var currentTime = new Date().getHours();</span></span>
<span class="line"><span>        var greeting;</span></span>
<span class="line"><span>        if (currentTime &lt; 5) {</span></span>
<span class="line"><span>            greeting = &quot;凌晨好！&quot;;</span></span>
<span class="line"><span>        } else if (currentTime &lt; 8) {</span></span>
<span class="line"><span>            greeting = &quot;早上好！&quot;;</span></span>
<span class="line"><span>        } else if (currentTime &lt; 11) {</span></span>
<span class="line"><span>            greeting = &quot;上午好！&quot;;</span></span>
<span class="line"><span>        } else if (currentTime &lt; 13) {</span></span>
<span class="line"><span>            greeting = &quot;中午好！&quot;;</span></span>
<span class="line"><span>        } else if (currentTime &lt; 18) {</span></span>
<span class="line"><span>            greeting = &quot;下午好！&quot;;</span></span>
<span class="line"><span>        } else if (currentTime &lt; 19) {</span></span>
<span class="line"><span>            greeting = &quot;傍晚好！&quot;;</span></span>
<span class="line"><span>        } else if (currentTime &lt; 24) {</span></span>
<span class="line"><span>            greeting = &quot;晚上好！&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>		layer.msg(greeting + &quot;👏欢迎你的访问！&quot;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>    &lt;!-- 弹窗信息提醒代码结束 --&gt;</span></span></code></pre></div><h2 id="二、引入外部api加载访客设备及ip信息【外部api有概率会失效-长期有效请选择一】" tabindex="-1">二、引入外部api加载访客设备及ip信息【外部api有概率会失效，长期有效请选择一】 <a class="header-anchor" href="#二、引入外部api加载访客设备及ip信息【外部api有概率会失效-长期有效请选择一】" aria-label="Permalink to &quot;二、引入外部api加载访客设备及ip信息【外部api有概率会失效，长期有效请选择一】&quot;">​</a></h2><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/image.38neoowvbrc0.jpg" alt="width=2500&amp;height=1417"></p><p>引入的head处js（已存入本地）这里是cdn</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script src=&quot;https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://cdn.staticfile.org/layer/3.1.1/layer.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>body处引入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &lt;!-- 弹窗信息提醒代码开始 --&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  $(function () {</span></span>
<span class="line"><span>    var t = document.createElement(&quot;a&quot;);</span></span>
<span class="line"><span>    t.href = document.referrer;</span></span>
<span class="line"><span>    var msgTitle = t.hostname;</span></span>
<span class="line"><span>    var name = t.hostname.split(&quot;.&quot;)[1];</span></span>
<span class="line"><span>    if (&quot;&quot; !== document.referrer) {</span></span>
<span class="line"><span>      switch (name) {</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>          msgTitle = t.hostname;</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    var time = (new Date).getHours();</span></span>
<span class="line"><span>    var msg = &#39;&#39;;</span></span>
<span class="line"><span>    if (23 &lt; time || time &lt;= 5) {</span></span>
<span class="line"><span>      msg = &quot;你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？&quot;;</span></span>
<span class="line"><span>    } else if (5 &lt; time &amp;&amp; time &lt;= 7) {</span></span>
<span class="line"><span>      msg = &quot;早上好！一日之计在于晨，美好的一天就要开始了！&quot;;</span></span>
<span class="line"><span>    } else if (7 &lt; time &amp;&amp; time &lt;= 11) {</span></span>
<span class="line"><span>      msg = &quot;上午好！工作顺利嘛，不要久坐，多起来走动走动哦！&quot;;</span></span>
<span class="line"><span>    } else if (11 &lt; time &amp;&amp; time &lt;= 14) {</span></span>
<span class="line"><span>      msg = &quot;中午了，工作了一个上午，现在是午餐时间！&quot;;</span></span>
<span class="line"><span>    } else if (14 &lt; time &amp;&amp; time &lt;= 17) {</span></span>
<span class="line"><span>      msg = &quot;午后很容易犯困呢，今天的运动目标完成了吗？&quot;;</span></span>
<span class="line"><span>    } else if (17 &lt; time &amp;&amp; time &lt;= 19) {</span></span>
<span class="line"><span>      msg = &quot;傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~&quot;;</span></span>
<span class="line"><span>    } else if (19 &lt; time &amp;&amp; time &lt;= 21) {</span></span>
<span class="line"><span>      msg = &quot;晚上好，今天过得怎么样？&quot;;</span></span>
<span class="line"><span>    } else if (21 &lt; time &amp;&amp; time &lt;= 23) {</span></span>
<span class="line"><span>      msg = &quot;已经这么晚了呀，早点休息吧，晚安~&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    axios.get(&quot;https://api.gmit.vip/Api/UserInfo/&quot;)</span></span>
<span class="line"><span>      .then(function (response) {</span></span>
<span class="line"><span>        window.info = response.data;</span></span>
<span class="line"><span>        layer.msg(&quot;Hi~ 来自&quot; + response.data.data.location + &#39;~&lt;br/&gt;通过 &#39; + msgTitle + &#39; 进来的朋友！&lt;br/&gt;使用 &#39; + response.data.data.os + &quot;&lt;br/&gt;&quot; + response.data.data.browser + &#39; 访问本站！&#39; + &#39;&lt;br/&gt;&#39; + msg);</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .catch(function (error) {</span></span>
<span class="line"><span>        console.log(error);</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    document.cookie = &quot;msg=1; expires=Thu, 01 Jan 2038 00:00:00 UTC; path=/;&quot;;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;!-- 弹窗信息提醒代码结束 --&gt;</span></span></code></pre></div>`,14),l=[t];function i(c,o,r,u,g,d){return a(),n("div",null,l)}const q=s(e,[["render",i]]);export{h as __pageData,q as default};
