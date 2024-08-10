# 摸鱼日历

### No.1

![mo](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/mo.png)

该组件是使用fetch请求api并对响应的数据进行定制化处理

来源API：https://api.vvhan.com/api/moyu?type=json

### 引入

页面左侧HTML中引入

```
<!-- 摸鱼日历-->
			<div class="left-div left-time">
				<ul id="line2">
				 <li>
				<div class="container">
					<img id="moyuImage" src="loading.gif" alt="摸鱼日历图片">
				</div>
			</li>
		</ul>
	</div>
	<!-- 摸鱼日历结束-->
```

页脚处引入

```
<script>
			// 当文档加载完毕时执行
			document.addEventListener('DOMContentLoaded', function() {
				// 获取摸鱼日历API的URL
				var apiURL = 'https://api.vvhan.com/api/moyu?type=json';
		
				// 使用fetch API请求摸鱼日历API
				fetch(apiURL)
					.then(function(response) {
						// 确保响应的状态是OK的
						if (!response.ok) {
							throw new Error('Network response was not ok: ' + response.statusText);
						}
						// 解析JSON响应
						return response.json();
					})
					.then(function(data) {
						// 假设API返回的图片URL在data.url中
						// 更新图片元素的src属性并显示图片
						var moyuImage = document.getElementById('moyuImage');
						moyuImage.src = data.url;
					})
					.catch(function(error) {
						// 在控制台打印错误信息
						console.error('Error fetching moyu calendar:', error);
						// 在页面上显示错误信息
						var moyuImage = document.getElementById('moyuImage');
						moyuImage.alt = '获取失败，请稍后再试。';
					});
			});
		</script>
```

## No.2

![1723312621567](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723312621567.png)

同No.1仅修改页脚JS中的请求即可

```
<script>
			// 当文档加载完毕时执行
			document.addEventListener('DOMContentLoaded', function() {
				// 获取摸鱼日历API的URL
				var apiURL = 'https://dayu.qqsuu.cn/moyurili/apis.php?type=json';
		
				// 使用fetch API请求摸鱼日历API
				fetch(apiURL)
					.then(function(response) {
						// 确保响应的状态是OK的
						if (!response.ok) {
							throw new Error('Network response was not ok: ' + response.statusText);
						}
						// 解析JSON响应
						return response.json();
					})
					.then(function(data) {
						// 检查API返回的code是否为200（成功）
						if (data.code === 200) {
							// 假设API返回的图片URL在data.data中
							// 更新图片元素的src属性并显示图片
							var moyuImage = document.getElementById('moyuImage');
							moyuImage.src = data.data;
						} else {
							// 如果API返回的code不是200，则在控制台打印错误信息
							console.error('Error fetching moyu calendar:', data.msg);
							// 在页面上显示错误信息
							var moyuImage = document.getElementById('moyuImage');
							moyuImage.alt = '获取失败，请稍后再试。';
						}
					})
					.catch(function(error) {
						// 在控制台打印错误信息
						console.error('Error fetching moyu calendar:', error);
						// 在页面上显示错误信息
						var moyuImage = document.getElementById('moyuImage');
						moyuImage.alt = '获取失败，请稍后再试。';
					});
			});
		</script>
```

来源API：https://dayu.qqsuu.cn/moyurili/apis.php?type=json

## No.3

![1723314542056](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723314542056.png)

来源API：https://api.52vmy.cn/api/wl/moyu

### 引入

HTML添加下面即可

```
<!-- 摸鱼日报-->
			<div class="left-div left-time">
				<ul id="line2">
				 <li>
				<div class="container">
					<img src="https://api.52vmy.cn/api/wl/moyu">
			</li>
		</ul>
	</div>
	<!-- 摸鱼日报结束-->
```
