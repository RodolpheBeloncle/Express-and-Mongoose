const express = require('express');
const mongoose = require('mongoose');
const setupRoutes = require('./routers/indexRouter');
// Connect to MongoDB database
mongoose
  .connect('mongodb://localhost:27017/myBlog', {
    useNewUrlParser: true,
  })

  .then(() => {
    const app = express();
    app.use(express.json());
    setupRoutes(app);

    app.listen(3000, () => {
      console.log('Server has started!');
    });
  });
