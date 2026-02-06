const Post = require("../Models/Post");


exports.addPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();

    res.status(200).send({
      msg: "Post Added Successfully",
      newPost
    });

  } catch (error) {
    console.log(error);
    res.status(500).send("Could not add this Post");
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).send({
      msg: "List of Posts",
      posts
    });

  } catch (error) {
    console.log(error);
    res.status(500).send("Could not get this Posts");
  }
};
exports.getOnePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    res.status(200).send({
      msg: "Post Found",
      post
    });

  } catch (error) {
    console.log(error);
    res.status(500).send("Could not get this Post");
  }
};
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    await Post.findByIdAndUpdate(id, { $set: req.body });

    res.status(200).send({
      msg: "Post Updated Successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).send("Could not update this Post");
  }
};
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await Post.findByIdAndDelete(id);

    res.status(200).send({
      msg: "Post Deleted Successfully",
    });

  } catch (error) {
    console.log(error);
    res.status(500).send("Could not delete this Post");
  }
};
