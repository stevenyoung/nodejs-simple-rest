var fs = require("fs")
var path = require('path')
var express = require('express')
var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.get('/listUsers', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log(data)
    res.end(data)
  })
})

app.get('/home', function(req, res) {
  res.render('index')
})

app.get('/', function(req, res) {
  res.end('howdy', function() {
    console.log(req.route)
  })
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
