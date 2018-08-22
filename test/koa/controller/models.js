module.exports = {
  fetchAll(ctx, next) {
    console.log(ctx.params)
    ctx.response.body = [
      {
        test: 'test'
      }
    ];
  },
  fetchSingle(ctx, next) {
    // ctx.throw(400, 'name required', { code: '1002' });
    console.log(ctx.params);
    ctx.response.body = {
      test: 'test'
    };
  },
}