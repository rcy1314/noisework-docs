# 时间问候卡片

![hel](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/hel.png)

## 引入

html侧边标签中添加

```
			<!-- 时间代码-->
		    <div class="left-div left-time">
				<ul id="line1">	
					<div id="clock"></div>			
				</ul>
				</div>
			   <!-- 时间结束-->
```

并在页脚引入

## V3版及之后

时间JS代码和底部页脚版权年份及运行时间共用，以避免冲突

```
<script>
			function updateClock() {
				const now = new Date();
				const year = now.getFullYear();
				document.getElementById('copyrightYear').textContent = year;
				const startTime = new Date('2020-12-09'); 
				const runningTime = now - startTime;
				const days = Math.floor(runningTime / (1000 * 60 * 60 * 24));
				const hours = Math.floor((runningTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((runningTime % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((runningTime % (1000 * 60)) / 1000);
				document.getElementById('runningTimeDate').textContent = `${days}天`;
				document.getElementById('runningTimes').textContent = `${hours}小时`;
			}

			function displayGreeting() {
				const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
				const now = new Date();
				const hrs = now.getHours();
				const min = now.getMinutes();
				const dayOfWeek = weekday[now.getDay()];
				const year = now.getFullYear();
				const month = now.getMonth() + 1; // 月份是从0开始的
				const day = now.getDate();
				let greet;

				if (hrs >= 0 && hrs <= 4) greet = "🙃 凌晨好  ";
				if (hrs >= 5 && hrs <= 8) greet = "😘 早上好  ";
				if (hrs >= 9 && hrs <= 11) greet = "😜 上午好  ";
				if (hrs >= 11 && hrs <= 13) greet = "🥳 中午好  ";
				if (hrs >= 13 && hrs <= 17) greet = "🥰 下午好  ";
				if (hrs >= 18 && hrs <= 19) greet = "🧐 傍晚好  ";
				if (hrs >= 19 && hrs <= 22) greet = "🥳 晚上好  ";
				if (hrs >= 22 && hrs <= 24) greet = "🥺 夜深了  ";

				// 格式化分钟和小时，确保它们总是两位数
				const formattedHours = hrs.toString().padStart(2, '0');
				const formattedMinutes = min.toString().padStart(2, '0');

				document.getElementById('clock').innerHTML = `${greet}👉 今天是：${dayOfWeek}</br>${year}年${month}月${day}日 ${formattedHours}时${formattedMinutes}分`;
			}

			// 初始更新时钟和问候语
			updateClock();
			displayGreeting();
			// 每分钟更新时钟
			setInterval(updateClock, 60000);
			// 每分钟更新问候语
			setInterval(displayGreeting, 60000);
		</script>
		<!--向下滑动监听-->
		<script>
			window.addEventListener('DOMContentLoaded', (event) => {
				var scrollDown = document.querySelector('.scroll-down');
				
				function handleScroll() {
					var scrollPos = window.pageYOffset;
					var windowHeight = window.innerHeight;
					var documentHeight = document.documentElement.scrollHeight;
					
					if (window.innerWidth <= 768) {
						if (scrollPos + windowHeight >= documentHeight) {
							scrollDown.style.display = 'none';
						} else {
							scrollDown.style.display = 'block';
						}
					} else {
						scrollDown.style.display = 'none';
					}
				}
			
				function handleButtonClick() {
					window.scrollBy({
						top: window.innerHeight,
						behavior: 'smooth'
					});
				}
			
				scrollDown.addEventListener('click', handleButtonClick);
				window.addEventListener('scroll', handleScroll);
			});
			</script>
```

CSS



```
  #clock {
    font-family: 'Arial', sans-serif;
    font-size: 13px;
    color: #faf6f6; /* 时钟文字颜色 */
    text-align: center; /* 文本水平居中 */
    padding-top: 1x;   /* 顶部间距 */
    padding-bottom: 1px; /* 底部间距 */
    line-height: 2; 
}
```



## V2及之前版

```
  <!-- 时间 -->
			<span id="RGB"></span> 
		  <meta charset="utf-8">   
	  <div id="main">  
	  <div id="show_time0" style="">
	  <script>
	  //显示时间
	  //setInterval("show_time0.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1000);
	  </script>
	  </div>
	  <script>  
	  //定义
	  setInterval("fun(show_time)",1);
	  function fun(timeID){ 
	  var date = new Date();  //创建对象  
	  var y = date.getFullYear();     //获取年份  
	  var m =date.getMonth()+1;   //获取月份  返回0-11  
	  var d = date.getDate(); // 获取日  
	  var w = date.getDay();   //获取星期几  返回0-6   (0=星期天) 
	  var ww = ' 星期'+'日一二三四五六'.charAt(new Date().getDay()) ;//星期几
	  var h = date.getHours();  //时
	  var minute = date.getMinutes()  //分
	  var s = date.getSeconds(); //秒
	  var sss = date.getMilliseconds() ; //毫秒
	  if(m<10){
	  m = "0"+m;
	  }
	  if(d<10){
	  d = "0"+d;
	  }
	  if(h<10){
	  h = "0"+h;
	  }
	  
	  if(minute<10){
	  minute = "0"+minute;
	  }
	  
	  if(s<10){
	  s = "0"+s;
	  }
	  
	  if(sss<10){
	  sss = "00"+sss;
	  }else if(sss<100){
	  sss = "0"+sss;
	  }
	  
	  document.getElementById(timeID.id).innerHTML =  y+"-"+m+"-"+d+"   "+h+":"+minute+"     "+ww;
	  //document.write(y+"-"+m+"-"+d+"   "+h+":"+minute+":"+s);  
	  }
```

css中的代码部分为

```
#clock {
    font-family: 'Arial', sans-serif;
    font-size: 13px;
    color: #faf6f6; /* 时钟文字颜色 */
    justify-content: center; /* 水平居中 */
  }
```

