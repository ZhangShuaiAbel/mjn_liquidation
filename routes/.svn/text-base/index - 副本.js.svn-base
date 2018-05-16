var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');





router.get('/index', function(req, res, next) {  
  NoLogin(req,res,next,'/test','{}','index')
});




router.get('/home', function(req, res,next) {
  NoLogin(req,res,next,'/test','{}','home')
  //res.render('home');
     
 });
router.get('/logout', function (req,res,next){ 
  //删除Cookie  
  res.clearCookie('user');
  res.redirect('index'); 
}) 

router.get('/login', function (req,res,next){   
  res.render('login')

})
router.post('/login', function (req,res,next){   
  var login_name = req.body.login_name;
  var login_password = req.body.login_password;
  var params = querystring.stringify({
      mobile:login_name,
      password:login_password
  });

  login(req,res,next,"/auth/login",params);
    
    
})

router.get('/test', function (req,res,next){
    NoLogin(req,res,next,'/test','{}')
})



/*登录时候判断*/
function login(req,res,next,uri,params){
  requestCookie(req,res,next,uri,params, true);
}
/*非登录时候判断*/
function NoLogin(req,res,next,uri,params,render){
  requestCookie(req,res,next,uri,params, false,render);
}


function requestCookie(req,res,next,uri,params,isLogin,render){
  console.log(12312312)
    var cookie=req.cookies.token; 
    var options = {
      host: '192.168.88.196',
      port: "8080",
      path: uri,
      method: 'post',
      headers: {
       //使用这个可以接收参数
        'Content-Type':'application/x-www-form-urlencoded',
        'cookie':'token='+cookie,
        'Content-Length':params.length,
    //使用这个无法接收参数
        /*'Content-Type':'multipart/form-data;',
        'Connection':'keep-alive'*/
      }};

    //使用http 发送
    var req = http.request(options, function(requestData) {
      //console.log('STATUS: ' + requestData.statuode);
      //console.log('HEADERS: ' + JSON.stringify(requestData.headers));
      //设置字符编码
      requestData.setEncoding('utf8');
      //返回数据流
      var _data="";
      //数据
      requestData.on('data', function (chunk) {
        _data+=chunk;
      });
      // 结束回调
      requestData.on('end', function(){
        
        var obj=JSON.parse(_data);
        console.log(obj)
        if(isLogin){
          if (obj.code=="0") {
            res.write(_data);
          }else{
            //res.cookie("token", obj.res.token , {maxAge: 1800000 , httpOnly: true});
            res.write(_data);
          };
          res.end();
        }else{
          //res.write(obj.code)
          //console.log(obj.code);
          if (obj.code=="D1003") {
              //console.log(res.getHeader('ajax'));
              if(res.getHeader('ajax')){
                //ajax操作的时候返回code   前端跳转。不是ajax的时候node 重定向到login
                console.log("是ajax请求")
                res.write(obj.code) 
              }else{
                console.log("不是ajax请求")
                res.redirect('login');
              }
          }else{
                res.render(render);
          }

          res.end();
        }
      });
      //错误回调
      req.on('error', function(e) {
        //console.log('problem with request: ' + e.message);
      });

    });
    req.write(params);
}



module.exports = router;
