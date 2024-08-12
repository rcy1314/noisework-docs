## 视频组件

## 一般常规视频引入

![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723432389059.png)

![1723362631905](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723362631905.png)

HTML中

```
<!-- 视频播放 -->
<div class="left-div left-time">
	<ul id="line1">
	  <div class="container">
		<!-- 视频容器 -->
		<div id="video-container">
		  <!-- 视频元素 -->
		  <video id="random-video" width="100%" height="auto" controls webkit-playsinline playsinline controlsList="nodownload noremoteplayback">
			<source src="视频链接" type="video/mp4">
			您的浏览器不支持视频标签。
		  </video>
		</div>
		<!-- 控制按钮 -->
		<div id="control-buttons">
		  <button onclick="prevVideo()" style="font-size:12px;">⏮</button>
		  <button id="play-pause-btn" onclick="togglePlay()" style="font-size:12px;">▶</button>
		  <button onclick="nextVideo()" style="font-size:12px;">⏭</button>
		</div>
	  </div>
	</ul>
  </div>
<!-- 视频播放结束 -->
```

css代码

```
/* 视频组件效果 */
/* 引入的随机视频组件按钮 */
/* 控制按钮样式 */
#control-buttons {
    text-align: center;
    margin-top: -2px; /* 根据需要调整间距 */
    background-color: rgba(241, 243, 244, 0.5); /* 透明背景色 */
    padding: 5px; /* 添加内边距 */
    border-radius: 5px; /* 添加圆角边框 */
  }
  
  #control-buttons button {
    margin: 0 5px; /* 根据需要调整按钮间距 */
    background-color: transparent; /* 按钮背景透明 */
    border: none; /* 移除边框 */
    color: #000; /* 按钮文字颜色，可根据需要调整 */
    cursor: pointer; /* 鼠标悬停时显示指针 */
  }
  
  #control-buttons button:hover {
    color: #666; /* 鼠标悬停时按钮文字颜色，可根据需要调整 */
  }
  
  /* 基本样式 */
  #video-container {
    width: 100%;
    max-width: 172px; /* 最大宽度，可根据需要调整 */
  }
  
  /* 手机屏幕尺寸下的样式 */
  @media only screen and (max-width: 600px) {
    #video-container, #random-video {
      width: 100%;
      max-width: 100%; /* 在小屏幕上，视频容器和视频元素宽度为100% */
    }
  }
```

JS代码

```
// 视频播放组件
var videos = [
    "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/f83b646a4cee41e588ca023e2a114e2f.mp4",
    "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/bc6473e95d7f4bd1ba2f91d1cf632dfe.mp4",
    
    "视频链接3"
];  // 视频链接数组
var currentVideoIndex = 0; // 当前视频索引

// 播放视频
function playVideo() {
    var video = document.getElementById("random-video");
    video.play();
}

// 切换播放/暂停
function togglePlay() {
    var video = document.getElementById("random-video");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// 随机选择一个视频
function randomVideo() {
    currentVideoIndex = Math.floor(Math.random() * videos.length);
    updateVideo();
}

// 播放下一个视频
function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
    playVideo();
}

// 播放上一个视频
function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
    playVideo();
}

// 更新视频
function updateVideo() {
    var video = document.getElementById("random-video");
    video.src = videos[currentVideoIndex];
    video.load();
}

// 监听视频错误事件，自动跳过失效视频
document.getElementById("random-video").addEventListener('error', function() {
    console.log("视频加载失败，尝试下一个视频");
    nextVideo(); // 直接调用nextVideo()来尝试下一个视频
});

// 监听视频结束事件，自动播放下一个视频
document.getElementById("random-video").addEventListener('ended', function() {
    nextVideo(); // 直接调用nextVideo()来播放下一个视频
});

// 初始化，随机选择一个视频进行播放
randomVideo();

```

## b站收藏夹视频

![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723367090207.png)

这里我们使用嵌入页面的形式来引入

嵌入页面的原理为API请求数据



Home页引入代码

```
<!-- B站收藏-->
		  <div class="left-div left-time">
			<ul id="line1">
            <div class="container">
				<class="title">《我的B站收藏列表视频》
						<hr class="dashed">
					</div>	
					<iframe src="https://www.noisework.cn/e/bili/index.html?id=3271958393" frameborder="0"></iframe>
			</ul>
		</div>
		<!-- B站收藏结束-->
```



这里我把要引入链接页面改为了我自己的链接，方便后续更改代码效果，你也可以本地化引入

本地化引入的html为

```
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOISE-B站播放器</title>
    <!-- 省略了其他meta标签 -->

    <style>
        html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        .floating-button {
            position: fixed;
            top: 88%;
            right: 6px;
            transform: translateY(-50%);
            width: 25px;
            height: 25px;
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 50%;
            font-size: 11px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>
    <iframe name="player"></iframe> 

    <button class="floating-button" onclick="playRandomVideo()">▶</button>

    <script>
        // 获取页面参数
        const urlParams = new URLSearchParams(window.location.search);
        const mediaId = urlParams.get('id');
        let timerId;

        function playRandomVideo() {
            if (mediaId) {
                // 清除之前的计时器
                if (timerId) {
                    clearTimeout(timerId);
                }

                // 使用fetch获取API数据
                fetch(`https://api.allorigins.win/raw?url=https://api.bilibili.com/x/v3/fav/resource/ids?media_id=${mediaId}`)
                    .then(response => response.json())
                    .then(data => {
                        // 提取每个数据项中的bvid
                        const bvids = data.data.map(item => item.bvid);

                        // 随机选择一个bvid
                        const randomBvid = bvids[Math.floor(Math.random() * bvids.length)];

                        // 设置iframe的src属性以载入视频，但不自动播放
                        document.querySelector('iframe').src = `https://player.bilibili.com/player.html?bvid=${randomBvid}&autoplay=0`;

                        // 查找选定视频的duration，如果有，延时后切换到下一个视频
                        const selectedApiUrl = `https://api.allorigins.win/raw?url=https://api.bilibili.com/x/web-interface/view?bvid=${randomBvid}`;
                        fetch(selectedApiUrl)
                            .then(response => response.json())
                            .then(videoData => {
                                const duration = videoData.data.duration;
                                console.log(`Video Duration: ${duration} seconds`);

                                // 延时后切换到下一个视频
                                timerId = setTimeout(playRandomVideo, duration * 1000);
                            })
                            .catch(error => console.error('Error fetching video data:', error));
                    })
                    .catch(error => console.error('Error fetching API data:', error));
            } else {
                console.error('Missing "id" parameter in the URL.');
            }
        }

        // 开始载入第一个视频
        playRandomVideo();
    </script>
</body>
</html>

```

修改来源：https://github.com/rcqed/Bili-Fav-Player

### b站收藏说明



1. 新建一个b站公开的收藏夹
2. 收藏视频到收藏夹
3. 把收藏夹id填入URL后面的"id="中

![1723367963587](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723367963587.png)

右下角的按钮功能为“下一个视频”

## 注意

b站这个API容易抽风，官方似乎一直打，如果有更稳定的API时你可以替换掉上面的代码中的API