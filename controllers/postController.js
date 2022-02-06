const PostModel = require('../models/Post');
const ObjectID = require('mongoose').Types.ObjectId;

const readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.status(200).json(docs);
    else console.log('Error to get data : ' + err);
  });
};

const findPostById = (req, res) => {
  // Finding a document whose id = req.params.id
  var id = req.params.id;
  PostModel.findById(id, (err, docs) => {
    if (err) {
      if (!ObjectID.isValid(id))
        return res.status(400).send('ID unknown : ' + req.params.id);
    } else {
      res.status(200).json(docs);
      console.log('Result : ', docs);
    }
  });
};

const createNewPost = async (req, res) => {
  const newPost = new PostModel({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

const deletePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown : ' + req.params.id);

  PostModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.status(202).json(docs);
    else console.log('Delete error : ' + err);
  });
};

module.exports = {
  readPost,
  findPostById,
  createNewPost,
  deletePost,
};
