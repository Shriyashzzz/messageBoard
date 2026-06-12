import { Router } from "express";
import messages from "../models/messages_db.js";

const detailsRoute = Router({ mergeParams: true });

detailsRoute.post("/", (req, res) => {
  const data = messages[parseInt(req.params.messageId)];
  res.render("messagedetails", {
    message: data.text,
    username: data.user,
    date: data.added,
  });
});

export default detailsRoute;
