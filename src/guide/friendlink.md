## 友情链接

该组件是为互换友联，增强自己和他人站点的seo而存在

效果：

带阴影卡片式，鼠标放置时会有音效且会放大卡片，移到头像处头像会旋转，四个卡片为一行，已添加自适应手机尺寸下的效果，重要的是需要引入friendlink.css文件

首页预览

![1725386555885](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1725386555885.png)

Home页预览

![1725389670840](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1725389670840.png)

![1725386623385](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1725386623385.png)

## 引入

HTML中bady处添加

首页html在评论区上方添加代码并修改链接

```
<!-- 友情链接 -->
                <div class="work">
                    <h2 class="chtitle"><span>友情</span>链接</span></h2>
                    <div class="friendcardindex">
                        <div class="friendlinks-container">
                            <div class="friendlinks-card">
                                <div class="avatar">
                                    <a href="https://rcy1314.github.io/Idea/">
                                        <img alt="" loading="lazy" decoding="async"
                                            src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/43w.jpeg">
                                    </a>
                                </div>
                                <div class="info">
                                    <a class="friendname" target="_blank" href="https://rcy1314.github.io/Idea/">idea book</a>
                                    <p class="frienddescription">旧的专栏</p>
                                </div>
                            </div>
                            <div class="friendlinks-card">
                                <div class="avatar">
                                    <a href="#">
                                        <img alt="" loading="lazy" decoding="async"
                                            src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/33s.jpeg">
                                    </a>
                                </div>
                                <div class="info">
                                    <a class="friendname" target="_blank" href="#">待添加</a>
                                    <p class="frienddescription">未来可期</p>
                                </div>
                            </div>
                            <div class="friendlinks-card">
                                <div class="avatar">
                                    <a href="#">
                                        <img alt="" loading="lazy" decoding="async"
                                            src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/43e.jpeg">
                                    </a>
                                </div>
                                <div class="info">
                                    <a class="friendname" target="_blank" href="#">待添加</a>
                                    <p class="frienddescription">未来可期</p>
                                </div>
                            </div>
                            <div class="friendlinks-card">
                                <div class="avatar">
                                    <a href="#">
                                        <img alt="" loading="lazy" decoding="async"
                                            src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/335r.jpeg">
                                    </a>
                                </div>
                                <div class="info">
                                    <a class="friendname" target="_blank" href="#">待添加</a>
                                    <p class="frienddescription">未来可期</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </br>
```

home页html在评论区上方添加并修改链接

```
<!-- 友情链接 -->
				<div class="title"><i class="fa-solid fa-user-plus"></i>友情链接</div>
				<div class="friendcardbg">
					<div class="friendlinks-container">
						<div class="friendlinks-card">
							<div class="avatar">
								<a href="https://rcy1314.github.io/Idea/">
									<img alt="" loading="lazy" decoding="async"
										src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/43w.jpeg">
								</a>
							</div>
							<div class="info">
								<a class="friendname" target="_blank" href="https://rcy1314.github.io/Idea/">idea book</a>
								<p class="frienddescription">旧的专栏</p>
							</div>
						</div>
						<div class="friendlinks-card">
							<div class="avatar">
								<a href="#">
									<img alt="" loading="lazy" decoding="async"
										src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/33s.jpeg">
								</a>
							</div>
							<div class="info">
								<a class="friendname" target="_blank" href="#">待添加</a>
								<p class="frienddescription">未来可期</p>
							</div>
						</div>
						<div class="friendlinks-card">
							<div class="avatar">
								<a href="#">
									<img alt="" loading="lazy" decoding="async"
										src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/43e.jpeg">
								</a>
							</div>
							<div class="info">
								<a class="friendname" target="_blank" href="#">待添加</a>
								<p class="frienddescription">未来可期</p>
							</div>
						</div>
						<div class="friendlinks-card">
							<div class="avatar">
								<a href="#">
									<img alt="" loading="lazy" decoding="async"
										src="https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/335r.jpeg">
								</a>
							</div>
							<div class="info">
								<a class="friendname" target="_blank" href="#">待添加</a>
								<p class="frienddescription">未来可期</p>
							</div>
						</div>
					</div>
				</div>
```

两个页面head处添加

```
<link rel="stylesheet" href="./css/friendlink.css">
```

引入的friendlink.css文件为（已添加注释）

```
.friendcardindex {
    background: rgba(34, 33, 33, 0.971); /* 圆弧透明黑色背景 */
    border-radius: 20px; /* 圆角边框 */
    padding: 20px; /* 内边距 */
}
.friendcardbg {
    background: rgba(34, 33, 33, 0); /* 圆弧透明黑色背景 */
    border-radius: 20px; /* 圆角边框 */
    padding: 20px; /* 内边距 */
}
.friendlinks-container {
    display: flex; /* 使用flex布局 */
    flex-wrap: wrap; /* 允许换行 */
    gap: 20px; /* 卡片之间的间距 */
}

.friendlinks-card {
    flex: 1 1 auto; /* 设置为自动宽度，根据剩余空间自动调整 */
    width: calc(100% + 20px);
    max-width: calc(25% - 15px); /* 最大宽度为四分之一 */
    padding: 10px;
    background: rgba(29, 28, 28, 0.376); /* 透明黑色背景 */
    border-radius: 15px; /* 圆角边框 */
    overflow: hidden; /* 溢出隐藏 */
    text-align: center; /* 中心对齐 */
    transition: transform 0.3s, box-shadow 0.3s; /* 卡片放大效果与阴影 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 初始阴影 */
}
.avatar img {
    /* 头像样式 */
    width: 80px;
    height: 80px; /* 设置头像高度 */
    border-radius: 50%; /* 头像圆角 */
    margin-bottom: 6px; /* 头像和文字之间的间距 */
    object-fit: cover; /* 确保头像图片保持圆形 */
    border: 2px solid #ffffff; /* 白色边框 */
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* 发光效果 */
    transition: transform 0.5s; /* 头像旋转效果 */
}

.avatar:hover img {
    transform: rotate(360deg); /* 鼠标悬停时头像旋转 */
}

.info {
    /* 信息样式 */
    margin-top: 3px; /* 增加顶部间距 */
}

.friendname {
    /* 姓名样式 */
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.005em; /* 增大字体 */
    transition: color 0.3s; /* 姓名颜色过渡 */
}

.friendname:hover {
    color: #00e6e6; /* 鼠标悬停时的颜色变化 */
}

.frienddescription {
    /* 描述样式 */
    color: #dddddd;
    font-size: 0.9em; 
    margin-top: 3px; /* 描述与姓名之间的间距 */
    overflow: hidden; /* 隐藏超出部分的内容 */
    text-overflow: ellipsis; /* 当内容超出时显示省略号 */
    white-space: nowrap; /* 禁止换行 */
}

/* 鼠标悬停效果 */
.friendlinks-card:hover {
    transform: scale(1.05); /* 卡片放大效果 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* 悬停时的阴影 */
}


/* 媒体查询：针对手机尺寸 */
@media (max-width: 800px) {
    .friendlinks-container {
        flex-wrap: wrap; /* 允许换行 */
        gap: 20px; /* 卡片之间的间距 */
    }
    .friendlinks-card {
        flex: 1 1 calc(50% - 15px); /* 设置为固定宽度，即使少于四个卡片也能保持相同大小 */
        max-width: calc(50% - 15px); /* 最大宽度为一半 */
    }
}
/* 媒体查询：针对小尺寸 */
@media (max-width: 240px) {
    .friendlinks-card {
        flex: 1 1 calc(100% - 15px); /* 在极小屏幕上每行显示一个卡片 */
        max-width: calc(100% - 15px); /* 最大宽度为屏幕宽度 */
    }
}
```

根据自己需要进行调整



