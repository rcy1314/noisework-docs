# PWA模式

### 什么是pwa

PWA，全称为“Progressive Web App”，即“渐进式网页应用”，是一种新型的应用模式，旨在将网页应用和原生应用的优势结合起来。PWA的核心理念是让用户通过网页访问应用，同时又能享受到接近原生应用的体验。以下是PWA的一些关键特点：

1. **无需安装**：用户不需要从应用商店下载安装，只需通过浏览器访问即可使用。
2. **离线访问**：通过服务工作线程（Service Workers）技术，PWA应用可以在没有网络连接的情况下继续工作。
3. **快速加载**：PWA应用会缓存资源，使得应用加载速度更快。
4. **安全性**：通过HTTPS协议传输数据，确保数据传输的安全性。
5. **可发现性**：可以通过Web App Manifest文件告诉浏览器这是一个应用，浏览器会将其显示在应用列表中。
6. **可链接性**：应用可以通过URL直接访问，易于分享。
7. **可重用性**：代码可以在不同的设备和平台上重用，不需要为每个平台单独开发。
8. **响应式设计**：应用界面会根据设备屏幕尺寸自动调整，适应各种设备。

PWA的这些特性使得它在开发成本、维护成本、用户获取成本等方面都具有优势，并且能够提供更好的用户体验。

## 引入

html部分：

```
<!-- 添加Service Worker -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }).catch(function(error) {
                    console.log('ServiceWorker registration failed: ', error);
                });
            });
        }
    </script>
```

```
 <link rel="manifest" href="manifest.json">
```

重要的是service-worker.js和manifest.json，其中service-worker.js为工作缓存文件，manifest.json为记录页面配置信息

service-worker.js示例代码

```
var cacheName = 'Noise主页-v2.0';
var assetsToCache = [
  './home.html',
  './index.html',
  './assets/sound/鼠点左1.mp3',
  './assets/sound/鼠点左2.mp3',
  './assets/sound/缓慢1.mp3',
  './assets/sound/风铃.mp3',
  './assets/sound/开瓶.mp3',
  './assets/sound/叮.mp3',
  './assets/sound/嘟.mp3',
  './assets/sound/动1.mp3',
  './assets/sound/滴滴.mp3',
  './assets/sound/打字.mp3',
  './assets/sound/jump.mp3',
  './assets/sound/载入1.mp3',
  './assets/sound/载入2.mp3',
  './assets/sound/载入3.mp3',
  './assets/sound/载入4.mp3',
  './assets/sound/载入5.mp3',
  './assets/sound/载入6.mp3',
  './assets/sound/载入7.mp3',
  './assets/sound/载入8.mp3',
  './assets/sound/载入9.mp3',
  './assets/31.jpeg',
  './assets/3.png',
  './assets/1ae.gif',
  './assets/2ae.gif',
  './assets/3ae.gif',
  './assets/4ae.gif',
  './assets/5ae.gif',
  './assets/6ae.gif',
  '.js/sound.js',
  './js/jquery.min.js',
  './js/APlayer.min.js',
  './js/Meting.min.js',
  './js/suiji-picture.js',
  './js/Right.js',
  './js/subscription-form.js',
  '/js/main.js',
  './js/home-script.js',
  './js/AD.js',
  './js/emb.js',
  './css/home-APlayer.min.css',
  './css/home-style.css',
  './css/root.css',
  './css/style.css',
  '/css/main.css',
  './assets/1ae.gif',

  './assets/bg/bg1.png',
  './assets/bg/bg2.png',
  './assets/bg/bg3.png',
  './assets/bg/bg4.png',
  './assets/bg/bg5.png',
  './assets/bg/bg6.png',
  './assets/bg/bg7.png',
  './assets/bg/bg8.png',
  './assets/bg/bg9.png',
  './assets/bg/bg10.png',
  './assets/bg/bg11.png',
  './assets/bg/bg12.png',

  './assets/mobilebg/bg1.png',
  './assets/mobilebg/bg2.png',
  './assets/mobilebg/bg3.png',
  './assets/mobilebg/bg4.png',
  './assets/mobilebg/bg5.png',
  './assets/mobilebgbg6.png',
  './assets/mobilebg/bg7.png',
  './assets/mobilebg/bg8.png',
  './assets/mobilebg/bg9.png',
 
  // 添加您需要缓存的其他静态资源
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== cacheName;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  var request = event.request;

  if (request.method !== 'GET') {
    event.respondWith(fetch(request));
    return;
  }

  if (isCriticalRequest(request)) {
    event.respondWith(
      caches.match(request).then(function(response) {
        return response || fetchAndCache(request);
      })
    );
  } else {
    event.respondWith(lazyLoad(request));
  }
});

function fetchAndCache(request) {
  return fetch(request).then(function(networkResponse) {
    return caches.open(cacheName).then(function(cache) {
      cache.put(request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function() {
    return caches.match('/index.html');
  });
}

function isCriticalRequest(request) {
  return request.url.includes('/home/');
}

function lazyLoad(request) {
  return fetch(request).catch(function() {
    return caches.match(request);
  });
}

function cleanUpCache() {
  caches.keys().then(function(cacheNames) {
    cacheNames.forEach(function(cacheName) {
      caches.open(cacheName).then(function(cache) {
        cache.keys().then(function(keys) {
          keys.forEach(function(key) {
            // 根据需求实现清理逻辑，例如基于最后修改时间或大小
          });
        });
      });
    });
  });
}

function monitorPerformance() {
  self.performance = self.performance || {};
  self.performance.timing = performance.timing;
  self.performance.navigation = performance.navigation;

  // 记录缓存命中情况
  self.addEventListener('fetch', function(event) {
    if (event.request.method === 'GET') {
      event.respondWith(
        caches.match(event.request).then(function(response) {
          if (response) {
            self.performance.cacheHits = self.performance.cacheHits || 0;
            self.performance.cacheHits++;
          } else {
            self.performance.cacheMisses = self.performance.cacheMisses || 0;
            self.performance.cacheMisses++;
          }
          return response || fetch(event.request);
        })
      );
    }
  });
}

setInterval(function() {
  updateCache();
}, 24 * 60 * 60 * 1000);

function updateCache() {
  assetsToCache.forEach(function(asset) {
    fetchAndCache(new Request(asset));
  });
}

// 初始化性能监控和缓存清理
monitorPerformance();
cleanUpCache();

```



在本次配置中我简单的设置了一点缓存文件，你可以继续增加，只能增加文件路径，不可以是文件夹

本次增加了自动刷新缓存的效果，增加的静态文件缓存后会在访问页面时加快访问速度！每次更新文件后可以更新service-worker.js的版本号
