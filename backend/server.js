import express from "express";
import authRouter from "./auth/authRouter.js";
import movieRouter from "./resource/movie/moviesRoutes.js";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/movies", movieRouter);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(3000, () => {
  console.log("Listening to port 3000.");
});
