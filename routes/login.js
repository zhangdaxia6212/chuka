var express = require('express');
var router = express.Router();
var http = require('ykt-http-client');


/* GET home page. */
// 登录
router.post('/login', function (req, res) {
    req.body.findType = "exact";
    http.post('127.0.0.1:3333/user/find', req.body).then(function (data) {
        if (data.length == 1) {
            res.redirect('../html/index.html')
        }
        else {
            res.redirect('../html/denglu.html?error=true')
        }
    })
})

module.exports = router;
