import express from "express";
import { InMemoryUserRepository } from "../persistence/InMemoryUserRepository";
import { UserService } from "../../application/services/UserService";

const app = express();
const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);

app.get("/user/:id", async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

export { app };
