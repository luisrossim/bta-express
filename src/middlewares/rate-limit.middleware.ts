import rateLimit from 'express-rate-limit';
import logger from '../config/logger.js';
import { Request, Response } from 'express';

const cleanIp = (req: Request) => req.ip?.replace(/^::ffff:/, '').split(':')[0] || '';

const keyGenerator = (req: Request) => cleanIp(req);

const handler = (req: Request, res: Response) => {
  const ip = cleanIp(req);
  logger.warn(`Limite de requisições atingido para o IP ${ip}.`);
  res.status(429).json({ message: 'Realizou muitas requisições, tente novamente mais tarde.' });
};

export const generalRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator,
  handler,
});

export const restrictRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator,
  handler,
});
