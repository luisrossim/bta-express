import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.issues.map(issue => ({
      field: issue.path.join('.') || 'root',
      message: issue.message
    }));

    res.status(400).json({
      message: 'Erro de validação dos dados recebidos.',
      errors
    });
    
    return;
  }

  req.body = result.data;
  next();
};
