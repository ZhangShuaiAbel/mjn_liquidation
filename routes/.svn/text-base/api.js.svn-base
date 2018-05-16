var express = require('express');
var router = express.Router();

var db = require('./loginRoutes.js');
//console.log(db.login());

router.get('/', function(req, res) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
res.jsonp({status: 200, message: "这是一个JSONP接口", data:[]});
    } else {
        res.json({status: 200, message: "这是一个JSON接口2222222", data:[]});
    }
});
 
module.exports = router;