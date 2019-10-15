const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()

//设置静态资源的路径
const staticPath = ''

app.use(static(path.join(__dirname, staticPath)))

app.use(async (ctx) => {
  ctx.body = 'hello world'
})

app.listen(2333, () => {
  console.log('server is starting at port 2333')
  console.log('服务已经启动,请在浏览器中输入 http://localhost:2333 ')
})
