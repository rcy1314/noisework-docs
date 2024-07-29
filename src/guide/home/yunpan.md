# 云盘资源卡片

![yun](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/yun.png)

**该组件是使用**fetch请求api并对响应的数据进行定制化处理

## 引入

页面左侧引入

```
 <!-- 云盘资源-->
		 <div class="left-div left-time">
			<ul id="line">
				<div class="container">
					<class="title">《云盘资源上新情报》
						<hr class="dashed">
					</div>	
					<div class="ziyuan"></div>	
			</ul>
		</div>
		<!-- 云盘资源结束-->
```

页脚处引入

```
<script>
		// 使用 fetch API 请求网盘资源更新 URL
		fetch('https://www.pan.noisework.cn/api/search')
			.then(response => response.json())
			.then(data => {
				// 检查data是否为null
				if (data === null) {
					// 如果data为null，显示默认错误消息
					const contentDiv = document.querySelector('.ziyuan');
					const p = document.createElement('p');
					p.textContent = '请求失败，没有返回有效信息';
					contentDiv.appendChild(p);
				} else {
					// 如果data不是null，检查code字段
					if (data.code === 200) {
						// 如果code是200，显示title和url字段的信息
						const contentDiv = document.querySelector('.ziyuan');
						data.data.items.forEach(item => {
							const p = document.createElement('p');
							p.innerHTML = `<strong>${item.title}</strong> - <a href="${item.url}" target="_blank">链接🔗 </a>`;
							p.style.margin = '0.2em 0'; // 添加0.2的上下间隔
							contentDiv.appendChild(p);
						});
					} else {
						// 如果code不是200，显示msg字段的信息
						const contentDiv = document.querySelector('.ziyuan');
						const p = document.createElement('p');
						p.textContent = data.message || '请求失败，没有返回有效信息';
						contentDiv.appendChild(p);
					}
				}
			})
			.catch(error => {
				console.error('请求出错:', error);
			});
	</script>
```



## 注意

不推荐个人引入，因为该请求的api地址为我个人搭建的云盘资源站，我不保证持续维护和长久存在该站，如果失效请更换其它API并修改返回的数据响应
