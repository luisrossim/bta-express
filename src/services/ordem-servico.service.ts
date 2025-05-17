import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { NotFoundException } from "@/exceptions/not-found.js";
import { CreateAssistenciaDTO } from "@/models/dtos/create-assistencia.dto.js";
import { CreateOrdemServicoDTO } from "@/models/dtos/create-ordem-servico.dto.js";
import { HistoricoOS } from "@/models/historico-ordem-servico.js";
import { OrdemServicoWithIncludes } from "@/models/ordem-servico.js";
import { OrdemServicoRepository } from "@/repositories/ordem-servico.repository.js";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export class OrdemServicoService {
  private readonly ordemServicoRepository;


  constructor() {
    this.ordemServicoRepository = new OrdemServicoRepository();
  }


  async create(ordem: CreateOrdemServicoDTO) {
    return await this.ordemServicoRepository.create(ordem);
  }


  async concluirEtapa(historicoOrdemId: string){
    const historico = await this.ordemServicoRepository.findHistoricoById(historicoOrdemId);

    if(!historico){
      throw new NotFoundException('Registro não encontrado');
    }

    if(historico.concluidoEm){
      const dataFormatada = format(historico.concluidoEm, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR });
      throw new InvalidArgumentsException(`A etapa já foi concluída em: ${dataFormatada}`)
    }

    return await this.ordemServicoRepository.concluirEtapa(historicoOrdemId);
  }


  async createAssistencia(assistenciaDetails: CreateAssistenciaDTO) {
    return await this.ordemServicoRepository.createAssistencia(assistenciaDetails);
  }

   
  async findById(ordemId: string) {
    const ordem = await this.ordemServicoRepository.findOrdemById(ordemId);

    if(!ordem){
      throw new NotFoundException('Ordem de serviço não encontrada.')
    }

    return ordem;
  }


  async findAll(){
    return await this.ordemServicoRepository.findAll();
  }
}