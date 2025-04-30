## 说说笔记卡片

该组件是为增强中间件及自己发布文章的进一步关联，不同于RSS组件的展示，它使用的是说说笔记的原生API来加载显示，理论上，扩展性更强，可改造型更强。

![pFbnPkV3jUhENDO](https://s2.loli.net/2025/04/29/pFbnPkV3jUhENDO.png)

使用前请先查看说说笔记开源仓库：https://github.com/rcy1314/echo-noise

### 说说笔记一键部署

```
docker run -d \
  --name Ech0-Noise \
  --platform linux/amd64 \
  -p 1314:1314 \
  -v /opt/data:/app/data \
  noise233/echo-noise
```

其中请确保/opt/data文件夹中包含你原有的数据库文件noise.db，如果没有，可以去掉这个挂载命令，它也会自动创建

你也可以使用-v /opt/data/noise.db:/app/data/noise.db 来只挂载原有数据库，

默认用户名：admin

默认用户密码：admin

原始web组件可访问仓库中的htmlwidgets文件夹内。

远程数据库部署及fly.io无服务器部署请查看仓库中的说明

## 卡片功能：

- 浮动效果，可浮空文字组件保持了一致性，都可以双击关闭组件

- 折叠查看内容，支持收回折叠，同样内容支持了原始web组件的一些特性

  如：支持对b站视频、YouTube、qq音乐、网易云音乐、github代码仓库的解析预览，

  支持图片灯箱效果、支持标签路由及搜索功能等

- 独立于整个页面，展开内容上下滑动不会影响其它元素和组件

⚠️：目前和首页有冲突的在于tag元素标签的显示，如果添加了该组件，首页头像处的标签将和该组件效果保持一致

## 配置使用

首页html中添加

```
<!-- 说说卡片 -->   
                     <link rel="stylesheet" href="./css/card-styles.css">                 
                     <link rel="stylesheet" href="./css/expand-card.css">
                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                     <script src="https://unpkg.com/medium-zoom/dist/medium-zoom.min.js"></script>
                     <!-- 预加载关键资源 -->
                     <link rel="preload" href="./js/note.js" as="script">
                     <link rel="preload" href="./css/card-styles.css" as="style">
                     <div id="note-expand-card" class="expand-card-container delayed-slide-in">
                        <div class="expand-card-stack float-animate" id="expand-card-stack" ondblclick="hideCardPermanently()">
                            <div class="expand-card park-sec park-sec1">
                                <div class="park-inside">
                                    <a class="avatar-link" id="expand-avatar" title="查看说说">
                                        <img src="https://s2.loli.net/2025/03/24/HnSXKvibAQlosIW.png" alt="">
                                    </a>
                                    <div class="content-sec">
                                        <a href="https://note.noisework.cn/" target="_blank" class="note-title-link">
                                            <h2 style="margin-bottom: 2px; font-size: 16px;">「说说笔记」</h2>
                                        </a>
                                        <span id="typewriter-text">右侧展开查看，双击可关闭卡片</span>
                                    </div>
                                </div>
                                <span class="date" id="expand-toggle-btn">展开 <span class="expand-arrow">▼</span></span>
                            </div>
                            <div class="expand-card park-sec park-sec2"></div>
                            <div class="expand-card park-sec park-sec3"></div>
                        </div>
                         <div id="expand-content" style="display:none;">
                             <div id="note">
                                 <div class="note-header">
                                     <div class="search-container">
                                         <input type="text" id="tag-search" placeholder="搜索标签 #..." />
                                         <button id="search-btn" target="_self">搜索</button>
                                     </div>
                                 </div>
                                 <div class="note-container">
                                     <div class="loading-wrapper">加载中...</div>
                                 </div>
                             </div>                        
                         <div class="expand-bottom-divider"></div>
                     </div>
                     <!-- 确保所有脚本在内容加载后执行 -->
                     <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
                     <script src="./js/expand-card.js"></script>
                     <script src="./js/jquery-3.2.1.js"></script>
                     <script>
                         window.note = {
                             host: 'https://note.noisework.cn', // 修改为自己的服务器地址
                             limit: '10',
                             domId: '#note',
                             sourceName: '「说说笔记」',
                             loadingTimeout: 10000  // 添加加载超时时间配置
                         };
                         // 添加加载超时处理
                         setTimeout(() => {
                             const loadingWrapper = document.querySelector('.loading-wrapper');
                             if (loadingWrapper && loadingWrapper.style.display !== 'none') {
                                 loadingWrapper.textContent = '加载失败，请刷新重试';
                             }
                         }, window.note.loadingTimeout);
                         
                         marked.setOptions({
                             breaks: true,
                             gfm: true,
                         }); 
                     </script>
                     <script src="./js/note.js"></script>
```

注意，上面代码是针对首页html中已引入了一些关键js和css文件而添加的

原始如下（不要使用，除非你的首页没有如APlayer.min.css等文件）：

<details>
<summary><h2>✅ 原始【点击查看】</h2></summary>

```
 <link rel="stylesheet" href="./css/APlayer.min.css">
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/waline.css">
    <link rel="stylesheet" href="./css/expand-card.css">
    <base target="_blank">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="https://unpkg.com/medium-zoom/dist/medium-zoom.min.js"></script>
    <!-- 添加代码高亮支持 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-javascript.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-css.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-python.min.js"></script>
    <!-- 预加载关键资源 -->
    <link rel="preload" href="./js/note.js" as="script">
    <link rel="preload" href="./css/styles.css" as="style">
    
    
    <!-- 按需加载非关键资源 -->
    <link rel="stylesheet" href="./css/APlayer.min.css" media="print" onload="this.media='all'">
</head>
<body>
    <div id="note-expand-card" class="expand-card-container">
        <div class="expand-card-stack" id="expand-card-stack">
            <div class="expand-card park-sec park-sec1">
                <div class="park-inside">
                    <img src="https://s2.loli.net/2025/03/24/HnSXKvibAQlosIW.png" alt="">
                    <div class="content-sec">
                        <h2>说说笔记</h2>
                        <span>来自noise的说说笔记</span>
                    </div>
                </div>
                <span class="date" id="expand-toggle-btn">展开 <span class="expand-arrow">▼</span></span>
            </div>
            <div class="expand-card park-sec park-sec2"></div>
            <div class="expand-card park-sec park-sec3"></div>
        </div>
       
        <div id="expand-content" style="display:none;">
            <div id="note">
                <div class="note-header">
                    <div class="search-container">
                        <input type="text" id="tag-search" placeholder="搜索标签 #..." />
                        <button id="search-btn" target="_self">搜索</button>
                    </div>
                </div>
                <div class="note-container">
                    <div class="loading-wrapper">加载中...</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 确保所有脚本在内容加载后执行 -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="./js/jquery-3.2.1.js"></script>
    <script src="./js/APlayer.min.js"></script>
    <script src="./js/Meting.min.js"></script>
    <script src="./js/expand-card.js"></script>
    <script>
        window.note = {
            host: 'https://note.noisework.cn',
            limit: '10',
            domId: '#note',
            commentServer: 'https://app-produ.up.railway.app',
            sourceName: '「说说笔记」',
            loadingTimeout: 10000  // 添加加载超时时间配置
        };
        
        // 添加加载超时处理
        setTimeout(() => {
            const loadingWrapper = document.querySelector('.loading-wrapper');
            if (loadingWrapper && loadingWrapper.style.display !== 'none') {
                loadingWrapper.textContent = '加载失败，请刷新重试';
            }
        }, window.note.loadingTimeout);
        
        marked.setOptions({
            breaks: true,
            gfm: true,
        }); 
    </script>
    <script src="./js/note.js"></script>
```

</details>

你只需要修改 host: 'https://note.noisework.cn',  地址为自己的服务器地址即可显示说说笔记的内容

不要忘记确实引入了相关js和css文件到项目中，其中一些css和js已改造适配首页显示，和原始文件不同

<details>
<summary><h2>✅ 引入的文件【点击查看】</h2></summary>

card-styles.css：

```
.note-header {
    padding: 16px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.search-container {
    display: flex;
    gap: 8px;
    max-width: 600px;
    margin: 0 auto;
}

#tag-search {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid rgba(63, 60, 60, 0.529);
    border-radius: 6px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
}

#search-btn {
    padding: 8px 16px;
    background: #1a73e8;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
}

#search-btn:hover {
    background: #2a405d;
}

.note-container {
    max-width: 600px;   /* 原为750px，缩小容器宽度 */
    min-width: 200px;   /* 可适当缩小 */
    width: 88%;         /* 原为92%，缩小整体宽度 */
    margin: 0 auto;
    padding: 12px;      /* 原为16px，缩小内边距 */
    overflow: hidden;
}
/* 针对Webkit浏览器隐藏滚动条 */
body::-webkit-scrollbar {
    display: none;
}

.notecard {
    background: #2b3038;
    border-radius: 12px;
    padding: 12px;      /* 原为16px，缩小卡片内边距 */
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    overflow: hidden;
}

.notecard-description {
    font-size: 14px;
    color: #e0e0e0;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

.notecard-description img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 10px 0;
    border-radius: 6px;
}

/* 媒体容器样式 */
.note-container .video-wrapper,
.note-container .music-wrapper,
.note-container .spotify-wrapper {
    max-width: 100%;
    margin: 6px 0;
}

.notecard:hover {
    transform: translateY(-2px);
}

.notecard-title {
    font-size: 16px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 0 0 8px 0;
    font-weight: bold;
}
/* 添加图片自适应样式 */
.notecard-description img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 10px 0;
}
/* 优化代码块样式 */
.notecard-description pre {
    background: #1e1e1e;
    border-radius: 8px;
    padding: 16px;
    overflow-x: auto;
    margin: 10px 0;
}

.notecard-description code {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    color: #d4d4d4;
    background: #1e1e1e;
    padding: 2px 6px;
    border-radius: 4px;
}

/* 行内代码样式 */
.notecard-description p code {
    background: rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
}

/* 优化遮罩渐变效果 */
.content-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    
    pointer-events: none;
    display: none;
}

/* 优化展开按钮样式 */
.expand-btn {
    position: relative;
    z-index: 2;
    margin: -40px auto 0;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: #e0e0e0;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: none;
    width: fit-content;
}

.expand-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
}

.tag {  
    color: rgb(120, 118, 226); /* 文本橙色 */   
    cursor: pointer;
  }
  

.back-to-list, .load-more {
    background: linear-gradient(145deg, #f0f0f0, #e6e6e6);
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    color: #eb761c;
    font-size: 14px;
    cursor: pointer;
    margin: 20px auto;
    display: block;
    transition: all 0.3s ease;
}

.back-to-list:hover, .load-more:hover {
    background: linear-gradient(145deg, #e6e6e6, #f0f0f0);
    color: #ff8c00;
    transform: translateY(-2px);
}

.back-to-list:active, .load-more:active {
    transform: translateY(1px);
}

.load-more:hover {
    background: linear-gradient(145deg, #e6e6e6, #f0f0f0);
    color: #333;
    transform: translateY(-2px);
 
}

.load-more:active {
    transform: translateY(1px);
  
}

.loaded-all {
    text-align: center;
    color: #999;
    padding: 20px;
    font-size: 14px;
}

.loading-wrapper {
    text-align: center;
    color: #e0e0e0;
    padding: 20px;
}

@media (max-width: 768px) {
    .note-container {
        width: 96%;
        padding: 8px;   /* 原为12px，移动端进一步缩小 */
    }
    
    .notecard {
        padding: 8px;   /* 原为12px，移动端进一步缩小 */
    }
}
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 比例 */
    height: 0;
    overflow: hidden;
    margin: 10px 0;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.music-wrapper {
    margin: 10px 0;
}

.spotify-wrapper {
    margin: 10px 0;
}

.notecard-description a {
    color: #ffa500; /* 橙色链接 */
    text-decoration: none;
    transition: color 0.2s;
}

.notecard-description a:hover {
    color: #ff8c00; /* 悬停时更深的橙色 */
    text-decoration: underline;
}

.notecard-title .fas {
    margin-left: 4px;
    color: #1a73e8;
    font-size: 0.9em;
}

.note-footer {
    border-top: 1px solid #413f3f;
    padding-top: 10px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.comment-button {
    cursor: pointer;
    color: #666;
}

.comment-button:hover {
    color: #1e90ff;
}

.comment-box {
    margin-top: 15px;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 5px;
}

.post-time {
    color: #666;
    font-size: 0.9em;
}

.source-link {
    color: #1e8fffb0;
    text-decoration: none;
    transition: color 0.2s ease;
}

.source-link:hover {
    color: #0056b3;
    text-decoration: underline;
}

.zoom-image {
    cursor: zoom-in;
    transition: transform 0.3s ease-in-out;
}

.zoom-image:hover {
    transform: scale(1.02);
}

.medium-zoom-overlay {
    z-index: 999;
}

.medium-zoom-image--opened {
    z-index: 1000;
}
.github-card {
    border: 1px solid #30363d;
    border-radius: 8px;
    background: #161b22;
    color: #c9d1d9;
    margin: 1em 0;
    padding: 16px;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    font-size: 15px;
    box-sizing: border-box;
    min-width: 0;
    overflow: hidden;
}
.github-card-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    min-width: 0;
}
.github-card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 0;
    object-fit: cover;
    background: #222;
}
.github-card-header > div {
    flex: 1 1 0%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.github-card-title {
    font-weight: bold;
    color: #58a6ff;
    text-decoration: none;
    font-size: 17px;
    word-break: break-all;
    white-space: pre-line;
    overflow-wrap: anywhere;
}
.github-card-desc {
    color: #8b949e;
    margin-top: 4px;
    font-size: 14px;
    word-break: break-all;
    white-space: pre-line;
    overflow-wrap: anywhere;
}
.github-card-footer {
    margin-top: 12px;
    display: flex;
    gap: 16px;
    color: #8b949e;
    font-size: 13px;
    flex-wrap: wrap;
}
.github-card-loading {
    color: #8b949e;
    font-style: italic;
}
@media (max-width: 520px) {
    .github-card {
        padding: 10px;
        font-size: 14px;
    }
    .github-card-avatar {
        width: 36px;
        height: 36px;
    }
    .github-card-title {
        font-size: 15px;
    }
}
```

expand-card.css：

```
/* expand-card.css 用于实现顶部堆叠卡片的独立样式和动画 */
body {
  position: relative;
}
#note-expand-card.hidden {
  display: none !important;
}

#expand-content.hidden {
  display: none !important;
}
.expand-card-container {
  position: fixed; /* 由 absolute 改为 fixed */
  top: 80px;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 52vw;
  box-sizing: border-box;
  z-index: 100;
}

.expand-card-stack {
  position: relative;
  width: 480px;
  height: 120px;
  transition: box-shadow 0.3s;
  z-index: 2;
  margin-right: 0;
}
.expand-card {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  border-radius: 32px;
  background-color: #222222;
    border-radius: 20px;
  
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  transition: transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s;
  overflow: hidden;
}


/* 添加新的滑入动画 */
@keyframes slideIn {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 添加延迟动画类 */
.delayed-slide-in {
  animation: slideIn 0.5s ease-out 2.5s forwards;
  opacity: 0;
}
.park-sec1 { z-index: 3; transform: translateY(0) scale(1); }
.park-sec2 { z-index: 2; transform: translateY(18px) scale(0.97); opacity: 0.7; }
.park-sec3 { z-index: 1; transform: translateY(36px) scale(0.94); opacity: 0.5; }
.expand-card .park-inside {
  display: flex;
  align-items: center;
  padding: 0 24px;
}
.expand-card img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 18px;
  object-fit: cover;
  border: 2px solid #fff;
}

.expand-card .content-sec h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #f7f3f3;
}
.expand-card .content-sec span {
  color: #888;
  font-size: 1rem;
}
.expand-card .date {
  margin-left: auto;
  margin-right: 32px;
  color: #f1f2f6;
  font-size: 1.1rem;
  background: rgba(0,0,0,0.18);
  padding: 4px 16px;
  border-radius: 16px;
  cursor: pointer;
}
.expand-card-stack.expanded .park-sec1 {
  transform: translateY(-20px) scale(1.04);
  box-shadow: 0 16px 48px 0 rgba(31,38,135,0.22);
}
.expand-card-stack.expanded .park-sec2 {
  transform: translateY(0) scale(1);
  opacity: 0.85;
}
.expand-card-stack.expanded .park-sec3 {
  transform: translateY(18px) scale(0.97);
  opacity: 0.7;
}
.btn-grp {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
.btn {
  background: #ffffffb1;
  color: #444444;
  border: none;
  border-radius: 32px;
  padding: 16px 48px;
  font-size: 1.4rem;
  font-weight: 600;
  box-shadow: 0 2px 8px 0 rgba(31,38,135,0.10);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn:hover {
  background-color: #222222;
    border-radius: 20px;
}
.expand-arrow {
  font-size: 1.2em;
  margin-left: 8px;
  transition: transform 0.3s;
}
/* 添加在适当位置 */
#typewriter-text {
  overflow: hidden;
  border-right: 2px solid #333;
  white-space: pre-wrap;
  margin: 0 auto;
  letter-spacing: 2px;
  animation: 
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #333 }
}
#expand-content {
  width: 500px;
  margin: 0;
  margin-top: 3px;
  background: transparent;
  border-radius: 24px;
  box-shadow: none;
  padding: 24px 0 0 0;
  transition: max-height 0.5s cubic-bezier(.4,2,.6,1), opacity 0.5s;
  max-height: 800px;
  overflow-y: auto;
  overscroll-behavior: contain;
  /* 隐藏滚动条，兼容主流浏览器 */
  scrollbar-width: none; /* Firefox */
}
#expand-content::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Edge */
}
@media (max-width: 500px) {
  .expand-card-stack, #expand-content {
    width: 88vw;
    min-width: 0;
    max-width: 100vw;
  }
  .expand-card {
    height: 80px;
  }
  .btn {
    padding: 12px 24px;
    font-size: 1.1rem;
  }
  #expand-content {
    max-height: 80vh;
    scrollbar-width: none;
  }
  #expand-content::-webkit-scrollbar {
    display: none;
  }
}

.expand-bottom-divider {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #e0e0e0 30%, #bdbdbd 70%);
  opacity: 0.7;
  z-index: 2;
  margin-top: 24px;
  border-radius: 1px;
  pointer-events: none;
}
/* 上下浮动动画 */
@keyframes float {
  0% { transform: translateY(0);}
  50% { transform: translateY(-18px);}
  100% { transform: translateY(0);}
}
.float-animate {
  animation: float 2.8s ease-in-out infinite;
}

#note-expand-card .avatar-link img {
  transition: transform 0.25s cubic-bezier(.4,2,.6,1);
}
#note-expand-card .avatar-link img:hover {
  transform: scale(1.18);
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
}
#note-expand-card .note-title-link {
  color: inherit;
  text-decoration: none;
}
@media (max-width: 600px) {
  #note-expand-card {
    display: none !important;
  }
}
```

note.js：

```
// Note Widget Configuration and Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Default configuration
    const config = window.note || {
        host: 'https://note.noisework.cn', //修改为你的域名
        limit: '10',
        domId: '#note'
    };
    
    const container = document.querySelector('#note .note-container');
    const searchInput = document.querySelector('#tag-search');
    const searchBtn = document.querySelector('#search-btn');
    
    let currentPage = 1;
    let isLoading = false;
    let hasMore = true;
    let currentTag = '';
    
    // Create UI elements
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.id = 'load-more-note';
    loadMoreBtn.className = 'load-more';
    loadMoreBtn.textContent = '加载更多';
    loadMoreBtn.style.display = 'none';
    
    const loadedAll = document.createElement('div');
    loadedAll.id = 'loaded-all-note';
    loadedAll.className = 'loaded-all';
    loadedAll.textContent = '已加载全部';
    loadedAll.style.display = 'none';
    
    // 在文件开头的 UI 元素创建部分添加
    const backToListBtn = document.createElement('button');
    backToListBtn.id = 'back-to-list';
    backToListBtn.className = 'back-to-list';
    backToListBtn.textContent = '返回列表';
    backToListBtn.style.display = 'none';
    
    container.appendChild(loadMoreBtn);
    container.appendChild(loadedAll);
    container.appendChild(backToListBtn);

    // 修改 handleSearch 函数
    function handleSearch() {
        const searchValue = searchInput.value.trim();
        currentTag = searchValue.startsWith('#') ? searchValue.substring(1) : '';
        resetState();
        // 确保在搜索时显示加载状态
        container.querySelector('.loading-wrapper').style.display = 'block';
        loadInitialContent();
        if (searchValue !== '') {
            backToListBtn.style.display = 'block';
        } else {
            backToListBtn.style.display = 'none';
        }
    }

    // 修改 resetState 函数
    function resetState() {
        currentPage = 1;
        hasMore = true;
        isLoading = false;
        loadMoreBtn.style.display = 'none';
        loadedAll.style.display = 'none';
        clearMessages();
        // 重置时显示加载状态
        container.querySelector('.loading-wrapper').style.display = 'block';
    }

    // 修改 loadInitialContent 函数中的错误处理
    async function loadInitialContent() {
        try {
            const url = buildApiUrl();
            console.log('请求URL:', url);
            
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP错误! 状态码: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('API响应数据:', result);
            
            if (result && result.code === 1 && result.data) {
                // 修改这里以适应新的响应格式
                const items = Array.isArray(result.data) ? result.data : (result.data.items || []);
                const sortedData = items.sort((a, b) => 
                    new Date(b.created_at) - new Date(a.created_at)
                );
                renderMessages(sortedData);
                
                updateLoadMoreState(items.length);
            } else {
                console.error('API返回数据格式不符:', result);
                showNoContent();
            }
        } catch (error) {
            console.error('加载内容失败:', error);
            showLoadError();
        } finally {
            // 确保无论成功失败都隐藏加载状态
            container.querySelector('.loading-wrapper').style.display = 'none';
        }
    }

    // 添加返回列表的处理函数
    // Event listeners
    loadMoreBtn.addEventListener('click', loadMoreContent);
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    backToListBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentTag = '';
        backToListBtn.style.display = 'none';
        resetState();
        loadInitialContent();
    });
    
    // Initial load
    loadInitialContent();
    
    function handleSearch() {
        const searchValue = searchInput.value.trim();
        currentTag = searchValue.startsWith('#') ? searchValue.substring(1) : '';
        resetState();
        loadInitialContent();
        if (searchValue !== '') {
            backToListBtn.style.display = 'block';
        } else {
            backToListBtn.style.display = 'none';
        }
    }
    
    function filterByTag(tag) {
        searchInput.value = `#${tag}`;
        currentTag = tag;
        backToListBtn.style.display = 'block';
        resetState();
        loadInitialContent();
    }
    
    function resetState() {
        currentPage = 1;
        hasMore = true;
        isLoading = false;
        loadMoreBtn.style.display = 'none';
        loadedAll.style.display = 'none';
        clearMessages();
        const loadingWrapper = container.querySelector('.loading-wrapper');
        if (loadingWrapper) {
            loadingWrapper.style.display = 'block';
        }
    }
    
    function clearMessages() {
        const messages = container.querySelectorAll('.notecard');
        messages.forEach(msg => msg.remove());
    }
    
    function buildApiUrl() {
        let url;
        if (currentTag) {
            // 使用标签搜索路由
            url = `${config.host}/api/messages/tags/${encodeURIComponent(currentTag)}?page=${currentPage}&pageSize=${config.limit}`;
        } else if (searchInput.value.trim() !== '') {
            // 使用普通搜索路由
            url = `${config.host}/api/messages/search?keyword=${encodeURIComponent(searchInput.value.trim())}&page=${currentPage}&pageSize=${config.limit}`;
        } else {
            // 无搜索词时使用普通分页路由
            url = `${config.host}/api/messages/page?page=${currentPage}&pageSize=${config.limit}`;
        }
        return url;
    }

    async function loadInitialContent() {
        try {
            const url = buildApiUrl();
            console.log('请求URL:', url);
            
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP错误! 状态码: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('API响应数据:', result);
            
            if (result && result.code === 1 && result.data) {
                // 修改这里以适应新的响应格式
                const items = Array.isArray(result.data) ? result.data : (result.data.items || []);
                const sortedData = items.sort((a, b) => 
                    new Date(b.created_at) - new Date(a.created_at)
                );
                renderMessages(sortedData);
                
                updateLoadMoreState(items.length);
            } else {
                console.error('API返回数据格式不符:', result);
                showNoContent();
            }
        } catch (error) {
            console.error('加载内容失败:', error);
            showLoadError();
        } finally {
            container.querySelector('.loading-wrapper').style.display = 'none';
        }
    }

    async function loadMoreContent() {
        if (isLoading || !hasMore) return;
        
        isLoading = true;
        loadMoreBtn.textContent = '加载中...';
        currentPage++;
        
        try {
            const url = buildApiUrl();
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            
            if (result && result.code === 1 && result.data) {
                const items = Array.isArray(result.data) ? result.data : (result.data.items || []);
                const sortedData = items.sort((a, b) => 
                    new Date(b.created_at) - new Date(a.created_at)
                );
                renderMessages(sortedData);
                
                updateLoadMoreState(items.length);
            }
        } catch (error) {
            console.error('加载更多内容失败:', error);
            currentPage--;
        } finally {
            isLoading = false;
            loadMoreBtn.textContent = '加载更多';
        }
    }

    // 首先引入 marked 库
    const marked = window.marked || {
        parse: (text) => text
    };

    function parseContent(content) {
        // 先解析 Markdown
        content = marked.parse(content);

        // 为所有图片添加 zoom-image 类
        content = content.replace(/<img/g, '<img class="zoom-image"');

        // 定义媒体平台的正则表达式
        const BILIBILI_REG = /<a href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?">.*?<\/a>/g;
        const QQMUSIC_REG = /<a href="https:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?">.*?<\/a>/g;
        const QQVIDEO_REG = /<a href="https:\/\/v\.qq\.com\/.*\/([a-zA-Z0-9]+)\.html">.*?<\/a>/g;
        const SPOTIFY_REG = /<a href="https:\/\/open\.spotify\.com\/(track|album)\/([\s\S]+)">.*?<\/a>/g;
        const YOUKU_REG = /<a href="https:\/\/v\.youku\.com\/.*\/id_([a-zA-Z0-9=]+)\.html">.*?<\/a>/g;
        const YOUTUBE_REG = /<a href="https:\/\/(www\.youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})">.*?<\/a>/g;
        const NETEASE_MUSIC_REG = /<a href="https:\/\/music\.163\.com\/.*?id=(\d+)">.*?<\/a>/g;
        // 修改正则，避免匹配图片链接
        const GITHUB_REPO_REG = /<a href="https:\/\/github\.com\/([\w-]+)\/([\w.-]+)(?:\/[^\s"]*)?"[^>]*>(?!<img)[\s\S]*?<\/a>/g;

        // 处理标签（在 Markdown 解析后）
        content = content.replace(/<p>(.*?)<\/p>/g, (match, p) => {
            return '<p>' + p.replace(/#([^\s#<>]+)/g, '<span class="tag" onclick="filterByTag(\'$1\')">#$1</span>') + '</p>';
        });

        // 处理各种媒体链接
        content = content
        .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='https://www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' style='position:absolute;height:100%;width:100%;'></iframe></div>")
        .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$2' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>")
        .replace(NETEASE_MUSIC_REG, "<div class='music-wrapper'><meting-js auto='https://music.163.com/#/song?id=$1'></meting-js></div>")
        .replace(QQMUSIC_REG, "<div class='music-wrapper'><meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js></div>")
        .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
        .replace(SPOTIFY_REG, "<div class='spotify-wrapper'><iframe style='border-radius:12px' src='https://open.spotify.com/embed/$1/$2?utm_source=generator&theme=0' width='100%' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe></div>")
        .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
        .replace(GITHUB_REPO_REG, (match, owner, repo) => {
            const cardId = `github-card-${owner}-${repo}-${Math.random().toString(36).slice(2, 8)}`;
            setTimeout(() => fetchGitHubRepoInfo(owner, repo, cardId), 0);
            return `<div class="github-card" id="${cardId}" data-owner="${owner}" data-repo="${repo}">
                <div class="github-card-loading">Loading GitHub Repo...</div>
            </div>`;
        });

    return content;
}
    
    function updateLoadMoreState(itemCount) {
        if (itemCount >= config.limit) {
            loadMoreBtn.style.display = 'block';
            loadedAll.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'none';
            loadedAll.style.display = 'block';
            hasMore = false;
        }
    }
    
    function showNoContent() {
        container.querySelector('.loading-wrapper').textContent = '暂无内容';
        hasMore = false;
    }
    
    function showLoadError() {
        container.querySelector('.loading-wrapper').textContent = '加载失败，请刷新重试';
    }
    
    function renderMessages(messages) {
        const loadingWrapper = container.querySelector('.loading-wrapper');
        if (loadingWrapper) {
            loadingWrapper.style.display = 'none';
        }
        
        messages.forEach(message => {
            const messageElement = createMessageElement(message);
            container.insertBefore(messageElement, loadMoreBtn);
        });
    }
    
    // 将 toggleCommentBox 和 initWaline 函数暴露到全局作用域
    window.toggleCommentBox = function(host) {
        const commentBox = document.getElementById(`comment-box-${host}`);
        if (commentBox) {
            if (commentBox.style.display === "none") {
                commentBox.style.display = "block";
                initWaline(commentBox, host);
            } else {
                commentBox.style.display = "none";
            }
        }
    };

    window.initWaline = function(container, host) {
        const commentId = `waline-${host}`;
        container.innerHTML = `<div id="${commentId}"></div>`;
        import('https://unpkg.com/@waline/client@v3/dist/waline.js').then(({ init }) => {
            const uid = host.split('-').pop();
            init({
                el: `#${commentId}`,
                serverURL: window.note.commentServer || 'https://ment.noisework.cn', // 使用配置中的评论服务器地址
                reaction: 'true',
                meta: ['nick', 'mail', 'link'],
                requiredMeta: ['mail', 'nick'],
                pageview: true,
                search: false,
                wordLimit: 200,
                pageSize: 5,
                avatar: 'monsterid',
                emoji: [
                    'https://unpkg.com/@waline/emojis@1.2.0/tieba',
                ],
                imageUploader: false,
                copyright: false,
                path: `${config.host}/#/messages/${uid}`,
            });
        });
    };
    
    function createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'notecard';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'notecard-content';
        
        const title = document.createElement('h3');
        title.className = 'notecard-title';
        title.innerHTML = `${message.username || '匿名用户'}<i class="fas fa-certificate" style="color: rgb(26, 81, 232) font-size: 0.8em;"></i>`;
        
        const description = document.createElement('div');
        description.className = 'notecard-description';
        
        let processedContent = message.content || '无内容';
        processedContent = parseContent(processedContent);
        description.innerHTML = processedContent;

        // 初始化图片灯箱效果
        const zoomImages = description.querySelectorAll('.zoom-image');
        mediumZoom(zoomImages, {
            margin: 24,
            background: 'rgba(0, 0, 0, 0.9)',
            scrollOffset: 0,
        });

        // 添加渐变遮罩
        const contentMask = document.createElement('div');
        contentMask.className = 'content-mask';
        description.appendChild(contentMask);
        
        // 添加展开按钮
        const expandBtn = document.createElement('button');
        expandBtn.className = 'expand-btn';
        expandBtn.textContent = '展开全文';
        
        // 修改展开按钮的检测逻辑
        const checkHeight = () => {
            const images = description.getElementsByTagName('img');
            const allImagesLoaded = Array.from(images).every(img => img.complete);
            
            if (allImagesLoaded) {
                const actualHeight = description.scrollHeight;
                if (actualHeight > 680) {
                    description.style.maxHeight = '680px';  // 添加这行
                    contentMask.style.display = 'block';
                    expandBtn.style.display = 'block';
                } else {
                    description.style.maxHeight = 'none';   // 添加这行
                    contentMask.style.display = 'none';
                    expandBtn.style.display = 'none';
                }
            } else {
                // 如果图片未加载完，等待所有图片加载完成后再次检查
                Promise.all(Array.from(images).map(img => {
                    if (img.complete) return Promise.resolve();
                    return new Promise(resolve => {
                        img.onload = resolve;
                        img.onerror = resolve;
                    });
                })).then(checkHeight);
            }
        };

        // 初始检查（处理无图片的情况）
        setTimeout(checkHeight, 100);
        
        // 展开按钮点击事件
        expandBtn.addEventListener('click', () => {
            if (description.classList.contains('expanded')) {
                description.classList.remove('expanded');
                description.style.maxHeight = '680px';      // 添加这行
                expandBtn.textContent = '展开全文';
                contentMask.style.display = 'block';
                // 滚动到卡片顶部
                messageDiv.scrollIntoView({ behavior: 'smooth' });
            } else {
                description.classList.add('expanded');
                description.style.maxHeight = 'none';       // 添加这行
                expandBtn.textContent = '收起全文';
                contentMask.style.display = 'none';
            }
        });
        
        if (message.image_url) {
            const img = document.createElement('img');
            img.src = message.image_url.startsWith('http') ? 
                message.image_url : 
                config.host + message.image_url;
            img.style.maxWidth = '100%';
            img.style.borderRadius = '2px';
            img.style.marginTop = '2px';
            description.appendChild(img);
        }
        
        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        contentDiv.appendChild(expandBtn);

        // 添加底部分割线和信息
        const footerDiv = document.createElement('div');
        footerDiv.className = 'note-footer';
        
        // 左侧时间和来源
        const timeDiv = document.createElement('small');
        timeDiv.className = 'post-time';
        const date = new Date(message.created_at);
        timeDiv.textContent = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} · 来自 `;
        
        // 修改链接生成逻辑
        const sourceLink = document.createElement('a');
        sourceLink.href = `${config.host}/#/messages/${message.id}`;
        sourceLink.textContent = config.sourceName || '「说说笔记」';
        sourceLink.className = 'source-link';
        sourceLink.target = '_blank'; // 修改为在新标签页打开
        timeDiv.appendChild(sourceLink);
        
        // 右侧评论按钮
        const commentDiv = document.createElement('small');
        commentDiv.className = 'comment-button';
        commentDiv.dataset.host = `note-${message.id}`;
       // commentDiv.innerHTML = '📮 评论';
        commentDiv.onclick = function() {
            window.toggleCommentBox(`note-${message.id}`);
        };
        
        footerDiv.appendChild(timeDiv);
        footerDiv.appendChild(commentDiv);
        
        // 添加评论框容器
        const commentBoxDiv = document.createElement('div');
        commentBoxDiv.id = `comment-box-note-${message.id}`;
        commentBoxDiv.className = 'comment-box';
        commentBoxDiv.style.display = 'none';
        
        contentDiv.appendChild(footerDiv);
        contentDiv.appendChild(commentBoxDiv);
        messageDiv.appendChild(contentDiv);
        
        return messageDiv;
    }
    
    // 将filterByTag函数暴露到全局作用域
    window.filterByTag = filterByTag;
});

// 新增：异步拉取GitHub仓库信息并填充卡片
function fetchGitHubRepoInfo(owner, repo, cardId) {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
            if (!data) return;
            const card = document.getElementById(cardId);
            if (card) {
                card.innerHTML = `
                    <div class="github-card-header">
                        <img src="${data.owner.avatar_url}" class="github-card-avatar" />
                        <div>
                            <a href="${data.html_url}" target="_blank" class="github-card-title">${data.full_name}</a>
                            <div class="github-card-desc">${data.description || ''}</div>
                        </div>
                    </div>
                    <div class="github-card-footer">
                        <span>⭐ ${data.stargazers_count}</span>
                        <span>🍴 ${data.forks_count}</span>
                        <span>🛠️ ${data.language || ''}</span>
                    </div>
                `;
            }
        });
}
```

expand-card.js：

```

// 展开/收起卡片交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    var expandBtn = document.getElementById('expand-toggle-btn');
    var expandContent = document.getElementById('expand-content');
    var expandArrow = expandBtn.querySelector('.expand-arrow');
    var stack = document.getElementById('expand-card-stack');
    var expanded = false;
    expandBtn.addEventListener('click', function() {
        expanded = !expanded;
        if (expanded) {
            expandContent.style.display = 'block';
            expandBtn.innerHTML = '收起 <span class="expand-arrow">▲</span>';
            stack.classList.add('expanded');
        } else {
            expandContent.style.display = 'none';
            expandBtn.innerHTML = '展开 <span class="expand-arrow">▼</span>';
            stack.classList.remove('expanded');
        }
    });
});

function hideCardPermanently() {
    const card = document.getElementById('note-expand-card');
    const content = document.getElementById('expand-content');
    
    // 添加hidden类来隐藏元素
    card.classList.add('hidden');
    content.classList.add('hidden');
    
    // 存储隐藏状态到localStorage
    // localStorage.setItem('cardHidden', 'true');
}

// 页面加载时检查隐藏状态
document.addEventListener('DOMContentLoaded', function() {
    // if (localStorage.getItem('cardHidden') === 'true') {
    //     hideCardPermanently();
    // }
    // 确保卡片默认显示
    const card = document.getElementById('note-expand-card');
    const content = document.getElementById('expand-content');
    card.classList.remove('hidden');
    content.classList.remove('hidden');
});
```

</details>
