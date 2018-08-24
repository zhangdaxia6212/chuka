var express = require('express');
var router = express.Router();
var http = require('ykt-http-client');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//咨询
router.get('/consulting', function (req, res) {

  http.post('127.0.0.1:3333/information/find', req.query ).then(function (data) {
    res.send(data)
  })
})
//电影详情
router.get('/details', function (req, res) {
  http.post('127.0.0.1:3333/movie/find', req.query).then(function (data) {
    res.send(data)
  })
})
//电影榜单
router.get('/movieList', function (req, res) {
  http.post('127.0.0.1:3333/movie/find', {}).then(function (data) {
    res.send(data)
  })
})
//主页
router.get('/index_page', function (req, res) {
  http.post('127.0.0.1:3333/movie/find', {}).then(function (data) {
    res.send(data)
  })
})



module.exports = router;
