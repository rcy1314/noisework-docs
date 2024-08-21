# RSS动态卡片

和首页的效果是一致的，这里我们引入在侧边栏中

## 特征

- 页面加载2秒后自动从右侧弹出
- 每隔8秒更换展示订阅标题+日期，可点击进入链接
- 支持多个rss源的引入
- 带有关闭按钮，点击后即可关闭

![rss2](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/rss2.png)

## 使用

你需要自己的https://rss2json.com 账户API key

除了需要在页面内引入相应的JS和css文件，还需要在body中引入

```
<!-- rss订阅文字代码-->
        <div class="rss-container">
            <div id="rss-item"></div>
            <div class="close-button" id="close-button">X</div>
          </div>
```

rss.js：

```
// JavaScript代码-rss
var rssContainer = document.querySelector('.rss-container');
var rssItem = document.getElementById('rss-item');
var rssSources = [
'https://www.noiseblog.top/atom.xml',
'https://noisevip.cn/feed',
// 添加更多的RSS信息源
];
var currentRssIndex = 0;
var currentRssItemIndex = 0;
var apiKey = 'YOUR_API_KEY'; // 替换为你的API密钥
var lastUpdateTimes = {}; // 记录每个RSS源的最后更新时间

function fetchRssItems(url) {
fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=${apiKey}`)
.then(response => response.json())
.then(data => {
rssItem.innerHTML = ''; // 清空之前的RSS项

var rssLink = document.createElement('div');
rssLink.classList.add('rss-link');
var item = data.items[currentRssItemIndex];
var pubDate = new Date(item.pubDate);
var formattedDate = pubDate.toLocaleDateString();
rssLink.innerHTML = `<a href="${item.link}" target="_blank">${item.title} - ${formattedDate}</a>`;

rssItem.appendChild(rssLink);

currentRssItemIndex = (currentRssItemIndex + 1) % data.items.length;
if (currentRssItemIndex === 0) {
currentRssIndex = (currentRssIndex + 1) % rssSources.length;
}
});
}

// 获取并解析所有RSS信息源的数据
rssSources.forEach(source => {
fetchRssItems(source);
});

// 页面载入后延迟2秒后弹出效果
setTimeout(function() {
rssContainer.classList.add('open');
}, 2000);

// 点击关闭按钮后隐藏容器
var closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', function() {
rssContainer.style.display = 'none';
});

// 每隔8秒变换一次信息
setInterval(function() {
fetchRssItems(rssSources[currentRssIndex]);
}, 8000);

// 定时检查RSS源是否有更新
setInterval(function() {
rssSources.forEach(source => {
fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source)}&api_key=${apiKey}`)
.then(response => response.json())
.then(data => {
var latestItem = data.items[0];
var pubDate = new Date(latestItem.pubDate);
if (!lastUpdateTimes[source] || pubDate > lastUpdateTimes[source]) {
// 有新的更新，立即刷新显示最新信息
fetchRssItems(source);
// 更新最后更新时间
lastUpdateTimes[source] = pubDate;
}
});
});
}, 3600000); // 每隔1小时检查一次RSS源是否有更新
```

rss.css：

```
     /* noise主页rss-CSS样式 */
     .rss-container {
      display: none;
    }
    
    @media only screen and (min-width: 600px) {
      .rss-container {
        position: fixed;
        top: 70%;
        right: -500px;
        transform: translateY(-50%);
        width: 180px;
        background-color: rgba(0, 0, 0, 0.643);
        padding: 13px;
        border-radius: 10px 0 0 10px;
        transition: right 0.3s ease-in-out;
        z-index: 300;
        color: white;
        text-align: center;
        display: block;
      }
    
      .rss-container.open {
        right: 0;
      }
    
      .rss-title {
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    
      .rss-item {
        margin-bottom: 10px;
      }
    
      /* 修改选择器为 .rss-link a */
      .rss-link a {
        font-size: 13px;
        margin-bottom: 2px;
        color: white;
      }
    
      /* 添加关闭按钮样式 */
      .close-button {
        position: absolute;
        top: 5px;
        right: 2px;
        cursor: pointer;
        color: white;
        font-size: 12px;
      }
    }
```



<details>
<summary>✅ 【点击展开】</summary>

## 没有自动刷新功能的rss.js

rss.js:

```
    // JavaScript代码-rss
    var rssContainer = document.querySelector('.rss-container');
    var rssItem = document.getElementById('rss-item');
    var rssSources = [
      'https://www.noiseblog.top/atom.xml',
      'https://noisevip.cn/feed',
      // 添加更多的RSS信息源
    ];
    var currentRssIndex = 0;
    var currentRssItemIndex = 0;
    
    function fetchRssItems(url) {
      fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url))
        .then(response => response.json())
        .then(data => {
          rssItem.innerHTML = ''; // 清空之前的RSS项
    
          var rssLink = document.createElement('div');
          rssLink.classList.add('rss-link');
          var item = data.items[currentRssItemIndex];
          var pubDate = new Date(item.pubDate);
          var formattedDate = pubDate.toLocaleDateString();
          rssLink.innerHTML = `<a href="${item.link}" target="_blank">${item.title} - ${formattedDate}</a>`;
    
          rssItem.appendChild(rssLink);
    
          currentRssItemIndex = (currentRssItemIndex + 1) % data.items.length;
          if (currentRssItemIndex === 0) {
            currentRssIndex = (currentRssIndex + 1) % rssSources.length;
          }
        });
    }
    
    // 获取并解析所有RSS信息源的数据
    rssSources.forEach(source => {
      fetchRssItems(source);
    });
    
    // 页面载入后延迟2秒后弹出效果
    setTimeout(function() {
      rssContainer.classList.add('open');
    }, 2000);
    
    // 点击关闭按钮后隐藏容器
    var closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function() {
      rssContainer.style.display = 'none';
    });
    
    // 每隔8秒变换一次信息
    setInterval(function() {
      fetchRssItems(rssSources[currentRssIndex]);
    }, 8000);
```

</details>
