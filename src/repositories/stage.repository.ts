import { prisma } from "@/config/database.js";
import { Stage } from "@/models/stage.js";

export class StageRepository {
  private readonly repo = prisma.etapa;
  private readonly repoAssociated = prisma.etapaUsuario;


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
    const relacionamentos = await this.repoAssociated.findMany({
      include: {
        etapa: true,
        usuario: true,
      }
    });

    const agrupado: Record<number, any> = {};

    for (const rel of relacionamentos) {
      const etapaId = rel.etapa.id;

      if (!agrupado[etapaId]) {
        agrupado[etapaId] = {
          etapa: rel.etapa,
          usuarios: [],
        };
      }

      agrupado[etapaId].usuarios.push(rel.usuario);
    }

    return Object.values(agrupado);
  }


  async associateUsers(stageId: number, usersId: number[]){
    await this.repoAssociated.deleteMany({
      where: { 
        etapaId: stageId
      }
    })

    return await this.repoAssociated.createMany({
      data: usersId.map(id => ({
        etapaId: stageId,
        usuarioId: id
      }))
    })
  }
}