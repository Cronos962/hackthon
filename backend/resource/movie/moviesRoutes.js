import express from "express";
import connection from "../../db/dbUtil.js";
const movieRouter = express.Router();

movieRouter.get("/", (req, res) => {
  res.send("movies");
});

movieRouter.get("/id", async (req, res) => {
  try {
    const [results, fields] = await connection.query("SELECT * FROM movies;");

    console.log(results); // results contains rows returned by server
    console.log(fields);
    res.send(results); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
  res.send("movies id");
});

export default movieRouter;
