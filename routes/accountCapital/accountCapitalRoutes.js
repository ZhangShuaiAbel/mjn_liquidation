var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');

/*账户资金*/
router.get('/index', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{accountCapitalManagement}','accountCapitalManagement/index');
});
/*记账*/
router.get('/accounts', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{accountCapitalManagement}','accountCapitalManagement/accounts');
});
/*现金流分析*/
router.get('/capitalApply', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{accountCapitalManagement}','accountCapitalManagement/capitalApply');
});

/*资金划转审批*/
router.get('/capitalApproval', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{accountCapitalManagement}','accountCapitalManagement/capitalApproval');
});
/*资金划转申请*/
router.get('/cashFlowAnalysis', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{accountCapitalManagement}','accountCapitalManagement/cashFlowAnalysis');
});
router.get('/cashFlowAnalysis1', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{accountCapitalManagement}','accountCapitalManagement/cashFlowAnalysis1');
});
router.get('/cashFlowAnalysis2', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{accountCapitalManagement}','accountCapitalManagement/cashFlowAnalysis2');
});




/*账户资金-记账*/

router.post('/reconciliation/accounting', function(req, res,next) {
	var time = req.body.time;
	var ourAccountId = req.body.ourAccountId;
	var reciprocalAccountId = req.body.reciprocalAccountId;
	var payType = req.body.payType;
	var receiveAmount = req.body.receiveAmount;
	var payAmount = req.body.payAmount;
	var balance = req.body.balance;


	var params = querystring.stringify({
		  time:time,
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

/*现金流分析*/
router.post('/reconciliation/getAccounts', function(req, res,next) {
	var enterpriseType= req.body.enterpriseType;
	var params = querystring.stringify({
	      enterpriseType:enterpriseType,
	});
	loginRoutes.NoLogin(req,res,next,'/reconciliation/getAccounts',params,'render')
});


router.post('/capitalTransfer/smsCode', function(req, res,next) {
	
	loginRoutes.NoLogin(req,res,next,'/capitalTransfer/smsCode',"{}",'render')
});

router.post('/reconciliation/reconciliationManager', function(req, res,next) {
	var ourAccountId= req.body.ourAccountId;
	var year= req.body.year;
	var month= req.body.month;
	var analysis= req.body.analysis;
	var params = querystring.stringify({
	      ourAccountId:ourAccountId,
	      year:year,
	      month:month,
	      analysis:analysis,
	});
	loginRoutes.NoLogin(req,res,next,'/reconciliation/reconciliationManager',params,'render')
});



router.post('/reconciliation/addAccount', function(req, res,next) {
	var bankNo= req.body.bankNo;
	var enterpriseType= req.body.enterpriseType;
	var bankName= req.body.yinhang_name;
	var ourAccountName= req.body.ourAccountName;
	//ourAccountName
	var params = querystring.stringify({
	      bankName:bankName,
	      enterpriseType:enterpriseType,
	      bankNo:bankNo,
	      name:ourAccountName,
	      accountType:1,
	});
	loginRoutes.NoLogin(req,res,next,'/reconciliation/addAccount',params,'render')
});

router.post('/capitalAccount/saveAccount', function(req, res,next) {
	var accountType= req.body.accountType;
	var enterpriseType= req.body.enterpriseType;
	var name= req.body.name;
	var accountNo= req.body.accountNo;
	//ourAccountName
	var params = querystring.stringify({
	      accountType:accountType,
	      enterpriseType:enterpriseType,
	      name:name,
	      accountNo:accountNo,
	});
	loginRoutes.NoLogin(req,res,next,'/capitalAccount/saveAccount',params,'render')
});

/*账户资金 - 列表*/

router.post('/reconciliation/allAccounts', function(req, res,next) {	
	var enterpriseId= req.body.enterpriseId;
	var params = querystring.stringify({
	      enterpriseId:enterpriseId,
	    
	});
	loginRoutes.NoLogin(req,res,next,'/reconciliation/allAccounts',params,'render')
});


/*资金划转查询列表*/
router.post('/capitalTransfer/getCapitalTransferList', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var applyOrAudit = req.body.applyOrAudit;
	var auditStatus = req.body.auditStatus;
	var beginDate = req.body.beginDate;
	var endDate = req.body.endDate;
	
	
	
	var params = querystring.stringify({
		      pageNum:pageNum,
		      pageSize:pageSize,
		      applyOrAudit:applyOrAudit,
		      auditStatus:auditStatus,
			  beginDate:beginDate,
			  endDate:endDate,
	});
	
	
	loginRoutes.NoLogin(req,res,next,'/capitalTransfer/getCapitalTransferList',params,'render')
});



/*资金划转对公 对私*/
router.post('/capitalTransfer/saveCapitalTransfer', function(req, res,next) {
	var capitalTransfer = req.body.capitalTransfer;
	var params = querystring.stringify({
		      capitalTransfer:capitalTransfer,
	});
	
	
	loginRoutes.NoLogin(req,res,next,'/capitalTransfer/saveCapitalTransfer',params,'render')
});

router.post('/capitalTransfer/auditCapitalTransfer', function(req, res,next) {
	var id = req.body.id;
	var auditStatus = req.body.auditStatus;
	var smsCode = req.body.smsCode;
	
	var params = querystring.stringify({
		      id:id,
		      auditStatus:auditStatus,
		      smsCode:smsCode,
	});
	
	loginRoutes.NoLogin(req,res,next,'/capitalTransfer/auditCapitalTransfer',params,'render')
});


router.get('/reconciliation/getAccountingsDownload', function(req, res,next) {
	var cookie=req.cookies.token
	res.send(cookie);
	res.end();
});
module.exports = router;