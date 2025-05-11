import { ClienteService } from "#services/cliente.service.js";
import { Request, Response } from "express";

export class ClienteController {
  private readonly clienteService;


  constructor(){
    this.clienteService = new ClienteService();
  }


  async create(req: Request, res: Response) {
    await this.clienteService.create(req.body);
    res.status(201).send();
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const idNumber = Number(id);

    const cliente = await this.clienteService.update(idNumber, req.body);
    res.status(200).json(cliente);
  }
}