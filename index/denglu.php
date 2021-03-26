<?php
header("Content-type:text/html;charset=utf-8"); //头部信息 设置编码格式为utf8 
// 返回到前端的数据
$responseDate = array("code" => 0, "message" => "");
// 取得取得传来的信息
$name = $_POST['username'];
$password = $_POST['password'];
// 判断有没有为空
if (!$name) {
    $responseDate['code'] = 1;
    $responseDate["message"] = "账号不能为空";
    echo json_encode($responseDate);
    exit;
};
if (!$password) {
    $responseDate["code"] = 2;
    $responseDate["message"] = "密码不能为空";
    echo json_encode($responseDate);
    exit;
}
// 连接数据库
$link = mysqli_connect("localhost", "root", "root");
// 判断有没有连接成功
if (!$link) {
    $responseDate['code'] = 3;
    $responseDate['message'] = "数据库连接失败";
    echo json_encode($responseDate);
    exit;
};
// 3设置编码格式
mysqli_set_charset($link, "utf8");
// 选择数据库
mysqli_select_db($link, "student");
// 准备数据
$sql = "select * from user where name ='{$name}' and password ='{$password}' ";
// 发送数据
$res = mysqli_query($link, $sql);
$row = mysqli_fetch_array($res);
// 判断发送成功没有
if ($row) {
    $responseDate['message'] = "登录成功";
    echo json_encode($responseDate);
} else {
    $responseDate['code'] = 4;
    $responseDate['message'] = "账号或密码错误";
    echo json_encode($responseDate);
    exit;
};
// 关闭数据库
mysqli_close($link);
