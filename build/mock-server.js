var express = require("express");
var mock = require("express-mockjs");
var path = require("path");
var devIp = require('dev-ip'); //用来获取本机ip地址

let app = express(); //实例化express
var host = devIp();

app.use("/test.action", function(req, res) {
    res.send("hello world");
});
app.use('/', mock(path.join(process.cwd(), '/mocks')))


/**
 * 监听8090端口
 */
app.listen(8090, function () {
    console.log('listening at http://'+host+':'+ 8090);
});
