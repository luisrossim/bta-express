import { prisma } from "@/config/database.js";
import { CreateAssistenciaDTO } from "@/models/dtos/create-assistencia.dto.js";
import { CreateOrdemServicoDTO } from "@/models/dtos/create-ordem-servico.dto.js";
import { HistoricoOS } from "@/models/historico-ordem-servico.js";
import { OrdemServico, OrdemServicoWithIncludes } from "@/models/ordem-servico.js";

export class OrdemServicoRepository {
  private readonly repoOrdem = prisma.ordemServico;
  private readonly repoAssistencia = prisma.assistencia;
  private readonly repoHistorico = prisma.historicoOS;


  async create(data: CreateOrdemServicoDTO): Promise<OrdemServico> {
    const now = new Date();

    const { etapaId, ...ordem } = data;

    const result: OrdemServico = await prisma.$transaction(async (tr) => {
      const ordemCriada = await tr.ordemServico.create({ 
        data: {
          ...ordem,
          criadoEm: now
        }
      })

      await tr.historicoOS.create({
        data: {
          ordemServicoId: ordemCriada.id,
          etapaId: etapaId,
          criadoEm: now
        }
      })

      return ordemCriada;
    })
    return result;
  }


  async concluirEtapa(historicoOrdemId: string) {
    const now = new Date();

    return await this.repoHistorico.update({
      where: { 
        id: historicoOrdemId 
      },
      data: {
        concluidoEm: now
      }
    })
  }


  async createAssistencia(data: CreateAssistenciaDTO) {
    return await this.repoAssistencia.create({ data })
  }


  async findAll(): Promise<OrdemServico[]> {
    return await this.repoOrdem.findMany({
      orderBy: { criadoEm: 'desc' },
      include: { 
        cliente: true,
        historicoOs: {
          orderBy: { criadoEm: 'desc' }
        }
      }
    })
  }


  async findHistoricoById(historicoId: string): Promise<HistoricoOS | null> {
    return await this.repoHistorico.findUnique({
      where: { 
        id: historicoId
      }
    })
  }


  async findOrdemById(ordemId: string): Promise<OrdemServicoWithIncludes | null> {
    return await this.repoOrdem.findUnique({
      where: { 
        id: ordemId
      },
      include: { 
        cliente: true,
        assistencia: true,
        historicoOs: {
          orderBy: { criadoEm: 'desc' },
          include: { etapa: true }
        }
      }
    })
  }
}