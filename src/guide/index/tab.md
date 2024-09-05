# 侧边导航按钮

![tab](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/tab.png)

该组件为右侧固定位置，点击后可弹出菜单选项，菜单可自定义

## 引入

以下两种效果二选一

## 固定右侧位置不变效果

需要引入的为tb.css和tab.js

tb.css代码为

```
*{
    /* 初始化 */
    margin: 0;
    padding: 0;
}

.menu-box{
    /* 固定定位 右下角 */
    position: fixed;
    z-index: 9999;
    bottom: 430px;
    right: 5px;
}
/* 菜单按钮 */
.menu-button{
    width: 30px;
    height: 30px;
    background-color: #101111;
    border-radius: 50%;
    /* 投影 */
    box-shadow: 0 0 0 4px rgba(13, 13, 14, 0.3);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    cursor: pointer;
    /* 过渡 */
    transition: 0.2s ease-in;
}
.menu-button:hover{
    background-color: #0f0f0f;
    box-shadow: 0 0 0 8px rgba(22, 22, 22, 0.3);
}
.menu-button .line-box{
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 0.3s ease-out;
}
/* 菜单按钮图标（三条杠） */
.menu-button .line{
    background-color: #fff;
    width: 100%;
    height: 2px;
    border-radius: 2px;
}
/* 前后两条短，中间的长 */
.menu-button .line:first-child{
    width: 50%;
    /* 设置变换的基点 */
    transform-origin: right;
    /* 过渡效果 */
    transition: transform 0.3s ease-in-out;
}
.menu-button .line:last-child{
    width: 50%;
    align-self: flex-end;
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
}
/* 菜单列表 */
.menu-list{
    width: 130px;
    height: auto;
    background-color: rgba(24, 23, 23, 0.644);
    border-radius: 8px;
    list-style: none;
    padding: 6px;
    box-shadow: 0 0 4px 4px rgba(17, 17, 17, 0.15);
    position: absolute;
    right: 10px;
    bottom: 15px;
    /* 默认隐藏 */
    opacity: 0;
    transform: scale(0);
    /* 设置变换的基点 */
    transform-origin: bottom right;
    /* 过渡效果 */
    transition: 0.3s ease;
    /* 过渡延迟 */
    transition-delay: 0.1s;
}
/* 菜单项 */
.menu-list li{
    display: flex;
    align-items: center;
    padding: 10px;
    color: #e4e4eb;
    cursor: pointer;
    position: relative;

}


/* 菜单项下边框 */
.menu-list li::before{
    content: "";
    width: calc(100% - 24px);
    height: 1px;
    background-color: rgba(7, 7, 7, 0.1);
    position: absolute;
    bottom: 0;
    left: 12px;
}
/* 最后一项不用下边框 */
.menu-list li:last-child::before{
    display: none;
}
/* 菜单项图标 */
.menu-list .fa{
    font-size: 18px;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 菜单项文本 */
.menu-list span{
    font-size: 14px;
    margin-left: 8px;
}
/* 活动态下的部分样式变化 */
/* 三条杠的变化 */
.active .line-box{
    transform: rotate(-45deg);
}
.active .line-box .line:first-child{
    transform: rotate(-90deg) translateX(1px);
}
.active .line-box .line:last-child{
    transform: rotate(-90deg) translateX(-1px);
}
/* 菜单列表的变化 */
.active .menu-list{
    opacity: 1;
    transform: scale(1);
}
.active .menu-list li{
    /* 执行动画：动画名 时长 线性 停留在最后一帧 */
    animation: fade-in-item 0.4s linear forwards;
}
/* 接下来为每一项设置动画延迟时间 */
.active .menu-list li:nth-child(1){
    animation-delay: 0.1s;
}
.active .menu-list li:nth-child(2){
    animation-delay: 0.2s;
}
.active .menu-list li:nth-child(3){
    animation-delay: 0.3s;
}
.active .menu-list li:nth-child(4){
    animation-delay: 0.4s;
}

/* 定义动画 */
@keyframes fade-in-item {
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}

```

tab.js代码为

```
// 要操作的元素
const menu_box=document.querySelector('.menu-box');
const menu_button=document.querySelector('.menu-button');

// 为菜单按钮绑定点击事件
menu_button.addEventListener('click',function(){
    menu_box.classList.toggle('active');
})
```

核心部分为css文件，已设置自适应页面，背景会随文字链接的增加而增加

选项部分位于html中

```
<div class="menu-box">
            <!-- 图标按钮 -->
            <div class="menu-button">
                <div class="line-box">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <!-- 菜单列表 -->
            <div>
                <ul class="menu-list">
                    <li><a style="color:rgb(247, 245, 245);" href="https://www.noiseblogs.top/link/" target="_blank"></i><span>🎲常用收藏</span></a></li>
                    <li><a style="color:rgb(252, 246, 246);" href="./e/zhichi/index.html" target="_blank"></i><span> 🧧赞助支持</span></a></li>
                    <li><a style="color:rgb(248, 244, 244);" href="./e/newsletter/index.html" target="_blank"></i><span>📧欢迎订阅</span></a></li>
                    <li><a style="color:rgb(248, 244, 244);" href="./lianxi/index.html" target="_blank"></i><span>📠欢迎联系</span></a></li>
                    <li><a style="color:rgb(248, 244, 244);" href="./fw/index.html" target="_blank"></i><span>🎉公共服务</span></a></li>
                </ul>
            </div>
        </div>
    </div>
```

## 全局可拖动效果

初始化位置不变

HTML

```
<div class="menu-box">
                            <!-- 图标按钮 -->
                            <div class="menu-button">
                                <div class="line-box">
                                    <div class="line"></div>
                                    <div class="line"></div>
                                    <div class="line"></div>
                                </div>
                            </div>
                            <!-- 菜单列表 -->
                            <div>
                                <ul class="menu-list">
                                    <li><a style="color:rgb(252, 246, 246);" href="./e/zhichi/" target="_blank"></i><span>
                                                🧧赞助支持</span></a></li>
                                    <li><a style="color:rgb(248, 244, 244);" href="./e/newsletter/"
                                            target="_blank" ></i><span>📧欢迎订阅</span></a></li>
                                    <li><a style="color:rgb(248, 244, 244);" href="./home/"></i><span>🌟切换模式</span></a> <!-- id="check1" -->
                                    </li>
                                    <li><a style="color:rgb(248, 244, 244);" href="./fw/"
                                            target="_blank" ></i><span>🎉公共服务</span></a></li>
                                    <li><a style="color:rgb(248, 244, 244);" href="https://docs.noisework.cn"
                                            target="_blank"></i><span>💻配置文档</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
```

CSS

```
* {
    margin: 0;
    padding: 0;
}

.menu-box {
    position: fixed; /* 使用固定定位以便不随页面滚动 */
    z-index: 9999;
    bottom: 430px;
    right: 5px;
    cursor: grab;
    display: inline-block; /* 以便整体可拖动 */
}

.menu-button {
    width: 30px;
    height: 30px;
    background-color: #262525e8;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(13, 13, 14, 0.3);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    cursor: pointer;
    transition: 0.2s ease-in;
}

.menu-button:hover {
    background-color: #0f0f0fe8;
    box-shadow: 0 0 0 8px rgba(22, 22, 22, 0.3);
}

.menu-button .line-box {
    width: 20px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 0.3s ease-out;
}

.menu-button .line {
    background-color: #fff;
    width: 100%;
    height: 2px;
    border-radius: 2px;
}

.menu-button .line:first-child {
    width: 50%;
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
}

.menu-button .line:last-child {
    width: 50%;
    align-self: flex-end;
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
}

.menu-list {
    width: 130px;
    box-shadow: 0 2px 2px 0 rgba(36, 35, 35, 0.911), 0 1px 5px 0 rgb(32, 32, 32);
    background-color: #1f1f1fe9;
    border: 2px solid #343437;
    border-radius: 8px;
    list-style: none;
    padding: 6px;
    position: absolute;
    top: -200px; /* 相对于按钮的上方 */
    left: -128px; /* 从按钮的左侧展开 */
    opacity: 0;
    transform: scale(0);
    transform-origin: bottom right;
    transition: 0.3s ease;
    transition-delay: 0.1s;
}

.menu-list li {
    display: flex;
    align-items: center;
    padding: 10px;
    color: #e4e4eb;
    cursor: pointer;
    position: relative;
}

.menu-list li::before {
    content: "";
    width: calc(100% - 24px);
    height: 1px;
    background-color: rgba(44, 42, 42, 0.43);
    position: absolute;
    bottom: 0;
    left: 12px;
}

.menu-list li:last-child::before {
    display: none;
}
.menu-list li:hover {
    background-color: #127de7de;
    transition: background-color 0.3s ease; /* 添加过渡效果 */
}
.menu-list .fa {
    font-size: 18px;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-list span {
    font-size: 14px;
    margin-left: 8px;
}

.active .line-box {
    transform: rotate(-45deg);
}

.active .line-box .line:first-child {
    transform: rotate(-90deg) translateX(1px);
}

.active .line-box .line:last-child {
    transform: rotate(-90deg) translateX(-1px);
}

.active .menu-list {
    opacity: 1;
    transform: scale(1);
}

.active .menu-list li {
    animation: fade-in-item 0.4s linear forwards;
}

.active .menu-list li:nth-child(1) {
    animation-delay: 0.1s;
}

.active .menu-list li:nth-child(2) {
    animation-delay: 0.2s;
}

.active .menu-list li:nth-child(3) {
    animation-delay: 0.3s;
}

.active .menu-list li:nth-child(4) {
    animation-delay: 0.4s;
}

@keyframes fade-in-item {
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
```

JS

```
const menu_box = document.querySelector('.menu-box');
const menu_button = document.querySelector('.menu-button');

menu_button.addEventListener('click', function() {
    menu_box.classList.toggle('active');
});

let isDragging = false;
let startX, startY, initialX, initialY;

menu_box.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = menu_box.offsetLeft;
    initialY = menu_box.offsetTop;
    menu_box.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        menu_box.style.left = `${initialX + dx}px`;
        menu_box.style.top = `${initialY + dy}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    menu_box.style.cursor = 'grab';
});
```

