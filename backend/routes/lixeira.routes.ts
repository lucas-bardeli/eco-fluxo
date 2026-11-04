import { Router } from "express";
import LixeiraController from "../controllers/lixeira.controller.js";

const lixeiraRoutes = Router();

lixeiraRoutes.post("/", LixeiraController.create);
lixeiraRoutes.get("/", LixeiraController.findAll);

export default lixeiraRoutes;
