import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_super_secreta";

type Perfil = "MORADOR" | "GESTOR";

export interface UsuarioPayload {
  id: number;
  nome: string;
  email: string;
  perfil: Perfil;
}

export interface AuthRequest extends Request {
  user?: UsuarioPayload;
}

export const autenticacaoToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(402).json({ message: "Acesso negado." });

  try {
    const decode = jwt.verify(token, JWT_SECRET) as UsuarioPayload;
    req.user = decode;
    next();
  } catch (error) {
    res.clearCookie("jwt");
    return res.status(403).json({ message: "Erro ao autenticar.", error });
  }
};

export const autorizacaoPerfil = (perfilPermitido: Perfil) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(402).json({ message: "Não está autenticado." });
    }
    if (req.user.perfil !== perfilPermitido) {
      return res.status(402).json({ message: "Acesso negado." });
    }
    next();
  };
};
