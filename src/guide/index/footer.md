# 隐藏式页脚

![footer](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/footer.png)



该效果位于最下方居中位置，默认隐藏，当鼠标划过时会显示

## 引入

body中添加代码

```
<!--隐藏式页脚-->
    <div id="footer">
        <p>本站已运行: <span id="days"></span></p>
        <p> ღゝ◡╹ノ♡ <a href="https://www.noisework.cn">Noise主页</a></p>
      </div>
```

没有做单独的css和js，所以把代码放入了main中

在main.js中代码为

```
//*footer*//
 // 计算站点运行天数
 var startDate = new Date('2020/12/09');
 var currentDate = new Date();
 var daysElement = document.getElementById('days');
 var days = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
 daysElement.textContent = days + '天';

 // 监听鼠标移动事件
 document.addEventListener('mousemove', function(event) {
   var footer = document.getElementById('footer');
   var windowHeight = window.innerHeight;
   var y = event.clientY;

   // 判断鼠标位置是否在页面底部
   if (y >= windowHeight - 50) {
     footer.style.display = 'block'; // 显示footer
   } else {
     footer.style.display = 'none'; // 隐藏footer
   }
 });
```

Main.css中代码为

```
/* footer */
 #footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	font-size: 10px;
	color: #f1ebeb;
	text-align: center;
	display: none; /* 初始时隐藏 */
  }
```

