var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

var comments = [{
    name: '张三',
    message: '今天天气不错',
    dataTime: '2019-8-2 10:17:15'
}]

http.createServer('request', function(req, res) {
    var parseObj = url.parse(req.url, true)
    var pathname = parseObj.pathname
    if (pathname === '/') {
        fs.readFile('./views/index.html', function(err, data) {
            if (err) {
                return res.end('404 Not Found')
            }
            var htmlStr = template.render(data.toString(), {
                comments: comments
            })
            res.end(htmlStr)
        })
    }
    if (pathname === '/post') {
        fs.readFile('./views/post.html', function(err, data) {
            if (err) {
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    } else if (pathname === '/pinglun') {
        var comment = parseObj.query
        comment.dataTime = '2019-8-2 10:17:15'
        comments.unshift(comment)
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    }
}).listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
})