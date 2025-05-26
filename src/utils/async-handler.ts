import { Request, Response, NextFunction, RequestHandler } from 'express';

// "Middleware" simples para abstrair try/catch (async/await) e propagar erros

export const asyncHandler =
(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };