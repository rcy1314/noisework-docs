# 广告位概述

该效果位于右上方，默认3秒后弹出并随机加载图文，点击后可进入链接

![1722268839202](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722268839202.png)

## 特征

- 页面加载2.5秒后自动从右侧弹出
- 每隔8秒更换展示
- 广告位分组简化且随机循环切换
- 带有关闭按钮，点击后即可关闭
- 仅在电脑端尺寸下显示，手机端自动隐藏

## 引入

需要引入AD.js和AD.css

其中AD.js为主要，代码为

```
// 广告位
// 广告数组
var ads = [
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230818/11宝.5gadu623kd00.jpg",
    link: "https://noisevip.cn",
    description: "包罗万象-Noise宝藏阁"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E8%B6%85%E5%A4%A7%E6%B5%81%E9%87%8F%E5%8D%A1.png",
    link: "https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=422648",
    description: "超大流量卡优惠办理渠道2"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1704116804-98dd36fd8711e66.png",
    link: "https://www.aipaperpass.com?pic=mLnw",
    description: "AI一键论文-AIPaperPass"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E8%B6%85%E5%A4%A7%E6%B5%81.png",
    link: "https://simhaoka.com/phone/index?id=A7BA17EFD6DC47F6826F0C67B898725A",
    description: "超大流量卡优惠办理手机渠道1"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1689175720-6446d860dbbfe54.png",
    link: "https://www.duomexing.com",
    description: "多么行-AI数字化模型扩展"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/919.png",
    link: "https://www.noisework.cn/soso",
    description: "书签检索-bookmark"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1707542539504.png",
    link: "https://xinghuo.xfyun.cn",
    description: "讯飞星火大模型"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E8%B6%85%E5%A4%A7%E6%B5%81%E9%87%8F%E5%8D%A1.png",
    link: "https://hk.yunhaoka.cn/#/pages/micro_store/index?agent_id=422648",
    description: "超大流量卡优惠办理渠道2"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/6%20Exercises%20to%20Overcome%20Skill%20Plateaus%20as%20a%20Designer.jpeg",
    link: "https://www.noisework.cn",
    description: "广告位+点击可查看"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230818/2321312.1o5qd8jb6elc.jpg",
    link: "https://www.noisedh.cn",
    description: "超量收录-Noise导航"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%E6%A0%AA%E3%82%AD%E3%82%99%E3%83%A3%E3%83%AB%20on%20X.jpeg",
    link: "https://www.noisework.cn",
    description: "广告位+点击可查看"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1695139067-c4ca4238a0b9238.png",
    link: "https://aigc.yizhentv.com/?_f=nobaibao",
    description: "AI视频创作神器一帧秒创"
  },
  {
    image: "https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/%F0%9D%95%9E%F0%9D%95%A0%F0%9D%95%A6%F0%9D%95%A6%F0%9D%95%9F.jpeg",
    link: "https://www.noisework.cn",
    description: "广告位+点击可查看"
  }
];

// 随机打乱广告数组
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

ads = shuffle(ads);

// 创建广告容器
var adContainer = document.createElement("div");
adContainer.className = "ad-container";

// 创建图片元素
var adImage = document.createElement("img");
adImage.className = "ad-image";
adContainer.appendChild(adImage);

// 创建文字说明元素
var adDescription = document.createElement("div");
adDescription.className = "ad-description";
adContainer.appendChild(adDescription);

// 创建链接元素
var adLink = document.createElement("a");
adLink.className = "ad-link";
adLink.target = "_blank";
adContainer.appendChild(adLink);

// 创建关闭按钮
var closeButton = document.createElement("div");
closeButton.className = "close-button";
closeButton.textContent = "X关闭";
adContainer.appendChild(closeButton);

// 将广告容器添加到页面中
document.body.appendChild(adContainer);

// 显示广告容器
function showAd() {
  adContainer.classList.add("show");
}

// 隐藏广告容器
function hideAd() {
  adContainer.classList.remove("show");
}

// 添加一个变量来跟踪广告是否已经显示过
var adDisplayed = false;

// 当前广告索引
var currentIndex = 0;

// 更换图片、链接和文字说明的函数
function changeAd() {
  // 更新图片、链接和文字说明
  var nextIndex = (currentIndex + 1) % ads.length;
  var nextAd = ads[nextIndex];
  adImage.src = nextAd.image;
  adLink.href = nextAd.link;
  adDescription.textContent = nextAd.description;

  // 更新当前索引
  currentIndex = nextIndex;

  // 如果广告尚未显示过，则添加"点击查看广告"的文本节点
  if (!adDisplayed) {
    adDisplayed = true;
  }

  // 显示广告容器
  showAd();
}

// 关闭广告的函数
function closeAd() {
  hideAd();
  document.body.removeChild(adContainer); // 从DOM中移除广告容器
}

// 延迟2.5秒后立即弹出广告
setTimeout(changeAd, 2500);

// 定时器，每隔8秒更换图片、链接和文字说明
setInterval(changeAd, 8000);

// 绑定关闭按钮的点击事件
closeButton.addEventListener("click", closeAd);

```

已添加了注释，所以很方便就能看懂，它通过随机的数组来加载显示

AD.css代码为

```
.ad-container {
  position: fixed;
  top: 22%;
  right: -500px;
  transform: translateY(-50%);
  width: 180px;
  height: 160px;
  background-color: transparent;
  padding: 1px;
  box-sizing: border-box;
  transition: right 0.3s, border-radius 0.3s; /* 添加圆弧过渡效果 */
  z-index: 100;
  overflow: hidden;
  border-radius: 10px; /* 添加圆弧效果 */
}

/* 手机端不显示广告位 */
@media (max-width: 800px) {
  .ad-container {
    display: none;
  }
}

.ad-container.show {
  right: 3px;
}

.ad-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(0px); /* 初始状态下图片不模糊 */
  transition: filter 0.3s; /* 添加过渡效果 */
}

.ad-container:hover .ad-image {
  filter: blur(5px); /* 鼠标悬停时图片模糊 */
}

.ad-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ad-description {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  color: #fbfbfb;
  font-size: 13px;
  transform: translateY(-50%);
  text-shadow: 0 0 5px rgba(12, 12, 12, 0.8); /* 文字发光效果 */
  
  transition: filter 0.3s; /* 添加过渡效果 */
}

.ad-container:hover .ad-description {
  filter: blur(0px); /* 鼠标悬停时文字清晰 */
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: #fbfbfbfe;
}

```

其中，设置了在手机尺寸下（你可以修改为其它尺寸）不显示
