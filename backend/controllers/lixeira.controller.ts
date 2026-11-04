import prisma from "../lib/prisma.js";
import type { Request, Response } from "express";
import { Tipo } from "@prisma/client";

interface LixeiraBody {
  ecoponto_id: number;
  uuid_sensor: string;
  tipo: Tipo;
  volume_max: number;
  nivel_cheio: number;
}

export default class LixeiraController {
  static async create(req: Request<{}, {}, LixeiraBody>, res: Response) {
    const { ecoponto_id, uuid_sensor, tipo, volume_max, nivel_cheio } =
      req.body;

    if (
      !ecoponto_id ||
      ecoponto_id <= 0 ||
      !uuid_sensor.trim() ||
      !Object.values(Tipo).includes(tipo) ||
      !volume_max ||
      !nivel_cheio
    ) {
      return res.status(400).json({ message: "Dados da lixeira inválidos." });
    }

    const lixeira = await prisma.lixeira.create({
      data: { ecoponto_id, uuid_sensor, tipo, volume_max, nivel_cheio },
    });

    return res.status(201).json(lixeira);
  }

  static async findAll(_req: Request, res: Response) {
    const lixeiras = await prisma.lixeira.findMany({
      include: { ecoponto: true },
      orderBy: { criado_em: "desc" },
    });

    return res.status(200).json(lixeiras);
  }
}
