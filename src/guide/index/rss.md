# RSS动态卡片

## 特征

- 页面加载2秒后自动从右侧弹出
- 每隔8秒更换展示订阅标题+日期，可点击进入链接
- 支持多个rss源的引入
- 带有关闭按钮，点击后即可关闭
- 仅在电脑端尺寸下显示，手机端自动隐藏
- 更新两个版本-纯文本和图文样式

### 注意：你需要在rss.js中使用自己的https://rss2json.com 账户API key

![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230820/截屏2023-08-20-20.27.12.2eoc9vsplosg.jpg)

## 注意

请不要忘记在你的账户中设置API中的推送更新源并和rss.js文件中的源保持一致

![1730905023336](https://s2.loli.net/2024/11/06/z31TswlhSGWfHOP.png)

## 引入

## 纯文字版

除了需要在页面内引入相应的JS和css文件，还需要在body中引入

```
<!-- rss订阅文字代码-->
        <div class="rss-container">
            <div id="rss-item"></div>
            <div class="close-button" id="close-button">X</div>
          </div>
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

因其rss2json有api更新限制，你可以使用以下代码来获取自己账户下的rss更新显示

rss.js:（有自动刷新功能）

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

![1722269229303](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722269229303.png)

## 图文版

![1734069871601](https://s2.loli.net/2024/12/13/RDZruLVdQCJImvH.png)

## 纯文字版

除了需要在页面内引入相应的JS和css文件，还需要在body中引入

```
<!-- rss订阅文字代码-->
        <div class="rss-container">
            <div id="rss-item"></div>
            <div class="close-button" id="close-button">X</div>
          </div>
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
    box-shadow: 0 2px 2px 0 rgba(36, 35, 35, 0.911), 0 1px 5px 0 rgb(32, 32, 32);
    background-color: #1a1919e9;
    border: 2px solid #34343712;
    border-radius: 8px;
    padding: 13px;
    border-radius: 10px 0 0 10px;
    transition: right 0.3s ease-in-out;
    z-index: 300;
    color: white;
    text-align: center;
    display: block;
    overflow: hidden; /* 防止内容溢出 */
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

  /* 设置链接容器样式 */
  .rss-link {
    display: flex;
    flex-direction: column; /* 垂直排列图片和文字 */
    align-items: center;
    margin-bottom: 5px;
    overflow: hidden; /* 防止内容溢出 */
  }

  /* 修改选择器为 .rss-link a */
  .rss-link a {
    font-size: 13px;
    color: white;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    margin-top: 5px; /* 确保文字与图片分开 */
    text-align: center;
    word-break: break-all; /* 防止长单词溢出 */
    white-space: normal; /* 允许文本换行 */
  }

  /* 图片样式 */
  .rss-link img {
    width: 100%; /* 图片宽度自适应容器 */
    height: auto; /* 高度按比例自适应 */
    border-radius: 5px; /* 可选：给图片添加圆角 */
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

Rss.js

```
// 目前已修改为私有的rss2json的api key进行监测更新，除本站外这个key无法加入到其它域名，请修改为自己的key，默认每1小时更新限制
// 要使用完全免费的rss2json的api调用获取代码请查看https://www.noiseblogs.top/posts/fcbd92b4或访问https://noisevip.cn/17001.html
var rssContainer = document.querySelector('.rss-container');
var rssItem = document.getElementById('rss-item');
var rssSources = [
  'https://memos.noisework.cn/u/noise/rss.xml',
  'https://www.noiseblogs.top/atom.xml',
  'https://noisevip.cn/feed',
  // 添加更多的RSS信息源
];
var currentRssIndex = 0;
var currentRssItemIndex = 0;
var apiKey = 'YOUR_API_KEY'; // 替换为你的API密钥
var lastUpdateTimes = {}; // 记录每个RSS源的最后更新时间

function fetchRssItems(url) {
  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=${apiKey}`)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
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
        if (!thumbnailUrl && thumbnails.length > 1) {
          thumbnailUrl = thumbnails[1];
        }
        if (!thumbnailUrl && thumbnails.length > 2) {
          thumbnailUrl = thumbnails[2];
        }

        var rssLink = document.createElement('div');
        rssLink.classList.add('rss-link');
        rssLink.innerHTML = `
          <a href="${item.link}" target="_blank">
            ${item.title} - ${formattedDate}
            ${thumbnailUrl ? `<img src="${thumbnailUrl}" alt="缩略图" width="50" height="50">` : ''}
          </a>
        `;

        rssItem.appendChild(rssLink);

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
  currentRssIndex = (currentRssIndex + 1) % rssSources.length;
}, 8000);

// 定时检查RSS源是否有更新
setInterval(function() {
  rssSources.forEach(source => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source)}&api_key=${apiKey}`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        var latestItem = data.items[0];
        var pubDate = new Date(latestItem.pubDate);
        if (!lastUpdateTimes[source] || pubDate > lastUpdateTimes[source]) {
          fetchRssItems(source);
          lastUpdateTimes[source] = pubDate;
        }
      })
      .catch(error => {
        console.error('Update check error:', error);
      });
  });
}, 3600000);

```



<details>
<summary>✅ 【点击展开】</summary>

## 没有自动刷新功能的rss.js

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
