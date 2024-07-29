# 右键弹出菜单

![right](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/right.png)

该组件为右键任意位置呼出菜单来实现进一步的交互，可自定义化

## 引入

需要引入Right.js、Right.css

Right.js代码为

```
window.onload = () => {
    const menu = document.querySelector('.menu')
    const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)['paddingTop']) - parseInt(getComputedStyle(menu)['paddingBottom'])
    menu.style.height = '0'

    openMenu = e => {
        e.preventDefault()

        menu.style.left = `${e.clientX}px`
        menu.style.top = `${e.clientY + 5}px`
        menu.style.height = `${menuHeight}px`
        menu.classList.add('is-active')

        return false
    }

    colseMenu = () => {
        menu.style.height = '0'
        menu.classList.remove('is-active')
    }

    window.onclick = () => colseMenu()
}
let isFullScreen = false;

    function toggleFullScreen() {
        if (!isFullScreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            isFullScreen = true;
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            isFullScreen = false;
        }
    }

    function copyContent() {
        const textToCopy = document.documentElement.innerHTML;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy text:', error);
            });
    }

    function refreshPage() {
        location.reload();
    }

    function goBack() {
        window.history.back();
    }

    function changeMode() {
        // Your code to change the mode goes here
    }
    function showImage() {
        var overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.zIndex = "9999";
        overlay.onclick = function() {
            document.body.removeChild(overlay);
        };

        var image = document.createElement("img");
        image.src = "https://jsd.cdn.zzko.cn/gh/rcy1314/tuchuang@main/uPic/weixin.png";
        image.style.position = "absolute";
        image.style.top = "50%";
        image.style.left = "50%";
        image.style.transform = "translate(-50%, -50%)";
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";

        overlay.appendChild(image);
        document.body.appendChild(overlay);
    }
```

Right.css代码为



```
* {
    margin: 0;
    padding: 0;
}

.menu {
    position: fixed; /* 修改此处从absolute更改为fixed */
    width: 88px;
    padding: 4px;
    box-shadow: 0 1px 4px rgba(33, 33, 33, 0.846), 0 8px 24px rgba(5, 5, 5, 0.859);
    border-radius: 10px;
    background: rgba(19, 19, 19, 0.802);
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    transition: opacity .2s ease, height .3s ease, visibility .3s ease;
    z-index: 999999; /* 保持菜单在顶层 */
}

.is-active {
    opacity: 1;
    visibility: visible;
}

.menu-list01 {
    list-style: none;
}

.menu-item {
    line-height: 22px;
    color: #f0f1f7;
    font-size: 16px;
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: background .3s ease;
}

.menu-item:hover {
    background: #127de7f7;
}

.menu-item svg {
    margin-right: 8px;
}

.menu-item-divider {
    height: 1px;
    margin: 4px 8px;
    background: #f5f5f6;
}

.menu-item-danger {
    color: #f94a05f7;
}

.menu-item-danger svg path {
    fill: #ee7f7f;
}

.menu-item svg path {
    fill: #f3f5f8;
}

.menu-item-danger:hover {
    background: #b32c2c95;
}

```

html中需要在body中引入

```
 <!-- 右键菜单 -->
	 <body oncontextmenu="openMenu(event)">
		<div class="menu">
			<ul class="menu-list01">
				<li class="menu-item">
					<a href="https://www.noisework.cn/e/zhichi/" target="_blank" style="color: white; text-decoration: none;">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
							<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
						</svg>
						<span style="margin-left: -4px;">赞赏</span>
					</a>
				</li>
				<li class="menu-item" onclick="toggleFullScreen()">
					<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
						<path d="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z"/>
					</svg>
					<span style="margin-left: 2px;">全屏</span>
				</li>
				<li class="menu-item" onclick="refreshPage()">
					<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"/></svg>
					<span style="margin-left: 2.3px;">刷新</span>
				</li>
				<li class="menu-item" onclick="goBack()">
					<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"/></svg>
					<span style="margin-left: 2.7px;">返回</span>
				</li>
				<li class="menu-item" onclick="changeMode()">
					<a href="./index.html" style="color: white; text-decoration: none;">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M258.6 0c-1.7 0-3.4 .1-5.1 .5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224H29.4C13.2 224 0 237.2 0 253.4c0 1.7 .1 3.4 .5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480v2.6c0 16.2 13.2 29.4 29.4 29.4c1.7 0 3.4-.1 5.1-.5C344 495 396.4 409.7 381.5 322.7c-2.9-17-8.4-32.9-15.9-47.4L480 288h2.6c16.2 0 29.4-13.2 29.4-29.4c0-1.7-.1-3.4-.5-5.1C495 168 409.7 115.6 322.7 130.5c-17 2.9-32.9 8.4-47.4 15.9L288 32V29.4C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
						<span style="margin-left: -4.5px;">模式</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="./lianxi/index.html" target="_blank" style="color: white; text-decoration: none;">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
							<path d="M385.2 167.6c6.4 0 12.6 .3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 .1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 .1 10-9.9 19.6-24.4 19.6z"/>
						</svg>
						<span style="margin-left: -4.5px;">联系</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="https://github.com/rcy1314/noisework" target="_blank" style="color: white; text-decoration: none;">
						<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"/></svg>
						<span style="margin-left: -4.5px;">主题</span>
					</a>
				</li>
				<li class="menu-item-divider"></li>
				<li class="menu-item menu-item-danger">
					<a href="#" style="color: white; text-decoration: none;"></a>
					<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
					<span style="margin-left: 2px;">关闭</span>
				</li>
			</ul>
		</div>
```



## 注意

需要注意的是要保证菜单选项必须位于最上层，且不被其它元素干扰

SVG可自定义引入，还需要注意的一点是我在引入不同的svg图标时发现大小不一，所以在菜单文字和图标的位置上我做了进一步的修改，如果你修改了图标请留意下css中的位置大小数值
