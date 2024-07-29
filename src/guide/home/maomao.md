# 躲猫猫

该效果还是比较有趣的，当你把鼠标放在猫猫上时它会自动躲开

![1722267202822](https://jsd.cdn.noisework.cn/gh/rcy1314/tuchuang@main/uPic/1722267202822.png)

为了方便引入没有拆分到css文件中，只需要在html的body中添加代码

```
<!-- 躲猫猫-->
<style>
    #maomao {
        position: fixed;
        bottom: 120px; /* 初始高度 */
        right: -5px;
        width: 57px;
        height: 70px;
        background-image: url(assets/mao.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: background .3s;
		z-index: 9999; /* 确保元素位于顶层 */
    }
    #maomao:hover {
        background-position: 60px 50%;
    }
</style>
<script>
    var randomNum = function(minNum, maxNum) {
        switch(arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    };
    var duoMaomao = function() {
        var maomao = $("#maomao");
        maomao.css("bottom", randomNum(5, 80) + "vh");
    };
</script>
<div id="maomao" onMouseOut="duoMaomao()"></div>
```

其中的svg图片别忘了放入正确的url，上述代码中我使用的为本地引入
