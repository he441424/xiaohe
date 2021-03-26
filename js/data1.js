$(function () {
    
    $.ajax({
        url: "../data/data.json",
        success: function (arr) {
            // alert("成功")
            // 第一手机的部分
            var dataArr = arr[0];
            var node = $(`
                <div class="sj-row-left brick-item">
                    <img src="${dataArr.img}">
                
            `).appendTo(".sj-row");
            var childsArr = dataArr.childs;
            for (var i = 0; i < childsArr.length; i++) {
                $(`
                            <li><a href=" list.html ">
                            <img src="${childsArr[i].img}" alt="" width="160px" height="160px">
                            <h4>${childsArr[i].title}</h4>
                            <p style="font-size: 10px; color:#757575;margin-bottom:12px; ">${childsArr[i].desc}</p>
                            <span style="color: #ff6709 ;font-size:16px">${childsArr[i].price}</span>
                            ${childsArr[i].del == 0 ? "" : "<del>" + childsArr[i].del + "</del>" + "元"}
                            </a></li>
                        `).appendTo(".row-right-ul")
            };

            // 第二部分
            for (var j = 1; j < arr.length; j++){
                var node2 = $(`
                <div class="ggt w" style="margin: 30px auto 22px auto;">
            <a href=" list.html">
                <img src="${arr[j].topImg}" alt="">
            </a>
        </div>
                <div class="home-brick-box w">
            <div class=" w title">
                <h2 style="font-weight: normal;">${arr[j].title}</h2>
                <div class="title-right">
                    <ul>
                        <li class="active">热门</li>
                        <li>${arr[j].subTitle}</li>
                    </ul>
                </div>
            </div>
            <div class="home-brick-box-row">
                <div class="home-brick-box-row-left">
                    <ul>
                        <li class="brick-item"><a href="list.html"><img src="${arr[j].leftChilds[0]}"></a></li>
                        <li class="brick-item"><a href="list.html"><img src="${arr[j].leftChilds[1]}"></a> </li>
                    </ul>
                </div>
                <div class="home-brick-box-row-right">
                    <div class="row-right">
                    
                    <ul class="list1"> 
                    </ul>
                    
                    
                    <ul class="ultwo hid"> 
                    </ul>
                    
                    </div>
                </div>
            </div>
        </div>
                `);
                node2.appendTo(".content");

                // 循环子元素
                var hotChilds = arr[j].hotChilds;
                for (var k = 0; k < hotChilds.length; k++){
                    if (k == 7) {
                         $(`<li style="background:none;padding: 0; box-shadow:none;transform:none;"><a href="list.html">
                        <div class="home-brick-box-last-li">
                            <ul class="brick-item">
                                <li>
                                    <img src="${hotChilds[k].img}" alt="" width="80px"
                                        height="80px">
                                    <p style="margin: 10px 110px 5px 30px;">
                                    ${hotChilds[k].title}
                                    </p>
                                    <span style="margin: 0 110px 0 30px;color:#ff6709">${hotChilds[k].price}</span>
                                </li>
                                <li>
                                    <h3>浏览更多</h3>
                                    <span>热门</span>
                                </li>`).appendTo(".list1")
                    } else {
                        $(`
                        <li><a href="list.html">
                                            <img src="${hotChilds[k].img}" alt="" width="160px" height="160px">
                                            <h4>${hotChilds[k].title}</h4>
                                            <p style="font-size: 10px; color:#757575;margin-bottom:12px; ">${hotChilds[k].desc}</p>
                                            <span style="color: #ff6709 ;font-size:16px">${hotChilds[k].price}元起</span>
                                            ${hotChilds[k].del == 0 ? "" : "<del>" + hotChilds[k].del + "元</del>"}

                                        </a></li>
                        `).appendTo(".list1")


                    }
                   
                };

                var childs = arr[j].childs;
                for (var l = 0; l < childs.length; l++) {
                    if (l == 7) {
                        $(`<li style="background:none;padding: 0; box-shadow:none;transform:none;">
                        <a href="list.html">
                        <div class="home-brick-box-last-li">
                            <ul class="brick-item">
                                <li>
                                    <img src="${childs[l].img}" alt="" width="80px"
                                        height="80px">
                                    <p style="margin: 10px 110px 5px 30px;">
                                    ${childs[l].title}
                                    </p>
                                    <span style="margin: 0 110px 0 30px;color:#ff6709">${childs[l].price}</span>
                                </li>
                                <li>
                                    <h3>浏览更多</h3>
                                    <span>热门</span>
                                </li>
                                </a>
                                </li>
                                `).appendTo(".ultwo")
                    } else {
                        $(`
                        <li><a href="list.html ">
                                            <img src="${childs[l].img}" alt="" width="160px" height="160px">
                                            <h4>${childs[l].title}</h4>
                                            <p style="font-size: 10px; color:#757575;margin-bottom:12px; ">${childs[l].desc}</p>
                                            <span style="color: #ff6709 ;font-size:16px">${childs[l].price}元起</span>
                                            ${childs[l].del == 0 ? "" : "<del>" + childs[l].del + "元</del>"}

                                        </a></li>
                        `).appendTo(".ultwo")
                    }
                }
    }

  

            $(".title-right").on("mouseenter", "ul li", function () {
                $(this).addClass("active ").siblings().removeClass("active ");  
                // 遍历鼠标经过的父节点，父节点下面对应要隐藏的ul
                $(this).closest(".home-brick-box").find(".home-brick-box-row .row-right>ul").addClass("hid").eq($(this).index()).removeClass("hid")
            })

            
        },
        error: function (error) {
            laert("错误"+error)
        }
    })

})