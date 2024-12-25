# 背景前景

![1722262172960](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722262172960.png)

**新增python一键导出js文件内链接图片到指定目录并自动转换为webp格式图片自动替换到js文件内，代码在最后**

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

var shownBackgrounds = [];
var shownForegrounds = [];

function changeBackground() {
    var randomBackgroundIndex = getRandomIndex(backgroundUrls, shownBackgrounds);
    var randomForegroundIndex = getRandomIndex(foregroundUrls, shownForegrounds);

    var backgroundElement = document.getElementById('background');
    var foregroundElement = document.getElementById('bg');

    preloadAndChangeImage(
        'background',
        backgroundUrls[randomBackgroundIndex],
        shownBackgrounds
      );
      preloadAndChangeImage(
        'bg',
        foregroundUrls[randomForegroundIndex],
        shownForegrounds
      );
    
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

function preloadAndChangeImage(elementId, imageUrl, shownImages) {
    var img = new Image();
    var element = document.getElementById(elementId);
  
    // 显示加载动画
    element.classList.add('loading');
  
    img.onload = function() {
      // 当图片加载完成后，切换图片并移除加载动画
      element.style.backgroundImage = 'url(' + imageUrl + ')';
      element.classList.remove('loading');
      shownImages.push(imageUrl);
    };
  
    img.src = imageUrl; // 开始加载图片
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

## 一键提取转换并替换为webp



代码使用python制作，如果你想用这个脚本，请先安装好python



```python
import os
import requests
import re
from PIL import Image

# 读取文件-指定替换提取的js文件
file_path = 'suiji-picture.js'
with open(file_path, 'r', encoding='utf-8') as file:
    content = file.read()

# 提取图片URL
url_pattern = re.compile(r'https://[^\s\'"\]\(]+')
urls = url_pattern.findall(content)

# 打印匹配到的URL，以便调试
print("匹配到的URL列表:", urls)

# 定义保存图片的文件夹（！请修改为你想保存的目录）
save_folder = '/assets/suijpic'
os.makedirs(save_folder, exist_ok=True)

# 定义一个字典来保存原URL和新的WebP URL
url_mapping = {}

# 下载图片并转换为WebP格式
for url in urls:
    try:
        # 检查URL是否以http或https开头
        if not url.startswith('http'):
            print(f'Invalid URL: {url}')
            continue

        response = requests.get(url)
        if response.status_code == 200:
            # 提取文件名
            original_file_name = os.path.basename(url)
            original_file_path = os.path.join(save_folder, original_file_name)
            with open(original_file_path, 'wb') as file:
                file.write(response.content)
            print(f'Downloaded {original_file_name}')

            # 读取图片并转换为WebP格式
            image = Image.open(original_file_path)
            webp_file_name = os.path.splitext(original_file_name)[0] + '.webp'
            webp_file_path = os.path.join(save_folder, webp_file_name)
            image.save(webp_file_path, format='WEBP')
            print(f'Converted {original_file_name} to {webp_file_name}')

            # 保存原URL和新的WebP URL的映射
            url_mapping[url] = webp_file_name
        else:
            print(f'Failed to download {url}, status code: {response.status_code}')
    except Exception as e:
        print(f'Error downloading {url}: {e}')

# 更新JavaScript文件
for original_url, webp_url in url_mapping.items():
    content = content.replace(original_url, f'{save_folder}/{webp_url}')

# 将更新后的内容写回文件
with open(file_path, 'w', encoding='utf-8') as file:
    file.write(content)

print("JavaScript文件已更新")

```

## 使用

保存代码文件为images.py，放到suiji-picture.js的同目录下，安装好依赖，修改后你的路径后运行即可

### 运行脚本

确保你已经安装了 `requests` 和 `Pillow` 库，然后运行脚本：



```
python3 images.py
```

这将读取 `suiji-picture.js` 文件，下载图片，转换为 WebP 格式，并将新的文件名写回到原始的 JavaScript 文件中。
