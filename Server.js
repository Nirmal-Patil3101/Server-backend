import express from "express";
import bodyParser from "body-parser";
import { connecToDb } from "./src/db/Config.js";
import { router } from "./src/routes/Routes.js";

//create app
const app = express();

connecToDb();
//add bpdyparser to app
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hi...");
});
app.post("/add", (req, res) => {
  console.log(req.body);
  res.send("Added..");
});
app.use(router);
app.listen(5000, () => {
  console.log("Server Started..");
});
