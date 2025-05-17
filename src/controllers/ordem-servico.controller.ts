import { Request, Response } from "express";
import { OrdemServicoService } from "@/services/ordem-servico.service.js";
import { UtilsService } from "@/utils/utils.service.js";

export class OrdemServicoController {
  private readonly ordemServicoService;


  constructor(){
    this.ordemServicoService = new OrdemServicoService();
  }


  async create(req: Request, res: Response) {
    await this.ordemServicoService.create(req.body);
    return res.status(201).send();
  }

  async concluirEtapa(req: Request, res: Response) {
    const { historicoId } = req.params;
    await this.ordemServicoService.concluirEtapa(historicoId);
    return res.status(200).send();
  }

  async createAssistencia(req: Request, res: Response) {
    await this.ordemServicoService.createAssistencia(req.body);
    return res.status(201).send();
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const ordem = await this.ordemServicoService.findById(id);
    return res.status(200).json(ordem);
  }


  async findAll(req: Request, res: Response) {
    const ordens = await this.ordemServicoService.findAll();

    if (!ordens || ordens.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(ordens);
  }
}