import { prisma } from "@/config/database.js";
import { OrderFilters } from "@/models/dtos/order-filters.js";
import { Assistance, CreateServiceOrderDTO, Measurement } from "@/models/dtos/order.dto.js";
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


  async measurement(id: string, values: Measurement) {
    await this.repo.update({
      where: { id },
      data: {
        hasAutomacao: values.hasAutomacao,
        hasProjetoPlantio: values.hasProjetoPlantio,
        hasOrcamentoBanco: values.hasOrcamentoBanco,
        quantidadeSetores: values.quantidadeSetores
      }
    })
  }


  async assistance(id: string, values: Assistance) {
    await this.repo.update({
      where: { id },
      data: {
        problema: values.problema,
        tipoEnergiaId: values.tipoEnergiaId,
        motobombaId: values.motobombaId,
        polegadasValvulasRegistro: values.polegadasValvulasRegistro,
        diametroAdutoraMestre: values.diametroAdutoraMestre,
        observacoes: values.observacoes
      }
    })
  }


  async findAll(filters: OrderFilters): Promise<ServiceOrderWithIncludes[]> {
    const orders = await this.repo.findMany({
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
              omit: {
                historicoOsId: true,
                usuarioId: true
              },
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

    return orders.filter(order => {
      const historico = order.historicoOs[0];

      if (filters.status === "andamento" && historico.concluidoEm !== null) return false;
      if (filters.status === "concluida" && historico.concluidoEm === null) return false;

      if (filters.stageId && filters.stageId > 0) {
        if (historico.etapa?.id !== filters.stageId) return false;
      }

      if (filters.userId && filters.userId > 0) {
        const hasUser = historico.atribuicoes.some(a => a.usuario.id === filters.userId);
        if (!hasUser) return false;
      }

      return true;
    });
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
            },
            concluidoPor: {
              omit: {
                password: true
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