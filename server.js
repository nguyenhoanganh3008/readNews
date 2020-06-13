/**
 * Read News Website
 * author : suonran
 * version : 1.0.0
 * date : 12/06/2020
 */


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.set('/views','./views');
app.use(express.static('publics'));

var trangChu = require('./route/trangChu');
var theGioi = require('./route/theGioi');
var thoiSu = require('./route/thoiSu');
var kinhDoanh = require('./route/kinhDoanh');
var theThao = require('./route/theThao');
var phapLuat = require('./route/phapLuat');
var giaoDuc = require('./route/giaoDuc');

app.use('/trangChu',trangChu);
app.use('/theGioi',theGioi);
app.use('/thoiSu',thoiSu);
app.use('/kinhDoanh',kinhDoanh);
app.use('/theThao',theThao);
app.use('/phapLuat',phapLuat);
app.use('/giaoDuc',giaoDuc);

app.listen(3000,function(){
    console.log('Server running in port 3000!');
});