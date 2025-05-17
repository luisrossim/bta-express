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

   
  async findById(etapaId: number) {
    const etapa = await this.etapaRepository.findById(etapaId);

    if(!etapa){
      throw new NotFoundException('Etapa não encontrada.')
    }

    return etapa;
  }


  async findRelacionamentos(){
    const relacionamentos = await this.etapaRepository.findRelacionamentos();

    if(!relacionamentos){
      throw new NotFoundException('Nenhum relacionamento encontrado.')
    }

    return relacionamentos;
  }


  async vincular(etapaId: number, usuarioIds: number[]) {
    await this.findById(etapaId);
    return await this.etapaRepository.vincularUsuario(etapaId, usuarioIds);
  }


  async findAll(){
    return await this.etapaRepository.findAll();
  }
}