var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');
var multipart = require('connect-multiparty');
var loginRoutes = require('../loginRoutes');
var sd = require('silly-datetime');

/*收款交易查询*/
router.get('/gatheringDeal', function(req, res, next) {
	//test(req,res,next);
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','dealManagement/gatheringDeal');
    //res.render('dealManagement/gatheringDeal');
});

router.get('/gatheringDeal1', function(req, res, next) {
	//test(req,res,next);
	loginRoutes.NoLogin(req,res,next,'/test','{gatheringDeal}','dealManagement/gatheringDeal1');
    //res.render('dealManagement/gatheringDeal');
});
/*收款交易查询*/
router.get('/serviceCharge', function(req, res, next) {
	//test(req,res,next);
	loginRoutes.NoLogin(req,res,next,'/test','{serviceCharge}','dealManagement/serviceCharge');
    //res.render('dealManagement/gatheringDeal');
});
/*异常收款订单*/
router.get('/abnormalGathering', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{abnormalGathering}','dealManagement/abnormalGathering');
    //res.render('dealManagement/abnormalGathering');
});
/*异常收款订单列表页*/
router.get('/abnormalGatheringList', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{abnormalGatheringList}','dealManagement/abnormalGatheringList');
    //res.render('dealManagement/abnormalGathering');
});

/*退款订单列表*/
router.get('/refundList', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{refundList}','dealManagement/refundList');
    //res.render('dealManagement/refundList');
});



/*交易放款*/
router.get('/credit', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{credit}','dealManagement/credit');
    //res.render('dealManagement/credit');
});
/*交易推单*/
router.get('/pushSingle', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{credit}','dealManagement/pushSingle');
    //res.render('dealManagement/credit');
});
/*交易还款*/
router.get('/repayment', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{credit}','dealManagement/repayment');
    //res.render('dealManagement/credit');
});
/*交易退款*/
router.get('/refund', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{credit}','dealManagement/refund');
    //res.render('dealManagement/credit');
});
/*交易服务费*/
router.get('/credit', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{credit}','dealManagement/credit');
    //res.render('dealManagement/credit');
});
/*交易兑付*/
router.get('/cash', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{credit}','dealManagement/cash');
    //res.render('dealManagement/credit');
});
/*交易兑付详情*/
router.get('/cash_table', function(req, res, next) {
	loginRoutes.NoLogin(req,res,next,'/test','{credit}','dealManagement/cash_table');
    //res.render('dealManagement/credit');
});
/*提前结清*/
router.get('/repayearly', function(req, res, next) {
    loginRoutes.NoLogin(req,res,next,'/test','{repayearly}','dealManagement/repayearly');
    //res.render('dealManagement/credit');
});



//请求 代扣/代收查询列表接口
router.post('/mbTransaction/jsonTra', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var channelId = req.body.channelId;
    var status = req.body.status;
    var orderId = req.body.orderId;
    var transactionFlowNo = req.body.transactionFlowNo;
    var payee = req.body.payee;
    var buyers = req.body.buyers;
    var dateType = req.body.dateType;
    var start = req.body.start;
    var end = req.body.end;
    var busType = req.body.busType;
    var baseOrderId = req.body.baseOrderId;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        channelId:channelId,
        status:status,
        orderId:orderId,
        transactionFlowNo:transactionFlowNo,
        payee:payee,
        buyers:buyers,
        dateType:dateType,
        start:start,
        end:end,
        busType:busType,
        baseOrderId:baseOrderId,
    });
    loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonTra',params,'render')
});

/*对公还款*/
router.post('/mbTransaction/jsonTraPublic', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var start = req.body.start;
    var end = req.body.end;
    var channelId = req.body.channelId;
    var status = req.body.status;
    var id = req.body.id;
    var payee = req.body.payee;
    var buyers = req.body.buyers;
    var busType = req.body.busType;
    var dateType = req.body.dateType;
    var baseOrderId = req.body.baseOrderId;

    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        start:start,
	    end:end,
	    channelId:channelId,
	    status:status,
	    id:id,
	    payee:payee,
	    buyers:buyers,
	    busType:busType,
	    dateType:dateType,
	    baseOrderId:baseOrderId,
    });
    loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonTraPublic',params,'render')
});


router.post('/mbTransaction/jsonTraPublicCount', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var start = req.body.start;
    var end = req.body.end;
    var channelId = req.body.channelId;
    var status = req.body.status;
    var id = req.body.id;
    var payee = req.body.payee;
    var buyers = req.body.buyers;
    var busType = req.body.busType;
    var dateType = req.body.dateType;
    var baseOrderId = req.body.baseOrderId;

    var params = querystring.stringify({
        start:start,
	    end:end,
	    channelId:channelId,
	    status:status,
	    id:id,
	    payee:payee,
	    buyers:buyers,
	    busType:busType,
	    dateType:dateType,
	    baseOrderId:baseOrderId,
    });
    loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonTraPublicCount',params,'render')
});



router.post('/mbTransaction/jsonTraCount', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var channelId = req.body.channelId;
    var status = req.body.status;
    var orderId = req.body.orderId;
    var transactionFlowNo = req.body.transactionFlowNo;
    var payee = req.body.payee;
    var buyers = req.body.buyers;
    var dataType = req.body.dataType;
    var start = req.body.start;
    var end = req.body.end;
    var busType = req.body.busType;
    var baseOrderId = req.body.baseOrderId;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        channelId:channelId,
        status:status,
        orderId:orderId,
        transactionFlowNo:transactionFlowNo,
        payee:payee,
        buyers:buyers,
        dataType:dataType,
        start:start,
        end:end,
        busType:busType,
        baseOrderId:baseOrderId,
    });
    loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonTraCount',params,'render')
});
////请求 扣款通道查询列表接口
//router.post('/mbTransaction/jsonTra', function(req, res,next) {
//	var pageNum = req.body.pageNum;
//	var pageSize = req.body.pageSize;
//	var start = req.body.start;
//	var end = req.body.end;
//	var channelId = req.body.channelId;
//	var status = req.body.status;
//	var orderId = req.body.orderId;
//	var transactionFlowNo = req.body.transactionFlowNo;
//	var buyers = req.body.buyers;
//	var payee = req.body.payee;
//	var params = querystring.stringify({
//	      pageNum:pageNum,
//	      pageSize:pageSize,
//	      start:start,
//	      end:end,
//	      channelId:channelId,
//	      status:status,
//	      orderId:orderId,
//	      transactionFlowNo:transactionFlowNo,
//	      buyers:buyers,
//	      payee:payee,
//	});
//	loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonTra',params,'render')
//});



//请求 服务费查询列表接口
router.post('/mbTransaction/jsonTraPoundage', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var channelId = req.body.channelId;
	var status = req.body.status;
	var orderId = req.body.orderId;
	var transactionFlowNo = req.body.transactionFlowNo;
	var payee = req.body.payee;
	var buyers = req.body.buyers;
	var dataType = req.body.dataType;
	var start = req.body.start;
	var end = req.body.end;
	var busType = req.body.busType;
	var baseOrderId = req.body.baseOrderId;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      channelId:channelId,
	      status:status,
	      orderId:orderId,
	      transactionFlowNo:transactionFlowNo,
		payee:payee,
	      buyers:buyers,
		dataType:dataType,
		start:start,
		end:end,
		busType:busType,
		baseOrderId:baseOrderId,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonTraPoundage',params,'render')
});
	router.post('/mbTransaction/jsonTraPoundageCount', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var channelId = req.body.channelId;
	var status = req.body.status;
	var orderId = req.body.orderId;
	var transactionFlowNo = req.body.transactionFlowNo;
	var payee = req.body.payee;
	var buyers = req.body.buyers;
	var dataType = req.body.dataType;
	var start = req.body.start;
	var end = req.body.end;
	var busType = req.body.busType;
	var baseOrderId = req.body.baseOrderId;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      channelId:channelId,
	      status:status,
	      orderId:orderId,
	      transactionFlowNo:transactionFlowNo,
		payee:payee,
	      buyers:buyers,
		dataType:dataType,
		start:start,
		end:end,
		busType:busType,
		baseOrderId:baseOrderId,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonTraPoundageCount',params,'render')
});
//上传附件
var multipartmiddleware = multipart();
router.post('/transactionManager/upload', multipart(), function(req, res ,next) {
    
    var obj = req.files.filename;

	var tmp_path = obj.path;
	var FileExt=obj.name.replace(/.+\./,"");
	var time=sd.format(new Date(), 'YYYYMMDDHHmmss');
	var new_path = "/mjndata/reconciliation/"+"TD_"+time +"."+FileExt;  //mjndata/reconciliation/channel
	
	//var new_path = "C:/Users/aa/"+time +"."+FileExt;  //mjndata/reconciliation/channel
	
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
				
			   loginRoutes.NoLogin(req,res,next,'/transactionManager/upload',params,'render')
		      console.log("文件已保存");  
		    }
		  });
		}
		 
		copyFile();
	
	/*fs.rename(tmp_path, new_path, function(err) {
		
		 console.log('rename');
            if(err){
                console.log('rename error: ' + err);
            } else {
                console.log('rename ok');
                
                var fileName = new_path;
				var authToken = req.body.authToken ;
				
				
				var params = querystring.stringify({
				      fileName:fileName,
				      authToken:authToken,
			
				});
				
			   loginRoutes.NoLogin(req,res,next,'/transactionManager/upload',params,'render')
			   return;
			   
            }
        });*/
    //files.file.path = dstPath;
    //var data = files;
    
    //res.send(data);

});
/*router.post('/transactionManager/upload', function(req, res,next) {
	var filename = req.body.filename;
	var authToken = req.body.authToken ;
	var formData = req.body.formData ;
	
	
	var params = querystring.stringify({
	      formData:formData,
	      authToken:authToken,

	});
	loginRoutes.NoLogin(req,res,next,'/transactionManager/upload',params,'render')
});*/

//请求 申请退款接口
router.post('/mbTransaction/updateToWait', function(req, res,next) {
	var id = req.body.id;
	var path = req.body.path;
	var refundAmount = req.body.refundAmount;
	var refundReason = req.body.refundReason;

	var params = querystring.stringify({
	      id:id,
	      path:path,
	      refundAmount:refundAmount,
	      refundReason:refundReason,

	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/updateToWait',params,'render')
});

//请求 按ID查询交易记录接口
router.post('/mbTransaction/oneTra', function(req, res,next) {
	var id = req.body.id;

	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/oneTra',params,'render')
});


//请求 退单订单列表接口
router.post('/bill/jsonRefTraCount', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var channelId = req.body.channelId;
    var refundStatus = req.body.refundStatus;
    var orderId = req.body.orderId;
    var transactionFlowNo = req.body.transactionFlowNo;
    var payee = req.body.payee;
    var buyers = req.body.buyers;
    var dateType = req.body.dateType;
    var start = req.body.start;
    var end = req.body.end;
    var busType = req.body.busType;
    var baseOrderId = req.body.baseOrderId;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        channelId:channelId,
        refundStatus:refundStatus,
        orderId:orderId,
        transactionFlowNo:transactionFlowNo,
        payee:payee,
        buyers:buyers,
        dateType:dateType,
        start:start,
        end:end,
        busType:busType,
        baseOrderId:baseOrderId,
    });
    loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonRefTraCount',params,'render')
});
//请求 退单订单列表接口
router.post('/bill/jsonRefTra', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var channelId = req.body.channelId;
    var refundStatus = req.body.refundStatus;
    var orderId = req.body.orderId;
    var transactionFlowNo = req.body.transactionFlowNo;
    var payee = req.body.payee;
    var buyers = req.body.buyers;
    var dataType = req.body.dataType;
    var start = req.body.start;
    var end = req.body.end;
    var busType = req.body.busType;
    var baseOrderId = req.body.baseOrderId;
    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        channelId:channelId,
        refundStatus:refundStatus,
        orderId:orderId,
        transactionFlowNo:transactionFlowNo,
        payee:payee,
        buyers:buyers,
        dataType:dataType,
        start:start,
        end:end,
        busType:busType,
        baseOrderId:baseOrderId,
    });
    loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonRefTra',params,'render')
});


//请求 退款-----接口
router.post('/mbTransaction/updateToSuccess', function(req, res,next) {
	var id = req.body.id;

	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/updateToSuccess',params,'render')
});

//请求 退款 退回 接口
router.post('/mbTransaction/updateToReturn', function(req, res,next) {
	var id = req.body.id;

	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/updateToReturn',params,'render')
});

//请求 删除退款附件 接口
router.post('/mbTransaction/deleteAtt', function(req, res,next) {
	var id = req.body.id;

	var params = querystring.stringify({
	      id:id,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/deleteAtt',params,'render')
});

//请求 异常订单列表接口
router.post('/mbTransaction/jsonAoTra', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var start = req.body.start;
	var end = req.body.end;
	var channelId = req.body.channelId;
	var status = req.body.status;
	var buyersPhone = req.body.buyersPhone;
	var buyers = req.body.buyers;
	var buyersIdCard = req.body.buyersIdCard;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      start:start,
	      end:end,
	      channelId:channelId,
	      status:status,
	      buyersPhone:buyersPhone,
	      buyers:buyers,
	      buyersIdCard:buyersIdCard,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonAoTra',params,'render')
});


//请求 异常订单子列表接口  50
router.post('/mbTransaction/jsonAoExtTra', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var extId = req.body.extId;

	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      extId:extId,
	});
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonAoExtTra',params,'render')
});
//51. 搜索条件（支付渠道）接口
router.post('/mbTransaction/jsonPayCfg', function(req, res,next) {
	loginRoutes.NoLogin(req,res,next,'/mbTransaction/jsonPayCfg','{}','render')
});

//请求  交易管理-放款
router.post('/bill/getBillList', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var cashId = req.body.cashId;
	var billNo = req.body.billNo;
	var timeType = req.body.timeType;
	
	var payStatus = req.body.payStatus;
	var billType = req.body.billType;
	var merTrandNo = req.body.merTrandNo;
	var userInfo = req.body.userInfo;
	var company = req.body.company;
	var payType = req.body.payType;
	var beginDate = req.body.beginDate;
	var endDate = req.body.endDate;


	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      cashId:cashId,
	      timeType:timeType,
	      billNo:billNo,
	      payStatus:payStatus,
	      billType:billType,
	      merTrandNo:merTrandNo,
	      userInfo:userInfo,
	      company:company,
	      payType:payType,
	      beginDate:beginDate,
	      endDate:endDate,

	});
	loginRoutes.NoLogin(req,res,next,'/bill/getBillList',params,'render')
});


//请求  交易管理-推单
router.post('/transactionManager/pushOrder', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var timeStart = req.body.timeStart;
	var timeEnd = req.body.timeEnd;
	var timeType = req.body.timeType;
	var productType = req.body.productType;
	var accountType = req.body.accountType;
	
	var status = req.body.status;
	var basicOrderId = req.body.basicOrderId;
	var transactionOrderId = req.body.transactionOrderId;
	var channelOrderId = req.body.channelOrderId;
	var channelType = req.body.channelType;
	var others = req.body.others;
	var params = querystring.stringify({
	      pageNum:pageNum,
	      pageSize:pageSize,
	      timeStart:timeStart,
	      timeEnd:timeEnd,
	      timeType:timeType,
	      accountType:accountType,
	      productType:productType,
	      status:status,
	      basicOrderId:basicOrderId,
	      transactionOrderId:transactionOrderId,
	      channelOrderId:channelOrderId,
	      channelType:channelType,
	      others:others,
	});
	
	
	loginRoutes.NoLogin(req,res,next,'/transactionManager/pushOrder',params,'render')
});


//请求  交易管理-兑付
router.post('/transactionManager/cashed', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var timeStart = req.body.timeStart;
	var timeEnd = req.body.timeEnd;
	
	var channelType = req.body.channelType;
	var accountType = req.body.accountType;

	var params = querystring.stringify({
		      pageNum:pageNum,
		      pageSize:pageSize,
		      timeStart:timeStart,
		      timeEnd:timeEnd,
		      accountType:accountType,
		      channelType:channelType,
	
	});
	
	
	loginRoutes.NoLogin(req,res,next,'/transactionManager/cashed',params,'render')
});


//请求  交易管理-兑付 详情
router.post('/transactionManager/cashedDetail', function(req, res,next) {
	var pageNum = req.body.pageNum;
	var pageSize = req.body.pageSize;
	var time = req.body.time;
	var param = req.body.param;

	var params = querystring.stringify({
		      pageNum:pageNum,
		      pageSize:pageSize,
		      time:time,
		      param:param,
	
	});
	
	
	loginRoutes.NoLogin(req,res,next,'/transactionManager/cashedDetail',params,'render')
});

//请求  查询提前还款数据
router.post('/json/repayearly/query', function(req, res,next) {
    var pageNum = req.body.pageNum;
    var pageSize = req.body.pageSize;
    var time = req.body.time;

    var params = querystring.stringify({
        pageNum:pageNum,
        pageSize:pageSize,
        time:time,
    });


    loginRoutes.NoLogin(req,res,next,'/repayearly/query',params,'render')
});

//请求  查询提前还款数据
router.post('/json/repayearly/updatestatus', function(req, res,next) {
    var time = req.body.time;

    var params = querystring.stringify({
        time:time,
    });


    loginRoutes.NoLogin(req,res,next,'/repayearly/updatestatus',params,'render')
});


router.get('/transactionManager/cashedDetailDownload', function(req, res,next) {
	var cookie=req.cookies.token
	res.send(cookie);
	res.end();
});


module.exports = router;