import { NotFoundException } from "@/exceptions/not-found.js";
import { CreateUserDTO, UserDTO } from "@/models/dtos/user.dto.js";
import { UserRepository } from "@/repositories/user.repository.js";
import { hashPassword } from "./security/bcrypt.service.js";
import { EntityAlreadyExistsException } from "@/exceptions/entity-already-exists.js";


export class UserService {
  private readonly userRepository;


  constructor() {
    this.userRepository = new UserRepository();
  }


  async create(dto: CreateUserDTO) {
    const user = await this.findByEmail(dto.email);

    if(user){
      throw new EntityAlreadyExistsException("E-mail já cadastrado")
    }

    const hashedPassword = await hashPassword(dto.password);
    const userToCreate = { ...dto, password: hashedPassword }

    return await this.userRepository.create(userToCreate);
  }
  

  async update(userId: number, data: Partial<UserDTO>) {
    await this.findById(userId);
    return await this.userRepository.update(userId, data);
  }


  async changeStatus(userId: number){
    const user = await this.findById(userId);
    return await this.userRepository.changeStatus(user.id, !user.isAtivo);
  }


  async findAll(){
    return await this.userRepository.findAll();
  }

  
  async findById(userId: number){
    const user = await this.userRepository.findById(userId);

    if(!user){
      throw new NotFoundException('Usuário não encontrado.')
    }

    return user;
  }


  async findByEmail(email: string){
    return await this.userRepository.findByEmail(email);
  }
}