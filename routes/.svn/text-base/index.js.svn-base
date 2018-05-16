var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('./loginRoutes');





router.get('/index', function(req, res, next) {  
  loginRoutes.NoLogin(req,res,next,'/test','{index}','index')
});

router.get('/', function(req, res, next) {  
  loginRoutes.NoLogin(req,res,next,'/test','{/}','home')
});





router.get('/home', function(req, res,next) {
  loginRoutes.NoLogin(req,res,next,'/test','{home}','home')
  //res.render('home');
 });
//退出登录
router.post('/logout', function (req,res,next){ 
  var mobile=req.cookies.mobile;
  var params = querystring.stringify({
      mobile:mobile,
  });
  loginRoutes.NoLogin(req,res,next,'/auth/logout',params,'')
}) 

router.get('/login', function (req,res,next){   
  res.render('login')
})

router.get('/success', function (req,res,next){   
  res.render('success')
})


router.get('/reg', function (req,res,next){
  res.render('reg')
})
router.get('/regs', function (req,res,next){
  res.render('regs')
})

router.post('/login', function (req,res,next){ 
 var login_name = req.body.login_name;  
  var login_password = req.body.login_password;
  var smsCode = req.body.smsCode;
  var params = querystring.stringify({
      mobile:login_name,
      password:login_password,
      smsCode:smsCode
  });

  loginRoutes.login(req,res,next,"/auth/login",params);
    
    
})

router.get('/test', function (req,res,next){
    loginRoutes.NoLogin(req,res,next,'/test','{}')
})

//找回密码
router.post('/retrievepassword', function (req,res,next){
 var mobile = req.body.mobile;  
  var newPassword = req.body.newPassword;
  var smscode = req.body.smscode;
  var params = querystring.stringify({
      mobile:mobile,
      newPassword:newPassword,
      smscode:smscode,
  });
  loginRoutes.NoLogin(req,res,next,"/auth/retrievepassword",params,"render");
})
//获取验证码
router.post('/smscode', function (req,res,next){ 
 var mobile = req.body.mobile;  
  var params = querystring.stringify({
      mobile:mobile,
  });
  loginRoutes.NoLogin(req,res,next,"/auth/smscode",params,"render");
})

//登录获取验证码
router.post('/loginCode', function (req,res,next){ 
   var mobile = req.body.mobile;  
   var params = querystring.stringify({
       mobile:mobile,
   });
   loginRoutes.NoLogin(req,res,next,"/auth/loginSmsCode",params,"render");
 })


//修改密码
router.get('/password', function (req,res,next){
    loginRoutes.NoLogin(req,res,next,'/modifypassword','{}',"password")
})

//请求  修改密码
router.post('/modifypassword', function (req,res,next){ 
 var oldPassword = req.body.oldPassword;  
 var newPassword = req.body.newPassword;  
  var params = querystring.stringify({
      oldPassword:oldPassword,
      newPassword:newPassword,

  });
  loginRoutes.NoLogin(req,res,next,"/modifypassword",params,"render");
})



module.exports = router;
