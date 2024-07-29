# 基础配置

标题部分代码为

```
<title>Noise主页</title>
```

其中页面标题为welcome标签部分

```
<div class="welcome">⭐️
					<span class="gradientText">NOISE'
						<a href="https://www.noisework.cn" target="_blank">主页</a></span>
				</div>
				<div class="description">👏<span class="purpleText">欢迎访问本站！ </span> 这是来自NOISE的个人主页。</span>查看 <span class="purpleText textBackground"><a href="https://stats.uptimerobot.com/GoqwLuBl3o" target="_blank" style="color: red;">运行状况</a></span>
				</div>
				<div class="description">📝可以点击  <span class="purpleText textBackground"><a href="./index.html" style="color: red;">切换模式</a> </span>查看不同风格</span> ，右键
					唤醒 <span class="purpleText textBackground">弹出</span> 菜单栏 </div>
```

可自行修改

![tou](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/tou.png)

## 网址网站

你可以根据标签来找到，其中

```
 <div class="title"><i class="fa-solid fa-star"></i>
				</svg>关联站点 </div>
```

可搜索“关联站点”来修改你想要配置的站点

站点旁边的图片为本地引入，你可以在assets文件夹中找到引入的图标

## 组件部分

已注释相关组件，其中包括

音乐组件、侧边组件、每日60秒组件、云盘情报、时间问候、rss订阅、随机一言、摸鱼日历、更新日志、轮播相册、公告通知、躲猫猫、聊天室

## 相关

鼠标效果位于home-style.css中

```
/*鼠标小黑猫光标*/
button {cursor:url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/work.cur),alias}
p {cursor:url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/texto.cur),auto}
a {cursor:url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur),auto}
a:active {cursor:url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/work.cur),alias}
body {cursor:url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/normal.cur),auto}
```

字体可在css中修改

```
@font-face {
    font-family: "a";
    /*中文字体*/
    src: url(../assets/fonts/STHeitiLight.ttc);
    font-display: swap;
}
```

另外，手机尺寸下做了界面定制修改

## 核心

核心文件为home-root.css、home-style.css、home-script.js
