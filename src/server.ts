import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import logger from '#config/logger.js';
import cookieParser from 'cookie-parser';
import v1ClienteRoutes from '#routes/v1/cliente.routes.js'
import { errorHandler } from '#middlewares/error-handler.middleware.js';

const app = express();
const PORT = 3000;

app.set('trust proxy', 1);

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/cliente', v1ClienteRoutes)

app.use(errorHandler);


app.listen(PORT, () => {
  logger.info(`Servidor iniciado na porta ${PORT}`);
});
