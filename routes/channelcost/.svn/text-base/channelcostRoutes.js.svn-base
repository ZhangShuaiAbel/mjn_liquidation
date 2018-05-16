var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');

/*收款交易查询*/
router.get('/channelcost', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','channelcostManagement/channelcost');
    //res.render('channelcostManagement/channelcost');
    //res.render('dealManagement/gatheringDeal');
});




//1.推广渠道费用列表接口
router.post('/extensionChannelCost/jsonExtCost', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var channelId = req.body.channelId;
	var beginDate = req.body.beginDate;
	var endDate = req.body.endDate;
	var productId = req.body.productId;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      channelId:channelId,
	      beginDate:beginDate,
	      endDate:endDate,
	      productId:productId,
	});
	loginRoutes.NoLogin(req,res,next,'/extensionChannelCost/jsonExtCost',params,'render')
});

//2保存.推广渠道费用接口
router.post('/extensionChannelCost/saveExtCost', function(req, res,next) {
	var amount = req.body.amount;
	var channelId = req.body.channelId;
	var beginDate = req.body.beginDate;
	var endDate = req.body.endDate;
	var productId = req.body.productId;
	var params = querystring.stringify({
	      amount:amount,
	      channelId:channelId,
	      beginDate:beginDate,
	      endDate:endDate,
	      productId:productId,
	});
	loginRoutes.NoLogin(req,res,next,'/extensionChannelCost/saveExtCost',params,'render')
});

//3. 推广渠道列表接口
router.post('/extensionChannelCost/jsonExt', function(req, res,next) {
	//console.log(1111111111111111)
	loginRoutes.NoLogin(req,res,next,'/extensionChannelCost/jsonExt','{}','render');
});


module.exports = router;