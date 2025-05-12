import { Router } from "express";
import { ClienteController } from "#controllers/cliente.controller.js";
import { validate } from "#middlewares/validate-dto.middleware.js";
import { createClienteSchema } from "#models/dtos/create-cliente.dto.js";

const router = Router();
const clienteController = new ClienteController();

router.get('/', async (req, res, next) => {
  await clienteController.findAll(req, res).catch(next);
})

router.get('/:id', async (req, res, next) => {
  await clienteController.findById(req, res).catch(next);
})

router.post('/', validate(createClienteSchema), async (req, res, next) => {
  await clienteController.create(req, res).catch(next);
})

router.post('/:id', async (req, res, next) => {
  await clienteController.update(req, res).catch(next);
})


export default router;