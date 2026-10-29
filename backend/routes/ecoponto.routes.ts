import { Router } from "express";
import {
  autenticacaoToken,
  autorizacaoPerfil,
} from "../middlewares/seguranca.js";
import EcopontoController from "../controllers/ecoponto.controller.js";

const ecopontoRoutes = Router();

ecopontoRoutes.post(
  "/",
  autenticacaoToken,
  autorizacaoPerfil("GESTOR"),
  EcopontoController.create,
);

export default ecopontoRoutes;
