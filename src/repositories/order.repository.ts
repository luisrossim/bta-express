import { prisma } from "@/config/database.js";
import { CreateServiceOrderDTO } from "@/models/dtos/service-order.dto.js";
import { ServiceOrder, ServiceOrderWithIncludes } from "@/models/order.js";

export class OrderRepository {
  private readonly repo = prisma.ordemServico;

  async create(data: CreateServiceOrderDTO): Promise<ServiceOrder> {
    const now = new Date();

    const { etapaId, clienteId } = data;

    const res: ServiceOrder = await prisma.$transaction(async (tr) => {
      const ordemCriada = await tr.ordemServico.create({ 
        data: {
          clienteId,
          criadoEm: now
        }
      })

      await tr.historicoOS.create({
        data: {
          ordemServicoId: ordemCriada.id,
          etapaId,
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
            etapa: true,
            atribuicoes: {
              include: {
                usuario: {
                  omit: {
                    password: true
                  }
                }
              }
            }
          }
        }
      }
    })
  }


  async findById(orderId: string): Promise<Partial<ServiceOrderWithIncludes> | null> {
    return await this.repo.findUnique({
      where: { 
        id: orderId
      },
      include: { 
        cliente: {
          include: {
            endereco: true
          },
          omit: {
            enderecoId: true
          }
        },
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
                historicoOsId: true,
                usuarioId: true
              }
            }
          },
          omit: {
            etapaId: true,
            ordemServicoId: true
          }
        },
        anexos: true
      },
      omit: {
        clienteId: true
      }
    })
  }
}