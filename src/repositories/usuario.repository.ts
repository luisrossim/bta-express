import { prisma } from "@/config/database.js";
import { Usuario, UsuarioCreateInput } from "@/models/usuario.js";

export class UsuarioRepository {
  private readonly repo = prisma.usuario;

  async create(data: UsuarioCreateInput): Promise<Usuario> {
    return await this.repo.create({ data })
  }

  async update(id: number, data: Partial<Usuario>): Promise<Usuario> {
    return await this.repo.update({
      where: { id },
      data
    })
  }

  async findAll(): Promise<Usuario[]> {
    return await this.repo.findMany({
      orderBy: { nome: "asc" }
    })
  }

  async findById(id: number): Promise<Usuario | null> {
    return await this.repo.findUnique({
      where: { id },
      include: {
        role: true,
        atribuicoes: true,
        etapaUsuario: true
      }
    })
  }

}