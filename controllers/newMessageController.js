import messages from "../models/messages_db.js";

const addNewMessage = (request, response) => {
  messages.push({
    text: request.body.textMessage,
    user: request.body.userName || "Anonymous",
    added: new Date(),
  });

  response.redirect("/");
};

export default { addNewMessage };
