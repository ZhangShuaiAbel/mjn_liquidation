var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var https = require('https');
var querystring = require('querystring');
var request = require('request');
var sd = require('silly-datetime');
var config = require('./config');




/*登录时候判断*/
function login(req,res,next,uri,params){
  requestCookie(req,res,next,uri,params, true);
}

/*非登录时候判断*/
function NoLogin(req,res,next,uri,params,render){
  requestCookie(req,res,next,uri,params, false,render,{});
}
/*非登录时候判断*/
function NoLogin(req,res,next,uri,params,render,pageData){
    requestCookie(req,res,next,uri,params, false,render,pageData);
}

function requestCookie(req,res,next,uri,params,isLogin,render,pageData){
    console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm')+"==request_api : http://api.lqd.91naxia.com:18087/liquidation"+uri+"?"+params);
    var cookie=req.cookies.token;
    var ajax=req.cookies.ajax;
    console.log("1111111111111111111111",config);
    var options = {
      host: config.config,
      port: config.port,
      path: '/liquidation'+uri,
      method: 'post',
      headers: {
       //使用这个可以接收参数
        'Content-Type':'application/x-www-form-urlencoded',
        'cookie':'token='+cookie,
        'Content-Length':params.length,
    //使用这个无法接收参数
        //'Content-Type':'multipart/form-data;',
        //'Connection':'keep-alive'
      }};
    //使用http 发送

    var req = http.request(options, function(requestData) {

      //设置字符编码
      requestData.setEncoding('utf8');
      //返回数据流
      var _data="";
      //数据
      requestData.on('data', function (chunk) {
        _data+=chunk;
        console.log("chunk");
        console.log(chunk);
      });
      // 结束回调
      requestData.on('end', function(){
        if(params=="{/}"){
		    }else{
		    			var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm');
		    			/*var getFullYear = now1.getFullYear();
							var getMonth = now1.getMonth() + 1;
							var getDate = now1.getDate();
							var DateTime1 = getFullYear + "-" + getMonth + "-" + getDate;*/
		    		  console.log(time+"==cookie=="+cookie);
		    			console.log(time+"==request_api : "+_data)
		    	    console.log(time+"==request_api : http://192.168.10.207:8080/liquidation"+uri+"?"+params);
		    }
        /*if(req.getHeader("ajax")){
                console.log(111)
        }else{
          console.log(res)
        }*/
        
        var obj=JSON.parse(_data);
        if(isLogin){
          if (obj.code=="0001") {
            res.send(_data);
          }else if (obj.code=="0000"){
            res.cookie("token", obj.res.token , {maxAge: 86400000 , httpOnly: true});
            res.send(_data);
          };
          res.end();
        }else{
          if (obj.code=="D1003") {
              //res.send(obj.code)
              //res.redirect('/login');
              if(ajax=="ajax"){
                //ajax操作的时候返回code   前端跳转。不是ajax的时候node 重定向到login
                res.send(obj.code) 
              }else{
                res.redirect('/login');
                
              }

          }
          else{
                res.cookie("token", cookie , {maxAge: 86400000 , httpOnly: true});
                //参数render代表  post 不跳转 
                if (render=="render") {
                    res.send(obj);
                }else{
                    res.render(render,pageData);
                };
               //console.log("objobjobjobjobj"+obj.code)
                

          }
            res.end();
          
        }
      });
      //错误回调
      req.on('error', function(e) {
      });

    });
    req.write(params);

    //console.log("request_api : http://192.168.10.232:8080/liquidation");
   
}
          
 module.exports.login  =  login; 
 module.exports.NoLogin  =  NoLogin; 

