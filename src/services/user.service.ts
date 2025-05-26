import { NotFoundException } from "@/exceptions/not-found.js";
import { CreateUserDTO } from "@/models/dtos/create-user.dto.js";
import { User } from "@/models/user.js";
import { UserRepository } from "@/repositories/user.repository.js";

export class UserService {
  private readonly userRepository;


  constructor() {
    this.userRepository = new UserRepository();
  }

   
  async findById(userId: number){
    const user = await this.userRepository.findById(userId);

    if(!user){
      throw new NotFoundException('Usuário não encontrado.')
    }

    return user;
  }


  async create(user: CreateUserDTO) {
    return await this.userRepository.create(user);
  }
  

  async update(userId: number, data: Partial<User>) {
    await this.findById(userId);
    return await this.userRepository.update(userId, data);
  }


  async findAll(){
    return await this.userRepository.findAll();
  }
}