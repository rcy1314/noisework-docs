# 摸鱼日历

![mo](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/mo.png)

该组件是使用fetch请求api并对响应的数据进行定制化处理

## 引入

页面右侧引入

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

