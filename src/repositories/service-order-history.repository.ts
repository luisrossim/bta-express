import { prisma } from "@/config/database.js";
import { AssignUserToHistoryDTO } from "@/models/dtos/assign-user-to-history.dto.js";
import { HistoryWithIncludes } from "@/models/service-order-history.js";

export class ServiceOrderHistoryRepository {
  private readonly repo = prisma.historicoOS;


  async create(ordemServicoId: string, etapaId: number) {
    return await this.repo.create({
      data: {
        ordemServicoId,
        etapaId
      }
    })
  }
  

  async completeStage(historicoId: string) {
    const now = new Date();

    return await this.repo.update({
      where: { 
        id: historicoId 
      },
      data: {
        concluidoEm: now
      }
    })
  }
  

  async assignUserToHistory(data: AssignUserToHistoryDTO) {
    const now = new Date();

    await prisma.$transaction(async (tr) => {
      await tr.atribuicao.deleteMany({
        where: {
          historicoOsId: data.historyId
        }
      })

      await tr.atribuicao.create({
        data: {
          historicoOsId: data.historyId,
          usuarioId: data.userId
        }
      })

      await tr.historicoOS.update({
        where: {
          id: data.historyId
        },
        data: {
          atualizadoEm: now
        }
      })
    })
  }


  async findById(historicoId: string): Promise<HistoryWithIncludes | null> {
    return await this.repo.findUnique({
      where: { 
        id: historicoId
      },
      include: {
        etapa: true
      }
    })
  }
}