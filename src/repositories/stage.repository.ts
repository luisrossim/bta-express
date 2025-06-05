import { prisma } from "@/config/database.js";
import { AssociateUserToStageDTO } from "@/models/dtos/associate-user-to-stage.dto.js";
import { AssociatedUsers, Stage } from "@/models/stage.js";

export class StageRepository {
  private readonly repo = prisma.etapa;


  async findAll(): Promise<Stage[]> {
    return await this.repo.findMany({
      orderBy: { id: "asc" }
    })
  }


  async findById(id: number): Promise<Stage | null> {
    return await this.repo.findUnique({
      where: { id }
    })
  }


  async findAssociated(): Promise<AssociatedUsers[]> {
    const relacionamentos = await prisma.etapaUsuario.findMany({
      include: {
        etapa: true,
        usuario: {
          select: {
            id: true,
            nome: true,
            role: true
          }
        }
      },
      orderBy: {
        etapaId: "asc"
      }
    });

    const agrupado = new Map<number, AssociatedUsers>();

    for (const rel of relacionamentos) {
      const etapaId = rel.etapa.id;

      if (!agrupado.has(etapaId)) {
        agrupado.set(etapaId, {
          stageId: etapaId,
          users: []
        })
      }

      agrupado.get(etapaId)!.users.push(rel.usuario)
    }

    return Array.from(agrupado.values())
  }


  async associateUser(data: AssociateUserToStageDTO){
    await prisma.etapaUsuario.create({
      data: {
        etapaId: data.stageId,
        usuarioId: data.userId
      }
    })
  }

  async disassociateUser(data: AssociateUserToStageDTO){
    await prisma.etapaUsuario.delete({
      where: {
        etapaId_usuarioId: {
          etapaId: data.stageId,
          usuarioId: data.userId
        }
      }
    })
  }
}