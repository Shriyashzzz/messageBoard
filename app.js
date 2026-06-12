import express from "express";
import path from "node:path";
import homeRouter from "./routes/homeRoute.js";

const app = express();
const port = process.env.PORT || 8080;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use("/", homeRouter);

app.listen(port, () => {
  `server running on https//:localhost:${port} `;
});
