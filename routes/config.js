var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');
var request = require('request');

var config = "192.168.30.30";
var port = "18087";

module.exports.config = config;//测试环境
module.exports.port = port;//测试环境


