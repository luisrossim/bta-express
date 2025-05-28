import { EntityAlreadyExistsException } from "@/exceptions/entity-already-exists.js";
import { NotFoundException } from "@/exceptions/not-found.js";
import { Customer } from "@/models/customer.js";
import { CreateCustomerDTO } from "@/models/dtos/create-customer.dto.js";
import { CustomerRepository } from "@/repositories/customer.repository.js";

export class CustomerService {
  private readonly customerRepository;


  constructor() {
    this.customerRepository = new CustomerRepository();
  }


  async create(customer: CreateCustomerDTO) {
    await this.ensureCustomerCpfIsUnique(customer.cpf);
    return await this.customerRepository.create(customer);
  }


  async update(customerId: number, data: Partial<Customer>) {
    await this.findById(customerId);
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