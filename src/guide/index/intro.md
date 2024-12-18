# 主题概述

![666](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/666.png)

首页的核心部分在index.html

其中，已添加了对seo友好的页面描述、关键词及媒体截图部分

对于css及js大部分采用了本地引入的方式

![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722253542692.png)

## 引入图标

可以在官网引入官方的cdn（js）文件后图标代码生效

本地引入js文件：在官网https://fontawesome.com/download 下载并引入你自己的js文件即可，可以单独设置仅自己的域名下图标生效

如果你不想引入js文件下让图标生效则可以使用旧版fontawesome

你可以在https://fontawesome.com.cn/v4/cheatsheet 这里找到

![1726539996829](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1726539996829.png)

![1722255972032](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722255972032.png)

## 低端设备兼容

在最近更新中添加了兼容低端无图形加速设备（如linux）的文件（主要移除背景前景的视觉差效果），文件为lowmain.js

已增加自动检测性能及图形加速来自动切换

可在index首页最下方找到

```
<!--根据设备性能自动切换main.js-->  
    <script>
        // 检测页面卡顿
        function detectPageLag() {
            return new Promise((resolve) => {
                const frames = [];
                const startTime = performance.now();
                const frame = () => {
                    frames.push(performance.now());
                    if (frames.length === 60) {
                        const endTime = performance.now();
                        const totalDuration = endTime - startTime;
                        const avgFPS = (60 / (totalDuration / 1000));
                        resolve(avgFPS < 20); // 如果平均FPS低于20，则认为卡顿
                    } else {
                        requestAnimationFrame(frame);
                    }
                };
                requestAnimationFrame(frame);
            });
        }

        // 检测图形加速
        function hasWebGL() {
            try {
                const canvas = document.createElement('canvas');
                return !!window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
            } catch (e) {
                return false;
            }
        }
        async function loadScriptBasedOnDetection() {
            const isLagging = await detectPageLag();
            const hasAcceleration = hasWebGL();

            if (isLagging || !hasAcceleration) {
                // 卡顿或无图形加速
                const script = document.createElement('script');
                script.src = 'js/lowmain.js';
                document.body.appendChild(script);
            } else {
                // 无卡顿且有图形加速
                const script = document.createElement('script');
                script.src = 'js/main.js';
                document.body.appendChild(script);
            }
        }
        window.addEventListener('load', loadScriptBasedOnDetection);
    </script>
```



## 相关

- 配置中添加了预加载模式，来自http://instantclick.io/license
- 圆点鼠标效果-引入来源https://github.com/hmongouachon/NodeCursor
- 动态网页标题部分可根据需要自行修改
- 在注释中找到相关版本号部分为浏览器缓存，每次更改后会被强制刷新

