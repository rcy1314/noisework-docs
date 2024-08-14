## 视频组件

## 一、外链视频引入

![1729308652](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1729308652.png)



HTML中

```
<!-- 视频播放 -->
<div class="left-div left-time">
	<ul id="line2">
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
    "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/914f70446ab3414a8b2d2c75be8135a4.mp4",
    "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/9e782b9469e04a67a64022a3cb964c83.mp4",
    "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/fd1d5b76283f424ab83cd040f15feb3b.mp4",

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
// 获取视频元素和播放/暂停按钮
var video = document.getElementById("random-video");
var playPauseBtn = document.getElementById("play-pause-btn");

// 切换播放和暂停的函数
function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = "⏸"; // 播放时显示暂停图标
    } else {
        video.pause();
        playPauseBtn.textContent = "▶"; // 暂停时显示播放图标
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
document.getElementById("random-video").addEventListener('error', function () {
    console.log("视频加载失败，尝试下一个视频");
    nextVideo(); // 直接调用nextVideo()来尝试下一个视频
});

// 监听视频结束事件，自动播放下一个视频
// document.getElementById("random-video").addEventListener('ended', function() {
//     nextVideo(); // 直接调用nextVideo()来播放下一个视频
// });

// 初始化，随机选择一个视频进行播放
randomVideo();
// 创建一个命名空间
var MyVideoPlayer = MyVideoPlayer || {};

// 在命名空间中定义预加载视频的函数
MyVideoPlayer.preloadVideos = function () {
    // 预加载当前视频
    var currentVideo = new Video();
    currentVideo.src = MyVideoPlayer.videos[MyVideoPlayer.currentVideoIndex];

    // 预加载接下来的几个视频
    var nextVideosToPreload = 3; // 预加载的视频数量
    for (var i = 1; i <= nextVideosToPreload; i++) {
        var nextVideo = new Video();
        nextVideo.src = MyVideoPlayer.videos[(MyVideoPlayer.currentVideoIndex + i) % MyVideoPlayer.videos.length];
    }
};

// 使用事件监听器来添加页面加载时的处理函数
window.addEventListener('load', function () {
    MyVideoPlayer.preloadVideos();
});
```



如果你想开启点击后自动播放可把下面代码的注释取消掉，即删除文字行下一行的所有的//

![1723606903370](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723606903370.png)

## 二、b站收藏夹视频

![1723449801561](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723449801561.png)

这里我们使用嵌入页面的形式来引入

嵌入页面的原理为API请求数据



Home页直接引入代码

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



## 使用

iframe标签中仅修改id即可，即

https://www.noisework.cn/e/bili/index.html?id=你自己的的收藏夹ID



### 收藏夹说明



1. 新建一个b站公开的收藏夹
2. 收藏视频到收藏夹
3. 把收藏夹id填入URL后面的"id="中

![1723367963587](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723367963587.png)

右下角的按钮功能为“下一个视频”方便后续更改代码效果，你也可以本地化引入

本地化引入的html为

<details>
<summary>✅ 引入代码【点击展开】</summary>



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
        .center-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 15px; /* 将字体大小调整为15像素 */
    display: none; /* 默认隐藏 */
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
            background-color: #1e3241e0;
            color: #fff;
            border: none;
            border-radius: 50%;
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .center-message {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 24px;
            display: none; /* 默认隐藏 */
        }
    </style>
</head>
<body>
    <iframe name="player"></iframe> 

    <button class="floating-button" onclick="playRandomVideo()">⏭</button>

    <div class="center-message" id="centerMessage">目前API抽风中…请等待</div>

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
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('API请求失败');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // 提取每个数据项中的bvid
                        const bvids = data.data.map(item => item.bvid);

                        if (bvids.length === 0) {
                            // 如果没有视频数据，显示信息
                            document.getElementById('centerMessage').style.display = 'block';
                        } else {
                            // 随机选择一个bvid
                            const randomBvid = bvids[Math.floor(Math.random() * bvids.length)];

                            // 设置iframe的src属性以载入视频，但不自动播放
                            document.querySelector('iframe').src = `https://player.bilibili.com/player.html?bvid=${randomBvid}&autoplay=0`;

                            // 查找选定视频的duration，如果有，延时后切换到下一个视频
                            const selectedApiUrl = `https://api.allorigins.win/raw?url=https://api.bilibili.com/x/web-interface/view?bvid=${randomBvid}`;
                            fetch(selectedApiUrl)
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('视频数据请求失败');
                                    }
                                    return response.json();
                                })
                                .then(videoData => {
                                    const duration = videoData.data.duration;
                                    console.log(`Video Duration: ${duration} seconds`);

                                    // 延时后切换到下一个视频
                                    timerId = setTimeout(playRandomVideo, duration * 1000);
                                })
                                .catch(error => {
                                    console.error('Error fetching video data:', error);
                                    document.getElementById('centerMessage').style.display = 'block';
                                });
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching API data:', error);
                        document.getElementById('centerMessage').style.display = 'block';
                    });
            } else {
                console.error('Missing "id" parameter in the URL.');
                document.getElementById('centerMessage').style.display = 'block';
            }
        }

        // 开始载入第一个视频
        playRandomVideo();
    </script>
</body>
</html>
```



</details>

## 注意

b站这个API如果失效时你可以在引入的文件中替换掉上面的代码中的API

另外，引入外链视频时请尽量不要使用带有我的外链cdn视频， 我不保证cdn一直有效，云服务器可能会在欠费到期时链接失效
