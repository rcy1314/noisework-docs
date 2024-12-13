# RSS动态卡片

和首页的效果是一致的，这里我们引入在侧边栏中

更新-纯文字和图文

## 特征

- 页面加载2秒后自动从右侧弹出
- 每隔8秒更换展示订阅标题+日期，可点击进入链接
- 支持多个rss源的引入
- 带有关闭按钮，点击后即可关闭

![rss2](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/rss2.png)

## 注意

请不要忘记在你的https://rss2json.com账户中设置API中的推送更新源并和rss.js文件中的源保持一致

![1730905023336](https://s2.loli.net/2024/11/06/z31TswlhSGWfHOP.png)

## 引入

## 纯文字版

你需要在home-rss.js中使用自己的https://rss2json.com 账户API key

除了需要在页面内引入相应的JS和css文件，还需要在html文件body中引入

```
<!-- rss订阅文字代码-->
        <div class="rss-container">
            <div id="rss-item"></div>
            <div class="close-button" id="close-button">X</div>
          </div>
```

home-rss.js：

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



## 图文版

和前面一样需要在js中设置自己的apikey-https://rss2json.com

需要在html文件body中引入

```
<!-- rss订阅文字代码-->
        <div class="rss-container">
            <div id="rss-item"></div>
            <div class="close-button" id="close-button">X</div>
          </div>
```

home-rss.js：

```
// 目前已修改为私有的rss2json的api key进行监测更新，除本站外这个key无法加入到其它域名，请修改为自己的key，默认每1小时更新限制
// 要使用完全免费的rss2json的api调用获取代码请查看https://www.noiseblogs.top/posts/fcbd92b4或访问https://noisevip.cn/17001.html
var rssContainer = document.querySelector('.rss-container');
var rssItem = document.getElementById('rss-item');
var rssSources = [
  'https://www.noiseblogs.top/atom.xml',
  'https://noisevip.cn/feed',
  // 添加更多的RSS信息源
];
var currentRssIndex = 0;
var currentRssItemIndex = 0;
var apiKey = 'apiKey'; // 替换为你的API密钥
var lastUpdateTimes = {}; // 记录每个RSS源的最后更新时间

function fetchRssItems(url) {
  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      rssItem.innerHTML = ''; // 清空之前的RSS项

      if (data.items && data.items.length > 0) {
        var item = data.items[currentRssItemIndex];
        var pubDate = new Date(item.pubDate);
        var formattedDate = pubDate.toLocaleDateString();

        var imgRegex = /<img[^>]+src="([^">]+)"/g;
        var match;
        var thumbnails = [];
        while ((match = imgRegex.exec(item.content)) !== null) {
          thumbnails.push(match[1]);
          if (thumbnails.length === 3) break;
        }

        var thumbnailUrl = thumbnails.length > 0 ? thumbnails[0] : '';

        var rssLink = document.createElement('div');
        rssLink.classList.add('rss-link');
        rssLink.innerHTML = `
          <a href="${item.link}" target="_blank">
            ${item.title} - ${formattedDate}
            ${thumbnailUrl ? `<img src="${thumbnailUrl}" alt="缩略图" width="50" height="50">` : ''}
          </a>
        `;

        rssItem.appendChild(rssLink);

        // 递增当前项目索引
        currentRssItemIndex = (currentRssItemIndex + 1) % data.items.length;
        if (currentRssItemIndex === 0) {
          currentRssIndex = (currentRssIndex + 1) % rssSources.length;
        }
      } else {
        showError();
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
      showError();
    });
}

function showError() {
  rssItem.innerHTML = '<p>错误！请检查您的RSS源或Api-key配置是否正确！</p>';
}

// 初始加载时显示第一个RSS项
fetchRssItems(rssSources[currentRssIndex]);

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
      })
      .catch(error => {
        console.error('Update check error:', error);
      });
  });
}, 3600000); // 每隔1小时检查一次RSS源是否有更新

// 点击关闭按钮后隐藏容器
var closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', function() {
  rssContainer.style.display = 'none';
});

```

home-rss.css：

```
/* noise-home主页rss-CSS样式 */
.rss-container {
  position: fixed;
  color: white; 
  display: flex;
  text-align: left; /* 文本左对齐 */
  flex-direction: column; /* 使内容垂直排列 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 半透明黑色背景 */
  overflow: hidden; /* 防止内容溢出 */
  padding: 20px; /* 添加内边距 */
}

/* 修改选择器为 .rss-link a */
.rss-link {
  display: flex;
  flex-direction: column; /* 使内容垂直排列 */
  align-items: flex-start; /* 文本左对齐 */
  width: 100%; /* 使链接宽度与容器一致 */
  margin-bottom: 20px; /* 使每个RSS项之间有间距 */
}

.rss-link a {
  font-size: 13px;
  color: white;
  text-decoration: none;
  width: 100%; /* 使链接宽度与容器一致 */
  text-align: left; /* 文本左对齐 */
}

/* 图片样式 */
.rss-link img {
  width: 100%; /* 图片宽度与容器一致 */
  height: auto; /* 高度按比例自适应 */
  border-radius: 5px; /* 可选：给图片添加圆角 */
  margin-top: 5px; /* 使图片与文本之间有间距 */
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
