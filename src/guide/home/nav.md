# 手机端导航选项

![1722025631227](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722025631227.png)

## 配置

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
      z-index: 199000;
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

