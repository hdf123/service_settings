//引进模块
var http=require("http");
var fs=require("fs");
var ur1=require("url");
//var qu1=require("querystring");
http.createServer(function(req,res){
//	设置跨域
	res.setHeader("Access-Control-Allow-Origin","*");
//	禁止图标
//	if(req.url=="/favicon.icon"){
//		res.end();
//		return;
//	}
	switch(req.url){
		case "/json1" :
		fun("../json/json1.json",req,res);
		break;
		case "/json2" :
		fun("../json/json2.json",req,res)
		break;
		default://以上全不满足
		res.end("加载失败");
		break;
	}
}).listen(6678)
console.log("启动成功")
//封装函数
function fun(tt,req,res){
	fs.readFile(tt,"utf8",function(err,data){
		if(!err){
			res.end(data)
			console.log(data)
		}
	})
}
