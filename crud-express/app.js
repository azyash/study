const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()
app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
app.listen(3000, function() {
    console.log('http://localhost:3000')
})
module.exports = app