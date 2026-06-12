import { response, Router } from "express";
import messages from "../models/messages_db.js";

const newMessageRouter = Router();

newMessageRouter.post("/", (request, response) => {
  messages.push({
    text: request.body.textMessage,
    user: request.body.userName,
    added: new Date(),
  });

  response.redirect("/");
});

export default newMessageRouter;
