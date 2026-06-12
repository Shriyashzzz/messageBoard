import { response, Router } from "express";
import newMessageController from "../controllers/newMessageController.js";
const newMessageRouter = Router();

newMessageRouter.post("/", newMessageController.addNewMessage);

export default newMessageRouter;
