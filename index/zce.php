<?php
header("Content-type:text/html;charset=utf-8"); //头部信息 设置编码格式为utf8
// 返回到前端的数据
$responseDate = array("code" => 0, "message" => "");
// post接收数据 
$ursrname = $_POST['username'];
$password = $_POST['password'];
$repassword = $_POST['repassword'];
// 判断用户名和密码和 两次密码一致性
if (!$ursrname) {
    $responseDate['code'] = 1;
    $responseDate['message'] = "用户名不能为空";
    echo json_encode($responseDate);
    exit; //终止下面代码执行
};
if (!$password) {
    $responseDate['code'] = 2;
    $responseDate['message'] = "密码为空";
    echo json_encode($responseDate);
    exit;
};
if ($password !== $repassword) {
    $responseDate['code'] = 3;
    $responseDate["message"] = "两次密码不一致";
    echo json_encode($responseDate);
    exit;
}

// 1连接数据库
$link = mysqli_connect("localhost", 'root', 'root');
// 2数据连接测试
if (!$link) {
    $responseDate['code'] = 4;
    $responseDate["message"] = "连接失败 ";
    echo json_encode($responseDate);
    exit;
}
// 3字符集
mysqli_set_charset($link, "utf8");
// 4要查询的数据库名
mysqli_select_db($link, "student");
// 5检查有没有注册过 进行SQL操作
$sql = "select * from user where name = '{$ursrname}' ";
//  发送sql
$res = mysqli_query($link, $sql);
// 处理结果
$row = mysqli_fetch_assoc($res);
// 如果处理结果为假 说明用户名不重复 可以注册
if (!$row) {
    // 准备SQL语句
    $sql2 = " insert into user(name,password) value('{$ursrname}','{$password}') ";
    // 发送SQL2
    $res2 = mysqli_query($link, $sql2);
    // 判断有没有发送成功
    if ($res2) {

        $responseDate["message"] = "注册成功 ";
        echo json_encode($responseDate);
    } else {
        $responseDate['code'] = 5;
        $responseDate["message"] = "注册失败 ";
        echo json_encode($responseDate);
        exit;
    }
} else {
    $responseDate['code'] = 6;
    $responseDate["message"] = "用户名重复 ";
    echo json_encode($responseDate);
    exit;
}
// 关闭数据库
mysqli_close($link);
