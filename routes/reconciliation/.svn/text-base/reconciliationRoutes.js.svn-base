var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');

/*记账*/
router.get('/pipeline', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','reconciliationManagement/pipeline');
});
/*现金流分析*/
router.get('/artificialApplyFor', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','reconciliationManagement/artificialApplyFor');
});
/*资金划转申请*/
router.get('/artificialApprove', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{basics}','reconciliationManagement/artificialApprove');
});



/*账户资金-记账*/

router.post('/reconciliation/accounting', function(req, res,next) {
	var ourAccountId = req.body.ourAccountId;
	var reciprocalAccountId = req.body.reciprocalAccountId;
	var payType = req.body.payType;
	var receiveAmount = req.body.receiveAmount;
	var payAmount = req.body.payAmount;
	var balance = req.body.balance;


	var params = querystring.stringify({
	      ourAccountId:ourAccountId,
	      reciprocalAccountId:reciprocalAccountId,
	      payType:payType,
	      receiveAmount:receiveAmount,
	      payAmount:payAmount,
	      balance:balance,
	});
	loginRoutes.NoLogin(req,res,next,'/reconciliation/accounting',params,'render')
});

/*账户资金-记账-查询*/

router.post('/reconciliation/getAccountings', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var startTime = req.body.startTime;
	var endTime = req.body.endTime;
	var accountId = req.body.accountId;

	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      startTime:startTime,
	      endTime:endTime,
	      accountId:accountId,
	});
	loginRoutes.NoLogin(req,res,next,'/reconciliation/getAccountings',params,'render')
});

module.exports = router;