var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');

/*资金渠道管理*/
router.get('/capitalChannel', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{capitalChannel}','pushManagement/capitalChannel');
});

/*扣款渠道管理*/
router.get('/deductions', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{deductions}','pushManagement/deductions');
});

/*推单流量管理*/
router.get('/pushSingleFlux', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{pushSingleFlux}','pushManagement/pushSingleFlux');
});
/*扣款渠道管理--比例配置*/
router.get('/allocation', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{allocation}','pushManagement/allocation');
});

/*包公生活-回收打款*/
router.get('/recoveryMoney', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{recoveryMoney}','pushManagement/recoveryMoney');
});
/*资金渠道费率配置*/
router.get('/configuration', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{configuration}','pushManagement/configuration');
});
/*钱包会员退款*/
router.get('/membersMoney', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{membersMoney}','pushManagement/membersMoney');
});
/*玖富提现*/
router.get('/withdraw', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{withdraw}','pushManagement/withdraw');
});
/*扣款返回码配置*/
router.get('/codeback', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{codeback}','pushManagement/codeback');
});
/*扣款返回码错误码*/
router.get('/errorcode', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{errorcode}','pushManagement/errorcode');
});
/*钱包服务费---未结算*/
router.get('/walletServiceNoSettlement', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{walletServiceNoSettlement}','pushManagement/walletServiceNoSettlement');
});
/*钱包服务费---已结算*/
router.get('/walletServiceSettlement', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{walletServiceSettlement}','pushManagement/walletServiceSettlement');
});
/*钱包服务费---结算审核*/
router.get('/walletServiceAuditSettlement', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{walletServiceAuditSettlement}','pushManagement/walletServiceAuditSettlement');
});
/*钱包服务费---详情*/
router.get('/walletServiceDetails', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{walletServiceDetails}','pushManagement/walletServiceDetails');
});
//请求 保存推单渠道接口
router.post('/capitalChannel/saveCap', function(req, res,next) {
	var name = req.body.name;
	var quota = req.body.quota;
	var quota = req.body.quota;
	var remarks = req.body.remarks;
	var productId = req.body.productId;
	var status = req.body.status;
	var params = querystring.stringify({
	      name:name,
	      quota:quota,
	      remarks:remarks,
	      productId:productId,
	      status:status,
	});
	loginRoutes.NoLogin(req,res,next,'/capitalChannel/saveCap',params,'render')
});
//请求 更新推单渠道接口
router.post('/capitalChannel/updateCap', function(req, res,next) {
	var name = req.body.name;
	var quota = req.body.quota;
	var remarks = req.body.remarks;
	var productId = req.body.productId;
	var id = req.body.id;
	var status = req.body.status;
	var params = querystring.stringify({
		  id:id,
	      name:name,
	      quota:quota,
	      remarks:remarks,
	      productId:productId,
	      status:status,
	});
	loginRoutes.NoLogin(req,res,next,'/capitalChannel/updateCap',params,'render')
});


//保存或更新渠道配置

router.post('/payChannel/savePayChannel', function(req, res,next) {
	var pid = req.body.pid;
	var name = req.body.name;
	var rate = req.body.rate;
	var fee = req.body.fee;
	var type = req.body.type;
	var bankIds = req.body.bankIds;
	var appids = req.body.appids;
	var params = querystring.stringify({
		  pid:pid,
	      name:name,
	      rate:rate,
	      fee:fee,
	      type:type,
	      bankIds:bankIds,
	      appids:appids,
	});
	//console.log(params)
	loginRoutes.NoLogin(req,res,next,'/payChannel/savePayChannel',params,'render')
});

//请求 查询推单渠道列表接口
router.post('/capitalChannel/jsonCap', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/capitalChannel/jsonCap','{}','render')
});

//扣款渠道列表接口
router.post('/payChannel/getPayChannelList', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/payChannel/getPayChannelList','{}','render')
});

//所有银行卡列表接口

router.post('/payChannel/getSupportBankList', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/payChannel/getSupportBankList','{}','render')
});



//请求 按ID查询推单渠道接口
router.post('/capitalChannel/oneCap', function(req, res,next) {
	var id= req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/capitalChannel/oneCap',params,'render')
});

router.post('/payChannel/getPayChannelInfo', function(req, res,next) {
	var pid= req.body.pid;
	var params = querystring.stringify({
	      pid:pid,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/getPayChannelInfo',params,'render')
});

//请求 查询推单流量列表接口
router.post('/capitalProduct/jsonCap', function(req, res,next) {

	loginRoutes.NoLogin(req,res,next,'/capitalProduct/jsonCap','{}','render')
});
//请求 按ID查询推单流量接口
router.post('/capitalProduct/oneCap', function(req, res,next) {
	var id= req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/capitalProduct/oneCap',params,'render')
});

//请求 按ID查询推单渠道接口
router.post('/capitalProduct/updateCap', function(req, res,next) {
	var capitalProductList= req.body.capitalProductList;
	var params = querystring.stringify({
	      capitalProductList:capitalProductList,
	});
	loginRoutes.NoLogin(req,res,next,'/capitalProduct/updateCap',params,'render')
});

//请求 配置比例列表
router.post('/payChannel/getWithholdConfigList', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/payChannel/getWithholdConfigList','{}','render')
});

//请求 管理配置比例详情 
router.post('/payChannel/getWithholdConfig', function(req, res,next) {
	var appid= req.body.appid;
	var params = querystring.stringify({
	      appid:appid,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/getWithholdConfig',params,'render')
});

//请求 管理配置比例详情    payChannel/updateWithholdFeeFlag
router.post('/payChannel/saveWithholdConfig', function(req, res,next) {
	var data= req.body.data;
	var params = querystring.stringify({
	      data:data,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/saveWithholdConfig',params,'render')
});

//请求 管理配置优先    
router.post('/payChannel/updateWithholdFeeFlag', function(req, res,next) {
	var id= req.body.id;
	var configValue= req.body.configValue;
	var params = querystring.stringify({
	      id:id,
	      configValue:configValue,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/updateWithholdFeeFlag',params,'render')
});

//请求 管理配置优先     查询
router.post('/payChannel/getWithholdFeeFlag', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/payChannel/getWithholdFeeFlag','{}','render')
});

//包公生活 打款账单列表接口
router.post('/lifeBill/json', function(req, res,next) {
	var pageSize= req.body.pageSize;
	var pageNum= req.body.pageNum;
	var start= req.body.start;
	var end= req.body.end;
	var payStatus= req.body.payStatus;
	var phone= req.body.phone;
	var params = querystring.stringify({
	      pageSize:pageSize,
	      pageNum:pageNum,
	      start:start,
	      end:end,
	      payStatus:payStatus,
	      phone:phone,
	});
	loginRoutes.NoLogin(req,res,next,'/lifeBill/json',params,'render')
});
//包公生活 打款账单详情接口
router.post('/lifeBill/detail', function(req, res,next) {
	var id= req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/lifeBill/detail',params,'render')
});
//包公生活 打款账单详情接口
router.post('/lifeBill/audit', function(req, res,next) {
	var id= req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/lifeBill/audit',params,'render')
});
//资金渠道费率列表接口
router.post('/capitalChannel/rateJson', function(req, res,next) {
	var channel = req.body.channel;
	var period = req.body.period;
	var status = req.body.status;
	var periodUnit = req.body.periodUnit;
	var params = querystring.stringify({
		channel:channel,
		period:period,
		status:status,
		periodUnit:periodUnit
	});
	loginRoutes.NoLogin(req,res,next,'/capitalChannel/rateJson',params,'render')
});
//资金渠道费率详情接口
router.post('/capitalChannel/rateDetail', function(req, res,next) {
	var id= req.body.id;
	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/capitalChannel/rateDetail',params,'render')
});
//资金渠道费率新增接口
router.post('/capitalChannel/saveRate', function(req, res,next) {
	var channel = req.body.channel;
	var period = req.body.period;
	var rate = req.body.rate;
	var periodUnit = req.body.periodUnit;
	var params = querystring.stringify({
		channel:channel,
		period:period,
		rate:rate,
		periodUnit:periodUnit
	});
	loginRoutes.NoLogin(req,res,next,'/capitalChannel/saveRate',params,'render')
});
//资金渠道费率修改接口
router.post('/capitalChannel/updateRate', function(req, res,next) {
	var id = req.body.id;
	var channel = req.body.channel;
	var period = req.body.period;
	var rate = req.body.rate;
	var periodUnit = req.body.periodUnit;
	var params = querystring.stringify({
		channel:channel,
		period:period,
		rate:rate,
		periodUnit:periodUnit,
		id:id
	});
	loginRoutes.NoLogin(req,res,next,'/capitalChannel/updateRate',params,'render')
});
//钱包会员--退款列表
router.post('/orderRefund/json', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var refundOrderNo = req.body.refundOrderNo;
	var orderNo = req.body.orderNo;
	var refundStatus = req.body.refundStatus;
	var phone = req.body.phone;
	var realName = req.body.realName;
	var params = querystring.stringify({
		pageNum:pageNum,
		pageSize:pageSize,
		refundOrderNo:refundOrderNo,
		orderNo:orderNo,
		refundStatus:refundStatus,
		phone:phone,
		realName:realName,
	});
	loginRoutes.NoLogin(req,res,next,'/orderRefund/json',params,'render')
});
//钱包会员--退款详情
router.post('/orderRefund/detail', function(req, res,next) {
	var id = req.body.id;
	var params = querystring.stringify({
		id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/orderRefund/detail',params,'render')
});
//钱包会员--退款
router.post('/orderRefund/audit', function(req, res,next) {
	var id = req.body.id;
	var params = querystring.stringify({
		id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/orderRefund/audit',params,'render')
});
//钱包会员--批量退款审核
router.post('/orderRefund/batchAudit', function(req, res,next) {
	var ids = req.body.ids;
	var params = querystring.stringify({
		ids:ids,
	});
	loginRoutes.NoLogin(req,res,next,'/orderRefund/batchAudit',params,'render')
});
//玖富提现相关接口--玖富提现列表接口
router.post('/withdrawCash/json', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var channelNo = req.body.channelNo;
	var status = req.body.status;
	var params = querystring.stringify({
		pageNum:pageNum,
		pageSize:pageSize,
		channelNo:channelNo,
		status:status,
	});
	loginRoutes.NoLogin(req,res,next,'/withdrawCash/json',params,'render')
});
//玖富提现相关接口--玖富提现接口
router.post('/withdrawCash/withdrawCash', function(req, res,next) {
	var ids = req.body.ids;
	var params = querystring.stringify({
		ids:ids,
	});
	loginRoutes.NoLogin(req,res,next,'/withdrawCash/withdrawCash',params,'render')
});
//渠道分组编码查询接口
router.post('/payChannel/AllcodeGroup', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/payChannel/AllcodeGroup','{}','render')
});
//渠道编码查询接口
router.post('/payChannel/getAllPaycodes', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var codeGroup = req.body.codeGroup;
	var params = querystring.stringify({
		pageNum:pageNum,
		pageSize:pageSize,
		codeGroup:codeGroup,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/getAllPaycodes',params,'render')
});
//渠道编码添加接口
router.post('/payChannel/insertPaycodes', function(req, res,next) {
	var payCode = req.body.payCode;
	var means = req.body.means;
	var codeGroup = req.body.codeGroup;
	var params = querystring.stringify({
		payCode:payCode,
		means:means,
		codeGroup:codeGroup,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/insertPaycodes',params,'render')
});
//渠道编码修改接口
router.post('/payChannel/updatePaycodes', function(req, res,next) {
	var id = req.body.id;
	var payCode = req.body.payCode;
	var means = req.body.means;
	var codeGroup = req.body.codeGroup;
	var params = querystring.stringify({
		id:id,
		payCode:payCode,
		means:means,
		codeGroup:codeGroup,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/updatePaycodes',params,'render')
});
//返回错误码查询接口
router.post('/payChannel/queryDetailErrorPaycode', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var startTime = req.body.startTime;
	var endTime = req.body.endTime;
	var params = querystring.stringify({
		pageNum:pageNum,
		pageSize:pageSize,
		startTime:startTime,
		endTime:endTime,
	});
	loginRoutes.NoLogin(req,res,next,'/payChannel/queryDetailErrorPaycode',params,'render')
});
//钱包服务费结算管理--1.结算列表
router.post('/costSettlement/json', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var startStr = req.body.startStr;
	var endStr = req.body.endStr;
	var memberId = req.body.memberId;
	var method = req.body.method;
	var app = req.body.app;
	var sonPayMethod = req.body.sonPayMethod;
	var costType = req.body.costType;
	var status = req.body.status;
	var params = querystring.stringify({
		pageNum:pageNum,
		pageSize:pageSize,
		startStr:startStr,
		endStr:endStr,
		memberId:memberId,
		method:method,
		app:app,
		sonPayMethod:sonPayMethod,
		costType:costType,
		status:status
	});
	loginRoutes.NoLogin(req,res,next,'/costSettlement/json',params,'render')
});
//钱包服务费结算管理--2.结算申请
router.post('/costSettlement/apply', function(req, res,next) {
	var id = req.body.id;
	var params = querystring.stringify({
		id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/costSettlement/apply',params,'render')
});
//钱包服务费结算管理--3.结算审核
router.post('/costSettlement/audit', function(req, res,next) {
	var id = req.body.id;
	var dateStr = req.body.dateStr;
	var params = querystring.stringify({
		id:id,
		dateStr:dateStr
	});
	loginRoutes.NoLogin(req,res,next,'/costSettlement/audit',params,'render')
});
//钱包服务费结算管理--4.结算详情
router.post('/costSettlement/detail', function(req, res,next) {
	var id = req.body.id;
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var params = querystring.stringify({
		id:id,
		pageNum:pageNum,
		pageSize:pageSize,
	});
	loginRoutes.NoLogin(req,res,next,'/costSettlement/detail',params,'render')
});
//钱包服务费结算管理--5.结算金额
router.post('/costSettlement/sumAmount', function(req, res,next) {
	var memberId = req.body.memberId;
	var method = req.body.method;
	var app = req.body.app;
	var sonPayMethod = req.body.sonPayMethod;
	var costType = req.body.costType;
	var status = req.body.status;
	var params = querystring.stringify({
		memberId:memberId,
		method:method,
		app:app,
		sonPayMethod:sonPayMethod,
		costType:costType,
		status:status
	});
	loginRoutes.NoLogin(req,res,next,'/costSettlement/sumAmount',params,'render')
});
//钱包服务费结算管理--结算下载
router.get('/costSettlement/downLoadJson', function(req, res,next) {
	var cookie=req.cookies.token;
	var config = require('../config');
	res.send({
		"cookie" : cookie,
		"config" : config,        
	});
	res.end();
});
//钱包服务费结算管理--结算详情下载
router.get('/costSettlement/downloadDetail', function(req, res,next) {
	var cookie=req.cookies.token;
	var config = require('../config');
	res.send({
		"cookie" : cookie,
		"config" : config,
	});
	res.end();
});
module.exports = router;