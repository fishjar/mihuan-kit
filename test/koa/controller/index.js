const models = require('./models');

module.exports = (router) => {
  router
    .get('/api/models', models.fetchAll)
    .get('/api/models/:id', models.fetchSingle)
    .get('*', ctx => {
      ctx.redirect('/');
      ctx.status = 301;
    });
  return router.routes();
}
