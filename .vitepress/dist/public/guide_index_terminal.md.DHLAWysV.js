import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.DQS5QPof.js";const f=JSON.parse('{"title":"模拟终端","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index/terminal.md","filePath":"guide/index/terminal.md"}'),l={name:"guide/index/terminal.md"},e=p(`<h1 id="模拟终端" tabindex="-1">模拟终端 <a class="header-anchor" href="#模拟终端" aria-label="Permalink to &quot;模拟终端&quot;">​</a></h1><p>该部分你可以通过双击头像部分来找到和激活它</p><p><img src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722267867997.png" alt="1722267867997"></p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>引入的文件主要是terminal.js</p><p>通过配置terminal.js来实现简单的输入操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(function(){</span></span>
<span class="line"><span>    /*配置区首 */</span></span>
<span class="line"><span>    /*文件结构 */</span></span>
<span class="line"><span>    /*</span></span>
<span class="line"><span>    文件夹名:{</span></span>
<span class="line"><span>        文件名:文件内容,</span></span>
<span class="line"><span>        文件夹名:{}</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    let index ={</span></span>
<span class="line"><span>        &#39;games&#39;:{</span></span>
<span class="line"><span>            &#39;newGame.js&#39;:&#39;正在准备中。&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;home&#39;:{</span></span>
<span class="line"><span>            &#39;docs&#39;:{</span></span>
<span class="line"><span>                &#39;easterEgg.txt&#39;:&#39;很高兴你在这里找到了它。&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    /*命令历史 */</span></span>
<span class="line"><span>    let line = 0</span></span>
<span class="line"><span>    let his = [&#39;哈哈，你找到了。&#39;]</span></span>
<span class="line"><span>    /*命令行元素 */</span></span>
<span class="line"><span>    let container = document.getElementById(&#39;terminal&#39;);</span></span>
<span class="line"><span>    /*初始路径和初始当前文件夹 */</span></span>
<span class="line"><span>    let route = &#39;~&#39;;</span></span>
<span class="line"><span>    let folder = index;</span></span>
<span class="line"><span>    /*命令定义*/</span></span>
<span class="line"><span>    /*</span></span>
<span class="line"><span>    命令名:{</span></span>
<span class="line"><span>        &#39;fun&#39;:调用函数,</span></span>
<span class="line"><span>        &#39;help&#39;:帮助信息,</span></span>
<span class="line"><span>        &#39;parameter&#39;:[参数1，参数2，参数3],</span></span>
<span class="line"><span>        &#39;nap&#39;:额外参数数量(-1为不限)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    let command ={</span></span>
<span class="line"><span>        &#39;test&#39;:{</span></span>
<span class="line"><span>            &#39;fun&#39;:test,</span></span>
<span class="line"><span>            &#39;help&#39;:&#39;用法: test [-a] [-b] [-c] [-h]&lt;br&gt;-a -b -c: 测试参数&lt;br&gt;-h: 显示帮助信息。&#39;,</span></span>
<span class="line"><span>            &#39;parameters&#39;:[&#39;-h&#39;,&#39;-a&#39;,&#39;-b&#39;,&#39;-c&#39;],</span></span>
<span class="line"><span>            &#39;nap&#39;:0</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;cd&#39;:{</span></span>
<span class="line"><span>            &#39;fun&#39; :cmcd,</span></span>
<span class="line"><span>            &#39;help&#39; :&#39;用法: cd [目录] [-h]&lt;br&gt;目录: 文件或文件夹的路径。&lt;br&gt;-h: 显示帮助信息。&#39;,</span></span>
<span class="line"><span>            &#39;parameters&#39;:[&#39;-h&#39;],</span></span>
<span class="line"><span>            &#39;nap&#39;:1</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;help&#39;:{</span></span>
<span class="line"><span>            &#39;fun&#39;:cmhelp,</span></span>
<span class="line"><span>            &#39;help&#39;:&#39;&#39;,</span></span>
<span class="line"><span>            &#39;parameters&#39;:[],</span></span>
<span class="line"><span>            &#39;nap&#39;:0</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;visit&#39;:{</span></span>
<span class="line"><span>            &#39;fun&#39; :cmvisit,</span></span>
<span class="line"><span>            &#39;help&#39; :&#39;用法: visit [网址] [-h]&lt;br&gt;网址: 要访问的网址。&lt;br&gt;-h: 显示帮助信息。&#39;,</span></span>
<span class="line"><span>            &#39;parameters&#39;:[&#39;-h&#39;],</span></span>
<span class="line"><span>            &#39;nap&#39;:1</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;douyin&#39;:{</span></span>
<span class="line"><span>            &#39;fun&#39; :cmdouyin,</span></span>
<span class="line"><span>            &#39;help&#39; :&#39;用法: douyin [链接] [-h]&lt;br&gt;链接: 抖音/快手客户端分享连接、抖音Web直播连接。&lt;br&gt;-h: 显示帮助信息。&#39;,</span></span>
<span class="line"><span>            &#39;parameters&#39;:[&#39;-h&#39;],</span></span>
<span class="line"><span>            &#39;nap&#39;:1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    /*配置区尾 */</span></span>
<span class="line"><span>    /*检查输入事件 解析命令*/</span></span>
<span class="line"><span>    function enter(){</span></span>
<span class="line"><span>        terminal.scrollTop = 10000;</span></span>
<span class="line"><span>        var event = window.event || event;</span></span>
<span class="line"><span>        if (event.keyCode == 13){</span></span>
<span class="line"><span>            print(head.innerHTML + input.value);</span></span>
<span class="line"><span>            var com = input.value.split(&#39; &#39;).filter(i =&gt; i !=&#39;&#39;)</span></span>
<span class="line"><span>            if (com[0] in command){</span></span>
<span class="line"><span>                command[com[0]][&#39;fun&#39;](com.slice(1));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>                print(&#39;未找到命令: &#39; + input.value,&#39;error&#39;);</span></span>
<span class="line"><span>            };</span></span>
<span class="line"><span>            update();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (event.keyCode == 38 &amp;&amp; line &gt; 0){</span></span>
<span class="line"><span>            line -= 1;</span></span>
<span class="line"><span>            input.value = his[line];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (event.keyCode == 40 &amp;&amp; line &lt; his.length - 1){</span></span>
<span class="line"><span>            line += 1;</span></span>
<span class="line"><span>            input.value = his[line];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /*打印内容 */</span></span>
<span class="line"><span>    function print(text,type = &#39;normal&#39;){</span></span>
<span class="line"><span>        var p = document.createElement(&#39;p&#39;);</span></span>
<span class="line"><span>        p.innerHTML = text;</span></span>
<span class="line"><span>        p.className = type;</span></span>
<span class="line"><span>        context.appendChild(p);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /*更新头部信息 */</span></span>
<span class="line"><span>    function update(){</span></span>
<span class="line"><span>        his.splice(his.length -2,0,input.value);</span></span>
<span class="line"><span>        head.innerHTML = headb + route + heada;</span></span>
<span class="line"><span>        line = his.length - 2;</span></span>
<span class="line"><span>        input.value = his[line];</span></span>
<span class="line"><span>        terminal.scrollTop = 10000;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /*解析参数 */</span></span>
<span class="line"><span>    /*</span></span>
<span class="line"><span>    array:由参数组成的数组</span></span>
<span class="line"><span>    com:命令</span></span>
<span class="line"><span>    返回值：-3:没有参数</span></span>
<span class="line"><span>            -2:未知参数</span></span>
<span class="line"><span>            -1:-h --help</span></span>
<span class="line"><span>            ...</span></span>
<span class="line"><span>    */</span></span>
<span class="line"><span>    function analysis(array,com){</span></span>
<span class="line"><span>        var parameters = command[com][&#39;parameters&#39;]</span></span>
<span class="line"><span>        var result = []</span></span>
<span class="line"><span>        var arr = []</span></span>
<span class="line"><span>        for(i in parameters){</span></span>
<span class="line"><span>            result[i] = 0</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (array[0] == undefined){</span></span>
<span class="line"><span>            return false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var num = command[com][&#39;nap&#39;]</span></span>
<span class="line"><span>        for(let i = 0;i &lt; array.length;i++){</span></span>
<span class="line"><span>            if (parameters.includes(array[i])){</span></span>
<span class="line"><span>                result[parameters.indexOf(array[i])] = 1</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else if(0 != num){</span></span>
<span class="line"><span>                num -= 1;</span></span>
<span class="line"><span>                arr[arr.length] = array[i]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>                print(&#39;未知参数: &#39;+array[i],&#39;error&#39;)</span></span>
<span class="line"><span>                return &#39;error&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return [result,array]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /*路径查找 */</span></span>
<span class="line"><span>    function find(rou){</span></span>
<span class="line"><span>        if (rou.split(&#39;/&#39;)[0] in index){</span></span>
<span class="line"><span>            if (rou[0] != &#39;~&#39;){</span></span>
<span class="line"><span>                rou = &#39;~/&#39; + rou</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else{</span></span>
<span class="line"><span>            rou = route + &#39;/&#39; + rou</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        var ind = index</span></span>
<span class="line"><span>        var router = rou.split(&#39;/&#39;)</span></span>
<span class="line"><span>        for(var i = 1; i &lt; router.length;i++){</span></span>
<span class="line"><span>            if (router[i] in ind){</span></span>
<span class="line"><span>                ind = ind[router[i]]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>                return [false,rou]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return [ind,rou]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /*遍历打印 */</span></span>
<span class="line"><span>    function printObj(obj,type = &#39;o&#39;){</span></span>
<span class="line"><span>        var text = &#39;&#39;;</span></span>
<span class="line"><span>        if(type == &#39;o&#39;){</span></span>
<span class="line"><span>            for (i in obj){</span></span>
<span class="line"><span>                text += i + &#39;&amp;nbsp;&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else{</span></span>
<span class="line"><span>            for (i in obj){</span></span>
<span class="line"><span>                console.log(obj[i])</span></span>
<span class="line"><span>                text += obj[i] + &#39;&amp;nbsp;&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return text;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /*执行函数 */</span></span>
<span class="line"><span>    function test(text){</span></span>
<span class="line"><span>        var result = analysis(text,&#39;test&#39;)</span></span>
<span class="line"><span>        if (result == false){</span></span>
<span class="line"><span>            print(&#39;Hello,world!&#39;,&#39;italic&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if(result != &#39;error&#39;){</span></span>
<span class="line"><span>            if (result[0][0] == 1){</span></span>
<span class="line"><span>                print(command[&#39;test&#39;][&#39;help&#39;],&#39;message&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>                print(printObj(result[0],&#39;a&#39;),&#39;message&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function cmhelp(text){</span></span>
<span class="line"><span>        var result = analysis(text,&#39;help&#39;)</span></span>
<span class="line"><span>        if (result == false){</span></span>
<span class="line"><span>            print(printObj(command),&#39;message&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function cmcd(text){</span></span>
<span class="line"><span>        var res1 = analysis(text,&#39;cd&#39;)</span></span>
<span class="line"><span>        if (res1 == false){</span></span>
<span class="line"><span>            route = &#39;~&#39;;folder = index;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (res1 != &#39;error&#39;){</span></span>
<span class="line"><span>            if (res1[0][0] == 1){</span></span>
<span class="line"><span>                print(command[&#39;cd&#39;][&#39;help&#39;],&#39;message&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>            var res2 = find(res1[1][0])</span></span>
<span class="line"><span>            if (res2[0] == false){</span></span>
<span class="line"><span>                print(&#39;没有这个文件或目录: &#39;+res2[1],&#39;error&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else if(typeof(res2[0]) == &#39;string&#39;){</span></span>
<span class="line"><span>                print(&#39;这是一个文件: &#39;+ res2[1],&#39;error&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>                route = res2[1];folder = res2[0];</span></span>
<span class="line"><span>            }}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function cmvisit(text){</span></span>
<span class="line"><span>        var res1 = analysis(text,&#39;visit&#39;)</span></span>
<span class="line"><span>        if (res1[0] == -3){</span></span>
<span class="line"><span>            print(&#39;没有提供参数&#39;,&#39;error&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (res1 != &#39;error&#39;){</span></span>
<span class="line"><span>            if (res1[0][0] == 1){</span></span>
<span class="line"><span>                print(command[&#39;visit&#39;][&#39;help&#39;],&#39;message&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else{</span></span>
<span class="line"><span>            var url = res1[1][0]</span></span>
<span class="line"><span>            print(&#39;正在访问网址: &#39;+ url)</span></span>
<span class="line"><span>            window.open(url, &#39;_blank&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    function cmdouyin(text) {</span></span>
<span class="line"><span>        var res1 = analysis(text, &#39;douyin&#39;);</span></span>
<span class="line"><span>        if (res1[0] == -3) {</span></span>
<span class="line"><span>            print(&#39;没有提供参数&#39;, &#39;error&#39;);</span></span>
<span class="line"><span>        } else if (res1 != &#39;error&#39;) {</span></span>
<span class="line"><span>            if (res1[0][0] == 1) {</span></span>
<span class="line"><span>                print(command[&#39;douyin&#39;][&#39;help&#39;], &#39;message&#39;);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                var url = &#39;https://douyin.wtf/api/hybrid/video_data?url=&#39; + res1[1][0];</span></span>
<span class="line"><span>                var fetchUrl = url; // 保存url</span></span>
<span class="line"><span>                print(&#39;正在获取抖音视频: &#39; + url);</span></span>
<span class="line"><span>                fetch(fetchUrl, {</span></span>
<span class="line"><span>                    method: &#39;GET&#39;, // 使用GET请求方式</span></span>
<span class="line"><span>                    headers: {</span></span>
<span class="line"><span>                        &#39;Content-Type&#39;: &#39;application/json&#39;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                    .then(response =&gt; response.json())</span></span>
<span class="line"><span>                    .then(data =&gt; {</span></span>
<span class="line"><span>                        if (data.code === 200) {</span></span>
<span class="line"><span>                            var videoUrl = data.data.url;</span></span>
<span class="line"><span>                            print(&#39;获取到的视频地址: &#39; + videoUrl);</span></span>
<span class="line"><span>                            window.open(videoUrl, &#39;_blank&#39;);</span></span>
<span class="line"><span>                        } else {</span></span>
<span class="line"><span>                            print(&#39;获取视频失败: &#39; + data.msg, &#39;error&#39;);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                    .catch(error =&gt; {</span></span>
<span class="line"><span>                        print(&#39;获取视频失败: &#39; + error, &#39;error&#39;);</span></span>
<span class="line"><span>                    });</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    /*初始化 */</span></span>
<span class="line"><span>    let headb = &#39;[&lt;span class=&quot;g&quot;&gt;guest&lt;/span&gt;@浏览器 &lt;span class=&quot;b&quot;&gt;&#39;</span></span>
<span class="line"><span>    let heada = &#39;&lt;/span&gt;]&lt;span class=&quot;d&quot;&gt;$&lt;/span&gt; &#39;</span></span>
<span class="line"><span>    let terminal = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span>    terminal.className = &#39;terminal&#39;</span></span>
<span class="line"><span>    let context = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span>    context.className = &#39;context&#39;</span></span>
<span class="line"><span>    let head = document.createElement(&#39;span&#39;);</span></span>
<span class="line"><span>    head.className =&#39;head&#39;</span></span>
<span class="line"><span>    head.innerHTML =&#39;错误&#39;</span></span>
<span class="line"><span>    let input = document.createElement(&#39;input&#39;);</span></span>
<span class="line"><span>    input.className = &#39;input&#39;</span></span>
<span class="line"><span>    input.onkeydown = enter</span></span>
<span class="line"><span>    terminal.appendChild(context)</span></span>
<span class="line"><span>    terminal.appendChild(head)</span></span>
<span class="line"><span>    terminal.appendChild(input)</span></span>
<span class="line"><span>    container.appendChild(terminal)</span></span>
<span class="line"><span>    update()</span></span>
<span class="line"><span>    print(&quot;欢迎来到模拟终端！（彩蛋版本 :1.1）&quot;,&#39;warning&#39;)</span></span>
<span class="line"><span>    print(&#39;输入 &lt;span style=&quot;color: #ffbc00&quot;&gt;help&lt;/span&gt; 查看可用命令列表。增加输入 &lt;span style=&quot;color: #ffbc00&quot;&gt;visit&lt;/span&gt; 空格 网址可前往该地址（必须包含https://），输入 &lt;span style=&quot;color: #ffbc00&quot;&gt;douyin&lt;/span&gt; 空格 视频地址。&lt;/span&gt; 可解析该视频。&#39;,&#39;warning&#39;)</span></span>
<span class="line"><span>})()</span></span></code></pre></div><p>如果你想配置和修改它请注意一定是完全仅通过js请求就能完成的操作，涉及到其它的代码请求就不能完成了</p><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><p>原本我添加的抖音去水印为个人部署PHP版本js请求封装的api，目前已失效，如果你还想去实现可以再自建API请求来完成。</p>`,10),i=[e];function c(t,r,o,u,d,m){return a(),s("div",null,i)}const g=n(l,[["render",c]]);export{f as __pageData,g as default};
