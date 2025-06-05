import { prisma } from "@/config/database.js";
import { CreateUserDTO, UserDTO } from "@/models/dtos/user.dto.js";
import { User, UserOmitPassword, UserWithIncludes } from "@/models/user.js";

export class UserRepository {
  private readonly repo = prisma.usuario;

  async create(data: CreateUserDTO): Promise<User> {
    const { role, ...user } = data;

    return await this.repo.create({
      data: {
        ...user,
        role: {
          connect: {
            id: role.id
          }
        }
      }
    })
  }

  async update(id: number, data: Partial<UserDTO>): Promise<UserOmitPassword> {
    const { role, ...user } = data;

    return await this.repo.update({
      where: { id },
      data: {
        ...user,
        role: {
          connect: {
            id: role?.id
          }
        }
      },
      omit: { 
        password: true 
      }
    })
  }

  async findAll(): Promise<UserOmitPassword[]> {
    return await this.repo.findMany({
      orderBy: [
        { roleId: 'asc' },
        { nome: 'asc' }
      ],
      include: { role: true },
      omit: { password: true }
    })
  }

  async findById(id: number): Promise<UserOmitPassword | null> {
    return await this.repo.findUnique({
      where: { id },
      include: {
        role: true,
        atribuicoes: true,
        etapaUsuario: true
      },
      omit: { password: true }
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

  async deactivate(id: number): Promise<void> {
    await this.repo.update({
      where: { id },
      data: { isAtivo: false }
    })
  }
}