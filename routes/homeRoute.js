import { Router } from "express";

const homeRouter = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

homeRouter.get("/", (request, response) => {
  response.render("index", { messages: messages });
});
export default homeRouter;
