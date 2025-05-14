import { prisma } from "@/config/database.js";
import { Etapa } from "@/models/etapa.js";

export class EtapaRepository {
  private readonly repoEtapa = prisma.etapa;
  private readonly repoEtapaUsuario = prisma.etapaUsuario;


  async findAll(): Promise<Etapa[]> {
    return await this.repoEtapa.findMany({
      orderBy: { id: "asc" }
    })
  }


  async findById(id: number): Promise<Etapa | null> {
    return await this.repoEtapa.findUnique({
      where: { id }
    })
  }


  async findRelacionamentos(): Promise<any[]> {
    const relacionamentos = await this.repoEtapaUsuario.findMany({
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


  async vincularUsuario(etapaId: number, usuarioIds: number[]){
    await this.repoEtapaUsuario.deleteMany({
      where: { etapaId }
    })

    return await this.repoEtapaUsuario.createMany({
      data: usuarioIds.map(usuarioId => ({
        etapaId,
        usuarioId
      }))
    })
  }
}