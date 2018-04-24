var koa = require('koa');
var app = koa();
var serve = require('koa-static');

app.use(serve('assets'));

// global events listen
// app.on('error', (err, ctx) => {
//     err.url = err.url || ctx.request.url
//     console.error(err, ctx)
// })

app.on('error', function(err, ctx){
  //log.error('server error', err, ctx);
});

// logger
app.use(function*(next) {
    console.log(this.method.info, this.url)
    yield next
})

app.listen(3000);
