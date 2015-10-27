// node built-in modules for filesystem I/O and handling file paths
var fs = require('fs')
var path = require('path')

// using express for request routing
var express = require('express')
var app = express()

// express settings for jade templates
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// express settings for static files
app.use(express.static(path.join(__dirname, 'public')));

// express routes:
// this route returns a list of users from a json file
app.get('/users', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log(data)
    res.end(data)
  })
})

// get words from json
app.get('/words/b', function(req, res) {
  fs.readFile( __dirname + "/public/" + "b.json", 'utf8', function (err, data) {
    console.log(err)
    res.end(data)
  })
})



// this route shows some text and runs a callback after the sending a response
app.get('/howdy', function(req, res) {
  res.end('howdy', function() {
    console.log(req.route)
  })
})

// this route renders a jade template
app.get('/home', function(req, res) {
  res.render('index')
})

var server = app.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
