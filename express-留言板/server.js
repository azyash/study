const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var comments = [{
    name: '张三',
    message: '今天天气真好',
    dataTime: '时间'
}]
app.engine('html', require('express-art-template'))
app.get('/', function(req, res) {
    res.render('index.html', {
        comments: comments
    })
})
app.get('/post', function(req, res) {
    res.render('post.html')
})
app.post('/post', function(req, res) {
    var comment = req.body
    comments.unshift(comment)
    res.redirect('/')
    console.log(comment);

})
app.listen(port, () => console.log(`Server running at  http://127.0.0.1:${port}`))