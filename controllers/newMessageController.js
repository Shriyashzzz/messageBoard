import { addMessagetoDb } from "../models/queries.js";

const addNewMessage = async (request, response) => {
  //add validation later
  const newMessage = [
    request.body.userName || "Anonymous",
    request.body.textMessage,
    `${new Date().toDateString()} || ${new Date().toLocaleTimeString()}`,
  ];
  await addMessagetoDb(newMessage);
  response.redirect("/");
};

export default { addNewMessage };
