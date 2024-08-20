# 背景前景

![1722262172960](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722262172960.png)

## 核心

在main.css中可找到默认的前景和背景设置
![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722258910375.png)

如果你想把默认的改为随机的则需要把url部分改为API请求，比如我之前用replit做的一个，但因为replit目前已改了政策导致无法再直接使用，所以不再推荐默认的为API请求

## 基于js请求的随机图

比上述默认再大一级的是引入的随机js文件-suiji-picture.js

html部分引入

```
 <div id="sence">
        <div id="background" data-depth="0.8"></div>
        <div id="bg" data-depth="0.6"></div>   
		<script src="js/suiji-picture.js"></script> 
    </div>
```

## js代码

## 新版

新版是为头像右下角图标处可以随机切换而存在，和旧版本不通，如果你没有设置图标的按钮点击切换功能则请查看旧版代码

```

  var backgroundUrls = [
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/191437o3371I8.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/2308hbVHt.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/184324ohb.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/113422owH.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/004Cwsr1.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/023vgGAy.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/004uMVZ9.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/5557j.4leby4kmx5a0.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/Dungeon.86tfxtuodsw.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230418/09.45yi39hb3xo0.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/3432.1wdm7a7jplb4.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/asfa.yls71bi1eog.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/ffass.omhkiqmx0ww.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/fasfasf.1qt1n1e9q8yo.jpg',
    // 这里随机背景壁纸-添加更多图片URL...
];
var foregroundUrls = [
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0007.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0008.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0010.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0011.png',
    // 这里添加随机前景人物图-添加更多图片URL...
];

var shownBackgrounds = [];
var shownForegrounds = [];

function changeBackground() {
    var randomBackgroundIndex = getRandomIndex(backgroundUrls, shownBackgrounds);
    var randomForegroundIndex = getRandomIndex(foregroundUrls, shownForegrounds);

    var backgroundElement = document.getElementById('background');
    var foregroundElement = document.getElementById('bg');

    // 切换背景图
    backgroundElement.style.backgroundImage = 'url(' + backgroundUrls[randomBackgroundIndex] + ')';
    shownBackgrounds.push(backgroundUrls[randomBackgroundIndex]);

    // 切换前景图
    foregroundElement.style.backgroundImage = 'url(' + foregroundUrls[randomForegroundIndex] + ')';
    shownForegrounds.push(foregroundUrls[randomForegroundIndex]);

    // 旋转SVG
    rotateSVG();
}

function getRandomIndex(imageUrls, shownImages) {
    var availableImages = imageUrls.filter(function(url) {
        return shownImages.indexOf(url) === -1;
    });

    if (availableImages.length === 0) {
        // 如果所有图片都显示过，重置已显示的图片数组
        shownImages.length = 0;
        availableImages = imageUrls;
    }

    var randomIndex = Math.floor(Math.random() * availableImages.length);
    return imageUrls.indexOf(availableImages[randomIndex]);
}

function rotateSVG() {
    var svgElement = document.querySelector('.bt i');
    svgElement.style.transition = 'transform 0.5s ease-in-out';
    svgElement.style.transform = 'rotate(360deg)';
    // 重置旋转，以便下次点击时再次旋转
    setTimeout(function() {
        svgElement.style.transform = 'rotate(0deg)';
    }, 500);
}

// 初始化背景和前景图
changeBackground();

```

HTML找到头像avatar容器处

```
<a title="点击可切换背景" target="_blank" id='morelink' class="bt" onclick="changeBackground()"><i class="fa-solid fa-compass"></i></a>
```

可以到CSS中找到ID元素的具体设定，这些都是和上面的JS互应的

## 旧版

只需要在js中写入：

```
var imageUrls = [
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/191437o3371I8.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/2308hbVHt.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/184324ohb.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/113422owH.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/004Cwsr1.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/023vgGAy.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/004uMVZ9.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/5557j.4leby4kmx5a0.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/Dungeon.86tfxtuodsw.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230418/09.45yi39hb3xo0.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/3432.1wdm7a7jplb4.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/asfa.yls71bi1eog.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/ffass.omhkiqmx0ww.jpg',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/fasfasf.1qt1n1e9q8yo.jpg',
    // 这里随机背景壁纸-添加更多图片URL...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('background');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';
//°. * 。.:*・° ✰.。.:*・° ✰.。.:*°. * 。.:*・° ✰.。.:*・° ✰.。.:*°. * 。.:*・° ✰.。.:*・° ✰.。.:*
  var imageUrls = [
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/023.5se6p3kcd840.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物5.34tnn2jnn1q0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/004.47zk9hg17zg0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物4.6u794zv9r5w0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物11.7ldvybjc00s0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物41.1maz1wruetnk.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物17.3v6jydd7z4i0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物1.3idck6fcxqo0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物28.32bk8ikwy4a0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物22.6vhc266zg900.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230227/人物25.5j6k4o4lqa40.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230706/213d.51b3hpotx9s0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/028.5teioy5ve2c0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物45.4x3k6s924ns0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230305/人物24.1rx0saszu6cg.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物48.67uswm33xes0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物49.5elqamd33io0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物50.567n54xp81s0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/my-photo@master/20230301/人物34.s8gkq0h3dls.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/029.71q4mgfwdo00.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/011.3eqe3vsal0m0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/021.4uqonnvv0xw0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230706/xiaohuangren.60nxvrux8c80.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/007.4ra12856l3q0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/006.5fr6malj99o0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230706/0052.4nzyymaa8za0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/003.70upv2n3s9w0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/001.3jr66nchfja0.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/025.4kt2ai85mx60.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/026.3v8fb37c3i40.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230704/022.6i76zb73k240.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/001.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/002.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0003.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0004.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0005.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0006.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0007.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0008.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0010.png',
    'https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/0011.png',
    // 这里添加随机前景人物图-添加更多图片URL...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('bg');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';
```

你需要根据自己需求来更改图片URL，代码中我引入的为我个人的cdn链接，不保证一直有效，如果失效了，你可以把图片下载后本地引入

## 注意

前景抠像人物离线包下载：https://noise.lanzoul.com/iYji626qkj0j 或 https://pan.quark.cn/s/49d9f1d6d00b 共60个人物

需要注意的是，在制作背景和前景图过程中，最佳分辨率效果为：前景人物分辨率为1920*1036

背景图分辨率为1920*1080
如果为了加载速度，你可适当进行压缩和调小一点的分辨率，记得在service-worker.js缓存这些图片
