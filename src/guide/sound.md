# 音效

这是为增加页面互动而存在的，如果你喜欢可以自行引入

预览一些增加的效果【不代表最新代码中不会修改音效】

<video width="100%" height="100%"  src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E4%B8%BB%E9%A1%B5%E6%9B%B4%E6%96%B0%E6%BC%94%E7%A4%BA01.mp4"  autoplay controls loop></video>

## 音效特征

- 鼠标左键点击音效（不对手机尺寸生效）
- 鼠标右键点击音效（不对手机尺寸生效）
- 网址悬停选择模块音效
- 广告位悬停音效
- 指定文字的悬停音效
- 时间悬停音效
- 载入页面时的开机音效（一些浏览器会阻止自动播放，需要进入页面后手动点击一次触发）
- 带添加

## 引入

这次是为首页和home页同时准备的，所以只需要引入同一个JS文件即可

页脚处添加

```
<script src="js/sound.js"></script>
```

JS文件代码

```
document.addEventListener('DOMContentLoaded', function() {
    // 预加载音效
    var leftClickSound = new Audio('../assets/sound/鼠点左2.mp3'); // 鼠标左
    var rightClickSound = new Audio('../assets/sound/风铃.mp3'); // 鼠标右
    var hoverSoundlogoDiv = new Audio('../assets/sound/门铃.mp3'); // 头像logo
    var hoverSoundavatar = new Audio('../assets/sound/门铃.mp3'); // 头像logo
    var hoverSoundfirst = new Audio('../assets/sound/开瓶.mp3'); // 首页切换风格文字
    var hoverSoundclock = new Audio('../assets/sound/叮.mp3'); // 时钟
    var hoverSounddescriptiontext1 = new Audio('../assets/sound/开瓶.mp3'); // home切换模式文字
    var hoverSounddescriptiontext3 = new Audio('../assets/sound/滴滴.mp3'); // home运行文字
    var hoverSoundcheck1 = new Audio('../assets/sound/开瓶.mp3'); // 首页右侧切换模式文字
    var hoverSoundtypingText = new Audio('../assets/sound/打字.mp3'); // home页打字机文字

    leftClickSound.preload = 'auto';
    rightClickSound.preload = 'auto';
    hoverSoundlogoDiv.preload = 'auto'; 
    hoverSoundavatar.preload = 'auto'; 
    hoverSoundfirst.preload = 'auto'; 
    hoverSoundclock.preload = 'auto'; 
    hoverSounddescriptiontext1.preload = 'auto'; 
    hoverSounddescriptiontext3.preload = 'auto'; 
    hoverSoundcheck1.preload = 'auto'; 
    hoverSoundtypingText.preload = 'auto'; 
    
    leftClickSound.load();
    rightClickSound.load();
    hoverSoundlogoDiv.load(); 
    hoverSoundavatar.load(); 
    hoverSoundfirst.load(); 
    hoverSoundclock.load(); 
    hoverSounddescriptiontext1.load(); 
    hoverSounddescriptiontext3.load(); 
    hoverSoundcheck1.load(); 
    hoverSoundtypingText.load(); 

    // 鼠标点击音效函数
    function playSound(audioObject) {
        audioObject.currentTime = 0; // 重置音频到开始
        audioObject.play();
    }

    // 检测设备类型
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // 监听鼠标点击事件
    document.addEventListener('mousedown', function(event) {
        if (!isMobileDevice()) { // 如果不是移动设备
            if (event.button === 0) { // 左键点击
                playSound(leftClickSound); 
            } else if (event.button === 2) { 
                playSound(rightClickSound); // 播放右键点击音效
            }
        }
    });

    // 获取logoDiv元素
    var logoDiv = document.getElementById('logoDiv');
    if (logoDiv) {
        // 监听鼠标悬停事件
        logoDiv.addEventListener('mouseenter', function() {
            playSound(hoverSoundlogoDiv); 
        });
    } else {
        console.warn('没有找到ID为logoDiv的元素');
    }

    // 获取first元素
    var first = document.getElementById('first');
    if (first) {
        // 监听鼠标悬停事件
        first.addEventListener('mouseenter', function() {
            playSound(hoverSoundfirst); 
        });
    } else {
        console.warn('没有找到ID为first的元素');
    }

    // 获取avatar元素
    var avatar = document.getElementById('avatar');
    if (avatar) {
        // 监听鼠标悬停事件
        avatar.addEventListener('mouseenter', function() {
            playSound(hoverSoundavatar); 
        });
    } else {
        console.warn('没有找到ID为avatar的元素');
    }

    // 获取logoDiv元素
    var clock = document.getElementById('clock');
    if (clock) {
        // 监听鼠标悬停事件
        clock.addEventListener('mouseenter', function() {
            playSound(hoverSoundclock); 
        });
    } else {
        console.warn('没有找到ID为clock的元素');
    }

    // 获取descriptiontext1元素
    var descriptiontext1 = document.getElementById('descriptiontext1');
    if (descriptiontext1) {
        // 监听鼠标悬停事件
        descriptiontext1.addEventListener('mouseenter', function() {
            playSound(hoverSounddescriptiontext1); 
        });
    } else {
        console.warn('没有找到ID为descriptiontext1的元素');
    }

    // 获取descriptiontext3元素
    var descriptiontext3 = document.getElementById('descriptiontext3');
    if (descriptiontext3) {
        // 监听鼠标悬停事件
        descriptiontext3.addEventListener('mouseenter', function() {
            playSound(hoverSounddescriptiontext3); 
        });
    } else {
        console.warn('没有找到ID为descriptiontext3的元素');
    }

    // 获取check1元素
    var check1 = document.getElementById('check1');
    if (check1) {
        // 监听鼠标悬停事件
        check1.addEventListener('mouseenter', function() {
            playSound(hoverSoundcheck1); 
        });
    } else {
        console.warn('没有找到ID为check1的元素');
    }

    // 获取typingText元素
    var typingText = document.getElementById('typingText');
    if (typingText) {
        // 监听鼠标悬停事件
        typingText.addEventListener('mouseenter', function() {
            playSound(hoverSoundtypingText); 
        });
    } else {
        console.warn('没有找到ID为typingText的元素');
    }

// 元素音效
// 网址过渡音
var websiteHoverSound = new Audio('../assets/sound/缓慢1.mp3');
websiteHoverSound.preload = 'auto';

// 广告位音
var adHoverSound = new Audio('../assets/sound/滴滴.mp3');
adHoverSound.preload = 'auto';

function playSound(audioObject) {
    // 重置音频到开始并播放
    audioObject.currentTime = 0;
    audioObject.play();
}

// 为每个选择器添加音效
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

// 要添加音效的元素选择器数组
var elementsSelectors = ['.iconItem', '.item', '.projectItem','.project','.switch'];
addSoundToElements(elementsSelectors, websiteHoverSound);

// 广告位元素选择器数组
var adElementsSelectors = ['.ad-container','.rss-container'];
addSoundToElements(adElementsSelectors, adHoverSound);

// home配置文档文字音
var hoverSoundescriptiontext2 = new Audio('../assets/sound/滴滴.mp3'); // 请替换为您的音效文件路径
hoverSoundescriptiontext2.preload = 'auto';
var escriptiontext2 = document.getElementById('descriptiontext2');
if (escriptiontext2) {
    escriptiontext2.addEventListener('mouseenter', function() {
        playSound(hoverSoundescriptiontext2); 
    });
} else {
    console.warn('没有找到ID为descriptiontext2的元素');
}



var pageLoadSound = new Audio('../assets/sound/载入.mp3');
pageLoadSound.preload = 'auto';
pageLoadSound.muted = true; // 设置为静音，以提高自动播放的可能性

function playLoadSound() {
    pageLoadSound.currentTime = 0; 
    pageLoadSound.play().then(function() {
        console.log('音效开始播放');
        pageLoadSound.muted = false; 
    }).catch(function(error) {
        console.error('播放失败，可能被浏览器阻止', error);
        // 如果播放失败，尝试在用户交互后播放
        document.body.addEventListener('click', function() {
            playLoadSound();
            document.body.removeEventListener('click', arguments.callee);
        });
    });
}

// 当页面加载完成时尝试播放音效
window.addEventListener('load', function() {
    // 确保在页面加载完成后尝试播放音效
    playLoadSound();
});

    });
```

代码中已添加了注释，其中你可以看到我指定的一些效果，其中，增加了预加载音效，它们会在进入页面后使浏览器主动缓存效果

注意!! 代码是手动增加未优化过的，你可以再进行整合和优化处理

音效文件可以在我的仓库文件夹==/assets/sound/==中找到，或者https://pan.quark.cn/s/91b76bb2b787 下载

## 其它

如果你使用的是V2.1版本，可以选择直接HTML引入JS文件并在正确路径下放入这些音效

个别修改的元素如果在意可以看下git中的代码，仅改动了两处（不保证之后不会再修改）可以在上方js代码中找到

- 首页中的右侧按钮弹窗指定了切换模式
- home页中个别描述文字指定了新的元素
