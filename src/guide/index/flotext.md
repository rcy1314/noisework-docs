# 浮动文字

该组件可以定义全局页面位置，功能为增加互动和增强提醒

已设置鼠标放入文字时，会有放大效果及指定音效，双击可关闭

## 引入

![1724167675214](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1724167675214.png)

文字为随机出现的指定文字，位置也是指定的

HTML中body引入：

```
<!--浮空文字 -->
        <div class="floating-text" id="floatingText1"></div>
        <div class="floating-text" id="floatingText2"></div>
        <div class="floating-text" id="floatingText3"></div>
        <div class="floating-text" id="floatingText4"></div>
        <div class="floating-text" id="floatingText5"></div>
        <div class="floating-text" id="floatingText6"></div>
        <div class="floating-text" id="floatingText7"></div>
        <div class="floating-text" id="floatingText8"></div>
        <div class="floating-text" id="floatingText9"></div>
```

还需要引入JS和css

```
<link rel="stylesheet" type="text/css" href="css/flotext.css">
    <script src="js/flotext.js"></script>
```

CSS：

```
/* 浮空文字 */
.floating-text {
  position: fixed;
  text-align: center;
  font-size: 12px;
  color: #faf5f5;
  border-radius: 8px;
  overflow: hidden;
  border-style: solid;
  border-width: 2px;
  border-color: #ffffffc6;
  background-color: #0f0f0fa4;
  padding: 8px;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;
  transform: scale(1);
  font-family: 'Your Desired Font', sans-serif;
  animation: float 5s ease-in-out infinite;
  z-index: 999;
}

/* 鼠标悬停时的放大效果 */
.floating-text {
  transition: zoom 0.3s ease;
}

.floating-text:hover {
  zoom: 1.1;
}


/* 文字上下浮动动画 */
@keyframes float {
  0%, 100% {
      transform: translateY(0);
  }
  50% {
      transform: translateY(-20px);
  }
}

/* 文字消失动画 */
@keyframes shatter {
  0% {
      opacity: 1;
      transform: scale(1);
  }
  100% {
      opacity: 0;
      transform: scale(0);
  }
}

/* 在小屏幕上隐藏 */
@media (max-width: 768px) {
  .floating-text {
      display: none;
  }
}

```

JS：

```
// 浮空文字数组
const texts = [
    { text: "头像右下角图标可切换背景哦！", elementId: "floatingText1", position: { top: "9%", right: "23%" } },
    { text: "点击切换模式查看更多哦", elementId: "floatingText2", position: { top: "30%", right: "14%" } },
    { text: "相关配置请查看文档！", elementId: "floatingText3", position: { top: "45%", right: "8%" } },
    { text: "主页更新了哦😯", elementId: "floatingText4", position: { top: "60%", right: "50%" } },
    { text: "想我了没！", elementId: "floatingText5", position: { top: "31%", right: "48%" } },
    { text: "知行合一", elementId: "floatingText6", position: { top: "68%", right: "20%" } },
    { text: "努力才会有收获哦！", elementId: "floatingText7", position: { top: "16%", right: "42%" } },
    { text: "常来看看，私聊我哦！", elementId: "floatingText8", position: { top: "19%", right: "12%" } },
    { text: "发现新宝藏啦！", elementId: "floatingText9", position: { top: "71%", right: "40%" } },
    // 添加更多文本和位置
  ];

// 当前显示的文本索引
let currentTextIndex = -1;

// 更新文本的函数
function updateText() {
    if (currentTextIndex >= 0) {
        const currentElement = document.getElementById(texts[currentTextIndex].elementId);
        hideText(currentElement);
    }

    // 随机选择一个文本对象
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * texts.length);
    } while (randomIndex === currentTextIndex);

    currentTextIndex = randomIndex;
    const { text, elementId, position, stay, interval } = texts[randomIndex];
    const floatingTextElement = document.getElementById(elementId);
    floatingTextElement.textContent = text;
    Object.assign(floatingTextElement.style, position); // 设置位置
    floatingTextElement.style.opacity = 1;
    floatingTextElement.style.animation = 'float 5s ease-in-out infinite';

    // 添加双击事件监听器
    floatingTextElement.addEventListener('dblclick', function() {
        hideText(this);
    });
}

function hideText(element) {
    element.style.opacity = 0;
    element.style.pointerEvents = 'none'; 
}

// 主定时器，用于控制文本的显示和隐藏
function startTextAnimation() {
    updateText();
    checkMobile();
    mainTimer = setInterval(() => {
        const { elementId, stay, interval } = texts[currentTextIndex];
        const currentElement = document.getElementById(elementId);
        hideText(currentElement);

        // 等待文本消失后再显示下一个文本
        setTimeout(updateText, interval);
    }, stay + interval);
}

// 初始化
setTimeout(startTextAnimation, 4000); 

// 窗口大小改变时检查移动设备
window.addEventListener('resize', checkMobile);

```

## 注意

该jS代码未优化，只是简单的让文字按指定位置随机出现，可以再进一步优化

音效部分可在sound.js找到该设定

```
// 浮动文字
var floatingTextSoundPath = '../assets/sound/jump.mp3';
var floatingTextHoverSound = new Audio(floatingTextSoundPath);
floatingTextHoverSound.preload = 'auto';
function playSound(audioObject) {
    audioObject.currentTime = 0;
    audioObject.play();
}
function addSoundToElements(selectors, sound) {
    selectors.forEach(function(selector) {
        document.querySelectorAll(selector).forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                // 只有在音频暂停或结束时才播放
                if (sound.paused || sound.ended) {
                    playSound(sound);
                }
            });
        });
    });
}
var floatingTextSelectors = ['.floating-text'];
addSoundToElements(floatingTextSelectors, floatingTextHoverSound);

```

