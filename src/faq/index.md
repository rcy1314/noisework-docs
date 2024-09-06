## 原则

原则上，请在修改出现错误时自查或问AI来解决，如需私聊帮助请在支持页赞赏后私信我！

<u>请不要张口提要求还要用别人欠你的态度来询问！也请不要在无数次帮你解答后却得不到一句谢谢，这样的朋友请不要联系我！</u>

## 问题

## 一、首页广告位卡片在不是电脑尺寸下也显示了

答：跟你的屏幕或浏览器尺寸相关，目前设置的广告位在AD.css中可以找到如下设置

![b191d3da58a002800fcce863d2fd16ea](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/b191d3da58a002800fcce863d2fd16ea.JPG)

 如果你在用平板一类的尺寸可以自定义为600px以上的尺寸



## 二、随机的背景图等图片不显示了

 答：引入的URL链接为我个人的cdn加速链接，如果该cdn不工作（服务器欠费停了）的原因可能会造成引入的图片失效，解决方案是更换cdn地址或本地引入图片



## 三、修改后打开页面速度变慢变卡

答：本地引入的图片或文件过大、引入的CDN速度过慢、本地浏览器缓存过多等都会造成卡顿

## 四、旧版本优化（非卡顿主因）：

调整首页HTML页面，去除以下代码：
![1725621479691](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1725621479691.png)

调整main.css中对于网站合集滑动交互的定义：

```
.workbox {
    height: 200px;
    border-radius: 20px;
    width: 100%;
    white-space: nowrap;
    background-color: #222222;
    overflow-x: auto; /* 确保横向滚动正常 */
    overflow-y: hidden; /* 隐藏垂直滚动条 */
    box-shadow: inset 0 0 30px rgba(18, 18, 18);
    -webkit-overflow-scrolling: touch; /* 使在移动设备上滚动更流畅 */
}

.workbox::-webkit-scrollbar {
    height: 8px; /* 设置滚动条高度 */
    background: #222222; /* 滚动条背景色 */
}

.workbox::-webkit-scrollbar-thumb {
    background: #444444; /* 滚动条颜色 */
    border-radius: 4px;
    &:hover {
        background: #555555; /* 滚动条在悬停时的颜色 */
    }
}

#first, #last {
    width: 60px;
    height: 160px;
    display: inline-block;
    margin: 20px 18px 20px 0;
    background-color: #272727;
    border: 1px #2e2e2e solid;
    position: relative;
    transition: transform 0.3s;
    will-change: transform;
}

#first:hover, #last:hover {
    transform: scale(1.1);
}

#first {
    border-radius: 0 20px 20px 0;
    border-left: none;
}

#last {
    border-radius: 20px 0 0 20px;
    margin-right: 0;
    border-right: none;
}

#first i, #last i {
    color: transparent;
    transition: color 0.6s;
    font-size: 30px;
    line-height: 160px;
    width: 58px;
    text-align: center;
    display: block;
}

#first:hover i, #last:hover i {
    color: rgba(255, 255, 255, 1);
}

.project {
    height: 160px;
    width: 208px;
    background-color: #272727;
    border-radius: 20px;
    display: inline-block;
    margin: 20px 18px 20px 0;
    border: 1px #2e2e2e solid;
    position: relative;
    padding: 20px;
    vertical-align: top;
    transition: transform 0.3s ease;
    will-change: transform;
}

.project:hover {
    transform: scale(1.1);
}

.project i {
    display: block;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.277);
    position: absolute;
    top: 20px;
    right: 30px;
}

.project h3 {
    color: rgba(255, 255, 255, 0.8);
    display: inline-block;
}

.project h3:hover {
    text-decoration: underline;
    color: rgb(255, 255, 255);
}

.project p {
    color: rgba(255, 255, 255, 0.6);
    margin-top: 20px;
}
```

鼠标在页面载入时的动画优化

Main.css中调整为

```
.node::before {
	content: ' ';
	height: 100%;
	width: 100%;
	position: absolute;
	background-color: transparent;
	border-radius: 50%;
	top: 0;
	left: 0;
	border: 1px solid #ffffff;
	transform: scale(1);
	opacity: 1;
	transition: opacity 150ms linear, transform 300ms cubic-bezier(0.68, -0.55, 0.27, 1.55), border 300ms linear, background-color 150ms linear;
  }
```



## 注意

**还有！很重要的一点是，如果你想让页面载入更快，那么可以将所有的图片格式转换为webp格式，这样页面渲染速度就会快很多，但一些旧版浏览器及老旧设备是不支持webp格式，所以，看你自己选择，要页面速度还是浏览器全兼容了**

### 五、如何修改聊天室为自己的？

答：麻烦查看文档[聊天室介绍](https://docs.noisework.cn/guide/chat.html)并查看Cbox或Dify官方说明文档，发布和嵌入的代码在官方
