# nodejs-simple-rest
NodeJS starter app for my Front-End Web Dev students

Uses node modules Express and Jade to build a sandbox web app that renders using layout templates and serves some sample json.

Create a directory for your project and enter it.
Inside your project directory type 'npm init'.

After prompts you should have a configuration file 'package.json'

The application uses the NodeJS API for access to the local filesystem to serve JSON from a static file.
This app will use ExpressJS for routing HTTP requests and
And this tutorial will use Jade for templates.

Install Express and Jade save the dependencies to your configuration
npm install express --save
npm install jade --save

Sample server.js:

// node built-in modules for filesystem I/O and handling file paths
var fs = require('fs')
var path = require('path')

// using express for request routing
var express = require('express')
var app = express()

// express settings for jade templates
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'public')));

// express routes:
// this route returns a list of users from a json file
app.get('/users', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log(data)
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
app.get('/', function(req, res) {
  res.render('index')
})

var server = app.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})



TODO: Use Handlebars for templates