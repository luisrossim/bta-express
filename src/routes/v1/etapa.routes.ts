import { EtapaController } from "@/controllers/etapa.controller.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createEtapaUsuarioSchema } from "@/models/dtos/create-etapa-usuario.dto.js";
import { Router } from "express";

const router = Router();
const etapaController = new EtapaController();


router.get('/relacionamentos', async (req, res, next) => {
  await etapaController.findRelacionamentos(req, res).catch(next);
})

router.get('/', async (req, res, next) => {
  await etapaController.findAll(req, res).catch(next);
})

router.get('/:id', async (req, res, next) => {
  await etapaController.findById(req, res).catch(next);
}) 

router.post('/vincular', validate(createEtapaUsuarioSchema), async (req, res, next) => {
  await etapaController.vincularUsuario(req, res).catch(next);
})


export default router; 