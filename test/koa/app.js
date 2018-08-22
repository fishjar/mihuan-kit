const Koa = require('koa');
const Router = require('koa-router');
const controller = require('./controller/index');
const err = require('./err');
const rest = require('./rest');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

app
  .use(err)
  .use(rest)
  .use(serve('../material/build'))
  .use(controller(router))
  .use(router.allowedMethods());

app.listen(9001);
console.log('app started at port 9001...');