//  判断有没有登录 
$(document).ready(function () {
    var cookiestr = $.cookie("name");
    if (cookiestr == null) {
        denglu()
    } else {
        $(".login a").eq(0).hide();
        $(".login span").eq(0).hide();
        $(".login a").eq(1).attr("href", "").html("已登录");
        console.log("加载");


    }
    })
    function denglu() {

        //    如果cookie为空的话就是没有登录 跳转到登录页面
        setTimeout(function () {
            alert("你还没有登录 请登录后继续浏览");
            location.replace("denglu.html")
        }, 5000)
    }
