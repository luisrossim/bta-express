import express from 'express';
import cors from 'cors';
import helmet from 'helmet'
import logger from '@/config/logger.js';
import cookieParser from 'cookie-parser';
import clienteRoutesV1 from '@/routes/v1/cliente.routes.js'
import usuarioRoutesV1 from '@/routes/v1/usuario.routes.js'
import etapaRoutesV1 from '@/routes/v1/etapa.routes.js'
import { errorHandler } from '@/middlewares/error-handler.middleware.js';

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

app.use('/api/v1/cliente', clienteRoutesV1)
app.use('/api/v1/usuario', usuarioRoutesV1)
app.use('/api/v1/etapa', etapaRoutesV1)

app.use(errorHandler);


app.listen(PORT, () => {
  logger.info(`Servidor iniciado na porta ${PORT}`);
});
