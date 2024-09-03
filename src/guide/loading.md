# 载入介绍

该载入效果可以帮助进入页面时对加载各类js文件进行视觉缓冲，从而避免感觉加载时过多页面空白

## 引入

html中添加

```
<!-- loading加载--> 
    <div id="spinner-container">
        <div class="spinner"></div>
    </div>
```

并引入js及css文件

在body结尾上方添加

```
 <script src="js/loading.js"></script>
```

在head中引入

```
 <link rel="stylesheet" type="text/css" href="./css/loading.css"> 
```

## 效果

可在css中定制化效果，代码为

```
#spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 6px solid rgba(0, 0, 0, 0.1); /* 增加边框宽度 */
  border-radius: 50%;
  width: 65px; /* 增大宽度 */
  height: 65px; /* 增大高度 */
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    border-top: 6px solid #007bff; /* 增加边框宽度 */
  }
  20% {
    border-top: 6px solid #00ff00;
  }
  40% {
    border-top: 6px solid #ffff00;
  }
  60% {
    border-top: 6px solid #ff00ff;
  }
  80% {
    border-top: 6px solid #ff0000;
  }
  100% {
    border-top: 6px solid #007bff;
    transform: rotate(360deg);
  }
}

```

