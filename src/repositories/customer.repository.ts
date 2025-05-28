import { prisma } from "@/config/database.js";
import { CreateCustomer, Customer } from "@/models/customer.js";

export class CustomerRepository {
  private readonly repo = prisma.cliente;

  async create(data: CreateCustomer): Promise<Customer> {
    return await this.repo.create({ data })
  }

  async update(customerId: number, data: Partial<Customer>): Promise<Customer> {
    return await this.repo.update({
      where: { 
        id: customerId
      },
      data
    })
  }

  async activate(customerId: number): Promise<Customer> {
    return await this.repo.update({
      where: { 
        id: customerId
      },
      data: {
        isAtivo: true 
      }
    })
  }

  async deactivate(customerId: number): Promise<Customer> {
    return await this.repo.update({
      where: { 
        id: customerId
      },
      data: { 
        isAtivo: false 
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
        ordemServico: true,
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