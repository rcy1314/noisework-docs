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
var cacheName = 'Noise主页-v1.4.1';
var assetsToCache = [
  './home.html',
  './index.html',
  './assets/31.jpeg',
  './assets/3.png',
  './assets/1ae.gif',
  './assets/2ae.gif',
  './assets/3ae.gif',
  './assets/4ae.gif',
  './assets/5ae.gif',
  './assets/6ae.gif',
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
  './css/home-root.css',
  './css/home-style.css',
  './css/root.css',
  './css/style.css',
  '/css/main.css',
  './assets/1ae.gif',


  // 添加您需要缓存的其他静态资源
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        // 检查资源是否需要刷新
        event.waitUntil(
          refreshCache(event.request)
        );
        return response;
      }

      // 如果请求未在缓存中找到，则发起网络请求
      return fetch(event.request).then(function(networkResponse) {
        // 将请求的响应添加到缓存中
        caches.open(cacheName).then(function(cache) {
          cache.put(event.request, networkResponse.clone());
        });

        return networkResponse;
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          // 删除旧版本的缓存
          return name !== cacheName;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});

// 定义一个函数来刷新缓存
function refreshCache(request) {
  return fetch(request).then(function(networkResponse) {
    if (networkResponse && networkResponse.status === 200) {
      return caches.open(cacheName).then(function(cache) {
        return cache.put(request, networkResponse.clone());
      });
    }
  }).catch(function(error) {
    console.error('Error refreshing cache for ', request.url, error);
  });
}

```



在本次配置中我简单的设置了一点缓存文件，你可以继续增加，只能增加文件路径，不可以是文件夹

本次增加了自动刷新缓存的效果，增加的静态文件缓存后会在访问页面时加快访问速度！记得每次更新文件后更新service-worker.js的版本号（var cacheName = 'Noise主页-v1.4.1';）只有更新版本号才会刷新缓存！
