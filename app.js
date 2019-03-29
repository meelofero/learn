'use strict'

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.json({
    message: 'hello'
  })
})

app.listen(5005, function (err) {
  if (err) {
    console.log(err)
  }
})

module.exports = app
