var express = require('express');
var router = express.Router();

var getcyhsend = require('./PWAroutes/getcyhsend')
var postcyhsend = require('./PWAroutes/postcyhsend')
var mysqlsend = require('./PWAroutes/mysqlsend');

app.use('/getcyhsend' , getcyhsend)
app.use('/posrcyhsend' , postcyhsend)
app.use('/mysqlsend' , mysqlsend)

app.get('/' , (req , res) => {
    res.send('페이지 출력하자')
})

app.listen(8080 , () => {
    console.log('잘나오나')
})