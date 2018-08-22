module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const {
      status,
      code,
      message,
    } = err;
    ctx.status = status
    ctx.response.body = {
      code,
      message,
    };
  }
}