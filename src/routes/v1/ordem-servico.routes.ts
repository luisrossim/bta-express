import { Router } from "express";
import { OrdemServicoController } from "@/controllers/ordem-servico.controller.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createOrdemServicoSchema } from "@/models/dtos/create-ordem-servico.dto.js";
import { createAssistenciaSchema } from "@/models/dtos/create-assistencia.dto.js";

const router = Router();
const ordemServicoController = new OrdemServicoController();


router.get('/', async (req, res, next) => {
  await ordemServicoController.findAll(req, res).catch(next);
})

router.get('/:id', async (req, res, next) => {
  await ordemServicoController.findById(req, res).catch(next);
})

router.post('/', validate(createOrdemServicoSchema), async (req, res, next) => {
  await ordemServicoController.create(req, res).catch(next);
})

router.post('/assistencia', validate(createAssistenciaSchema), async (req, res, next) => {
  await ordemServicoController.createAssistencia(req, res).catch(next);
})

router.post('/concluir-etapa/:historicoId', async (req, res, next) => {
  await ordemServicoController.concluirEtapa(req, res).catch(next);
})

router.post('/avancar-etapa/:historicoId', async (req, res, next) => {
  await ordemServicoController.avancarEtapa(req, res).catch(next);
})


export default router;