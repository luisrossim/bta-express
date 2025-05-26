import { prisma } from "@/config/database.js";
import { CreateCustomer, Customer } from "@/models/customer.js";

export class CustomerRepository {
  private readonly repo = prisma.cliente;

  async create(data: CreateCustomer): Promise<Customer> {
    return await this.repo.create({ data })
  }

  async update(id: number, data: Partial<Customer>): Promise<Customer> {
    return await this.repo.update({
      where: { 
        id 
      },
      data,
      include: { 
        enderecos: true 
      }
    })
  }

  async activate(id: number): Promise<Customer> {
    return await this.repo.update({
      where: { 
        id 
      },
      data: {
        isAtivo: true 
      }
    })
  }

  async deactivate(id: number): Promise<Customer> {
    return await this.repo.update({
      where: { 
        id 
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

  async findById(id: number): Promise<Customer | null> {
    return await this.repo.findUnique({
      where: { 
        id 
      },
      include: { 
        enderecos: true, 
        ordemServico: true
      }
    })
  }

  async findByCpf(cpf: string): Promise<Customer | null> {
    return await this.repo.findUnique({
      where: { 
        cpf 
      }
    })
  }
}