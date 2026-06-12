import { Router } from "express";
import homeRouterController from "../controllers/homeRouterController.js";
const homeRouter = Router();

homeRouter.get("/", homeRouterController.getAllMessages);

export default homeRouter;
