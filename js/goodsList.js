$(function () {
    $.ajax({
        url: '../data/goodsList2.json',
        success: (res) => {
            // alert(res);
            var obj = res;
            for (var i = 1; i < obj.length; i++){
                if (i%2!=0) {
                    // console.log(i);

                    var node = $(`
                    <div class="row"></div>
                    `)
                    node.appendTo(".conents")
                }
                var node2 = $(`
                <div class="row-left row-box">
                <a href="goodsDesc.html?product_id=${obj[i].product_id}">

                    <img src="${obj[i].image} "
                  alt="">
                    <div>
                        <h3>${obj[i].name}</h3>
                        <p>${obj[i].desc} </p>
                        <p class="price"><strong>${obj[i].price}</strong>元起</p>
                </a>

            </div>
                `)
                node2.appendTo(node)
            }

        },
        error: (error) => {
            alert("错误"+error)
        }
    })
})
// 轮播图
$(function () {
    // 图片数量
    var isNow = 0;
    //定时器
    var timer = null;
    timer = setInterval(function() {
        isNow++;
        tab()
    }, 4000);

// 自动播放的函数
    function tab() {
        if (isNow > 2) {
            // 如果大与第二张图的时候播放第三张如果让他回到第一张
            $(".slide").animate({ left: isNow * -2560 }, 1000)
            isNow = 0;
            $(".slide").animate({ left: isNow * -2560 }, 0)
        } else { 
            $(".slide").animate({ left: isNow * -2560 }, 1000)      
        }
    }
    // 鼠标经过的时候

    $(".slide").hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(function() {
            isNow++;
            tab()
        }, 4000);
    })
})