import { Router } from "express";
import { ClienteController } from "#controllers/cliente.controller.js";
import { validate } from "#middlewares/validate-dto.middleware.js";
import { createClienteDTO } from "#models/dtos/create-cliente.dto.js";

const router = Router();
const clienteController = new ClienteController();


router.post('/', validate(createClienteDTO), async (req, res, next) => {
  await clienteController.create(req, res).catch(next);
})

router.post('/:id', async (req, res, next) => {
  await clienteController.update(req, res).catch(next);
})


export default router;