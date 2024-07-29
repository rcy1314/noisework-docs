# 音乐部件

首页采用的是经典的左下角音乐弹窗引入

![music](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/music.png)

代码为

```
    <link rel="stylesheet" href="css/APlayer.min.css">  
    <div id="aplayer" class="aplayer" data-order="random" data-id="2141128031" data-server="netease" data-type="playlist" data-fixed="true" data-autoplay="false" data-volume="0.8"></div>
    <script src="js/APlayer.min.js"></script>
    <script src="js/Meting.min.js"></script>
```

其中，APlayer.min.css定制化了窗口颜色

data-id为网易云音乐歌单id

autoplay默认关闭自动播放
