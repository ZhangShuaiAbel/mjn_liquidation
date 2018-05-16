 Vue.filter('time',
 function(value) {
 var date = new Date(value);
 Y = date.getFullYear(),
 m = date.getMonth() + 1,
 d = date.getDate(),
 H = date.getHours(),
 i = date.getMinutes(),
 s = date.getSeconds();
 if (m < 10) {
  m = '0' + m;
 }
 if (d < 10) {
  d = '0' + d;
 }
 if (H < 10) {
  H = '0' + H;
 }
 if (i < 10) {
  i = '0' + i;
 }
 if (s < 10) {
  s = '0' + s;
 }
 <!-- 获取时间格式 2017-01-03 10:13:48 -->
  var t = Y+'-'+m+'-'+d+' '+H+':'+i+':'+s;
 <!-- 获取时间格式 2017-01-03 -->
 // var t = Y + '-' + m + '-' + d;
 return t;
 });