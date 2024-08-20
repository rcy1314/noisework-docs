# 组件监测

该功能主要是为一些有api请求的组件，API失效后自动隐藏而设置

在home页的HTML找到如下

```
<script>
			// 监听B站收藏夹视频链接
			checkIframeLoad("bilibiliContainer", "https://www.noisework.cn/e/bili/index.html?id=3271958393");

			// 监听云盘资源链接
			checkLink("https://www.pan.noisework.cn/api/search", "panContainer");

			// 监听60秒读懂世界链接
			checkLink("https://www.wudada.online/Api/ScD", "worldContainer");

			// 监听摸鱼日历链接
			checkLink("https://dayu.qqsuu.cn/moyurili/apis.php", "moyuContainer");

			// 监听随机一言代码链接
			checkScriptLoad("hitokotoContainer", "https://v1.hitokoto.cn/?encode=js&select=%23hitokoto");			
		
			// 检查链接是否有效的函数
			function checkLink(url, containerId) {
				fetch(url, { method: 'HEAD' })
					.then(response => {
						if (response.ok) {
							// 如果链接有效，显示容器
							document.getElementById(containerId).style.display = 'block';
						} else {
							// 如果链接无效，隐藏容器
							document.getElementById(containerId).style.display = 'none';
						}
					})
					.catch(error => {
						// 如果请求失败，隐藏容器
						document.getElementById(containerId).style.display = 'none';
					});
			}

			// 检查iframe是否成功加载内容的函数
			function checkIframeLoad(containerId, iframeSrc) {
				const iframe = document.createElement('iframe');
				iframe.src = iframeSrc;
				iframe.onload = function () {
					// 如果iframe成功加载，显示容器
					document.getElementById(containerId).style.display = 'block';
				};
				iframe.onerror = function () {
					// 如果iframe加载失败，隐藏容器
					document.getElementById(containerId).style.display = 'none';
				};
				// 这里不需要将iframe添加到页面上，只是用来检查链接的有效性
			}

			// 检查脚本是否成功加载的函数
			function checkScriptLoad(containerId, scriptSrc) {
				const script = document.createElement('script');
				script.src = scriptSrc;
				script.onload = function () {
					// 如果脚本成功加载，显示容器
					document.getElementById(containerId).style.display = 'block';
				};
				script.onerror = function () {
					// 如果脚本加载失败，隐藏容器
					document.getElementById(containerId).style.display = 'none';
				};
			}

		</script>
```

已添加了注释，检测的为设置的API地址，需要和组件中设置的地址一致，监测主要分为API地址是否有效、B站收藏网页嵌入地址是否有效、JS脚本请求加载是否有效
