# 主题概述

![777](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/777.png)

首页的核心部分在home.html,它是对于[ZYYO666](https://github.com/ZYYO666/homepage)的完善和修改

其中，已添加了对seo友好的页面描述、关键词及媒体截图部分

对于css及js大部分采用了本地引入的方式

图标部分引入了https://fontawesome.com

## 引入图标

### 官方托管（限制是一个月图标浏览量1万次）

可以在官网引入官方的cdn（js）文件后图标代码生效

本地引入js文件：在官网https://fontawesome.com/download 下载并引入你自己的js文件即可，可以单独设置仅自己的域名下图标生效



![1726539996829](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1726539996829.png)

![1722255972032](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722255972032.png)

### 自托管免费版web包

官方文档教程：https://docs.fontawesome.com/web/setup/host-yourself/webfonts

下载[Font Awesome v6 文件](https://fontawesome.com/download)放在本地

引入时直接引入all.css，如

```
 <link rel="stylesheet" href="fontawesome-free-6.7.2/css/all.css">
```

其它引入请查阅官方文档

注：选择图标时选择免费的不要选择pro的

## 注意

和原版不同的是代码部分对于css类的定义有很大的改动，等于和原版是完全不同的存在，所以，如果你想进一步修改和完善就不能使用原版的代码

