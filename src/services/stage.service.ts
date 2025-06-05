import { NotFoundException } from "@/exceptions/not-found.js";
import { AssociateUserToStageDTO } from "@/models/dtos/associate-user-to-stage.dto.js";
import { UserStage } from "@/models/stage.js";
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


  async associateUser(dto: AssociateUserToStageDTO) {
    await this.findById(dto.stageId);
    return await this.stageRepository.associateUser(dto);
  }


  async disassociateUser(dto: AssociateUserToStageDTO) {
    return await this.stageRepository.disassociateUser(dto);
  }


  async findAssociatedUsers(){
    const associated = await this.stageRepository.findAssociated();

    if(!associated){
      throw new NotFoundException('Nenhum relacionado encontrado.')
    }

    return associated;
  }
}