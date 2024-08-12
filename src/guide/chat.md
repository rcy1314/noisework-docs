# 聊天室介绍

![chat](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/chat.png)本效果引入的为cbox

https://www.cbox.ws/

意为在线聊天盒子，界面可定制、支持中文，免费版支持存储100条信息、每日1000访客，支持头像和自定义主题，但免费版不支持在线IP显示。我很喜欢它的界面，但还有一点比较坑，免费版你在嵌入代码时显示的是cbox的Logo，更改方案：下载要引入的JS文件并在代码处更改，如图，此处可不按官方自定义显示名称及布局大小颜色

![img](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/4305e9f0477e4f629d0b3445e9b052fb.png)

## 引入

在html中代码为

```
<script>
        window['CboxReady'] = function (Cbox) {
            Cbox('button', '3-3523748-9k93aT');
        }
    </script>
<script src="./js/emb.js" async></script>
```

其中3-3523748-9k93aT为我个人的id，如果你要引入请改为你自己的

请前往https://www.cbox.ws 官网后登录你的账户，新建一个聊天室并按你自己的喜好调整外观后点击菜单中的Publish选项，找到你的代码后复制到网站中

![1](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723460304737.png)



<details>
<summary>✅ 【点击展开】</summary>



![](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1723460287387.png)

</details>

引入的js为emb.js

```
(function () {
    var u = window.Cbox || {}, A = u.q || [], l = {}, B = 0, v = function (b, a) { b = b || {}; a = a || {}; for (var c in b) "undefined" === typeof a[c] && (a[c] = b[c]); return a }, w = function (b, a) {
        var c = document.createElement("iframe"); if (a.url) var d = a.url; else { d = b.split(/-/); var h = "dev" === d[0] ? "dev1" : "www"; d[0].match(/^[0-9]$/) && (h += d[0]); var f = ""; d[3] && d[4] && (f = "&tid=" + d[3] + "&tkey=" + d[4]); d = "https://" + h + ".cbox.ws/box/?boxid=" + d[1] + "&boxtag=" + d[2] + f } d = {
            name: "cboxmain", width: "100%", height: "100%", src: d, marginheight: "0", marginwidth: "0",
            frameborder: "0", scrolling: "no", allowtransparency: "yes", style: "border: 10"
        }; for (var g in d) c.setAttribute(g, d[g]); return c
    }, C = function (b) {
        var a = document.createElement("style"); a.innerHTML = ".CboxButton {position: fixed;opacity: 1;z-index: 9999;bottom: 0px;right: 0px;width: 120px;height: 30px;transform: rotateZ(-90deg);transform-origin: 60px -30px;padding: 0px 1em;box-sizing: border-box;text-align: center;cursor: pointer;background: rgba(0, 0, 0, 0.79);color: #fff;line-height: 30px;transition: opacity 200ms ease-in, right 200ms ease-in;border-radius: 0 15px 0 0px;}.CboxCount {background: #a6d83f;color: #000;position: absolute;right: -8px;top: -4px;width: 24px;height: 24px;font-size: 12px;line-height: 24px;border-radius: 15px;transform: rotateZ(90deg);overflow: hidden;text-align: center;}.CboxWrap {position: fixed;z-index: 9998;top: 0px;bottom: 0px;right: -" +
            b.width + "px;width: " + b.width + "px;background: rgb(51, 51, 51);padding: 0px;line-height: 0;transition: right 200ms ease-in, width 100ms ease-in;}.CboxWrap.Open {right: 0px;}.CboxButton.Open {right: " + b.width + "px;width: 30px;transform: none;padding: 0;border-radius: 15px 0 0 0;}.CboxOpenBtn:after {content: '" + b.label + "';}.CboxCloseBtn:after {content: '\\25B6';}@media screen and (max-width: " + (b.width + 100) + "px) {.CboxWrap {left: 0;right: 0;width: auto;}.CboxWrap {display: none;}.CboxWrap.Open {display: block;right: 0;width: auto;}.CboxButton.Open {right: 30px;top: 0;border-radius: 0;}body.CboxOpen {overflow: hidden;}}";
        return a
    }; l.inline = function (b, a) { a = v({ elem: "cbox", width: "100%", serial: 1E6 * Math.random() | 0 }, a); $wrap.style.cssText = "position: relative; width: " + a.width + "; padding: 0; line-height: 0;"; var c = w(b, a); $cont.appendChild(c) }; l.button = function (b, a) {
        var c = null; a = v({ background: "#059ad0", width: 300, serial: 1E6 * Math.random() | 0, label: "聊天室", showLogo: !0, showCount: "messages", url: "" }, a); var d = C(a), h = document.head || document.getElementsByTagName("head")[0]; h.insertBefore(d, h.children[0]); var f = document.createElement("div");
        f.className = "CboxButton"; var g = document.createElement("div"); g.className = "CboxWrap"; var x = w(b, a); g.appendChild(x); B++; document.body.appendChild(g); document.body.appendChild(f); var p = function () {
            var e = ""; m ? e = '<span class="CboxCloseBtn"></span>' : (c && "users" == a.showCount && (e += '<span class="CboxCount">' + (99 > c ? c : "99+") + "</span>"), k && "messages" == a.showCount && (e += '<span class="CboxCount">' + (99 > k ? k : "99+") + "</span>"), e = a.showLogo ? e + '<span class="CboxOpenBtn"><img src="" style="width: 80px; position: absolute; left: -0px; top: -30px"></span>' :
                e + '<span class="CboxOpenBtn"></span>'); return e
        }; f.innerHTML = "Loading... "; var y = !1, m = !1, q = null, r = function (e) { e ? (g.className = "CboxWrap Open", f.className = "CboxButton Open", q = document.body.className, document.body.className = "CboxOpen", k = 0) : (g.className = "CboxWrap", f.className = "CboxButton", null !== q && (document.body.className = q)); e && !y && (y = !0); m = e; f.innerHTML = p() }, D = function () {
            localStorage && "string" === typeof localStorage.getItem("cbox:isOpen") ? r("yes" === localStorage.getItem("cbox:isOpen")) : r(!1); f.style.opacity =
                "1"; f.onclick = function () { r(!m); localStorage && localStorage.setItem("cbox:isOpen", m ? "yes" : "no") }
        }, k = 0; window.addEventListener("message", function (e) { if (null !== e.origin.match(/(^|\.)cbox\.(ws|im)$/) && e.source === x.contentWindow) { console.log(e); try { var n = JSON.parse(e.data); "ready" == n.event && D(); "onliners" == n.event && (c = n.data, f.innerHTML = p()); "message" == n.event && (k++, f.innerHTML = p()) } catch (E) { } } }, !1)
    }; var t = function () {
        var b = arguments[0]; if (l[b]) {
            for (var a = [], c = 1; c < arguments.length; c++)a.push(arguments[c]);
            l[b].apply(this, a)
        } else console.log("CboxEmbed: call " + b + " not found")
    }, z; for (z in A) t.apply(this, u.q[z]); window.Cbox = t; window.Cbox.s = document.currentScript || !0; window.CboxReady && window.CboxReady(t)
})();
```



如果不想使用该聊天室可以**删除html中的代码**

## 嵌入AI对话框

这里建议使用Dify来嵌入到页面

DIFY：https://cloud.dify.ai

![1722767503362](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722767503362.png)

在应用界面创建应用APP后，选择发布，可选择嵌入页面的样式
