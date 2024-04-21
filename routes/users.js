import { Router } from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/usersController.js";
import checkEmptyRequestBody from "../middlewares/validations.js";

const router = Router();

router.get("/users", getAllUsers);
router.route("/users/:id").get(getUser).put(checkEmptyRequestBody, updateUser);

export default router;
