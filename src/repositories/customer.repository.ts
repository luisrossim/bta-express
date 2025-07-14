import { prisma } from "@/config/database.js";
import { Customer } from "@/models/customer.js";
import { CustomerDTO } from "@/models/dtos/customer.dto.js";

export class CustomerRepository {
  private readonly repo = prisma.cliente;

  async create(customer: CustomerDTO): Promise<Customer> {
    const {endereco, ...data} = customer;
    return await this.repo.create({
      data: {
        ...data,
        endereco: {
          create: endereco
        }
      }
    })
  }

  async update(customerId: number, customer: Partial<CustomerDTO>): Promise<Customer> {
    const {endereco, ...data} = customer;
    return await this.repo.update({
      where: { 
        id: customerId
      },
      data: {
        ...data,
        endereco: {
          update: endereco
        }
      }
    })
  }

  async findAll(): Promise<Customer[]> {
    return await this.repo.findMany({
      orderBy: { 
        nome: "asc" 
      }
    })
  }

  async findById(customerId: number): Promise<Customer | null> {
    return await this.repo.findUnique({
      where: { 
        id: customerId
      },
      include: {
        ordemServico: {
          include: {
            historicoOs: {
              orderBy: {
                criadoEm: "desc"
              },
              take: 1,
              include: {
                etapa: true
              }
            }
          }
        },
        endereco: true
      }
    })
  }

  async findByCpf(customerCpf: string): Promise<Customer | null> {
    return await this.repo.findUnique({
      where: { 
        cpf: customerCpf
      }
    })
  }
}