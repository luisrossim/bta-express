import { EntityAlreadyExistsException } from "@/exceptions/entity-already-exists.js";
import { NotFoundException } from "@/exceptions/not-found.js";
import { Cliente } from "@/models/cliente.js";
import { CreateClienteDTO } from "@/models/dtos/create-cliente.dto.js";
import { ClienteRepository } from "@/repositories/cliente.repository.js";

export class ClienteService {
  private readonly clienteRepository;


  constructor() {
    this.clienteRepository = new ClienteRepository();
  }

   
  async findById(clienteId: number){
    const cliente = await this.clienteRepository.findById(clienteId);

    if(!cliente){
      throw new NotFoundException('Cliente não encontrado.')
    }

    return cliente;
  }


  async create(cliente: CreateClienteDTO) {
    const clienteExists = await this.clienteRepository.findByCpf(cliente.cpf);

    if (clienteExists) {
      throw new EntityAlreadyExistsException('O CPF já está cadastrado.')
    }

    const result = await this.clienteRepository.create(cliente);

    return result;
  }


  async update(clienteId: number, data: Partial<Cliente>) {
    const cliente = this.findById(clienteId);
    const result = await this.clienteRepository.update(clienteId, data);
    return result;
  }


  async findAll(){
    return await this.clienteRepository.findAll();
  }
}