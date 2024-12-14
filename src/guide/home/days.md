# 每日60秒读世界

![1734147178653](https://s2.loli.net/2024/12/14/Eu5jBrUsKXxo8OV.png)

说明：该组件是使用fetch请求api并对响应的数据进行定制化处理，所以，如果失效记得去更换API并调整响应的js代码结构，如果更换记得修改监听api的代码处保持api一致

## 一、使用https://60s.viki.moe/60s?v2=1

该API开源地址: https://github.com/vikiboss/60s

## 引入

页面右侧引入

```
<!-- 60秒读懂世界-->
			<div class="left-div left-time">
				<ul id="line">
					<div class="container">
						<class="title">《每天60秒读懂世界》
                            <hr class="dashed">
						<div class="content"></div>	
				</ul>
			</div>
			<!-- 60秒读懂世界结束-->
```

页脚处引入js

```
		<script>
			// 使用 fetch API 请求每日60s URL
			fetch('https://60s.viki.moe/60s?v2=1')
				.then(response => response.json())
				.then(data => {
					// 检查data是否为null
					if (data === null) {
						// 如果data为null，显示默认错误消息
						const contentDiv = document.querySelector('.content');
						const p = document.createElement('p');
						p.textContent = '请求失败，没有返回有效信息';
						contentDiv.appendChild(p);
					} else {
						// 如果data不是null，检查status字段
						if (data.status === 200) {
							// 如果status是200，显示news字段的信息
							const contentDiv = document.querySelector('.content');
		
							// 显示cover图像
							if (data.data.cover) {
								const img = document.createElement('img');
								img.src = data.data.cover;
								img.alt = 'Cover Image';
								img.classList.add('cover-image'); // 添加一个类以便样式控制
								contentDiv.appendChild(img);
							}
		
							data.data.news.forEach(item => {
								const p = document.createElement('p');
								p.textContent = item;
								contentDiv.appendChild(p);
							});
		
							// 显示tip信息
							const tipP = document.createElement('p');
							tipP.textContent = data.data.tip;
							contentDiv.appendChild(tipP);
		
							// 显示更多信息的链接
							if (data.data.url) {
								const linkA = document.createElement('a');
								linkA.href = data.data.url;
								linkA.textContent = '更多详情...';
								linkA.target = '_blank';
								contentDiv.appendChild(linkA);
							}
						} else {
							// 如果status不是200，显示message字段的信息
							const contentDiv = document.querySelector('.content');
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
		<style>
			.cover-image {
				width: 100%; /* 图像宽度可以自定义 */
				max-width: 100%; /* 确保图像不会超过容器的宽度 */
				height: auto; /* 保持图像的宽高比 */
				margin-bottom: 10px; /* 图像下方的间距 */
			}
		</style>
```



## 二、使用https://www.wudada.online/Api/ScD'



![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/6666.png)

## 引入

页面右侧引入

```
<!-- 60秒读懂世界-->
			<div class="left-div left-time">
				<ul id="line">
					<div class="container">
						<class="title">《每天60秒读懂世界》
                            <hr class="dashed">
						<div class="content"></div>	
				</ul>
			</div>
			<!-- 60秒读懂世界结束-->
```

页脚处引入

```
<script>
            // 使用 fetch API 请求每日60s URL
            fetch('https://www.wudada.online/Api/ScD')
                .then(response => response.json())
                .then(data => {
                    // 检查data是否为null
                    if (data === null) {
                        // 如果data为null，显示默认错误消息
                        const contentDiv = document.querySelector('.content');
                        const p = document.createElement('p');
                        p.textContent = '请求失败，没有返回有效信息';
                        contentDiv.appendChild(p);
                    } else {
                        // 如果data不是null，检查code字段
                        if (data.code === '200') {
                            // 如果code是200，显示content字段的信息
                            const contentDiv = document.querySelector('.content');
                            data.data.content.forEach(item => {
                                const p = document.createElement('p');
                                p.textContent = item.content;
                                contentDiv.appendChild(p);
                            });
                        } else {
                            // 如果code不是200，显示msg字段的信息
                            const contentDiv = document.querySelector('.content');
                            const p = document.createElement('p');
                            p.textContent = data.msg || '请求失败，没有返回有效信息';
                            contentDiv.appendChild(p);
                        }
                    }
                })
                .catch(error => {
                    console.error('请求出错:', error);
                });
        </script>
```

