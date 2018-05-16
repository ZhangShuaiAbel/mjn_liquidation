var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');


/*扣款通道管理*/
router.get('/aisle', function(req, res,next) {
    loginRoutes.NoLogin(req,res,next,'/test','{aisle}','withholdManagement/aisle');
});
/*扣款通道查询列表接口*/
router.post('/withholdChannel/jsonWit', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var name = req.body.name;
	var enterpriseId = req.body.enterpriseId;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      name:name,
	      enterpriseId:enterpriseId,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannel/jsonWit',params,'render')
});
/*保存扣款通道接口*/
router.post('/withholdChannel/saveWit', function(req, res,next) {
	var channelId = req.body.channelId;
	var mode = req.body.mode;
	var auth = req.body.auth;
	var frequency = req.body.frequency;
	var orders = req.body.orders;
	var params = querystring.stringify({
	      channelId:channelId,
	      mode:mode,
	      auth:auth,
	      frequency:frequency,
	      orders:orders,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannel/saveWit',params,'render')
});

/*更新扣款通道接口*/
router.post('/withholdChannel/updateWit', function(req, res,next) {
	var id = req.body.id;
	var orders = req.body.orders;
	var mode = req.body.mode;
	var frequency = req.body.frequency;
	var channelId = req.body.channelId;
	var auth = req.body.auth;
	var params = querystring.stringify({
	      id:id,
	      orders:orders,
	      mode:mode,
	      auth:auth,
	      channelId:channelId,
	      frequency:frequency,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannel/updateWit',params,'render')
});

/*按ID查询扣款通道接口*/
router.post('/withholdChannel/oneWit', function(req, res,next) {
	var id = req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannel/oneWit',params,'render')
});
/*变更扣款通道状态接口*/
router.post('/withholdChannel/updateStatus', function(req, res,next) {
	var id = req.body.id;
	var status = req.body.status;
	var params = querystring.stringify({
	      id:id,
	      status:status,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannel/updateStatus',params,'render')
});
/*查询支持扣款的支付渠道接口*/
router.post('/withholdChannel/jsonPay', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/withholdChannel/jsonPay','{}','render')
});

/*保存外部扣款通道接口*/
router.post('/externalWithhold/saveExt', function(req, res,next) {
	var name = req.body.name;
	var failCount = req.body.failCount;
	var params = querystring.stringify({
	      name:name,
	      failCount:failCount,
	});
	loginRoutes.NoLogin(req,res,next,'/externalWithhold/saveExt',params,'render')
});
/*更新外部扣款通道接口*/
router.post('/externalWithhold/updateExt', function(req, res,next) {
	var id = req.body.id;
	var name = req.body.name;
	var failCount = req.body.failCount;
	var params = querystring.stringify({
	      id:id,
	      name:name,
	      failCount:failCount,
	});
	loginRoutes.NoLogin(req,res,next,'/externalWithhold/updateExt',params,'render')
});
/*外部扣款查询列表接口*/
router.post('/externalWithhold/jsonExt', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var name = req.body.name;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      name:name,
	});
	loginRoutes.NoLogin(req,res,next,'/externalWithhold/jsonExt',params,'render')
});
/*按ID查询外部扣款接口*/
router.post('/externalWithhold/oneExt', function(req, res,next) {
	var id = req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/externalWithhold/oneExt',params,'render')
});

/*切换启用，禁用接口*/
router.post('/externalWithhold/updateStatus', function(req, res,next) {
	var id = req.body.id;
	var status = req.body.status;
	var params = querystring.stringify({
	      id:id,
	      status:status,
	});
	loginRoutes.NoLogin(req,res,next,'/externalWithhold/updateStatus',params,'render')
});

/*外部扣款管理*/
router.get('/external', function(req, res ,next) {
       loginRoutes.NoLogin(req,res,next,'/test','{external}','withholdManagement/external');

});

module.exports = router;