$(function () {
    // 顶部导航栏
    $.ajax({
        url: "../data/nav.json",
        success: (success) => {
            //获得json数据的值
            var arr = success.topNav
            // console.log(success);
           //把服务和社区添加社区
            arr.push({ title: "服务" }, { title: "社区" },{ title: "社区" })
          //循环遍历arr
            for (var i = 0; i < arr.length; i++){
                // 把数据渲染到页面中
            let node = $(`
                <li><a href=""> ${arr[i].title}</a>
                `)
                node.appendTo(".navBat-ul");
                
                
                let newdiv = $(`<div class="pop "></div> `).appendTo(node)
                
                let ul = $(`<ul class="w"></ul>`).appendTo(newdiv)
                
                // 下拉菜单的数据
                if (arr[i].childs) {
                    var arr2 = arr[i].childs
                    // console.log(arr2[i]);
                    
                for (var j = 0; j < arr2.length; j++){
                    let node2 = $(`
                        <li>
                            <img src="${arr2[j].img}" width="160px"
                            height="110px">
                            <h4>${arr2[j].a}</h4>
                            <p>${arr2[j].i}</p>
                            <i></i>
                        </li>   
                        `)
                    node2.appendTo(ul)
                        
                    }
           }
            };
        },

        error: (error) => {
            console.log("错误"+error);
        }
    })
})

$(function () {
     // 左列表
     $.ajax({
        url: '../data/nav.json',
        success: (res) => {
            var leftnav = res.sideNav
            // console.log(leftnav);
            // 循环数据
            for (var i = 0; i < leftnav.length; i++) {
                // console.log(leftnav[i]);
                let node3 = $(`
                <li><a href="" style='color:#424242'>
                <span >${leftnav[i].title}</span>
                <i> > </i>
            </a>
            <div class="slider"></div>
            </li>
                `);
                node3.appendTo('#left-nav')
                let leftChilds = leftnav[i].child
                for (var j = 0; j < leftChilds.length; j++){
                    if (j % 6 == 0) {
                        var rightul = $(`<ul></ul>`)
                        rightul.appendTo(".slider")
                    }
                    let li= $(`<li><a href=""><img src="${leftChilds[j].img}" alt=""><span >${leftChilds[j].title}</span></a>
                        </li>`)
                        li.appendTo(rightul)
                        
                }
                
            }
        },
        error: (error) => {
            alert('错误'+error)
        }
    })
})
//隐藏全部商品列表 显示
$(function () {
    $('.nav-category').hover(function () {
       $(".site-category").fadeIn(0.8) 
    }, function () {
        $(".site-category").fadeOut(0.8) 
    })
})
// 轮播图
