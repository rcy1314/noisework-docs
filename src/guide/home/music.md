# 音乐部件

部件采用的是嵌入式引入

![music2](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/music2.png)

代码为

```
    <!--音乐-->
	 <link rel="stylesheet" href="./css/home-APlayer.min.css">  
	 <script src="./js/jquery.min.js"></script>
	 <script src="./js/APlayer.min.js"></script>
	 <script src="./js/Meting.min.js"></script>
```

```
<!-- 音乐挂件代码-->
			<div class="left-div-music">
							   <div class="swiper-slide">
								 <div class="aplayer-wrap">
									 <meting-js
									  preload="none"
									   server="netease"
									   type="playlist"
									   id="128460001">
								   </meting-js>  
								 </div>
							  </div> 	   
				</ul>
			  </div>
```

其中，home-APlayer.min.css定制化了窗口大小位置等

id为网易云音乐歌单id

不推荐再对home-APlayer.min.css进行修改，除非你修改了页面的整体布局
