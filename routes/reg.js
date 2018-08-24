var express = require('express');
var router = express.Router();
var http = require('ykt-http-client');


/* GET home page. */

//验证码
router.get('/code', function (req, res) {
    let num = parseInt(Math.random() * 900001 + 100000) + '';
    // console.log(num)
    res.send(num);
})


//注册
router.post('/reg', function (req, res) {
    http.post('127.0.0.1:3333/user/add', req.body).then(function (data) {
        res.redirect('../html/denglu.html')
    })
})
//判断注册用户名是否重复
router.get('/regName', function (req, res) {
    let parm = req.query.text;
    http.post('127.0.0.1:3333/user/find', { phone: parm }).then(function (data) {
        if (data.length > 0) {
            res.send('1')
        } else {
            res.send('0')
        }
    })
})
module.exports = router;