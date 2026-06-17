import { queryMessageFormId } from "../models/queries.js";
const getMessageDetails = async (req, res) => {
  const retrievedMessage = await queryMessageFormId([
    parseInt(req.params.messageId),
  ]);
  console.log(retrievedMessage);
  res.render("messagedetails", {
    message: retrievedMessage.text,
    username: retrievedMessage.user_name,
    date: retrievedMessage.added,
  });
};

export default { getMessageDetails };
