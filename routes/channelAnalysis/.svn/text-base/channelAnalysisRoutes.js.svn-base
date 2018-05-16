var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');

/*收款交易查询*/
router.get('/channelAnalysis', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','channelAnalysisManagement/channelAnalysis');
    //res.render('channelAnalysisManagement/channelAnalysis');
    //res.render('dealManagement/gatheringDeal');
});

/*收款统计*/
router.get('/shoukuan', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','channelAnalysisManagement/shoukuan');
});
/*收款统计详情*/
router.get('/detail', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','channelAnalysisManagement/detail');
});
//1.查询代扣渠道接口
router.post('/withholdChannelStatistics/jsonCfg', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/jsonCfg','{}','render')
});

//查询当日扣款成功率接口
router.post('/withholdChannelStatistics/findSuccessRate', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/findSuccessRate','{}','render')
});

//2.失败原因分布接口
router.post('/withholdChannelStatistics/failJson', function(req, res,next) {
	var start = req.body.start;
	var end = req.body.end;
	var appIdType = req.body.appIdType;
	var withholdApp = req.body.withholdApp;
	var channels = req.body.channels;

	var params = querystring.stringify({
	      start:start,
	      end:end,
	      appIdType:appIdType,
	      withholdApp:withholdApp,
	      channels:channels,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/failJson',params,'render')
});
//3.成功率分布接口
router.post('/withholdChannelStatistics/findLine', function(req, res,next) {
	var start = req.body.start;
	var end = req.body.end;
	var appIdType = req.body.appIdType;
	var withholdApp = req.body.withholdApp;
	var channels = req.body.channels;

	var params = querystring.stringify({
	      start:start,
	      end:end,
	      appIdType:appIdType,
	      withholdApp:withholdApp,
	      channels:channels,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/findLine',params,'render')
});
//4.数据统计接口
router.post('/withholdChannelStatistics/findDateJson', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var start = req.body.start;
	var end = req.body.end;
    var type = req.body.type;
	var params = querystring.stringify({
	      start:start,
	      end:end,
	      pageNum:pageNum,
	      pageSize:pageSize,
	      type:type
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/findDateJson',params,'render')
});

//4.下载
router.get('/withholdChannelStatistics/download', function(req, res,next) {
	var cookie=req.cookies.token
	res.send(cookie);
	res.end();
	// var start = req.body.start;
	// var end = req.body.end;
 //    var channels = req.body.channels;
 //    var type = req.body.type;
	// var params = querystring.stringify({
	//       start:start,
	//       end:end,
	//       channels:channels,
	//       type:type
	// });
	// loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/download',params,'render')
});

//1.扣款金额统计接口
router.post('/withholdChannelStatistics/findCurrentAmount', function(req, res,next) {
	var dateTime = req.body.dateTime;
	var params = querystring.stringify({
	      dateTime:dateTime,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/findCurrentAmount',params,'render')
});
//1.扣款金额统计明细接口
router.post('/withholdChannelStatistics/findDetailAmount', function(req, res,next) {
	var dateTime = req.body.dateTime;
	var payType = req.body.payType;
	var params = querystring.stringify({
		  dateTime:dateTime,
		  payType:payType
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/findDetailAmount',params,'render')
});
module.exports = router;