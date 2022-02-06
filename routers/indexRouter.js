const postRouter = require('./postRouter');

const setupRoutes = (app) => {
  app.use('/posts', postRouter);
};

module.exports = setupRoutes;
