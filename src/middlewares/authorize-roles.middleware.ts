import logger from "@/config/logger.js";
import { Request, Response, NextFunction } from "express";

export function authorizeRoles(allowedRoles: Array<"Admin" | "Técnico" | "Assistente">) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip?.replace(/^::ffff:/, '');
    const user = (req as any).user;

    if (!user || !allowedRoles.includes(user.role)) {
      logger.warn(`Acesso negado [IP: ${ip}].`)
      res.status(403).json({ message: "Acesso negado" });
      return;
    }

    next();
  };
}
