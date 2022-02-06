const postRouter = require('express').Router();
const postController = require('../controllers/postController')

postRouter.get('/', postController.readPost);

postRouter.get('/:id', postController.findPostById);

postRouter.post('/', postController.createNewPost);

postRouter.delete('/:id',postController.deletePost);



module.exports = postRouter;