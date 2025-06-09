import { prisma } from "@/config/database.js";
import { UserHistoryAssignmentDTO } from "@/models/dtos/assign-user-to-history.dto.js";
import { HistoryWithIncludes } from "@/models/order-history.js";

export class OrderHistoryRepository {
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
  

  async assignUser(data: UserHistoryAssignmentDTO) {
    const now = new Date();

    const { historyId, userId } = data;

    await prisma.$transaction(async (tr) => {
      await tr.atribuicao.create({
        data: {
          historicoOsId: historyId,
          usuarioId: userId
        }
      })

      await tr.historicoOS.update({
        where: {
          id: historyId
        },
        data: {
          atualizadoEm: now
        }
      })
    })
  }


  async removeUser(data: UserHistoryAssignmentDTO) {
    const now = new Date();

    const { historyId, userId } = data;

    await prisma.$transaction(async (tr) => {
      await tr.atribuicao.delete({
        where: {
          historicoOsId_usuarioId: {
            historicoOsId: historyId,
            usuarioId: userId
          }
        }
      })

      await tr.historicoOS.update({
        where: {
          id: historyId
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


  async findByAssignment(data: UserHistoryAssignmentDTO) {
    return await prisma.atribuicao.findUnique({
      where: {
        historicoOsId_usuarioId: {
          historicoOsId: data.historyId,
          usuarioId: data.userId
        }
      }
    })
  } 
}