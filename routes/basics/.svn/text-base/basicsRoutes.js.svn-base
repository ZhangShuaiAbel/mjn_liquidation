var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');

/*收款交易查询*/
router.get('/basics', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','basicsManagement/basics');
    //res.render('channelAnalysisManagement/channelAnalysis');
    //res.render('dealManagement/gatheringDeal');
});

/*商品贷*/
router.get('/commodity', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','basicsManagement/commodity');
    //res.render('channelAnalysisManagement/channelAnalysis');
    //res.render('dealManagement/gatheringDeal');
});
/*商品订单*/
router.get('/goodsOrder', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','basicsManagement/goodsOrder');
    //res.render('channelAnalysisManagement/channelAnalysis');
    //res.render('dealManagement/gatheringDeal');
});

// 详情
router.get('/particulars', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','basicsManagement/particulars');
    //res.render('channelAnalysisManagement/channelAnalysis');
    //res.render('dealManagement/gatheringDeal');
});
//商品贷用户订单
router.get('/particulars1', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','basicsManagement/particulars1');
    //res.render('channelAnalysisManagement/channelAnalysis');
    //res.render('dealManagement/gatheringDeal');
});


// 商户订单信息
router.get('/commodity-particulars', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','basicsManagement/commodity-particulars');
    //res.render('channelAnalysisManagement/channelAnalysis');
    //res.render('dealManagement/gatheringDeal');
});

//1.现金贷基础交易列表查询

router.post('/cash/getCashList', function(req, res,next) {
	var beginDate = req.body.beginDate;
	var endDate = req.body.endDate;
	var status = req.body.status;
	var cashId = req.body.cashId;
	var userName = req.body.userName;
	var mobile = req.body.mobile;
	var idCard = req.body.idCard;
	var company = req.body.company;
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var fundChannel = req.body.fundChannel;

	var params = querystring.stringify({
	      beginDate:beginDate,
	      endDate:endDate,
	      status:status,
	      cashId:cashId,
	      userName:userName,
	      mobile:mobile,
	      idCard:idCard,
	      company:company,
	      pageNum:pageNum,
	      pageSize:pageSize,
	      fundChannel:fundChannel,
	});
	loginRoutes.NoLogin(req,res,next,'/cash/getCashList',params,'render')
});
//3.成功率分布接口
router.post('/withholdChannelStatistics/findLine', function(req, res,next) {
	var start = req.body.start;
	var end = req.body.end;

	var params = querystring.stringify({
	      start:start,
	      end:end,
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/findLine',params,'render')
});
//3.成功率分布接口
router.post('/withholdChannelStatistics/findDateJson', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var start = req.body.start;
	var end = req.body.end;
    var channels = req.body.channels;
    var type = req.body.type;
	var params = querystring.stringify({
	      start:start,
	      end:end,
	      pageNum:pageNum,
	      pageSize:pageSize,
	      channels:channels,
	      type:type
	});
	loginRoutes.NoLogin(req,res,next,'/withholdChannelStatistics/findDateJson',params,'render')
});

router.post('/transactionManager/orderDetail', function(req, res,next) {
	var appid = req.body.appid;
	var dealId = req.body.dealId;
	var params = querystring.stringify({
	      appid:appid,
	      dealId:dealId,
	});
	loginRoutes.NoLogin(req,res,next,'/transactionManager/orderDetail',params,'render')
});

router.post('/transactionManager/productOrderDetail', function(req, res,next) {
	var appid = req.body.appid;
	var orderId = req.body.orderId;
	var params = querystring.stringify({
	      appid:appid,
	      orderId:orderId,
	});
	loginRoutes.NoLogin(req,res,next,'/transactionManager/productOrderDetail',params,'render')
});

router.post('/mbTransaction/toPublicDetail', function(req, res,next) {
	var id = req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/toPublicDetail',params,'render')
});


router.post('/mbTransaction/toDetail', function(req, res,next) {
    var orderId = req.body.orderId;
    var params = querystring.stringify({
        orderId:orderId,
    });
    loginRoutes.NoLogin(req,res,next,'/mbTransaction/toDetail',params,'render')
});

/*商品贷-商户订单信息*/
router.post('/bill/getMerBillList', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var payStatus = req.body.payStatus;
    var beginDate = req.body.beginDate;
    var endDate = req.body.endDate;
    var rebateNo = req.body.rebateNo;
    var merName = req.body.merName;
    var mobile = req.body.mobile;
    var merNo = req.body.merNo;
    var company = req.body.company;
    var fundChannel = req.body.fundChannel;
    var params = querystring.stringify({
    	payStatus:payStatus,
        rebateNo:rebateNo,
        merName:merName,
        mobile:mobile,
        merNo:merNo,
		company:company,
        fundChannel:fundChannel,
        beginDate:beginDate,
        endDate:endDate,
        pageNum:pageNum,
        pageSize:pageSize,
        
        
    });
    loginRoutes.NoLogin(req,res,next,'/bill/getMerBillList',params,'render')
});




/*交易管理-商品贷用户订单信息*/
router.post('/transactionManager/productOrders', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    var status = req.body.status;
    var orderId = req.body.orderId;
    var name = req.body.name;
    var phone = req.body.phone;
    var shid = req.body.shid;
    var enterpriseType = req.body.enterpriseType;
    var channelType = req.body.channelType;
    var params = querystring.stringify({
    	status:status,
        orderId:orderId,
        name:name,
        phone:phone,
        shid:shid,
		enterpriseType:enterpriseType,
        channelType:channelType,
        startTime:startTime,
        endTime:endTime,
        pageNum:pageNum,
        pageSize:pageSize,
        
        
    });
    loginRoutes.NoLogin(req,res,next,'/transactionManager/productOrders',params,'render')
});


router.post('/bill/getMerBillDetail', function(req, res,next) {
    var bid = req.body.bid;
    var params = querystring.stringify({
        bid:bid,
    });
    loginRoutes.NoLogin(req,res,next,'/bill/getMerBillDetail',params,'render')
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
module.exports = router;