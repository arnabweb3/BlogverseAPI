import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    content: String,
    tags: [],
  },
  { versionKey: false }
);
blogSchema.set("timestamps", true);
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
