# 时间问候卡片

![hel](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/hel.png)

## 引入

html侧边标签中添加

```
			<!-- 时间代码-->
		    <div class="left-div left-time">
				<ul id="line1">	
					<div id="lbl"></div>
					<div id="clock"></div>			
				</ul>
				</div>
			   <!-- 时间结束-->
```

并在页脚引入

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

