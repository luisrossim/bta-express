import { EntityAlreadyExistsException } from "@/exceptions/entity-already-exists.js";
import { NotFoundException } from "@/exceptions/not-found.js";
import { CustomerDTO } from "@/models/dtos/customer.dto.js";
import { CustomerRepository } from "@/repositories/customer.repository.js";

export class CustomerService {
  constructor(private customerRepository: CustomerRepository){}


  async create(customer: CustomerDTO) {
    await this.ensureCustomerCpfIsUnique(customer.cpf);
    return await this.customerRepository.create(customer);
  }


  async update(customerId: number, data: CustomerDTO) {
    const customer = await this.findById(customerId);

    if(customer.cpf != data.cpf) {
      await this.ensureCustomerCpfIsUnique(data.cpf);
    }

    return await this.customerRepository.update(customerId, data);
  }


  async findById(customerId: number){
    const customer = await this.customerRepository.findById(customerId);

    if(!customer){
      throw new NotFoundException('Cliente não encontrado.')
    }

    return customer;
  }


  async findAll(){
    return await this.customerRepository.findAll();
  }


  async ensureCustomerCpfIsUnique(customerCpf: string) {
    const customer = await this.customerRepository.findByCpf(customerCpf);

    if (customer) {
      throw new EntityAlreadyExistsException('O CPF já está cadastrado.');
    }
  }
}