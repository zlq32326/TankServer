var koa = require('koa.io');
var app = koa();

// $ GET /package.json

app.use(function*() {

});

app.io.use(function* (next) {
  // on connect
  yield* next;
  // on disconnect
});

app.io.route('new message', function* () {
  // we tell the client to execute 'new message'
  var message = this.args[0];
  this.broadcast.emit('new message', message);
});
//
// // $ GET /hello.txt
//
// // or use absolute paths
//
app.listen(12450);


console.log('listening on port 12450');
