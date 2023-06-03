import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

const getAllBlogs = asyncHandler(async (req, res) => {
  await Blog.find()
    .then((blogPosts) => {
      res.status(200).json({
        message: "success",
        blogPosts,
      });
    })
    .catch(({ message }) => {
      res.status(500).json({ message });
    });
});

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Blog.findById(id)
    .then((blogPost) => {
      if (!blogPost)
        return res.status(404).json({
          message: "Resource not found",
        });
      res.status(200).json({
        message: "success",
        blogPost,
      });
    })
    .catch(({ message }) => {
      res.status(500).json({ message });
    });
});

const createBlog = asyncHandler(async (req, res) => {
  const newBlog = new Blog(req.body);
  await newBlog
    .save()
    .then((blogPost) => {
      res.status(200).json({
        message: "success",
        blogPost,
      });
    })
    .catch(({ message }) => {
      res.status(500).json({ message });
    });
});

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedBlog = req.body;

  await Blog.findByIdAndUpdate(id, updatedBlog, { new: true })
    .exec()
    .then((blogPost) => {
      if (blogPost.length == 0)
        return res.status(404).json({
          message: "Resource not found",
        });
      res.status(200).json({
        message: "success",
        blogPost: updatedBlog,
      });
    })
    .catch(({ message }) => {
      res.status(500).json({ message });
    });
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id)
    .then((blogPost) => {
      if (!blogPost)
        return res.status(404).json({
          message: "Resource not found",
        });
      res.status(200).json({
        message: "success",
        blogPost,
      });
    })
    .catch(({ message }) => {
      res.status(500).json({ message });
    });
});
export { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog };
