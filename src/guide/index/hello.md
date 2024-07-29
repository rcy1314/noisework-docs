# 问候弹窗

![width=2500&height=1469](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/image.dzd4jidhtwg.jpg)

支持两种效果

## 一、简单的问候

需要引入的head处js（已存入本地）这里是cdn

```
  <script src="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/layer/3.1.1/layer.js"></script>
```

弹窗信息body处引入：

```
   <!-- 弹窗信息提醒代码开始 -->
    <script>
    window.addEventListener('load', function() {
        var currentTime = new Date().getHours();
        var greeting;
        if (currentTime < 5) {
            greeting = "凌晨好！";
        } else if (currentTime < 8) {
            greeting = "早上好！";
        } else if (currentTime < 11) {
            greeting = "上午好！";
        } else if (currentTime < 13) {
            greeting = "中午好！";
        } else if (currentTime < 18) {
            greeting = "下午好！";
        } else if (currentTime < 19) {
            greeting = "傍晚好！";
        } else if (currentTime < 24) {
            greeting = "晚上好！";
        }
     
		layer.msg(greeting + "👏欢迎你的访问！");
    });
    </script>
    <!-- 弹窗信息提醒代码结束 -->
```

## 二、引入外部api加载访客设备及ip信息【外部api有概率会失效，长期有效请选择一】

![width=2500&height=1417](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/20230705/image.38neoowvbrc0.jpg)

引入的head处js（已存入本地）这里是cdn

```
<script src="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/layer/3.1.1/layer.js"></script>
```

body处引入：

```
  <!-- 弹窗信息提醒代码开始 -->
<script>
  $(function () {
    var t = document.createElement("a");
    t.href = document.referrer;
    var msgTitle = t.hostname;
    var name = t.hostname.split(".")[1];
    if ("" !== document.referrer) {
      switch (name) {
        default:
          msgTitle = t.hostname;
      };
    };
    var time = (new Date).getHours();
    var msg = '';
    if (23 < time || time <= 5) {
      msg = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？";
    } else if (5 < time && time <= 7) {
      msg = "早上好！一日之计在于晨，美好的一天就要开始了！";
    } else if (7 < time && time <= 11) {
      msg = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";
    } else if (11 < time && time <= 14) {
      msg = "中午了，工作了一个上午，现在是午餐时间！";
    } else if (14 < time && time <= 17) {
      msg = "午后很容易犯困呢，今天的运动目标完成了吗？";
    } else if (17 < time && time <= 19) {
      msg = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~";
    } else if (19 < time && time <= 21) {
      msg = "晚上好，今天过得怎么样？";
    } else if (21 < time && time <= 23) {
      msg = "已经这么晚了呀，早点休息吧，晚安~";
    }
    axios.get("https://api.gmit.vip/Api/UserInfo/")
      .then(function (response) {
        window.info = response.data;
        layer.msg("Hi~ 来自" + response.data.data.location + '~<br/>通过 ' + msgTitle + ' 进来的朋友！<br/>使用 ' + response.data.data.os + "<br/>" + response.data.data.browser + ' 访问本站！' + '<br/>' + msg);
      })
      .catch(function (error) {
        console.log(error);
      });
    document.cookie = "msg=1; expires=Thu, 01 Jan 2038 00:00:00 UTC; path=/;";
  });
</script>
<!-- 弹窗信息提醒代码结束 -->
```
