// 内容区域
$(function () {
    $.ajax({
        url: "../data/data.json",
        success: function (success) {
            // alert("加载成功")
            // 第一部分
            var dataArr = success[0];
             var rowleft=$(`
                <div class="sj-row-left brick-item">
                   
                </div>
            `).appendTo(".sj-row");
			$(' <img src="${dataArr.img}">').appendTo(row-left.find(".sj-row-left"))
            var childsArr = dataArr.childs;
            // alert(childsArr)
            for (var i = 0; i < childsArr.length; i++) {
                $(`
                            <li><a href="list.html">
                            <img src="${childsArr[i].img}" alt="" width="160px" height="160px">
                            <h4>${childsArr[i].title}</h4>
                            <p style="font-size: 10px; color:#757575;margin-bottom:12px; ">${childsArr[i].desc}</p>
                            <span style="color: #ff6709 ;font-size:16px">${childsArr[i].price}</span>
                            ${childsArr[i].del == 0 ? "" : "<del>" + childsArr[i].del + "</del>" + "元"}
                            </a></li>
                        `).appendTo(".row-right-ul")
            };
            // 第二部分
            var arr = success
            for (var j = 1; j < arr.length; j++) {
                var node = $(`
                <div class="ggt w" style="margin: 30px auto 22px auto;">
            <a href="list.html">
                <img src="${arr[j].topImg}" alt="">
            </a>
        </div>
                <div class="home-brick-box w">
            <div class=" w title">
                <h2 style="font-weight: normal;">${arr[j].title}</h2>
                <div class="title-right">
                    <ul>
                        <li><a href="list.html" class="active">热门</a></li>
                        <li><a href="list.html">${arr[j].subTitle}</a></li>
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
                    <ul class="ultwo "style="display:none;"> 
                    </ul>
                    </div>
                </div>
            </div>
        </div>
                `).appendTo(".content")
            
            // 右边的热门小lihotChilds
            var hotChild = arr[j].hotChilds;
                for (var k = 1; k < hotChild.length; k++) {
                    if (k!== 8) {
                    $(`
                                <li>
                                    <a href="list.html">
                                        <img src="${hotChild[k].img}" alt="" width="160px" height="160px">
                                        <h4>${hotChild[k].title}</h4>
                                        <p style="font-size: 10px; color:#757575;margin-bottom:12px; ">${hotChild[k].desc}</p>
                                        <span style="color: #ff6709 ;font-size:16px">${hotChild[k].price}元起</span>
                                        ${hotChild[k].del == 0 ? "" : "<del>" + hotChild[k].del + "元</del>"}
                                    </a>
                                </li>
                `).appendTo(".list1")
                    } else {
                        $(`<li style="background:none;padding: 0; box-shadow:none;transform:none;">
                                <a href="list.html">
                                    <div class="home-brick-box-last-li">
                                        <ul class="brick-item">
                                            <li>
                                                <img src="${hotChild[k].img}" alt="" width="80px"
                                                height="80px">
                                                <p style="margin: 10px 110px 5px 30px;">
                                                ${hotChild[k].title}
                                                </p>
                                                <span style="margin: 0 110px 0 30px;color:#ff6709">${hotChild[k].price}</span>
                                            </li>
                                            <li>
                                                <h3>浏览更多</h3>
                                                <span>热门</span>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                                `).appendTo(".list1")
                }
                
                };
                var childs = arr[j].childs;
                for (var l = 0; l < childs.length; l++) {
                    if (l !== 8) {
                        $(`
                        <li><a href="list.html">
                                            <img src="${hotChild[l].img}" alt="" width="160px" height="160px">
                                            <h4>${hotChild[l].title}</h4>
                                            <p style="font-size: 10px; color:#757575;margin-bottom:12px; ">${hotChild[l].desc}</p>
                                            <span style="color: #ff6709 ;font-size:16px">${hotChild[l].price}元起</span>
                                            ${hotChild[l].del == 0 ? "" : "<del>" + hotChild[l].del + "元</del>"}
                                        </a></li>
                        `).appendTo(".ultwo")
                    } else {
                        $(`<li style="background:none;padding: 0; box-shadow:none;transform:none;"><a href="list.html">
                                <div class="home-brick-box-last-li">
                                    <ul class="brick-item">
                                        <li>
                                            <img src="${hotChild[l].img}" alt="" width="80px"
                                                height="80px">
                                            <p style="margin: 10px 110px 5px 30px;">
                                            ${hotChild[l].title}
                                            </p>
                                            <span style="margin: 0 110px 0 30px;color:#ff6709">${hotChild[l].price}</span>
                                        </li>
                                        <li>
                                            <h3>浏览更多</h3>
                                            <span>热门</span>
                                        </li>`).appendTo(".ultwo")
                    }
                }
        }
      
        },
        error:function (error) {
            alert(error+"错误")
        }
    })
})