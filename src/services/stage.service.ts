import { EntityAlreadyExistsException } from "@/exceptions/entity-already-exists.js";
import { NotFoundException } from "@/exceptions/not-found.js";
import { AssociatedDTO } from "@/models/dtos/associate-user-to-stage.dto.js";
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


  async associate(dto: AssociatedDTO) {
    await this.throwIfAssociated(dto);
    return await this.stageRepository.associate(dto);
  }


  async disassociate(dto: AssociatedDTO) {
    return await this.stageRepository.disassociate(dto);
  }


  async findAssociated(){
    const associated = await this.stageRepository.findAssociated();

    if(!associated){
      throw new NotFoundException('Nenhum relacionado encontrado.')
    }

    return associated;
  }


  async throwIfAssociated(dto: AssociatedDTO){
    const associated = await this.stageRepository.findAssociatedById(dto);

    if (associated) {
      throw new EntityAlreadyExistsException("O usuário já está vinculado ao estado.")
    }
  }
}