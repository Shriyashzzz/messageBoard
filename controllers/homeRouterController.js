import { getMessages } from "../models/queries.js";
const getAllMessages = async (request, response) => {
  const message = await getMessages();
  response.render("index", {
    title: "Mini Message Board",
    messages: message,
    errors: [],
    formData: {
      name: "",
      textMessage: "",
    },
  });
};

export default { getAllMessages };
