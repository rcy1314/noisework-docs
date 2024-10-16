## 视频组件



## b站收藏夹视频

![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1725532857244.png)

## 方式一-API请求引入列表

这里我们使用嵌入页面的形式来引入

嵌入页面的原理为API请求数据



Html引入代码

```
<!-- B站收藏-->
                    <div class="work">
                        <h2 class="chtitle"><span>B站</span>收藏夹</span></h2>
                        <div class="bilibiliindex" style="background-color: #1e1d1dce; height: 25vh;">
                            <div class="bilibilititle-left">
                                <img src="./assets/r1.png" alt="B站收藏夹" class="zoominimage">
                            </div>
                            <iframe src="https://www.noisework.cn/e/bili/index.html?id=3271958393" style="width: 70%; height: 100%; border: none; "></iframe>
                            <div class="bilibilititle-right">
                                <img src="./assets/r3.png" alt="等你来观看" class="zoominimage">
                            </div>
                        </div>
		        	<!-- B站收藏结束-->
```



CSS代码

```
/* 引入B站收藏 */
.bilibiliindex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #323232;
    border: 2px solid #212020;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(46, 45, 45, 0.5);
}

.bilibilititle-left, .bilibilititle-right {
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20%; /* 宽度可以调整，以适应你的布局 */
    margin: 0 10px; /* 左右边距 */
    flex-direction: column; /* 垂直排列 */
}

.bilibilititle-left img, .bilibilititle-right img {
    width: 100%; /* 设置图片宽度为100%，以填充容器 */
    height: auto; /* 保持图片原始高度 */
    transition: transform 0.3s ease; /* 添加过渡效果 */
}

.bilibilititle-left img:hover, .bilibilititle-right img:hover {
    transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
}
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
        html,
        body {
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
            font-size: 15px;
            display: none;
            /* 默认隐藏 */
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
    </style>
</head>
    <body>
        <iframe name="player" onload="iframeLoaded()"></iframe> 

        <button class="floating-button" onclick="playRandomVideo()">⏭</button>

        <div class="center-message" id="centerMessage">载入中...... 请等待API生效或...尝试刷新</div>

        <script>
            // 获取页面参数
            const urlParams = new URLSearchParams(window.location.search);
            const mediaId = urlParams.get('id');
            let timerId;

            // iframe加载成功时的回调函数
            function iframeLoaded() {
                document.getElementById('centerMessage').style.display = 'none'; // 隐藏消息
            }

            // 页面加载时检查视频加载是否成功
            function checkVideoLoad() {
                const iframe = document.querySelector('iframe');
                if (!iframe.src) {
                    document.getElementById('centerMessage').style.display = 'block';
                }
            }
            let playedVideos = []; // 用于存储已播放的视频ID

            // 获取视频数据并播放
            function playRandomVideo() {
                if (mediaId) {
                    // 清除之前的计时器
                    if (timerId) {
                        clearTimeout(timerId);
                    }

                    // 使用CORS代理服务来请求API
                    fetch(`https://api.allorigins.win/get?url=https://api.bilibili.com/x/v3/fav/resource/ids?media_id=${mediaId}`)
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error('API请求失败');
                            }
                            return response.json();
                        })
                        .then(data => {
                            // 解析API返回的数据
                            const videoData = JSON.parse(data.contents);
                            // 提取每个数据项中的bvid，并排除已播放的视频
                            const bvids = videoData.data.map(item => item.bvid).filter(bvid => !playedVideos.includes(bvid));

                            if (bvids.length === 0) {
                                // 如果没有视频数据，显示信息
                                document.getElementById('centerMessage').style.display = 'block';
                            } else {
                                // 随机选择一个bvid
                                const randomBvid = bvids[Math.floor(Math.random() * bvids.length)];
                                playedVideos.push(randomBvid); // 将选定的视频添加到已播放列表

                                // 设置iframe的src属性以载入视频，同时关闭自动播放
                                document.querySelector('iframe').src = `https://player.bilibili.com/player.html?bvid=${randomBvid}&autoplay=0&disableDanmaku=1`;
                                document.getElementById('centerMessage').style.display = 'none'; // 成功加载视频后隐藏消息
                               // 等待视频加载完成后再添加事件监听器
                                const iframe = document.querySelector('iframe');
                                iframe.addEventListener('load', function() {
                                    iframe.addEventListener('ended', function() {
                              // 视频播放完成后切换
                                   playRandomVideo();
                                });
                             }); 
                                // 查找选定视频的duration，如果有，延时后切换到下一个视频
                                fetch(`https://api.allorigins.win/get?url=https://api.bilibili.com/x/web-interface/view?bvid=${randomBvid}`)
                                    .then(response => {
                                        if (response.status !== 200) {
                                            throw new Error('视频数据请求失败');
                                        }
                                        return response.json();
                                    })
                                    .then(videoData => {
                                        const duration = JSON.parse(videoData.contents).data.duration;
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

## 方式二-本地JS文件引入列表

新建一个js文件命名为bilibili-video.js

```
// bilibili-video.js

const videoList = [
  'https://www.bilibili.com/video/BV1LL411J7EY/',
  'https://www.bilibili.com/video/BV1TpW3ecE9h/',
  'https://www.bilibili.com/video/BV148sge8E8T/',
  'https://www.bilibili.com/video/BV1V5411m77u/',
  'https://www.bilibili.com/video/BV1uT42197DW/',
  'https://www.bilibili.com/video/BV1ey4y1t7cy/',
  'https://www.bilibili.com/video/BV1764y1D7fD/',
  'https://www.bilibili.com/video/BV1VK411u7vy/',
  'https://www.bilibili.com/video/BV19V411n7L3/',
  'https://www.bilibili.com/video/BV1K4411d7mf/',
  'https://www.bilibili.com/video/BV1wx411v7Rc/',
  'https://www.bilibili.com/video/BV1iH4y1f74s/',
  'https://www.bilibili.com/video/BV12f4y1E7oj/',
  'https://www.bilibili.com/video/BV17K41167Gk/',
  'https://www.bilibili.com/video/BV13f4y1p7W1/',
  'https://www.bilibili.com/video/BV1kv4y1578w/',
  'https://www.bilibili.com/video/BV1M64y1T7CJ/',
  'https://www.bilibili.com/video/BV1eK421C76d/',
  'https://www.bilibili.com/video/BV1gV411J7Ai/',
  'https://www.bilibili.com/video/BV1FJ411C7ju/',
  'https://www.bilibili.com/video/BV1yb411A78Q/',
  'https://www.bilibili.com/video/BV19B4y1X7q1/',
  'https://www.bilibili.com/video/BV18K4y147if/',
  'https://www.bilibili.com/video/BV1g4411c7K6/',
  'https://www.bilibili.com/video/BV1mV4y1r7nk/',
  'https://www.bilibili.com/video/BV1k64y1f7mL/',
  'https://www.bilibili.com/video/BV1cLWYeLEJm/',
  'https://www.bilibili.com/video/BV1iE421F7rs/',
  'https://www.bilibili.com/video/BV1ed4y1W7Fu/',
  'https://www.bilibili.com/video/BV1wc411v7ng/',
  'https://www.bilibili.com/video/BV1bBWgecEAg/',
  'https://www.bilibili.com/video/BV1c4421f7fa/',
  'https://www.bilibili.com/video/BV11i42167hN',
  'https://www.bilibili.com/video/BV1Jr421M7aR/',
  'https://www.bilibili.com/video/BV1pRsEejEaU/',
  'https://www.bilibili.com/video/BV1b6421c73e/',
  'https://www.bilibili.com/video/BV1LF411b7SM/',
  'https://www.bilibili.com/video/BV1h2421F7HR/',
  'https://www.bilibili.com/video/BV1WUWgeWEWu/',
  'https://www.bilibili.com/video/BV1PT421Y72f/',
  'https://www.bilibili.com/video/BV1vW42197AR/',
  'https://www.bilibili.com/video/BV1b6421c73e/',
  'https://www.bilibili.com/video/BV1SG411V7Vh/',
  'https://www.bilibili.com/video/BV1yJ4m1h7Ha/',
  'https://www.bilibili.com/video/BV1ri421a71i/',
  'https://www.bilibili.com/video/BV1bp421Q7yT/',
  'https://www.bilibili.com/video/BV1294y1P7N7/',
  'https://www.bilibili.com/video/BV1gs411Y7ZF/',
  'https://www.bilibili.com/video/BV1we4y1r7ZS/',
  'https://www.bilibili.com/video/BV1KS42197tc/',
  'https://www.bilibili.com/video/BV1Ch411y75c/',
  'https://www.bilibili.com/video/BV1et41177M9/',
  'https://www.bilibili.com/video/BV1bN4y1M7bM/',
  'https://www.bilibili.com/video/BV16e4y1R7Gc/',
  // 添加更多视频链接
];

// 随机选择视频链接
function getRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videoList.length);
  return videoList[randomIndex];
}

// 更新iframe的src属性
function updateVideo() {
  const videoContainer = document.getElementById('videoContainer');
  const randomVideoUrl = getRandomVideo();
  const bvid = randomVideoUrl.split('/').pop(); // 获取BV号
  const iframeSrc = `https://www.bilibili.com/blackboard/html5mobileplayer.html?bvid=${bvid}&as_wide=1&high_quality=1&danmaku=0`;
  
  videoContainer.innerHTML = `<iframe src="${iframeSrc}" scrolling="no" border="0" frameborder="no" allowfullscreen="true" style="position:absolute;height:100%;width:100%;"></iframe>`;
}

// 页面加载时更新视频
window.onload = updateVideo;

// 解析B站视频链接
function parseBilibiliLinks(content) {
  const BILIBILI_REG = /<a\shref="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))/g;
  return content.replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='https://www.bilibili.com/blackboard/html5mobileplayer.html?bvid=\$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' allowfullscreen='true' style='position:absolute;height:100%;width:100%;'></iframe></div>");
}
```

并在html中引入

```
<!-- B站收藏-->
                    <div class="work">
                        <h2 class="chtitle"><span>B站</span>收藏夹</h2>
                        <div class="bilibiliindex" style="background-color: #1e1d1dce; height: 25vh;">
                            <div class="bilibilititle-left">
                                <img src="./assets/r1.png" id="prevButton" alt="上一个" class="zoominimage">
                                <div class="tooltip" id="prevTooltip">点击播放上一个</div>
                            </div>
                    
                            <!-- 视频播放器 -->
                            <div class="video-wrapper" id="video-player" style="width: 70%; height: 100%; position: relative;">
                                <iframe id="bilibili-iframe" src="" style="width: 100%; height: 100%; border: none;"></iframe>
                            </div>
                    
                            <div class="bilibilititle-right">
                                <img src="./assets/r3.png" id="nextButton" alt="下一个" class="zoominimage">
                                <div class="tooltip" id="nextTooltip">点击播放下一个</div>
                            </div>
                        </div>
                    
                        <!-- 控制按钮 -->
                        <div style="text-align: center; margin-top: 10px;">
                            <!-- 可以在这里添加其他按钮或内容 -->
                        </div>
                    </div>
                    
                    <script src="./js/bilibili-video.js"></script>
                    <script>
                        let currentVideoIndex = 0;

                        function loadVideo(index) {
                            const videoUrl = videoList[index];
                            const bvid = videoUrl.split('/')[4];
                            const iframe = document.getElementById('bilibili-iframe');
                            iframe.src = `https://www.bilibili.com/blackboard/html5mobileplayer.html?bvid=${bvid}&as_wide=1&high_quality=1&danmaku=0`;
                        }

                        function loadRandomVideo() {
                            currentVideoIndex = Math.floor(Math.random() * videoList.length);
                            loadVideo(currentVideoIndex);
                        }

                        function playPrevVideo() {
                            currentVideoIndex = (currentVideoIndex - 1 + videoList.length) % videoList.length; // 循环播放
                            loadVideo(currentVideoIndex);
                        }

                        function playNextVideo() {
                            currentVideoIndex = (currentVideoIndex + 1) % videoList.length; // 循环播放
                            loadVideo(currentVideoIndex);
                        }

                        // 页面加载时随机播放视频
                        window.onload = loadRandomVideo;

                        // 按钮事件监听
                        document.getElementById('prevButton').onclick = playPrevVideo;
                        document.getElementById('nextButton').onclick = playNextVideo;
                    </script>       
                    <!-- B站收藏结束-->
```

注意

该代码为随机播放你存在js文件中的视频链接
