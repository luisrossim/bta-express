import { prisma } from "@/config/database.js";
import { CreateServiceOrderDTO } from "@/models/dtos/create-service-order.dto.js";
import { StageEnum } from "@/models/enums/stage.enum.js";
import { ServiceOrder, ServiceOrderWithIncludes } from "@/models/service-order.js";

export class ServiceOrderRepository {
  private readonly repo = prisma.ordemServico;

  async create(data: CreateServiceOrderDTO): Promise<ServiceOrder> {
    const now = new Date();

    const { etapa, cliente, assistencia, ...order } = data;

    const res: ServiceOrder = await prisma.$transaction(async (tr) => {
      const ordemCriada = await tr.ordemServico.create({ 
        data: {
          ...order,
          clienteId: data.cliente.id,
          criadoEm: now
        }
      })

      await tr.historicoOS.create({
        data: {
          ordemServicoId: ordemCriada.id,
          etapaId: etapa.id,
          criadoEm: now
        }
      })

      if(assistencia && data.etapa.id === StageEnum.ASSISTENCIA){
        await tr.assistencia.create({
          data: {
            ordemServicoId: ordemCriada.id,
            ...assistencia
          }
        })
      }

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
            etapa: true,
            atribuicoes: {
              include: {
                usuario: true
              }
            }
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
        assistencia: true,
        historicoOs: {
          orderBy: { 
            criadoEm: 'desc' 
          },
          include: { 
            etapa: {
              include: {
                etapaUsuario: {
                  include: {
                    usuario: true
                  },
                  omit: {
                    usuarioId: true
                  }
                }
              }
            },
            atribuicoes: {
              include: {
                usuario: true
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