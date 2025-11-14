import express from "express";
const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.send("auth");
});

authRouter.get("/register", (req, res) => {
  // Handle user registration logic
  res.send("Register");
});

export default authRouter;
