import { Router } from "express";
import LixeiraController from "../controllers/lixeira.controller.js";

const lixeiraRoutes = Router();

lixeiraRoutes.post("/", (req, res) => {
  /* #swagger.tags = ['Lixeiras'] */
  /* #swagger.summary = 'Cria uma lixeira' */
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: { $ref: '#/definitions/Lixeira' }
  } */

  return LixeiraController.create(req, res);
});

lixeiraRoutes.get("/", (req, res) => {
  /* #swagger.tags = ['Lixeiras'] */
  /* #swagger.summary = 'Lista as lixeiras' */

  return LixeiraController.findAll(req, res);
});

export default lixeiraRoutes;
