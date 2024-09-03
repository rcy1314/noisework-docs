# 手机端导航选项

新版和旧版代码可以根据个人喜好自己选择

新版：按钮全局固定位置，不会跟随页面滚动，点击按钮展开侧边栏后再点击侧边以外任意位置可关闭

旧版：按钮固定位置，会随页面滚动而滚动，点击按钮展开侧边栏后需要再点击按钮可关闭侧边栏

![1722025631227](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722025631227.png)

## 新版配置

html中引入

```
<!-- 在手机尺寸下显示的导航按钮 -->
    <div class="mobile-nav-button">
	<i class="fa-solid fa-list"></i>
    </div>  
```

css代码（在home-style.css中可找到）

```
/* 添加遮罩层 */
.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.079); /* 半透明背景 */
    z-index: 998; /* 确保遮罩层在侧边栏之上 */
    display: none; /* 默认不显示 */
  }
  
  /* 当侧边栏显示时显示遮罩层 */
  .noise-left.show + .mask {
    display: block;
  }
  
/* 在手机尺寸下显示的按钮样式 */
@media screen and (max-width: 800px) {
    .mobile-nav-button {
      display: block;
      position: absolute;
      top: 18px;
      left: 10px;
      z-index: 999;
      width: 53px;
      height: 50px;
      background-color: #2327307b; /* 方块按钮的背景颜色 */
      color: #fff;
      text-align: center;
      line-height: 53px; /* 垂直居中 */
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.02s ease-in-out; /* 过渡效果 */
    }
  
    /* 侧边栏的弹出样式 */
    .noise-left {
      display: none;
      position: fixed;
      top: 2;
      width: 50%;
      height: 100%;
      background-color: #0d0e11ed; /* 弹出层的背景颜色 */
      z-index: 99900; /* 确保弹出层在按钮下面 */
      transition: left 0.1s ease-in-out;
    }
  
    /* 显示侧边栏 */
    .noise-left.show {
      left: 0;
    }
  }

  /* 侧边栏不显示的元素 */
@media screen and (max-width: 800px) {
    .logo {
    display: none;
    }
  
  }
  /* 在非手机尺寸下隐藏按钮 */
  @media screen and (min-width: 800px) {
    .mobile-nav-button {
      display: none;
    }
  }
```



JS代码（在home-script.js中可找到）：

```
// 添加一个遮罩层来监听点击事件
var mask = document.createElement('div');
mask.className = 'mask';
document.body.appendChild(mask);

mask.addEventListener('click', function() {
  noiseLeft.style.display = 'none';
  mask.remove(); // 移除遮罩层
});

// 手机左侧弹出
document.addEventListener('DOMContentLoaded', function() {
    var mobileNavButton = document.querySelector('.mobile-nav-button');
    var noiseLeft = document.querySelector('.noise-left');
    var mask = document.createElement('div');
    mask.className = 'mask';
    document.body.appendChild(mask);

    mobileNavButton.addEventListener('click', function() {
      if (noiseLeft.style.display === 'block') {
        noiseLeft.style.display = 'none';
        mask.style.display = 'none'; // 同时隐藏遮罩层
      } else {
        noiseLeft.style.display = 'block';
        mask.style.display = 'block'; // 显示遮罩层
      }
    });

    // 遮罩层上的点击事件，用于关闭侧边栏
    mask.addEventListener('click', function() {
      noiseLeft.style.display = 'none';
      mask.style.display = 'none'; // 同时隐藏遮罩层
    });
});
```



## 旧版配置

html中引入

```
<!-- 在手机尺寸下显示的导航按钮 -->
    <div class="mobile-nav-button">
	<i class="fa-solid fa-list"></i>
    </div>  
```

css代码

```
/* 在手机尺寸下显示的按钮样式 */
@media screen and (max-width: 800px) {
    .mobile-nav-button {
      display: block;
      position: fixed;
      top: 15px;
      left: 10px;
      z-index: 999;
      width: 50px;
      height: 50px;
      background-color: #232730f5; /* 方块按钮的背景颜色 */
      color: #fff;
      text-align: center;
      line-height: 50px; /* 垂直居中 */
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.02s ease-in-out; /* 过渡效果 */
      
    }
  
    /* 侧边栏的弹出样式 */
    .noise-left {
      display: none;
      position: fixed;
      top: 2;
      width: 50%;
      height: 100%;
      background-color:  #0d0e11ed;  /* 弹出层的背景颜色 */
      z-index: 99900; /* 确保弹出层在按钮下面 */
      transition: left 0.1s ease-in-out;
    }
  /* 侧边栏弹出时按钮的位置 */

    /* 显示侧边栏 */
    .noise-left.show {
      left: 0;
    }
  }
  /* 侧边栏不显示的元素 */
@media screen and (max-width: 800px) {
    .logo {
    display: none;
    }
  
  }
  /* 在非手机尺寸下隐藏按钮 */
  @media screen and (min-width: 800px) {
    .mobile-nav-button {
      display: none;
    }
  }
```

js代码：

```
//手机左侧弹出
document.addEventListener('DOMContentLoaded', function() {
    var mobileNavButton = document.querySelector('.mobile-nav-button');
    var noiseLeft = document.querySelector('.noise-left');
    mobileNavButton.addEventListener('click', function() {
      if (noiseLeft.style.display === 'block') {
        noiseLeft.style.display = 'none';
      } else {
        noiseLeft.style.display = 'block';
      }
  // 切换侧边栏的显示状态
  if (noiseLeft.classList.contains('show')) {
    noiseLeft.classList.remove('show');
    mobileNavButton.style.left = '10px'; 
  } else {
    noiseLeft.classList.add('show');
    mobileNavButton.style.left = '50%'; 
 
  }
});
});
```

