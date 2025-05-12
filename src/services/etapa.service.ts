import { NotFoundException } from "@/exceptions/not-found.js";
import { EtapaRepository } from "@/repositories/etapa.repository.js";
import { UsuarioService } from "./usuario.service.js";

export class EtapaService {
  private readonly etapaRepository;
  private readonly usuarioService;


  constructor() {
    this.etapaRepository = new EtapaRepository();
    this.usuarioService = new UsuarioService();
  }

   
  async findById(etapaId: number){
    const etapa = await this.etapaRepository.findById(etapaId);

    if(!etapa){
      throw new NotFoundException('Etapa não encontrada.')
    }

    return etapa;
  }


  async vincular(etapaId: number, userId: number) {
    const etapa = await this.findById(etapaId);
    const usuario = await this.usuarioService.findById(userId);

    return await this.etapaRepository.vincularUsuario(etapaId, userId);
  }


  async findAll(){
    return await this.etapaRepository.findAll();
  }
}