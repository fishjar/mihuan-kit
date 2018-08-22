module.exports = async (ctx, next) => {
  await next();
  if (ctx.request.path.startsWith('/api/')) {
    // console.log(ctx.request.path)
    ctx.response.body = {
      code: '1000',
      message: 'ok',
      data: ctx.response.body,
    };
  }
}