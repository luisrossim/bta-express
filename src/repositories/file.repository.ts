import { prisma } from "@/config/database.js";
import { CreateAttach } from "@/models/file.js";

export class FileRepository {
  private readonly repo = prisma.anexo;

  constructor(){}

  async create(data: CreateAttach): Promise<any> {
    return await this.repo.create({ data })
  }
}