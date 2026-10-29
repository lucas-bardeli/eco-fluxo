import prisma from "../lib/prisma.js";
import type { Request, Response } from "express";

export default class UsuarioController {
  static async create(req: Request, res: Response) {}

  static async login(req: Request, res: Response) {}

  static async logout(req: Request, res: Response) {}

  // Verificação do segundo fator
  static async verify2Fa(req: Request, res: Response) {}

  static async resetPassword(req: Request, res: Response) {}

  static async forgotPassword(req: Request, res: Response) {}
}
