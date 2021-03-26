$(function () {
    download()
    function download() {
        // 找到详情页加载商品的id
        var product_id = valueByName(location.search, "product_id")
        // console.log(product_id);
        $.ajax({
            url: "../data/goodsList.json",
            success: (res) => {
                // 通过商品id找到商品信息
                // arr.find():查找出第一个符合条件的数组成员，如果没有找到就返回undefine
                var arr = res.find(item => item.product_id == product_id)
                console.log(arr);
                
                var node = $(`
                    <div class="nav-bat">
            <div class="w">
                <div class="nav-bat-left nav-bat-common">
                    <ul>
                        <li>
                            <h2>${arr.name}</h2>
                        </li>

                        <li><span>|</span></li>
                        <li><a href="">${arr.name}</a></li>
                    </ul>
                </div>

                <div class="nav-bat-right nav-bat-common">
                    <ul>
                        <li><a href="">概述</a></li>
                        <li><span>|</span></li>
                        <li><a href="">参数</a></li>
                        <li><span>|</span></li>
                        <li><a href="">F码通道</a> </li>
                        <li><span>|</span></li>

                        <li><a href="">咨询客服</a></li>
                        <li><span>|</span></li>

                        <li><a href="">用户评价</a> </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 内容 -->
        <div class="conent ">
            <div class="top w">

                <span>为方便你购买，请提前登录 </span>
                &nbsp&nbsp
                <a href="../index/denglu.html">立即登录</a>
            </div>


            <div class="buttom">
                <div class="w">
                    <div class="pro-view">
                        <div class="lbt">
                            
                        </div>
                        <!-- 原点 -->
                        <div class="ui-pager">
                            <ul class="pager-ul ">
                                <!--<li class="curre"></li>
                                <li class=""></li>
                                <li></li>
                                <li></li>-->
                            </ul>
                        </div>
                        <!-- 左右按钮 -->
                        <div class='ui-controls-direction'>
                            <a class="ui-prev" href="#"></a>
                            <a class="ui-next" href="#"></a>
                        </div>
                    </div>
                    <!--右边内容-->
                    <div class="right ">
                        <h2>${arr.name}</h2>
                        <p>${arr.product_desc_ext}
                        </p>
                        <span style="color: #ff6700;">小米自营</span>
                        <div class="price">
                            <span>${arr.price_max}元<del>${arr.market_price_max}</del></span>
                        </div>
                        <div class="cengs">
                            <span
                                style="background-color: #ff6700;width: 80px;height: 25px;display: inline;padding:6px 3px;color: #fff;">赠完为止</span>
                            <span>买手机赠手机保护壳</span>
                        </div>
                        <!-- 秒杀 -->
                        <div class='pro-time J_proSeckill'>
                            <div class="pro-time-head">
                                <em class="seckill-icon"></em>
                                <i>秒杀</i>
                                <span class="time J_seckillTime">距结束 03 时 24 分 46 秒</span>
                            </div>
                            <div class='pro-time-con'>
                                <span class='pro-time-price'>
                                    ￥
                                    <em class='J_seckillPrice'>${arr.price_min}</em>
                                    <del>
                                        ￥
                                        <em class='J_seckillPriceDel'>${arr.market_price_min}</em>
                                    </del>
                                </span>
                            </div>
                        </div>
                        <!-- 分仓地址 -->
                        <div class='J_addressWrap address-wrap'>
                            <div class='user-default-address' id='J_userDefaultAddress'>
                                <i class='iconfont iconfont-location'></i>
                                <div>
                                    <div class='address-info'>
                                        <span class="item">山东</span>
                                        <span class="item">济南市</span>
                                        <span class="item">历下区</span>
                                        <span class="item">趵突泉街道</span>
                                    </div>
                                    <span class="switch-choose-regions" id="J_switchChooseRegions"> 修改 </span>
                                </div>
                                <div class="product-status active" id="J_productStatus">
                                    <span class="sale">有现货</span>
                                </div>
                            </div>
                        </div>
                        <!-- 现在颜色版本 -->
                        <!-- 选择小米提供的保险 -->
                        <div class="trotect">
                            <div class="stet-title">
                                <h4 style="display: inline-block;font-size:18px;font-weight: 400;">选择小米提供的意外保护</h4>
                                <a href="" style="color:#ff6700;float: right;">了解意外保护></a>
                            </div>

                            <ul>
                                <li style="border-bottom: none;">
                                    <input type="checkbox" name="" id="">
                                    <img src="http://i1.mifile.cn/a1/pms_1558617128.57794462.png?width=50&height=50"
                                        alt="">
                                    <div>
                                        <span class="name">意外保障服务</span>
                                        <p class="desc">手机意外碎屏/进水/碾压等损坏</p>
                                        <span class="price">179元</span>
                                    </div>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="">
                                    <img src="http://i1.mifile.cn/a1/pms_1558617128.57794462.png?width=50&height=50"
                                        alt="">
                                    <div>
                                        <span class="name">碎屏保障服务</span>
                                        <p class="desc">手机意外碎屏</p>
                                        <span class="price">99元</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 清单 -->
                        <div class="pri-list">
                            <ul>
                                <li>${arr.name}${arr.value}
                                    <span>${arr.price_max}</span>元
                                    <del>${arr.market_price_min}</del>
                                </li>
                                <li style="color: #ff6700;font-size:24px;margin-top:20px">秒杀价格:${arr.price_max}</li>
                            </ul>
                        </div>
                        <!-- 加入购物车 -->
                        <div class="btn-wrap">
                            <ul>
                                <li class="btn-one"><a href="" id="${arr.product_id}">加入购物车</a></li>
                                <li class="btn-two"><a href="">喜欢</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                </div>
            </div>

        </div>
                    `)
                node.appendTo(".goodsDes-main");

                // 获取图片
                var aImage = arr.images
                // 当只有一张的时候就把左右按钮隐藏掉
                if (aImage.length == 1) {
                    $(`
                    <a href=""><img src="${aImage[0]}" alt="" style=" display:block"></a>
                    `).appendTo(node.find(".lbt"));
                    node.find(".ui-controls-direction").hide()
                } else {
                    for (var i = 0; i < aImage.length; i++) {
                        // 图片
                        $(`
                        <a href=""><img src="${aImage[i]}" alt="" style=" display:${i == 0 ? 'block' : 'none'}"></a>
                        `).appendTo(node.find(".lbt"));
                        // 小圆点
                        $(`
                        <li class="${i == 0 ? 'curre' : ''}"></li>
                        
                        `).appendTo(node.find(".pager-ul "))
                    }
                }
                banner()
                // 添加轮播图
                function banner() {
                    // 设置全局变量
                    var isNow = 0;//第几张图片
                    var aBtns = null;//小圆点
                    var aImg = null;//图片
                    var timer = null;//定时器
                    // 通过事件委托
                    $(".goodsDes-main ").on('click', ".pro-view .ui-pager ul li", function () {
                        isNow = $(this).index()
                        // alert(isNow)
                        tab()
                    });
                    
                
                    // 图片切换的方法
                    function tab() {
                        if (!aImg) {
                            aImg = $(".lbt").find("img")
                        };
                        if (!aBtns) {
                            aBtns = $('.pager-ul').find('li')
                        }
                        // aBtns.removeClass("curre").eq(isNow).addClass("curre");
                        // aImg.hide().eq(isNow).show()
                    
                        // 当只有一张图片的时候就关闭定时器 如果isnow大于等于最后一个图片就等于0
                        if (aImg.length == 1) {
                            clearInterval(timer)
                        } else {
                            if (isNow == aImg.length) {
                                isNow = 0;
                           
                            }
                            aBtns.removeClass("curre").eq(isNow).addClass("curre");
                            aImg.hide().eq(isNow).show()
                            console.log(isNow);
                        }
                    }
                    // 鼠标一进一出
                    $(".lbt").hover(function () {
                        clearInterval(timer)
                    }, function () {
                        timer = setInterval(function () {
                            isNow++
                            tab();
                        }, 3000)
                    });
                    // 左右按钮
                
                    $(".goodsDes-main ").on('click', ".ui-prev, .ui-next", function () {
                        if (this.className == 'ui-prev') {
                            isNow--;
                            if (isNow == -1) {
                                isNow = 4;
                            }
                        }
                        else {
                            isNow++;
                            
                        }
                        tab()
                        return false;//阻止默认行为
                    })
                    

                    // 图片自动切换
                    timer = setInterval(function () {
                        isNow++
                        tab();
                    }, 3000)
                }
                

            },
            error: (error) => {
                alert("错误" + error)
            }
        });
        
    }

// 添加购物车的按钮 因为是动态添加的 所有要用到事件委托
$(".goodsDes-main").on('click', '.btn-wrap .btn-one a', function () {
    // 获取当前商品的id
    var id = this.id
    // alert(id);
   /*  cookie 本地缓存，存商品的id，存商品的数量
    [{id:1,num},{id:2,num}]转成json格式字符串储存在cookie中
     cookie 本地缓存技术(特点最大4kb，只能存储字符串)

     */
    /* 
    判断是否第一次添加 如果是第一次就创建cookie
    不是第一次添加 判断之前有没有添加过商品 如果有数量加1 如果没有就新曾商品数品
    */
    // 1先判断
    var first = $.cookie("goods") == null ? true : false;
    // 2如果是第一次添加
    if (first) {
        // 直接创建cookie
        var cookieArr = [{ id: id, num: 1 }];
        $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
            // 7天过期
        })
    }else {
            //3判断有没有添加过
        var same = false//假设为空
        var cookieStr = $.cookie("goods");
        var cookieArr = JSON.parse(cookieStr);
        for (var i = 0; i < cookieArr.length; i++){
            if (cookieArr[i].id == id) {
                // 之前添加过商品
                cookieArr[i].num++;
                same = true;
                break;
            } 
        };
        if (!same) {
            // 如果没有添加过就创建cookie
            var obj = { id: id, num: 1 };
            cookieArr.push(obj)
        }
        // 最后存回cookie
        $.cookie("goods", JSON.stringify(cookieArr), { expires: 7 })
       

    }
    // alert($.cookie("goods"))
    alert("已经加入购物车 ，请前往购物车查看")
    return false
})

    // 封装一个获取地址栏后面的id
    // ？name1=value1 &name2=value2 & name3=value3
    function valueByName(search, name) {
        //查找这个键对开始的位置 name=的位置
        var str = search.indexOf(name + "=");
        // 判断 键有没有 如果等于-1表示没有
        if (str == -1) {
            return null
        } else {
            // 查找结束位置
            // 从刚刚查找的开始位置遇到第一个 & 符号结束
            var end = search.indexOf("&", str);
            if (end == -1) {
                end = search.length
            }
            // 提取想要的键值对
            var str2 = search.substring(str, end);
            // 把str2字符串分割成字符串数组。
            var arr = str2.split("=");
            return arr[1]
        }
    }


})