const express = require("express");
const {
  addPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
} = require("../Controlles/Post");

const PostRouter = express.Router();

PostRouter.post(`/addPost`, addPost);

PostRouter.get(`/getAllPost`, getAllPosts);

PostRouter.get(`/getOnePost/:id`, getOnePost);

PostRouter.put("/updatePost/:id", updatePost);

PostRouter.delete(`/deletePost/:id`, deletePost);

module.exports = PostRouter;
