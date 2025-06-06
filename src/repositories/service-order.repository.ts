import { prisma } from "@/config/database.js";
import { CreateServiceOrderDTO } from "@/models/dtos/create-service-order.dto.js";
import { StageEnum } from "@/models/enums/stage.enum.js";
import { ServiceOrder, ServiceOrderWithIncludes } from "@/models/service-order.js";

export class ServiceOrderRepository {
  private readonly repo = prisma.ordemServico;

  async create(data: CreateServiceOrderDTO): Promise<ServiceOrder> {
    const now = new Date();

    const { etapaId, ...info } = data;

    const res: ServiceOrder = await prisma.$transaction(async (tr) => {
      const ordemCriada = await tr.ordemServico.create({ 
        data: {
          ...info,
          criadoEm: now
        }
      })

      await tr.historicoOS.create({
        data: {
          ordemServicoId: ordemCriada.id,
          etapaId: etapaId,
          observacoes: "Ordem de serviço criada",
          criadoEm: now
        }
      })

      return ordemCriada;
    })
    return res;
  }


  async findAll(): Promise<ServiceOrderWithIncludes[]> {
    return await this.repo.findMany({
      orderBy: { 
        criadoEm: 'desc'
      },
      include: { 
        cliente: true,
        historicoOs: {
          orderBy: { 
            criadoEm: 'desc'
          },
          take: 1,
          include: {
            etapa: true
          }
        }
      }
    })
  }


  async findById(ordemId: string): Promise<ServiceOrderWithIncludes | null> {
    return await this.repo.findUnique({
      where: { 
        id: ordemId
      },
      include: { 
        cliente: {
          include: {
            endereco: true
          }
        },
        anexos: true,
        historicoOs: {
          orderBy: { 
            criadoEm: 'desc' 
          },
          include: { 
            etapa: {
              include: {
                etapaUsuario: {
                  include: {
                    usuario: {
                      omit: {
                        password: true
                      }
                    }
                  },
                  omit: {
                    usuarioId: true
                  }
                }
              }
            },
            atribuicoes: {
              include: {
                usuario: {
                  omit: {
                    password: true
                  }
                }
              },
              omit: {
                usuarioId: true
              }
            }
          }
        }
      }
    })
  }
}