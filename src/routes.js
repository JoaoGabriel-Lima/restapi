import { Router } from "express";

const router = Router();

import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";

router.get("/", async (req, res) => {
  return res.send("Welcome to API Page, please make a post");
});

router.post("/user", UserController.createUser);

router.get("/user", UserController.getUsers);

router.get("/user/:id", UserController.getUserbyId);

router.put("/user/:id", UserController.updateUser);

router.delete("/user/:id", UserController.deleteUser);

router.get("/posts", PostController.getAllPosts);

router.post("/post/user/:id", PostController.createPost);

router.put("/post/user/update/:id", PostController.updatePost);

export { router };
