import { Router } from "express";
import detailsController from "../controllers/detailsController.js";
const detailsRoute = Router({ mergeParams: true });

detailsRoute.post("/", detailsController.getMessageDetails);

export default detailsRoute;
