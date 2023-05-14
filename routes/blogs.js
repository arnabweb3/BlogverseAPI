import { Router } from "express";
import {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogsController.js";

const router = Router();

router.get("/blogs", getAllBlogs);
router.post("/blogs/create", createBlog);

router.route("/blogs/:id").get(getBlog).put(updateBlog).delete(deleteBlog);

export default router;
