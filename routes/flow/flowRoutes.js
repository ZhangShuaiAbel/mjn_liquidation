var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var multipart = require('connect-multiparty');
var loginRoutes = require('../loginRoutes');
var sd = require('silly-datetime');

/*流水查询*/
router.get('/statismonth', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/statis',{"unit":"month"});
});
/*流水查询*/
router.get('/statisyear', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/statis',{"unit":"year"});
});
/*流水查询*/
router.get('/search', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/search',{"forAccounting":""});
});
/*待人工对账查询*/
router.get('/applylist', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/search',{"forAccounting":"getApplys"});
});
/*已申请对账查询*/
router.get('/allreadyapply', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/applylist');
});

/*待审核查询*/
router.get('/auditwait', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/auditwait');
});

/*撤单审批 待审批*/
router.get('/cancellations', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/cancellations');
});

/*撤单审批 待审批 详情*/
router.get('/cancellations_list', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/cancellations_list');
});

/*撤单审批 已审批*/
router.get('/cancellations2', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/cancellations2');
});

/*撤单审批 已审批 详情*/
router.get('/cancellations2_list', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/cancellations2_list');
});

/*已审核查询*/
router.get('/auditallready', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','flowManagement/auditallready');
});

//流水查询数据
router.post('/json/search', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    var payType = req.body.payType;
    var status = req.body.status;
    var reciprocalAccountNo = req.body.reciprocalAccountNo;
    var reciprocalAccountName = req.body.reciprocalAccountName;
    var ourAccountId = req.body.ourAccountId;
    var orderId = req.body.orderId;
    var forAccounting = req.body.forAccounting;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        startTime:startTime,
        endTime:endTime,
        payType:payType,
        status:status,
        reciprocalAccountNo:reciprocalAccountNo,
        reciprocalAccountName:reciprocalAccountName,
        ourAccountId:ourAccountId,
        orderId:orderId,
        forAccounting:forAccounting,
    });
    loginRoutes.NoLogin(req,res,next,'/reconciliation/getReconciliations',params,'render')
});
//提交申请
router.post('/json/apply', function(req, res,next) {
    var reconciliationOrderId = req.body.reconciliationOrderId;
    var payType = req.body.payType;
    var payTypeStr = req.body.payTypeStr;
    var comment = req.body.comment;
    var reciprocalAccountNo = req.body.reciprocalAccountNo;
    var params = querystring.stringify({
        reconciliationOrderId:reconciliationOrderId,
        payType:payType,
        payTypeStr:payTypeStr,
        reciprocalAccountNo:reciprocalAccountNo,
        reciprocalAccountName:reciprocalAccountName,
        comment:comment,
    });
    loginRoutes.NoLogin(req,res,next,'/reconciliation/reconciliationApply',params,'render')
});
//流水查询数据
router.post('/json/applylist', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    var payType = req.body.payType;
    var status = req.body.status;
    var reciprocalAccountNo = req.body.reciprocalAccountNo;
    var reciprocalAccountName = req.body.reciprocalAccountName;
    var ourAccountId = req.body.ourAccountId;
    var orderId = req.body.orderId;
    var forAccounting = req.body.forAccounting;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        startTime:startTime,
        endTime:endTime,
        payType:payType,
        status:status,
        reciprocalAccountNo:reciprocalAccountNo,
        reciprocalAccountName:reciprocalAccountName,
        ourAccountId:ourAccountId,
        orderId:orderId,
        forAccounting:forAccounting,
    });
    loginRoutes.NoLogin(req,res,next,'/reconciliation/getApplyForApplyer',params,'render')
});
//流水查询数据
router.post('/json/auditwait', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    var payType = req.body.payType;
    //var status = req.body.status;
    var status = 0;
    var reciprocalAccountNo = req.body.reciprocalAccountNo;
    var reciprocalAccountName = req.body.reciprocalAccountName;
    var ourAccountId = req.body.ourAccountId;
    var orderId = req.body.orderId;
    var forAccounting = req.body.forAccounting;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        startTime:startTime,
        endTime:endTime,
        payType:payType,
        status:status,
        reciprocalAccountNo:reciprocalAccountNo,
        reciprocalAccountName:reciprocalAccountName,
        ourAccountId:ourAccountId,
        orderId:orderId,
        forAccounting:forAccounting,
    });
    loginRoutes.NoLogin(req,res,next,'/reconciliation/getApplys',params,'render')
});
//流水查询数据
router.post('/json/auditallready', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    var payType = req.body.payType;
    var status = req.body.status;
    var reciprocalAccountNo = req.body.reciprocalAccountNo;
    var reciprocalAccountName = req.body.reciprocalAccountName;
    var ourAccountId = req.body.ourAccountId;
    var orderId = req.body.orderId;
    var forAccounting = req.body.forAccounting;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        startTime:startTime,
        endTime:endTime,
        payType:payType,
        status:status,
        reciprocalAccountNo:reciprocalAccountNo,
        reciprocalAccountName:reciprocalAccountName,
        ourAccountId:ourAccountId,
        orderId:orderId,
        forAccounting:forAccounting,
    });
    loginRoutes.NoLogin(req,res,next,'/reconciliation/getApplys',params,'render')
});

//流水查询数据
router.post('/json/statis', function(req, res,next) {
    var ourAccountId = req.body.ourAccountId;
    var year = req.body.year;
    var month = req.body.month;
    var analysis = req.body.analysis;
    var params = querystring.stringify({
        ourAccountId:ourAccountId,
        year:year,
        month:month,
        analysis:analysis,
    });
    loginRoutes.NoLogin(req,res,next,'/reconciliation/reconciliationManager',params,'render')
});

//流水查询数据
router.post('/json/auditApply', function(req, res,next) {
    var reconciliationOrderId = req.body.reconciliationOrderId;
    var status = req.body.status;
    var params = querystring.stringify({
        ids:reconciliationOrderId,
        status:status,
    });
    loginRoutes.NoLogin(req,res,next,'/reconciliation/auditApplyBatch',params,'render')
});
//查询账户数据
router.post('/json/accounts', function(req, res,next) {
    loginRoutes.NoLogin(req,res,next,'/reconciliation/getAccounts','{}','render')
});

router.get('/reconciliation/getReconciliationsDownload', function(req, res,next) {
	var cookie=req.cookies.token;
	var config = require('../config');
	res.send({
		"cookie" : cookie,
		"config" : config,        
	});
	res.end();
});

router.get('/reconciliation/reconciliationManagerDownload', function(req, res,next) {
	var cookie=req.cookies.token
	res.send(cookie);
	res.end();
});

//撤单列表接口
router.post('/orderAudit/auditList', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var start = req.body.start;
    var end = req.body.end;
    var payAccountName = req.body.payAccountName;
    var payAccountNo = req.body.payAccountNo;
    var ourAccount = req.body.ourAccount;
    var auditStatus = req.body.auditStatus;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        start:start,
        end:end,
        payAccountName:payAccountName,
        payAccountNo:payAccountNo,
        ourAccount:ourAccount,
        auditStatus:auditStatus,
    });
    loginRoutes.NoLogin(req,res,next,'/orderAudit/auditList',params,'render')
});

//撤单详情接口
router.post('/orderAudit/auditDetail', function(req, res,next) {
    var id = req.body.id;
    var params = querystring.stringify({
        id:id,
    });
    loginRoutes.NoLogin(req,res,next,'/orderAudit/auditDetail',params,'render')
});

//撤单审核驳回接口
router.post('/orderAudit/fail', function(req, res,next) {
    var id = req.body.id;
    var params = querystring.stringify({
        id:id,
    });
    loginRoutes.NoLogin(req,res,next,'/orderAudit/fail',params,'render')
});

//撤单审核通过接口
router.post('/orderAudit/success', function(req, res,next) {
    var id = req.body.id;
    var params = querystring.stringify({
        id:id,
    });
    loginRoutes.NoLogin(req,res,next,'/orderAudit/success',params,'render')
});
//上传附件
var multipartmiddleware = multipart();
router.post('/reconciliation/upload', multipart(), function(req, res ,next) {
    // console.log(111111)
    var obj = req.files.filename;
    console.log(obj);

	var tmp_path = obj.path;
	var FileExt=obj.name.replace(/.+\./,"");
	var time=sd.format(new Date(), 'YYYYMMDDHHmmss');
	var new_path = "/mjndata/reconciliation/"+"LS_"+time +"."+FileExt;  //mjndata/reconciliation/channel
	// var new_path = "C:/fakepath/"+time +"."+FileExt;  //mjndata/reconciliation/channel
	
	    function copyFile(){
		  console.log('--------开始读取文件--------');
		  var fs = require('fs');
		  fs.readFile(tmp_path,  function(err, data) {
		    if (err) {
		      console.log("读取失败");
		    } else {
		      writeFile(data)
		      return data;
		    }
		  });
		  console.log('--------读取结束--------');
		}
		 
		function writeFile(data){
		  //console.log(data);
		  fs.writeFile(new_path,data,function(error){
		    if(error){
		      throw error;
		    }else{
		    	var fileName = new_path;
				var authToken = req.body.authToken ;
				
				
				var params = querystring.stringify({
				      fileName:fileName,
				      authToken:authToken,
			
				});
				
			   loginRoutes.NoLogin(req,res,next,'/reconciliation/upload',params,'render')
		      console.log("文件已保存");  
		    }
		  });
		}	 
		copyFile();
});


module.exports = router;