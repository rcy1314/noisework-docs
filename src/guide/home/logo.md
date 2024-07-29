# 头像配置

![logol](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/logol.png)

头像配置分两部分，html中head标签开始处找到

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

