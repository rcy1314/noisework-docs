# 头像配置

新的代码是为动态的GIF头像而准备

旧的部分则是为静态的头像图片而准备

可以根据自己喜好调整

注：动态头像会载入更慢些，但效果会更好些

## 动态头像

为优化显示效果，我对PC端和手机端显示的动态头像做了分类处理，PC端为透明图层gif，手机端为不透明图层gif，你可以参考。

![1112s](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logo10.gif)

### PC端头像设置

HTML中引入

```
<!--PC头像-->
			<div class="logo" id="logoDiv" onclick="changeImage()"> 
				<!-- 添加了id和点击事件 -->
				<span class="tooltip">点击可切换头像哦！</span> 
			</div>	
```

css代码

```
/* 设置PC头像LOGO */
.logo {
    flex-shrink: 0;
    width: 90%;
    position: relative;
    aspect-ratio: 1/1;
    margin-top: 50px;
    background-size: cover;
    border-radius: 50%;
    object-fit: cover; 
    transition: transform 0.5s ease-in-out; 
}

@keyframes zoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.02); } 
}

.logo:hover {
    animation: zoom 0.5s ease-in-out forwards;
}

.logo:not(:hover) {
    animation: zoom 0.5s ease-in-out reverse;
}

.tooltip {
    position: absolute;
    font-size: 13px; /* 设置字体大小 */
    width: 100%;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s;
    background-color: rgba(39, 37, 37, 0.181);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    white-space: nowrap; 
    pointer-events: none; 
}

.logo:hover .tooltip {
    visibility: visible;
    opacity: 1;
}
/* 设置PC头像LOGO结束 */
```

JS代码

```
//pc头像logo
let images = ['https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logo10.gif', 
              // 其它图片链接
              ]; // 图片数组
              let currentImageIndex = 0;
              const logoDiv = document.getElementById('logoDiv');
              const defaultImage = 'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logo10.gif'; // 默认图片路径
              
              function setDefaultImage() {
                  logoDiv.style.backgroundImage = `url(${defaultImage})`;
              }
              
              function changeImage() {
                  currentImageIndex = (currentImageIndex + 1) % images.length;
                  let newImage = images[currentImageIndex];
              
                  let img = new Image();
                  img.onload = function() {
                      logoDiv.style.backgroundImage = `url(${newImage})`;
                  };
                  img.onerror = function() {
                      // 如果图片加载失败，尝试下一张，但避免无限循环
                      if (currentImageIndex < images.length - 1) {
                          changeImage();
                      } else {
                          setDefaultImage();
                      }
                  };
                  img.src = newImage;
              }
              
              // 初始化，设置默认图片
              setDefaultImage();
```



![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723541825693.png)

### 手机端头像设置

HTML中引入

```
<!-- 手机页面头部logo -->
        <div class="mobile-logo" id="mobileLogoDiv" onclick="switchImage()"> 
        <!-- 添加了id和点击事件 -->
        <span class="mobile-tooltip">点击可切换头像哦！</span> 
         </div>
```

css代码

```
/* 设置手机页面头部LOGO */
.mobile-logo {
    display: none;
    width: 40%; 
    height: 0; 
    padding-bottom: 40%; 
    background-size: cover; 
    background-position: center; 
    border-radius: 50%; 
    background-repeat: no-repeat; 
    object-fit: cover;
    transition: transform 0.5s ease-in-out; 
}

@keyframes mobile-zoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.02); } /* 假设放大到110% */
}

.mobile-logo:hover {
    animation: mobile-zoom 0.5s ease-in-out forwards;
}

.mobile-logo:not(:hover) {
    animation: mobile-zoom 0.5s ease-in-out reverse;
}

.mobile-tooltip {
    position: absolute;
    font-size: 13px; /* 设置字体大小 */
    width: 100%;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s;
    background-color: rgba(39, 37, 37, 0.181);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    white-space: nowrap; /* 防止文本换行 */
    pointer-events: none; /* 防止点击tooltip触发其他事件 */
}

.mobile-logo:hover .mobile-tooltip {
    visibility: visible;
    opacity: 1;
}
/* 设置手机页面头部LOGO结束 */
```

JS代码

```
// 手机页面头部logo
let mobileImages = ['https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/mobileLogo7.gif', 
                    //其它图片链接
                     ]; // 图片数组
let currentMobileImageIndex = 0;
const mobileLogoDiv = document.getElementById('mobileLogoDiv');
const defaultMobileImage = 'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/mobileLogo7.gif'; // 默认图片路径

function setDefaultMobileImage() {
mobileLogoDiv.style.backgroundImage = `url(${defaultMobileImage})`;
}

function switchImage() {
currentMobileImageIndex = (currentMobileImageIndex + 1) % mobileImages.length;
let newImage = mobileImages[currentMobileImageIndex];

let img = new Image();
img.onload = function() {
mobileLogoDiv.style.backgroundImage = `url(${newImage})`;
};
img.onerror = function() {
// 如果图片加载失败，尝试下一张，但避免无限循环
if (currentMobileImageIndex < mobileImages.length - 1) {
  switchImage();
} else {
  setDefaultMobileImage();
}
};
img.src = newImage;
}

// 初始化，设置默认图片
setDefaultMobileImage();
   
```



还有要确保手机头像仅在正确尺寸下显示：

```
@media (max-width: 800px) {
    .mobile-logo {
        display: block;
        margin: 0 auto;
    }
```



------

如果你想选择新的，可以本地引入参考我的的gif图像位于assets文件夹下的mobileLogoDiv文件夹、logoDiv文件夹

![1723541949359](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723541949359.png)

![17235419ew67569](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/17235419ew67569.png)

在实际的代码中我通常选择外链引入，外链失效时会找本地

上述图片可在github中找到或可

https://pan.quark.cn/s/0d7b0ca49759 下载

------

### 头像随机出现效果JS

和上面的js不同，两个保留一个，如果你想使用随机效果可查看下面的代码

<details>
<summary>✅ 点击展开</summary>



```
//pc头像logo
let images = ['https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logo10.gif',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logo9.gif',
]; // 图片数组
let currentImageIndex = -1; // 
const logoDiv = document.getElementById('logoDiv');
const defaultImage = 'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logo10.gif'; // 默认图片路径

function setDefaultImage() {
    logoDiv.style.backgroundImage = `url(${defaultImage})`;
}

function loadImage(index) {
    let img = new Image();
    img.onload = function () {
        logoDiv.style.backgroundImage = `url(${images[index]})`;
        currentImageIndex = index; 
    };
    img.onerror = function () {
        // 如果图片加载失败，尝试下一张
        if (index < images.length - 1) {
            loadImage(index + 1);
        } else {
            setDefaultImage();
        }
    };
    img.src = images[index];
}

// 初始化，随机选择一个图片进行加载
loadImage(Math.floor(Math.random() * images.length));

// 添加点击事件监听器
logoDiv.addEventListener('click', () => {
    currentImageIndex = -1;
    loadImage(Math.floor(Math.random() * images.length));
});

// 使用IntersectionObserver来实现懒加载
let observer = new IntersectionObserver((entries, observer) => {
    // 检查元素是否可见
    if (entries[0].isIntersecting) {
        // 如果已经加载过图片，不再重新加载
        if (currentImageIndex === -1) {
            loadImage(Math.floor(Math.random() * images.length));
        }
    }
}, { threshold: [0] });

observer.observe(logoDiv);

// 手机页面头部logo
let mobileImages = ['https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/mobileLogo7.gif',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/mobileLogo1.gif',
 
]; // 图片数组
let currentMobileImageIndex = -1; // 
const mobileLogoDiv = document.getElementById('mobileLogoDiv');
const defaultMobileImage = 'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/mobileLogo7.gif'; // 默认手机图片路径

function setDefaultMobileImage() {
    mobileLogoDiv.style.backgroundImage = `url(${defaultMobileImage})`;
}

function loadMobileImage(index) {
    let img = new Image();
    img.onload = function () {
        mobileLogoDiv.style.backgroundImage = `url(${mobileImages[index]})`;
        currentMobileImageIndex = index; 
    };
    img.onerror = function () {
        // 如果图片加载失败，尝试下一张
        if (index < mobileImages.length - 1) {
            loadMobileImage(index + 1);
        } else {
            // 如果所有图片都尝试过，则使用默认图像
            setDefaultMobileImage();
        }
    };
    img.src = mobileImages[index];
}

// 初始化，随机选择一个图片进行加载
loadMobileImage(Math.floor(Math.random() * mobileImages.length));

// 添加点击事件监听器
mobileLogoDiv.addEventListener('click', () => {
    // 重置当前图片索引，以便重新随机选择
    currentMobileImageIndex = -1;
    loadMobileImage(Math.floor(Math.random() * mobileImages.length));
});

// 使用IntersectionObserver来实现懒加载
let mobileObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
        // 如果已经加载过图片，不再重新加载
        if (currentMobileImageIndex === -1) {
            loadMobileImage(Math.floor(Math.random() * mobileImages.length));
        }
    }
}, { threshold: [0] });
mobileObserver.observe(mobileLogoDiv);
```



</details>

## 静态头像

![logol](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logol.png)

html中head标签开始处找到

一、手机端头像

```
<!-- 手机页面头部logo -->		
				<div class="index-logo" style="background-image: url(./assets/tou.png);">
				</div>
```

二、电脑端头像

```
<div class="noise-left">
			<div class="logo" style="background-image: url(./assets/logo3.png);">		
			</div>
```

其中电脑端css效果为

```
.logo {
    flex-shrink: 0;
    width: 90%;
    position: relative;
    aspect-ratio: 1/1;
    margin-top: 50px;
    background-size: cover;
    border-radius: 50%;
    object-fit: cover; /* 裁剪图片以适应圆形遮罩 */
    transition: transform 0.5s; /* 添加旋转动画 */
}

.logo:hover {
    transform: rotate(360deg); /* 鼠标悬停时旋转360度 */
  }
```

手机端css效果为

```
.index-logo {
    display: none;
    width: 40%; /* 图像宽度为父元素的40% */
    height: 0; /* 高度为0，通过padding-bottom保持宽高比 */
    padding-bottom: 40%; /* 保持宽高比为1:1 */
    background-size: cover; /* 背景图像覆盖整个元素 */
    background-position: center; /* 背景图像居中 */
    border-radius: 50%; /* 圆形遮罩 */
    background-repeat: no-repeat; /* 不重复背景图像 */
}
```

确保手机头像仅在正确尺寸下显示：

```
@media (max-width: 800px) {
    .index-logo {
        display: block;
        margin: 0 auto;
    }
```

