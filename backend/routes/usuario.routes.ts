import { Router } from "express";
import {
  autenticacaoToken,
  autorizacaoPerfil,
} from "../middlewares/seguranca.js";
import UsuarioController from "../controllers/usuario.controller.js";

const usuarioRoutes = Router();

usuarioRoutes.post("/create", UsuarioController.create);
usuarioRoutes.post("/login", UsuarioController.login);
usuarioRoutes.post("/logout", UsuarioController.logout);

export default usuarioRoutes;
