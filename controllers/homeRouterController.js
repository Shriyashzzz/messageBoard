import messages from "../models/messages_db.js";

const getAllMessages = (request, response) => {
  response.render("index", { title: "Mini Message Board", messages: messages });
};

export default { getAllMessages };
