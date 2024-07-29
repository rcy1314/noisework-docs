# 隐藏式数字时钟

![1722270825476](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722270825476.png)



该效果位于右侧偏上方居中位置，默认隐藏，当鼠标划过时会显示，当点击后会一直显示

## 引入

body中添加代码

```
<!-- 隐藏式数字时钟-->
          <div class="clock" id="clock">00:00:00</div>
```

没有做单独的css和js，所以把代码放入了main中

在main.js中代码为

```
 //*数字时钟*//
window.addEventListener('DOMContentLoaded', () => {
  const clock = document.getElementById('clock');
  let isMouseOver = false;
  let isMobile = false;
  let isClicked = false;

  // 检测是否为手机端尺寸
  const checkMobile = () => {
    if (window.innerWidth <= 600) {
      isMobile = true;
      clock.classList.remove('show');
    } else {
      isMobile = false;
      if (isClicked) {
        clock.classList.add('show');
      }
    }
  };

  // 监听窗口大小变化
  window.addEventListener('resize', checkMobile);
  
  // 初始检测一次窗口大小
  checkMobile();

  clock.addEventListener('mouseover', () => {
    isMouseOver = true;
    if (!isMobile) {
      clock.classList.add('show');
    }
  });

  clock.addEventListener('mouseout', () => {
    isMouseOver = false;
    if (!isMobile && !isClicked) {
      setTimeout(() => {
        if (!isMouseOver) {
          clock.classList.remove('show');
        }
      }, 2000);
    }
  });

  clock.addEventListener('click', () => {
    isClicked = true;
    clock.classList.add('show');
  });

  setInterval(() => {
    if ((isMouseOver || isClicked) && !isMobile) {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      const time = `${hours}:${minutes}:${seconds}`;
      clock.textContent = time;
    }
  }, 1000);
});
```

Main.css中代码为

```
/* 数字时钟 */
.clock {
	display: none;
	position: fixed;
	top: 3%;
	right: 32%;
	text-align: center;
	font-size: 20px;
	color: #fbf7f7;
	background-color: #1514140c;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.198);
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
  }
  
  .clock.show {
	opacity: 1;
  }
  
  
  @media (min-width: 768px) {
	.clock {
	  display: block;
	}
  }
```

