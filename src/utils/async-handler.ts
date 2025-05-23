import { Request, Response, NextFunction } from 'express';

// "Middleware" simples para abstrair try/catch (async/await) e propagar erros

export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};