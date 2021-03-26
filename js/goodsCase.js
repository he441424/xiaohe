$(function () {

    loadCarData()
    function loadCarData() {
        
        //加载已经加入购物车的商品
        /*
        1、cookie只存储了ID和数量
        2、加载数据的数据源
            goodsCase.json
            goodsList.json
        要找到加入购物车的数据
        new promise 处理两次按照顺序加载的数据
        */
        new Promise(function (resolve, reject) {
            $.ajax({
                url: '../data/goodsCarList.json',
                success: function(succerr){
                   resolve(succerr.data)
                },
                error: function(error) {
                    reject(error)
                }
            })
        }).then(function (arr1) {
            // console.log(arr1);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: '../data/goodsList2.json',
                    success: (res) => {
                        var arr2 = arr1.concat(res);
                        resolve(arr2)
                    },
                    error: (error) => {
                        reject(error)
                    }
                })
            })
        }).then(function (arr3) {
            console.log(arr3);
            // 取出cookie数据
            var cookieStr = $.cookie("goods");
            var newArr = [];
            // 判断cookie有没有数据
            if (cookieStr) {
                var cookieArr =JSON.parse(cookieStr)
            // 遍历cookie数据
            for (var i = 0; i < cookieArr.length; i++){
                // 遍历全部数据
                for (var j = 0; j < arr3.length; j++){
                    //判断cookie的数据和全部数据
                    if (cookieArr[i].id == arr3[j].product_id || cookieArr[i].id == arr3[j].goodsid) {
                        arr3[j].num = cookieArr[i].num;
                        arr3[j].id = cookieArr[i].id;
                        newArr.push(arr3[j])
                        
                    }
                }
                };
                // console.log(newArr);
                for (var k = 0; k < newArr.length; k++){
                    var node = $(`
                <div class="item-table" id ="${newArr[k].id}">
                <div class="col col-check"><i class="iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox" data-itemid="2192300031_0_buy" data-status="1">√</i> </div>
                <div class="col col-img">
                    <img src="${newArr[k].image}"  width='120px' height='120px'
                        alt="">
                </div>
                <div class="col col-name">
                    <h3>
                    ${newArr[k].name}</h3>
                </div>
                <div class="col col-price"><i>${newArr[k].price}</i>元</div>
                <div class="col col-num">
                    <div class="change-goods-num clearfix J_changeGoodsNum">
                        <a href="javascript:void(0)" class="J_minus">
                            <i class="iconfont">-</i>
                        </a>
                        <input tyep="text" name="2192300031_0_buy" value="  ${newArr[k].num} " data-num="1" data-buylimit="20"
                            autocomplete="off" class="goods-num J_goodsNum" "=""> 
                        <a href=" javascript:void(0)" class="J_plus"><i class="iconfont">+</i></a>
                    </div>

                </div>
                <div class="col col-total" style="color: #ff6700;font-size:18px">${newArr[k].price*newArr[k].num}元</div>
                <div class="col col-action"><a href="#">x</a></div>
            </div>
                `)
            node.appendTo(".list-body")
                }
                isTotle()
            }
            
            }).catch(function(error){
                console.log(error);
            })
         
    }
    
// 加载购物车下面的信息
    $.ajax({
        url:"../data/goodsCarList.json",
        success: (res) => {
            var arr = res.data;
            // alert(arr)
            for (var i = 0; i < arr.length; i++){
                $(`
               <li>
                <a href="">
                    <img src="${arr[i].image}"
                        alt="">
                </a>
                <p>${arr[i].name}</p>
                <span>${arr[i].price}元</span>
                <i style="color:#ccc;margin:10px 0;">${arr[i].comments}人好评</i>
                <div class="recommend-action">
                    <a href="#" id="${arr[i].goodsid}">加入购物车</a>
                </div>
            </li>
                `).appendTo('.recom-ul')
            }
            // 鼠标移进移出
            $(".container").on('mouseenter', '.recom-ul li', function () {
                $(this).find(".recommend-action").show()
                $(this).find("i").hide()

            })
            $(".container").on('mouseleave', '.recom-ul li', function () {
                $(this).find(".recommend-action").hide();
                $(this).find("i").show()

            });
            // 添加cookie
            $(".container").on('click', '.recommend-action a', function () {
                // alert(2)
                var id = this.id;
                // alert(id)
                // 判断是不是第一次添加cookie
                var first = $.cookie("goods") == null ? true : false;
                if (first) {
                    // 如果是第一次就直接创建cookie
                    var cookieArr = [{ id: id, num:1 }];
                    // 存储到cookie中
                
                    $.cookie("goods", JSON.stringify(cookieArr), {
                        expires:7
                    })  
                } else {
                    // 不是第一次 看看有没有cookie 如果有就num++没有就创建
                    // 假设没有
                    var some = false;
                    var cookieStr = $.cookie("goods");
                    var cookieArr = JSON.parse(cookieStr);
                    for (var i = 0; i < cookieArr.length; i++){
                        if (cookieArr[i].id == id) {
                            cookieArr[i].num++;
                            some = true;
                            break;
                        }
                    };
                    if (!some) {
                        var obj = { id: id, num: 1 };
                        cookieArr.push(obj);

                    }
                    $.cookie("goods", JSON.stringify(cookieArr), { expires: 7 })
                    
                    alert("已加入购物车 请前往购物车")
                    // location=location 
                }

                
                return false;

            });
        },
        error: (error) => {
            alert(error+"错误")
        }
    })
    // 
// 全选和单选按钮点击
    check()
    function check() {
    
        $(".shopping-top .list-head .col-check").find("i").click(function () {
        // 获取每一个单选框
        var allCheck = $('.list-body .item-table .col-check').find("i")
        // 如果存在icon-checkbox-selected就删除掉不存在就添加
        if ($(this).hasClass("icon-checkbox-selected")) {
            $(this).add(allCheck).removeClass("icon-checkbox-selected")
        } else {
            $(this).add(allCheck).addClass("icon-checkbox-selected")
        };
        isTotle()
    });
     // 单选框
    $(".shopping-top").on("click", ".item-table .col-check i", function () {
        // alert(1)
        if ($(this).hasClass("icon-checkbox-selected")) {
            $(this).removeClass("icon-checkbox-selected")
        } else {
            $(this).addClass("icon-checkbox-selected")
        };
        isTotle()
    });
    };
    // 计算总价
    function isTotle() {
        // 假设全选
        var isAll = true;
        // 全部选择框
        var ehecks = $(" .item-table ");
        // 总价格
        var total = 0;
        // 总数
        var totalCount = 0;
        // 选择的数量
        var count = 0;
        // 判断有没有被选中
        // 遍历
        ehecks.each(function (index, item) {

            if (!$(item).find(".col-check i").hasClass("icon-checkbox-selected")) {
                // 没有选中
                isAll = false;
            } else {
                // 计算总数
                total += parseFloat($(item).find(".col-price i").html()) * parseInt($(item).find(".col-num .change-goods-num input").val())
                // 计算一共有数量
                count += parseInt($(item).find(".col-num .change-goods-num input").val())
            }
            // 购物车一共有都是商品
            totalCount += parseInt($(item).find(".col-num .change-goods-num input").val())
        
        })
        // 设置总价格
        total.toFixed(2)
        $(".total").html(total)
        $(".close-left").find("p").find("i").html(count)
        $(".close-left").find("p").find("span").html(totalCount)
        // 判断是否全选
        if (isAll) {
            $(".list-head .col-check").find("i").addClass("icon-checkbox-selected")
        } else {
            $(".list-head .col-check").find("i").removeClass("icon-checkbox-selected")
            
        }
    }
    // 总价结束
    // 删除按钮和加减按钮
    chang()
    function chang() {
        // 通过事件委托找到要点击的按钮
        $(".shopping-top .list-body").on("click", ".item-table .col-action a", function () {
            var id = $(this).closest(".item-table").remove().attr("id")
            // alert(id);
            // 将cookie拿到
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            for (var i = 0; i < cookieArr.length; i++){
                if (id == cookieArr[i].id) {
                    cookieArr.splice(i, 1);
                    break;
                } 
            }
            cookieArr.length == 0 ? $.cookie("goods", null):$.cookie("goods",JSON.stringify(cookieArr),{expires:7})
            isTotle();
            return false;
            
        })
            
        // 加减
        $(".shopping-top .list-body").on("click", ".J_minus,.J_plus", function () {
            // 找到id
            var id = $(this).closest(".item-table").attr("id");
            // alert(id)
            // 取出cookie
            var cookieStr = $.cookie("goods");
            // 转成数组
            var cookieArr = JSON.parse(cookieStr);

            
            for (var i = 0; i < cookieArr.length; i++){
                if (cookieArr[i].id == id) {
                    if (this.className == "J_minus") {
                        cookieArr[i].num == 1 ? alert("数量已经为1，不能减少") : cookieArr[i].num--;
                     
                    } else {
                        cookieArr[i].num++;
                       
                    }
                    break;
                }
           };
            // 更新商品的input
            $(this).siblings("input").val(cookieArr[i].num);
            // 更新 页面的价格和总价格
            var price = $(".col-price i").html();
            console.log(price);
                $(this).closest(".col-num").siblings(".col-total").html((price * cookieArr[i].num).toFixed(1) + "元")
            
            //最后存cookie
            $.cookie("goods", JSON.stringify(cookieArr), { expires: 7 });
            isTotle()
        })
        
    }
    
})