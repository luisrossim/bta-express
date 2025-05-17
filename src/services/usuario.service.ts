import { NotFoundException } from "@/exceptions/not-found.js";
import { CreateUsuarioDTO } from "@/models/dtos/create-usuario.dto.js";
import { Usuario } from "@/models/usuario.js";
import { UsuarioRepository } from "@/repositories/usuario.repository.js";

export class UsuarioService {
  private readonly usuarioRepository;


  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

   
  async findById(userId: number){
    const user = await this.usuarioRepository.findById(userId);

    if(!user){
      throw new NotFoundException('Usuário não encontrado.')
    }

    return user;
  }


  async create(user: CreateUsuarioDTO) {
    return await this.usuarioRepository.create(user);
  }
  

  async update(userId: number, data: Partial<Usuario>) {
    const user = await this.findById(userId);
    const result = await this.usuarioRepository.update(userId, data);
    return result;
  }


  async findAll(){
    return await this.usuarioRepository.findAll();
  }
}