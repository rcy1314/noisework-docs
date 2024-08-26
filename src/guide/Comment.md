# 布局调整

## 首页布局

首页布局主要为页面左侧区域，由于一些朋友在修改时，没有那么多的平台网址，只写了几个就会造成这个区域显得特别空白，为了改善这个问题，你需要找到main.css中修改布局



![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/My_Photor_1724661634299.png)

找到对画布main的定义

```
/* 画布尺寸 */
.main {
    /* 设置宽度为990像素 */
    width: 990px;
    /* 设置填充（内边距）：顶部45像素，右侧330像素，底部5像素，左侧17像素 */
    padding: 45px 330px 5px 17px;
    /* 设置背景为一个从左到右的线性渐变，颜色从深灰色（透明度为0.849）到完全透明（在600像素处过渡） */
    background: linear-gradient(to right, rgba(34, 34, 34, 0.849), rgba(34, 34, 34, 0) 600px, rgba(34, 34, 34, 0));
    /* 设置背景图像的大小，使背景宽度填充整个元素，高度保持不变 */
    background-size: 100% auto;
    /* 设置背景图像不重复 */
    background-repeat: no-repeat;
    /* 设置元素的盒模型，这样元素的宽度、高度和内边距将包括在元素的宽度和高度中 */
    box-sizing: border-box;
    /* 设置元素的最小高度为视口（viewport）的高度，确保元素至少和视口一样高 */
    min-height: 100vh;
}
```

这里我已经加了注释，所以你能明白代码的含义，所需要了解的是，如果“社交媒体”中给的网址少很多，那么你应该调整左侧区域的整体高度，即：padding: 45px 330px 5px 17px; 其中45px你可以调整为你需要的，以保持左侧区域位于页面中间位置，而如果你想继续调整社交媒体的容器宽高等，在main.css中搜索"linkbox"和"item"并进行调整即可

## home页布局

home页的布局分左侧和主布局

这个看个人喜好进行调整

![My_Photor_1724662821553](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/My_Photor_1724662821553.jpg)

在home-style.css中找到

```
.noise-main {
    width: 100%;
    transition: transform 0.5s ease;
    max-width: 1150px;
    position: relative;
    flex-direction: row;
}

.noise-left {
    overflow-y: scroll;
    width: 230px;
    left: 290px;
    height: 100vh;
    display: flex;
    padding: 0 15px;
    position: fixed;
    align-items: center;
    flex-direction: column;
}
```

其中noise-left为左侧，noise-main为主布局，页面上主要是根据它们的宽度进行调整，所以这里，建议调整max-width: 1150px; 而左侧则同时调整宽度和离最左边的距离width: 230px; left: 290px;

代码中你也可以添加其它的定义，比如right: 290px; 为离右侧的距离
