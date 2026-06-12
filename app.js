import express from "express";
import path from "node:path";
import homeRouter from "./routes/homeRoute.js";
import newMessageRouter from "./routes/newMessageRouter.js";
import detailsRoute from "./routes/detailsRoute.js";

const app = express();
const port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
const assetPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetPath));

app.use("/", homeRouter);
app.use("/new", newMessageRouter);
app.use("/message/:messageId", detailsRoute);

app.listen(port, () => {
  console.log(`server running on https//:localhost:${port} `);
});
