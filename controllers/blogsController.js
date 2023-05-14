import asyncHandler from "express-async-handler";
import blogs from "../data/blogs.js";

let { blogPosts } = blogs;

const getAllBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "success",
    blogPosts,
  });
});

const getBlog = asyncHandler((req, res) => {
  const { id } = req.params;
  const blog = blogPosts[id - 1];
  if (!blog) return res.status(404).json({ message: "No match found" });
  res.status(200).json({
    message: "success",
    blog,
  });
});

const createBlog = asyncHandler((req, res) => {
  const newBlog = req.body;
  blogPosts = [...blogPosts, newBlog];
  res.status(200).json({
    message: "success",
    blogPosts,
  });
});

const updateBlog = asyncHandler((req, res) => {
  const { id } = req.params;
  const updatedBlog = req.body;
  blogPosts[id - 1] = updatedBlog;
  res.status(200).json({
    message: "success",
    blogPosts,
  });
});

const deleteBlog = asyncHandler((req, res) => {
  const { id } = req.params;
  blogPosts.splice(id - 1, 1);
  res.status(200).json({
    message: "success",
    blogPosts,
  });
});
export { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog };
