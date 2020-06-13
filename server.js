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
app.use(express.static('public'));

var readNews = require('./route/readNews');

app.use('/readNews',readNews);

app.listen(3000,function(){
    console.log('Server running in port 3000!');
});