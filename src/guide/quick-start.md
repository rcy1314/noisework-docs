# 快速开始

本文会帮助你快速上手

## 下载

首先下载你需要的版本

点击[下载](https://github.com/rcy1314/noisework/releases)获取最新的打包文件

⚠️在修改前，你需要了解如果你有不需要的组件或效果请在HTML中删除对应的代码，如果你不会修改就保留它避免造成代码混乱。

![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1724989372752.png)

如果想获取所有文件：

```
git clone https://github.com/rcy1314/noisework
```

推荐仅从releases处下载，因为所有文件中包含了其它无关主页的文件，当然，如果你想要和我的完全一样及最新的代码则推荐从git全文件下载

下载后你可以本地预览和修改

## 部署运行

 使用surge 部署静态项目到 Surge.sh

### 1. 安装 Surge CLI

首先，确保你已经安装了 Node.js。然后在终端中运行以下命令来安装 Surge CLI：

```bash
npm install -g surge
```

### 2. 创建项目文件夹

在你的计算机上创建一个新的文件夹，并将你的静态文件（如 HTML、CSS、JavaScript 和图片等）放入该文件夹中。

### 3. 登录 Surge

在终端中输入以下命令来登录 Surge：

```bash
surge login
```

根据提示输入你的 Surge 帐号和密码。

### 4. 部署文件

在终端中导航到你的项目文件夹，然后运行以下命令：

```bash
surge
```

### 5. 输入域名

运行 `surge` 命令后，系统会提示你输入一个域名。你可以选择一个自定义域名，或者使用 Surge 提供的免费子域名（如 `your-project.surge.sh`）。

### 6. 访问你的站点

完成部署后，你会看到一个成功的信息，包含你网站的 URL。你可以通过这个 URL 访问你的静态网站。

### 示例

假设你的项目文件夹路径为 `~/my-static-site`，你可以按以下步骤操作：

```bash
cd ~/my-static-site
surge
```

然后根据提示完成登录和输入域名。

### 注意事项

- 确保你的静态文件在项目文件夹中结构清晰。
- 如果你需要更新文件，只需再次运行 `surge` 命令，选择相同的域名即可。

使用以下命令删除项目：

surge teardown <your-domain>

将 <your-domain> 替换为你想要删除的项目的域名。如果你使用的是自定义域名，可以直接使用自定义域名；如果是 Surge 提供的域名，也可以使用

### 其它部署

其它静态HTML文件-基本上放入index文件放入云服务器即可或使用vercel等服务部署即可）

已修改了最新的缓存service-worker.js文件，如果你在部署时放的图片等文件有点大，记得添加到service-worker.js文件中，会在载入页面时进行缓存从而加快访问速度



------

🌈请留意侧边导航栏或点击下方

------

<details>
<summary>✅ 文档导航【点击展开】</summary>


### index首页

[概述](https://docs.noisework.cn/guide/index/intro.html)

[基本配置](https://docs.noisework.cn/guide/index/config.html)

[随机背景前景](https://docs.noisework.cn/guide/index/background.html)

[音乐部件](https://docs.noisework.cn/guide/index/music.html)

[问候提醒弹窗](https://docs.noisework.cn/guide/index/hello.html)

[模拟终端](https://docs.noisework.cn/guide/index/terminal.html)

[广告位部件](https://docs.noisework.cn/guide/index/ads.html)

[RSS动态卡片](https://docs.noisework.cn/guide/index/rss.html)

[侧边文字通告](https://docs.noisework.cn/guide/index/text.html)

[隐藏式时钟](https://docs.noisework.cn/guide/index/clock.html)

[隐藏式页脚](https://docs.noisework.cn/guide/index/footer.html)

[侧边导航按钮](https://docs.noisework.cn/guide/index/tab.html)

### home页

[概述](https://docs.noisework.cn/guide/home/intro.html)

[基本配置](https://docs.noisework.cn/guide/home/config.html)

[头像配置](https://docs.noisework.cn/guide/home/logo.html)

[音乐部件](https://docs.noisework.cn/guide/home/music.html)

[问候时间部件](https://docs.noisework.cn/guide/home/hello.html)

[RSS动态卡片](https://docs.noisework.cn/guide/home/rss.html)

[云盘资源卡片](https://docs.noisework.cn/guide/home/yunpan.html)

[摸鱼日历](https://docs.noisework.cn/guide/home/moyu.html)

[躲猫猫](https://docs.noisework.cn/guide/home/maomao.html)

[视频播放组件](https://docs.noisework.cn/guide/home/video.html)

[轮播相册](https://docs.noisework.cn/guide/home/photo.html)

[手机页导航](https://docs.noisework.cn/guide/home/nav.html)

[公告通知](https://docs.noisework.cn/guide/home/notify.html)

[每日60秒](https://docs.noisework.cn/guide/home/days.html)

### PWA模式

[配置](https://docs.noisework.cn/guide/pwa.html)

### loading载入

[配置](https://docs.noisework.cn/guide/loading.html)

### 聊天室

[配置](https://docs.noisework.cn/guide/chat.html)

### 右键菜单

[配置](https://docs.noisework.cn/guide/right.html)

## 音效效果

[配置](https://docs.noisework.cn/guide/sound.html)

</details>
