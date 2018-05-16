var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');

/*支付通道管理*/
router.get('/PayAisle', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/test','{PayAisle}','payManagement/PayAisle');
	//res.render('payManagement/PayAisle');
});

/*收银台管理*/
router.get('/checkstand', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/test','{checkstand}','payManagement/checkstand');
    //res.render('payManagement/checkstand');
});

/*产品管理*/
router.get('/product', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/test','{product}','payManagement/product')
    //res.render('payManagement/product');
});
//请求 产品管理查询列表
router.post('/product/jsonProNew', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/product/jsonProNew','{}','render')
});
//请求 产品管理查询列表
router.post('/product/jsonPro', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/product/jsonPro','{}','render')
});
//请求 获取七牛token
router.post('/product/getUploadToken', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/paymentChannel/getUploadToken',"{}",'render')
});


//请求 产品管理按ID查询
router.post('/product/onePro', function(req, res,next) {
	var productId = req.body.productId;
	var params = querystring.stringify({
	      productId:productId,
	});
	loginRoutes.NoLogin(req,res,next,'/product/onePro',params,'render')
});

//请求 查询企业下拉列表
router.post('/product/jsonEnt', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/product/jsonEnt','{}','render')
});

//请求 添加企业
router.post('/product/saveEnt', function(req, res,next) {
	var enterpriseName = req.body.enterpriseName;
	var enterpriseNo = req.body.enterpriseNo;
	var params = querystring.stringify({
	      enterpriseName:enterpriseName,
	      enterpriseNo:enterpriseNo,
	});
	loginRoutes.NoLogin(req,res,next,'/product/saveEnt',params,'render')
});

//请求 添加产品
router.post('/product/savePro', function(req, res,next) {
	var productName = req.body.productName;
	var enterpriseId = req.body.enterpriseId;
	var id = req.body.id;
	var params = querystring.stringify({
	      productName:productName,
	      enterpriseId:enterpriseId,
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/product/savePro',params,'render')
});

//请求 更新产品
router.post('/product/updatePro', function(req, res,next) {
	var productName = req.body.productName;
	var enterpriseId = req.body.enterpriseId;
	var id = req.body.id;
	var params = querystring.stringify({
	      productName:productName,
	      enterpriseId:enterpriseId,
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/product/updatePro',params,'render')
});
//-----------------支付通道----------------------
//请求 支付通道查询列表接口
router.post('/paymentChannel/jsonPay', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var name = req.body.name;
	var enterpriseId = req.body.enterpriseId;
	var platformId = req.body.platformId;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      name:name,
	      enterpriseId:enterpriseId,
	      platformId:platformId,
	});
	loginRoutes.NoLogin(req,res,next,'/paymentChannel/jsonPay',params,'render')
});
//请求 保存支付通道接口
router.post('/paymentChannel/savePay', function(req, res,next) {
	var name = req.body.name;
	var logo = req.body.logo;
	var describes = req.body.describes;
	var enterpriseId = req.body.enterpriseId;
	var platformId = req.body.platformId;
	var url = req.body.url;
	var showSort = req.body.showSort;
	var params = querystring.stringify({
	      name:name,
	      logo:logo,
	      describes:describes,
	      enterpriseId:enterpriseId,
	      platformId:platformId,
	      url:url,
	      showSort:showSort,
	});
	loginRoutes.NoLogin(req,res,next,'/paymentChannel/savePay',params,'render')
});
//请求 更新支付通道接口
router.post('/paymentChannel/updatePay', function(req, res,next) {
	var name = req.body.name;
	var id = req.body.id;
	var logo = req.body.logo;
	var describes = req.body.describes;
	var enterpriseId = req.body.enterpriseId;
	var platformId = req.body.platformId;
	var showSort = req.body.showSort;
	var url = req.body.url;
	var params = querystring.stringify({
	      name:name,
	      id:id,
	      logo:logo,
	      describes:describes,
	      enterpriseId:enterpriseId,
	      platformId:platformId,
	      url:url,
	      showSort:showSort,
	});
	loginRoutes.NoLogin(req,res,next,'/paymentChannel/updatePay',params,'render')
});
//请求 按ID查询支付渠道接口
router.post('/paymentChannel/onePay', function(req, res,next) {
	var paymentChannelId = req.body.paymentChannelId;
	var params = querystring.stringify({
	      paymentChannelId:paymentChannelId,
	});
	loginRoutes.NoLogin(req,res,next,'/paymentChannel/onePay',params,'render')
});

//请求 切换是否禁用 接口
router.post('/paymentChannel/updateStatus', function(req, res,next) {
	var paymentChannelId = req.body.paymentChannelId;
	var status = req.body.status;
	var params = querystring.stringify({
	      paymentChannelId:paymentChannelId,
	      status:status,
	});
	loginRoutes.NoLogin(req,res,next,'/paymentChannel/updateStatus',params,'render')
});


//请求 .获取使用平台接口
router.post('/paymentChannel/jsonPla', function(req, res,next) {
	var tab = req.body.tab;
	var params = querystring.stringify({
	      tab:tab,
	});
	loginRoutes.NoLogin(req,res,next,'/paymentChannel/jsonPla',params,'render')
});
//-----------------收银台----------------------
//请求 收银台查询列表接口
router.post('/cashier/jsonCas', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var productId = req.body.productId;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      productId:productId,
	});
	loginRoutes.NoLogin(req,res,next,'/cashier/jsonCas',params,'render')
});

//请求 保存收银台接口
router.post('/cashier/saveCas', function(req, res,next) {
	var channelId = req.body.channelId;
	var platformId = req.body.platformId;
	var productId = req.body.productId;
	var params = querystring.stringify({
	      channelId:channelId,
	      platformId:platformId,
	      productId:productId,
	});
	loginRoutes.NoLogin(req,res,next,'/cashier/saveCas',params,'render')
});

//请求 更新收银台接口
router.post('/cashier/updateCas', function(req, res,next) {
	var id = req.body.id;
	var channelId = req.body.channelId;
	var platformId = req.body.platformId;
	var productId = req.body.productId;
	var params = querystring.stringify({
	      id:id,
	      channelId:channelId,
	      platformId:platformId,
	      productId:productId,
	});
	loginRoutes.NoLogin(req,res,next,'/cashier/updateCas',params,'render')
});


//请求 按ID查询收银台接口
router.post('/cashier/oneCas', function(req, res,next) {
	var id = req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/cashier/oneCas',params,'render')
});


//请求 按ID查询收银台接口
router.post('/cashier/jsonPay', function(req, res,next) {
	var productId = req.body.productId;
	var platformId = req.body.platformId;
	var params = querystring.stringify({
	      productId:productId,
	      platformId:platformId,
	});
	loginRoutes.NoLogin(req,res,next,'/cashier/jsonPay',params,'render')
});
//4.下载
router.get('/transactionManager/pushOrderDownload', function(req, res,next) {
	var cookie=req.cookies.token;
	var config = require('../config');
	res.send({
		"cookie" : cookie,
		"config" : config,        
	});
	res.end();
	
});
//27产品添加接口
router.post('/payChannel/insertMbProduct', function(req, res,next) {
	var id = req.body.id;
	var enterpriseId = req.body.enterpriseId;
	var productName = req.body.productName;
	var repaymentNotifyUrl = req.body.repaymentNotifyUrl;
	var settleNotifyUrl = req.body.settleNotifyUrl;
	var repaymentRemindNotifyUrl = req.body.repaymentRemindNotifyUrl;
	var overdueRemindNotifyUrl = req.body.overdueRemindNotifyUrl;
	var md5key = req.body.md5key;
	var params = querystring.stringify({
		  id:id,
	      enterpriseId:enterpriseId,
	      productName:productName,
	      repaymentNotifyUrl:repaymentNotifyUrl,
	      settleNotifyUrl:settleNotifyUrl,
	      repaymentRemindNotifyUrl:repaymentRemindNotifyUrl,
	      overdueRemindNotifyUrl:overdueRemindNotifyUrl,
	      md5key:md5key,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/insertMbProduct',params,'render')
});
//27产品修改接口
router.post('/payChannel/updateMbProduct', function(req, res,next) {
	var id = req.body.id;
	var enterpriseId = req.body.enterpriseId;
	var productName = req.body.productName;
	var repaymentNotifyUrl = req.body.repaymentNotifyUrl;
	var settleNotifyUrl = req.body.settleNotifyUrl;
	var repaymentRemindNotifyUrl = req.body.repaymentRemindNotifyUrl;
	var overdueRemindNotifyUrl = req.body.overdueRemindNotifyUrl;
	var md5key = req.body.md5key;
	var params = querystring.stringify({
		  id:id,
	      enterpriseId:enterpriseId,
	      productName:productName,
	      repaymentNotifyUrl:repaymentNotifyUrl,
	      settleNotifyUrl:settleNotifyUrl,
	      repaymentRemindNotifyUrl:repaymentRemindNotifyUrl,
	      overdueRemindNotifyUrl:overdueRemindNotifyUrl,
	      md5key:md5key,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/updateMbProduct',params,'render')
});
module.exports = router;