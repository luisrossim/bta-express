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

  async vincularUsuario(etapaId: number, usuarioId: number){
    return await this.repoEtapaUsuario.create({
      data : {
        etapaId,
        usuarioId
      }
    })
  }

}