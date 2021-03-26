
$(function () {
    $.ajax({
        type: "get",
        url: "../data/nav.json",
        success: function (success) {
            // alert(success)
            var bannerArr = success.banner;
            // console.log(obj);
            // 通过循环把数据添加到页面上
            for (var i = 0; i < bannerArr.length; i++) {
                $(`<a href="${bannerArr[i].url}">
                        <img src="../images/banner/${bannerArr[i].img}" alt="">
                    </a>`).appendTo("#img");
                var node = $(`<a href="list.html" ></a>
                        `);
                if (i == 0) {
                    node.css("background", "#ccc")
                };
                node.appendTo(".banner .yuandian")
            }
        },
        error: function (error) {
            // alert(error)
        }
    })
});
// 轮播开始
$(function () {
    var cound = 0;
    var timer = null;
    var img = null;
    var yuandian = null;
    timer = setInterval(function () {
        cound++;
        tab();
        
    },2000)
    function tab() {
        if (cound == 5) {
            cound = 0;
        }
        if (!img) {
        img =$("#img").find("a")
    };
    if (!yuandian) {
        yuandian = $(".banner .yuandian").find("a");
        }
        // 图片奇换
        img.hide()
            .css("opacity", 0.2).eq(cound)
            .show().animate({ opacity: 1 }, 500);
        // 小圆点
        yuandian.eq(cound).css("background", "#ccc").siblings().css("background","")
    
    
    
    };
    // 鼠标进去停止
    $("#img").mouseenter(function(){
        clearInterval(timer);
    });
    $("#img").mouseleave(function(){
        timer = setInterval(function(){
            cound++;
            tab();
        }, 2500);
    });
   
    // 点击小圆点
    $(".yuandian").on("click", "a", function () {
        // alert($(this).index())
        cound = $(this).index();
        tab()
    })



})

    // 左边导航栏
   

    $(function () {
        $.ajax({
            type: "get",
            url: "../data/nav.json",
            success: function (success) {
                var leftArr = success.sideNav;
                // alert(leftArr)
                // alert(j)
                for (var j = 0; j < leftArr.length; j++){
                    
                    var node = $(`<li><a href="list.html">
                    ${leftArr[j].title}
                    <i>> </i>
                </a>
                <div class="slider"></div>
                </li>`);
                    node.appendTo("#left-nav");
                    var rightArr = leftArr[j].child;
                    // alert(rightArr)
                    for (var k = 0; k < rightArr.length; k++){
                        if (k % 6 == 0) {
                            var newUl=$(`<ul ></ul>`)
                            newUl.appendTo(".slider")
                        }
                        $(`<li><a href=""><img src="${rightArr[k].img}" alt=""><span>${rightArr[k].title}</span></a>
                        </li>`).appendTo(newUl)
                    }
                }
            },
            error: function (error) {
                // alert(error)
            }
        })
    });

$(function () {
    $.ajax({
        url: "../data/nav.json",
        success: function (success) {
            // alert("获取成功"+success)
            var topArr = success.topNav;
            topArr.push({title:"服务"},{title:"社区"})
            for (var i = 0; i < topArr.length; i++) {
                var newLi = $(`<li ><a href="list.html">${topArr[i].title}</a>
                
                </li>`);
                newLi.appendTo(".navBat-ul");
                
                var node = $(`<div class="pop "></div>`).appendTo(newLi)
                var newUl = $(`<ul class="w"  ></ul>`).appendTo(node)
                // var topChilds = topArr[i].childs;
            
                // var topChilds = topArr[i].childs;
                // // alert(topChilds)
                
                // }
                if (topArr[i].childs) {
                    var childsArr = topArr[i].childs;
                    for (var j = 0; j < childsArr.length; j++) {
                        $(`
                        <li>
                        <img src="${childsArr[j].img}" width="160px"
                                                height="110px">
                                            <h4>${childsArr[j].a}</h4>
                                            <p>${childsArr[j].i}</p>
                                            <i></i>
                                        </li> 
                    </li>`).appendTo(newUl);
                    }
                }
            }
        
        },
        error: function (erorr) {
            alert("错误"+error)
        }
        })
    })