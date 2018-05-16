var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var loginRoutes = require('../loginRoutes');
 
/*风险管理*/
router.get('/risk', function(req, res, next) {
    //res.render('pushManagement/capitalChannel');
    loginRoutes.NoLogin(req,res,next,'/test','{risk}','riskManagement/risk');
});
/*风险管理 详情*/
router.get('/risk_table', function(req, res, next) {
    //res.render('pushManagement/capitalChannel');
    loginRoutes.NoLogin(req,res,next,'/test','{risk}','riskManagement/risk_table');
});
//异常账单
router.get('/risk_table1', function(req, res, next) {
    //res.render('pushManagement/capitalChannel');
    loginRoutes.NoLogin(req,res,next,'/test','{risk}','riskManagement/risk_table1');
});
//异常用户还款计划
router.get('/risk_table2', function(req, res, next) {
    //res.render('pushManagement/capitalChannel');
    loginRoutes.NoLogin(req,res,next,'/test','{risk}','riskManagement/risk_table2');
});
//异常扣款记录
router.get('/risk_table3', function(req, res, next) {
    //res.render('pushManagement/capitalChannel');
    loginRoutes.NoLogin(req,res,next,'/test','{risk}','riskManagement/risk_table3');
});
//重复扣款记录
router.get('/risk_table4', function(req, res, next) {
    //res.render('pushManagement/capitalChannel');
    loginRoutes.NoLogin(req,res,next,'/test','{risk}','riskManagement/risk_table4');
});
router.get('/risk_table1_list', function(req, res, next) {
    //res.render('pushManagement/capitalChannel');
    loginRoutes.NoLogin(req,res,next,'/test','{risk}','riskManagement/risk_table1_list');
});

//请求 对账规则列表接口
router.post('/rule/ruleJson', function(req, res,next) {
	var pageNum= req.body.pageNum;
	var pageSize= req.body.pageSize;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	});
	loginRoutes.NoLogin(req,res,next,'/rule/ruleJson',params,'render')
});

/*对账规则（1）列表接口*/
router.post('/cash/getCashBillCheckList', function(req, res,next) {
	var rule=req.body.rule
	console.log(rule)
	var pageNum= req.body.pageNum;
	var pageSize= req.body.pageSize;
	var params = querystring.stringify({
	       rule:rule,
	       pageNum:pageNum,
	       pageSize:pageSize,
	});
	loginRoutes.NoLogin(req,res,next,'/cash/getCashBillCheckList',params,'render')
});
/*对账规则（2）列表接口*/
router.post('/cash/getCashLoanCheckListByRule', function(req, res,next) {
	var rule=req.body.rule
	var pageNum= req.body.pageNum;
	var pageSize= req.body.pageSize;
	var params = querystring.stringify({
	       rule:rule,
	       pageNum:pageNum,
	       pageSize:pageSize,
	});
	console.log(pageNum);
	loginRoutes.NoLogin(req,res,next,'/cash/getCashLoanCheckListByRule',params,'render')
});
/*对账规则（5）列表接口*/
router.post('/cash/getCashPayCheckListByRule', function(req, res,next) {
	var rule=req.body.rule
	var pageNum= req.body.pageNum;
	var pageSize= req.body.pageSize;
	var params = querystring.stringify({
	       rule:rule,
	       pageNum:pageNum,
	       pageSize:pageSize,
	});
	console.log(pageNum);
	loginRoutes.NoLogin(req,res,next,'/cash/getCashPayCheckListByRule',params,'render')
});


/*对账规则（3）列表接口*/
router.post('/rule/ruleThree', function(req, res,next) {
	var pageNum= req.body.pageNum;
	var pageSize= req.body.pageSize;
	var params = querystring.stringify({
	       pageNum:pageNum,
	       pageSize:pageSize,
	});
	loginRoutes.NoLogin(req,res,next,'/rule/ruleThree',params,'render')
});

/*对账规则（4）列表接口*/
router.post('/rule/ruleFour', function(req, res,next) {
	var pageNum= req.body.pageNum;
	var pageSize= req.body.pageSize;
	var params = querystring.stringify({
	       pageNum:pageNum,
	       pageSize:pageSize,
	});
	loginRoutes.NoLogin(req,res,next,'/rule/ruleFour',params,'render')
});

/*切换启用，禁用接口*/
router.post('/rule/updateRule', function(req, res,next) {
	var id = req.body.rule;
	var status = req.body.status;
	var params = querystring.stringify({
	      id:id,
	      status:status,
	});
	loginRoutes.NoLogin(req,res,next,'/rule/updateRule',params,'render')
});

/*切换启用，禁用接口*/
router.post('/mbTransaction/jsonAoTra', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var start = req.body.start;
	var end = req.body.end;
	var channelId = req.body.channelId;
	var orderId = req.body.orderId;
	var transactionFlowNo = req.body.transactionFlowNo;
	var buyersPhone = req.body.buyersPhone;
	var buyers = req.body.buyers;
	var buyersIdCard = req.body.buyersIdCard;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      start:start,
	      end:end,
	      channelId:channelId,
	      orderId:orderId,
	      transactionFlowNo:transactionFlowNo,
	      buyersPhone:buyersPhone,
	      buyers:buyers,
	      buyersIdCard:buyersIdCard,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonAoTra',params,'render')
});

//1.异常还款计划（还款计划与扣款记录对比）
router.post('/rule/ruleThree', function(req, res,next) {
	var pageNum= req.body.pageNum;
	var pageSize= req.body.pageSize;
	var params = querystring.stringify({
	       pageNum:pageNum,
	       pageSize:pageSize,
	});
	loginRoutes.NoLogin(req,res,next,'/rule/ruleThree',params,'render')
});

//2.异常扣款（扣款与流水）
router.post('/mbTransaction/jsonErrorOrder', function(req, res,next) {
	var pageNum= req.body.pageNum;
	var pageSize= req.body.pageSize;
	var start = req.body.start;
	var end = req.body.end;
	var params = querystring.stringify({
	       pageNum:pageNum,
	       pageSize:pageSize,
	       start:start,
	       end:end
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonErrorOrder',params,'render')
});

//还款到下一期
router.post('/mbTransaction/repayNext', function(req, res,next) {
	var id= req.body.id;
	var params = querystring.stringify({
	       id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/repayNext',params,'render')
});

module.exports = router;