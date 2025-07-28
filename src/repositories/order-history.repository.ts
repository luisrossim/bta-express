import { prisma } from "@/config/database.js";
import { UserHistoryAssignmentDTO } from "@/models/dtos/assign-user-to-history.dto.js";
import { OrderHistoryWithIncludes } from "@/models/order-history.js";
import { UserWithIncludes } from "@/models/user.js";

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
  

  async completeStage(historicoId: string, user: UserWithIncludes) {
    const now = new Date();

    return await this.repo.update({
      where: { 
        id: historicoId 
      },
      data: {
        concluidoEm: now,
        concluidoPorId: user.id
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


  async comments(id: string, observacoes: string) {
    return await this.repo.update({
      where: { id },
      data: { observacoes }
    })
  }


  async findById(historicoId: string): Promise<OrderHistoryWithIncludes | null> {
    return await this.repo.findUnique({
      where: { 
        id: historicoId
      },
      include: {
        etapa: true,
        atribuicoes: {
          include: {
            usuario: true
          }
        }
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