import { prisma } from "@/config/database.js";
import { AssociatedUsers, Stage, UserStage } from "@/models/stage.js";

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


  async findAssociated(): Promise<any[]> {
    const relacionamentos = await prisma.etapaUsuario.findMany({
      include: {
        etapa: true,
        usuario: true,
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


  async associateUsers(stageId: number, data: UserStage[]){
    await prisma.$transaction(async (tr) => {
      await tr.etapaUsuario.deleteMany({
        where: {
          etapaId: stageId
        }
      })

      await tr.etapaUsuario.createMany({ data })
    })
  }
}