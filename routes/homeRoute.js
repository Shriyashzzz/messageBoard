import { Router } from "express";
import messages from "../models/messages_db.js";
const homeRouter = Router();

homeRouter.get("/", (request, response) => {
  response.render("index", { title: "Mini Message Board", messages: messages });
});
export default homeRouter;
