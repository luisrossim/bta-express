import { prisma } from "@/config/database.js";
import { User, CreateUser, UserWithIncludes } from "@/models/user.js";

export class UserRepository {
  private readonly repo = prisma.usuario;

  async create(data: CreateUser): Promise<User> {
    return await this.repo.create({ data })
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    return await this.repo.update({
      where: { id },
      data
    })
  }

  async findAll(): Promise<User[]> {
    return await this.repo.findMany({
      orderBy: { roleId: 'asc' },
      include: { role: true }
    })
  }

  async findById(id: number): Promise<User | null> {
    return await this.repo.findUnique({
      where: { id },
      include: {
        role: true,
        atribuicoes: true,
        etapaUsuario: true
      }
    })
  }

  async findByEmail(email: string): Promise<UserWithIncludes | null> {
    return await this.repo.findUnique({
      where: {
        email
      },
      include: {
        role: true
      }
    })
  }
}