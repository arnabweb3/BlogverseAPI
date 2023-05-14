import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

const getAllBlogs = asyncHandler(async (req, res) => {
  Blog.find()
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

const getBlog = asyncHandler((req, res) => {
  const { id } = req.params;
  Blog.findById(id)
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

const createBlog = asyncHandler((req, res) => {
  const newBlog = new Blog(req.body);
  newBlog
    .save()
    .then((blog) => {
      res.status(200).json({
        message: "success",
        blog,
      });
    })
    .catch(({ message }) => {
      res.status(500).json({ message });
    });
});

const updateBlog = asyncHandler((req, res) => {
  const { id } = req.params;
  const updatedBlog = req.body;
  Blog.findByIdAndUpdate(id, updatedBlog, { new: true })
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

const deleteBlog = asyncHandler((req, res) => {
  const { id } = req.params;
  Blog.findByIdAndDelete(id)
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
