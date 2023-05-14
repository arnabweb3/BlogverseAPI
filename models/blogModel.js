import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  content: String,
  tags: [],
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
