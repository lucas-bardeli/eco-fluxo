import prisma from "../lib/prisma.js";
import type { Request, Response } from "express";

interface EcopontoBody {
  nome: string;
  latitude: string;
  longitude: string;
  descricao?: string | null;
  cep?: string | null;
  logradouro?: string | null;
  numero?: string | null;
  bairro?: string | null;
  cidade?: string | null;
  uf?: string | null;
  nota?: number | null;
}

export default class EcopontoController {
  static async create(req: Request<{}, {}, EcopontoBody>, res: Response) {
    const {
      nome,
      latitude,
      longitude,
      descricao,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
      uf,
      nota,
    } = req.body;

    if (!nome.trim() || !latitude.trim() || !longitude.trim()) {
      return res
        .status(400)
        .json({ message: "Dados obrigatórios do Ecoponto inválidos." });
    }

    const ecoponto = await prisma.ecoponto.create({
      data: {
        nome,
        latitude,
        longitude,
        descricao,
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
        uf,
        nota,
      },
    });

    return res.status(201).json(ecoponto);
  }

  static async findAll(_req: Request, res: Response) {
    const ecopontos = await prisma.ecoponto.findMany({
      include: { lixeiras: true },
      orderBy: { criado_em: "desc" },
    });

    return res.status(200).json(ecopontos);
  }
}
