var express = require('express')
var mysql = require('mysql');
var mydb = require('../db/mydb');
const connection = mysql.createConnection(mydb);
var router = express.Router();

router.get('/' , (req , res) => {
    res.send('getcyhsend요청 응답')
})
router.get('/getcyhjson',(req , res) => {
    res.send({'url':'/getcyhsend/getcyhjson'})
})
router.post('/post',(req , res) => {
    res.send({
        'url':'getcyhjsend/post ' , 
        'title':'getcyhsend.js내의  post라우팅'})
})
router.get('/pwaSQL' , (req ,res) => {
    connection.query(
        'select * from react_suppose.suppose',
        (error , rows) => {
            if(error) throw error;
            console.log('시험 스키마 테이블내용' , rows);
            res.send(rows);
        }
    )   
})
module.exports = router;