import { Router } from "express";
import {
  autenticacaoToken,
  autorizacaoPerfil,
} from "../middlewares/seguranca.js";
import EcopontoController from "../controllers/ecoponto.controller.js";

const ecopontoRoutes = Router();

ecopontoRoutes.post(
  "/",
  // autenticacaoToken,
  // autorizacaoPerfil("GESTOR"),
  (req, res) => {
    /* #swagger.tags = ['Ecopontos'] */
    /* #swagger.summary = 'Cria um ecoponto' */
    /* #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      schema: { $ref: '#/definitions/Ecoponto' }
    } */

    return EcopontoController.create(req, res);
  },
);

ecopontoRoutes.get("/", (req, res) => {
  /* #swagger.tags = ['Ecopontos'] */
  /* #swagger.summary = 'Lista os ecopontos' */

  return EcopontoController.findAll(req, res);
});

export default ecopontoRoutes;
