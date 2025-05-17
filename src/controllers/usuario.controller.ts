import { Request, Response } from "express";
import { UtilsService } from "@/utils/utils.service.js";
import { UsuarioService } from "@/services/usuario.service.js";
import { CreateUsuarioDTO } from "@/models/dtos/create-usuario.dto.js";

export class UsuarioController {
  private readonly usuarioService;


  constructor(){
    this.usuarioService = new UsuarioService();
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const idNumber = UtilsService.parseParamToValidNumber(id);
    const user = await this.usuarioService.findById(idNumber);
    
    return res.status(200).json(user);
  }


  async create(req: Request, res: Response) {
    await this.usuarioService.create(req.body);
    return res.status(201).send();
  }


  async update(req: Request, res: Response) {
    const { id } = req.params;
    const dto: CreateUsuarioDTO = req.body;

    const idNumber = UtilsService.parseParamToValidNumber(id);
    const user = await this.usuarioService.update(idNumber, dto);

    return res.status(200).json(user);
  }


  async findAll(req: Request, res: Response) {
    const users = await this.usuarioService.findAll();

    if (!users || users.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(users);
  }
}