import{_ as a,c as n,o as s,a2 as p}from"./chunks/framework.DQS5QPof.js";const g=JSON.parse('{"title":"躲猫猫","description":"","frontmatter":{},"headers":[],"relativePath":"guide/home/maomao.md","filePath":"guide/home/maomao.md"}'),e={name:"guide/home/maomao.md"},l=p(`<h1 id="躲猫猫" tabindex="-1">躲猫猫 <a class="header-anchor" href="#躲猫猫" aria-label="Permalink to &quot;躲猫猫&quot;">​</a></h1><p>该效果还是比较有趣的，当你把鼠标放在猫猫上时它会自动躲开</p><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722267202822.png" alt="1722267202822"></p><p>为了方便引入没有拆分到css文件中，只需要在html的body中添加代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- 躲猫猫--&gt;</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    #maomao {</span></span>
<span class="line"><span>        position: fixed;</span></span>
<span class="line"><span>        bottom: 120px; /* 初始高度 */</span></span>
<span class="line"><span>        right: -5px;</span></span>
<span class="line"><span>        width: 57px;</span></span>
<span class="line"><span>        height: 70px;</span></span>
<span class="line"><span>        background-image: url(assets/mao.svg);</span></span>
<span class="line"><span>        background-position: center;</span></span>
<span class="line"><span>        background-size: cover;</span></span>
<span class="line"><span>        background-repeat: no-repeat;</span></span>
<span class="line"><span>        transition: background .3s;</span></span>
<span class="line"><span>		z-index: 9999; /* 确保元素位于顶层 */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    #maomao:hover {</span></span>
<span class="line"><span>        background-position: 60px 50%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    var randomNum = function(minNum, maxNum) {</span></span>
<span class="line"><span>        switch(arguments.length) {</span></span>
<span class="line"><span>            case 1:</span></span>
<span class="line"><span>                return parseInt(Math.random() * minNum + 1, 10);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            case 2:</span></span>
<span class="line"><span>                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            default:</span></span>
<span class="line"><span>                return 0;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    var duoMaomao = function() {</span></span>
<span class="line"><span>        var maomao = $(&quot;#maomao&quot;);</span></span>
<span class="line"><span>        maomao.css(&quot;bottom&quot;, randomNum(5, 80) + &quot;vh&quot;);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;div id=&quot;maomao&quot; onMouseOut=&quot;duoMaomao()&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p>其中的svg图片别忘了放入正确的url，上述代码中我使用的为本地引入</p>`,6),t=[l];function o(i,c,r,m,u,d){return s(),n("div",null,t)}const _=a(e,[["render",o]]);export{g as __pageData,_ as default};
