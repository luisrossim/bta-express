import { prisma } from "@/config/database.js";
import { Cliente, ClienteCreateInput } from "@/models/cliente.js";

export class ClienteRepository {
  private readonly repo = prisma.cliente;

  async create(data: ClienteCreateInput): Promise<Cliente> {
    return await this.repo.create({ data })
  }

  async update(id: number, data: Partial<Cliente>): Promise<Cliente> {
    return await this.repo.update({
      where: { id },
      data,
      include: { enderecos: true }
    })
  }

  async deactivate(id: number): Promise<Cliente> {
    return await this.repo.update({
      where: { id },
      data: { isAtivo: false }
    })
  }

  async activate(id: number): Promise<Cliente> {
    return await this.repo.update({
      where: { id },
      data: { isAtivo: true }
    })
  }

  async findAll(): Promise<Cliente[]> {
    return await this.repo.findMany({
      orderBy: { nome: "asc" }
    })
  }

  async findById(id: number): Promise<Cliente | null> {
    return await this.repo.findUnique({
      where: { id },
      include: { 
        enderecos: true, 
        ordemServico: true
      }
    })
  }

  async findByCpf(cpf: string): Promise<Cliente | null> {
    return await this.repo.findUnique({
      where: { cpf }
    })
  }
}