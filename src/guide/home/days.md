# 每日60秒读世界

![6666](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/6666.png)

该组件是使用fetch请求api并对响应的数据进行定制化处理

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

