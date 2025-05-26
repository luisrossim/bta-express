import { NotFoundException } from "@/exceptions/not-found.js";
import { StageRepository } from "@/repositories/stage.repository.js";

export class StageService {
  private readonly stageRepository;


  constructor() {
    this.stageRepository = new StageRepository();
  }


  async findAll(){
    return await this.stageRepository.findAll();
  }

   
  async findById(stageId: number) {
    const stage = await this.stageRepository.findById(stageId);

    if(!stage){
      throw new NotFoundException('Etapa não encontrada.')
    }

    return stage;
  }


  async associateUsers(stageId: number, usersId: number[]) {
    await this.findById(stageId);
    return await this.stageRepository.associateUsers(stageId, usersId);
  }


  async findAssociatedUsers(){
    const associated = await this.stageRepository.findAssociated();

    if(!associated){
      throw new NotFoundException('Nenhum relacionado encontrado.')
    }

    return associated;
  }
}