import { addMessagetoDb, getMessages } from "../models/queries.js";
import { body, validationResult, matchedData } from "express-validator";

const emptyMsgError = "You got to have something to tell the world luv <3";
const msgLengthError = "Message must be between 1 and 180 characters long <3";
const validationMessage = [
  body("userName").trim().optional({ values: "falsy" }),
  body("textMessage")
    .trim()
    .notEmpty()
    .withMessage(emptyMsgError)
    .isLength({ min: 1, max: 180 })
    .withMessage(msgLengthError),
];

const addNewMessage = [
  validationMessage,
  async (request, response) => {
    //add validation later
    const errors = validationResult(request);
    if (errors.isEmpty()) {
      console.log("no errors");
      const { userName, textMessage } = matchedData(request);
      const newMessage = [
        userName || "Anonymous",
        textMessage,
        `${new Date().toDateString()} || ${new Date().toLocaleTimeString()}`,
      ];
      await addMessagetoDb(newMessage);
      response.redirect("/");
    } else {
      const formData = {
        userName: request.body.userName,
        textMessage: request.body.textMessage,
      };
      response.status(400).render("index", {
        title: "Mini Message Board",
        messages: await getMessages(),
        errors: errors.array(),
        formData: formData,
      });
    }
  },
];

export default { addNewMessage };
