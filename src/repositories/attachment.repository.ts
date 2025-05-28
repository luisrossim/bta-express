import { prisma } from "@/config/database.js";
import { CreateAttach } from "@/models/attachment.js";

export class AttachmentRepository {
  private readonly repo = prisma.anexo;

  constructor(){}

  async create(data: CreateAttach): Promise<any> {
    return await this.repo.create({ data })
  }

  async findById(id: string){
    return await this.repo.findUnique({
      where: {
        id
      }
    })
  }
}