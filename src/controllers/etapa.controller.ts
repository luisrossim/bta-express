import { Request, Response } from "express";
import { UtilsService } from "@/utils/utils.service.js";
import { EtapaService } from "@/services/etapa.service.js";
import { CreateEtapaUsuarioDTO } from "@/models/dtos/create-etapa-usuario.dto.js";

export class EtapaController {
  private readonly etapaService;


  constructor(){
    this.etapaService = new EtapaService();
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const idNumber = UtilsService.parseParamToValidNumber(id);
    const etapa = await this.etapaService.findById(idNumber);
    
    return res.status(200).json(etapa);
  }


  async vincularUsuario(req: Request, res: Response) {
    const dto: CreateEtapaUsuarioDTO = req.body;

    await this.etapaService.vincular(dto.etapaId, dto.usuarioId);

    return res.status(200).send(); 
  }


  async findAll(req: Request, res: Response) {
    const users = await this.etapaService.findAll();

    if (!users || users.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(users);
  }
}