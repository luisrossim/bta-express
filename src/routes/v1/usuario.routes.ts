import { Router } from "express";
import { UsuarioController } from "@/controllers/usuario.controller.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createUsuarioSchema } from "@/models/dtos/create-usuario.dto.js";

const router = Router();
const usuarioController = new UsuarioController();

router.get('/', async (req, res, next) => {
  await usuarioController.findAll(req, res).catch(next);
})

router.get('/:id', async (req, res, next) => {
  await usuarioController.findById(req, res).catch(next);
})

router.post('/', validate(createUsuarioSchema), async (req, res, next) => {
  await usuarioController.create(req, res).catch(next);
})

router.post('/:id', async (req, res, next) => {
  await usuarioController.update(req, res).catch(next);
})


export default router;