// 秒杀的商品滚动
$(function () {
    $.ajax({
        url: "../data/slide.json",
        success: function (success) {
            // alert(success.data)
            // 获取json数据
            var slideArr = success.data.list.list;
            // alert(slideArr)
            // 通过循环数据把数据插到页面上
            for (var i = 0; i < slideArr.length; i++){
                $(`<li><a href=""><img src="${slideArr[i].pc_img}" width="160px" height="160px">
                <h4>${slideArr[i].goods_name}</h4>
                <p style="font-size: 10px; color:#757575">${slideArr[i].desc}</p>
                <span style="color: #ff6709">${slideArr[i].seckill_Price}元</span><del style="color: #ccc;margin-left:4px;">${slideArr[i].goods_price}元</del>
            </a></li>`).appendTo(".miaosha-row-right-ul")
            }
        }, error: function (error) {
            alert("错误")
        }
    })
})
// 商品列表滚动
$(function () {
    // 获取两个点击按钮
    var aSpan = $(".miaosha-slide").find("span");
    // alert(aSpan)
    var now = 0;//每组图片的下标 每四个为一组
    // 剩下两个不为一组的 不为一组就向上取整
    var count = Math.ceil(26 / 4) - 1
    // 定时器
    var timer = null;
    timer = setInterval ( function () {
        now++;//一组一组的加
        console.log(now);
        tab();
        if (now == count) {
            clearInterval(timer)
        }
        
    },3000
)
    function tab() {
        if (now == 0) {
            aSpan.eq(0).addClass("swiper-button-disabled") 
        } else {
            aSpan.eq(0).removeClass("swiper-button-disabled") 
        }
        if (now == count) {
            aSpan.eq(1).addClass("swiper-button-disabled") 
        } else {
            aSpan.eq(1).removeClass("swiper-button-disabled") 
        };

        // 计算运动的值
        var target = 0;
        // console.log(target);
        if (now == count) {
            target= now*-992+496
        } else {
            target=now*-992
        }
        $(".miaosha-row-right-ul").css({
            transform: `translate3d(${target}px, 0px, 0px)`
        })
        
       
    }
    // 左右点击效果
    aSpan.click(function () {
        if ($(this).index() == 0) {
            now--;
            now = Math.max(0, now)
        } else {
            now++;
            now = Math.min(count, now)
        }
        tab()
    });
    // 鼠标一入一出效果
    $(".miaosha-row-right").mouseenter(function() {
        clearInterval(timer)
    }).mouseleave(function () {
        timer = setInterval ( function () {
            
            if (now == count) {
               clearInterval(timer)
            } else {
                now++;
                tab();
            }
           
        },3000
    )
    })
})