import { Router } from "express";

const router = Router();

import UserController from "./controllers/UserController";

router.get("/", async (req, res) => {
  return res.send("Welcome to API Page, please make a post");
});

router.post("/user", UserController.createUser);

router.get("/user", UserController.getUsers);

router.get("/user/:id", UserController.getUserbyId);

router.put("/user/:id", UserController.updateUser);

router.delete("/user/:id", UserController.deleteUser);

export { router };
