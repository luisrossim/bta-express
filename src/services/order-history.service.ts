import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { NotFoundException } from "@/exceptions/not-found.js";
import { UserHistoryAssignmentDTO } from "@/models/dtos/assign-user-to-history.dto.js";
import { StageFactory } from "@/models/stage.js";
import { OrderHistoryRepository } from "@/repositories/order-history.repository.js";
import { EntityAlreadyExistsException } from "@/exceptions/entity-already-exists.js";


export class OrderHistoryService {
  private readonly orderHistoryRepository;


  constructor() {
    this.orderHistoryRepository = new OrderHistoryRepository();
  }


  async completeStage(historyId: string){
    await this.throwIfHistoryStageComplete(historyId);
    return await this.orderHistoryRepository.completeStage(historyId);
  }

  
  async advance(historyId: string){
    const history = await this.findById(historyId);

    if(!history.concluidoEm) {
      throw new InvalidArgumentsException('A etapa precisa ser concluída antes de avançar');
    }

    const currentStage = StageFactory.create(history.etapaId);
    const nextStage = currentStage.next();

    return await this.orderHistoryRepository.create(history.ordemServicoId, nextStage.getId());
  }


  async assignUser(dto: UserHistoryAssignmentDTO) {
    await this.throwIfAssignmentExists(dto);
    await this.throwIfHistoryStageComplete(dto.historyId);
    return await this.orderHistoryRepository.assignUser(dto);
  }


  async removeUser(dto: UserHistoryAssignmentDTO) {
    await this.throwIfHistoryStageComplete(dto.historyId);
    return await this.orderHistoryRepository.removeUser(dto);
  }


  async findById(historyId: string){
    const history = await this.orderHistoryRepository.findById(historyId);

    if(!history){
      throw new NotFoundException('Histórico da ordem de serviço não encontrado');
    }

    return history;
  }


  async throwIfAssignmentExists(dto: UserHistoryAssignmentDTO){
    const assignment = await this.orderHistoryRepository.findByAssignment(dto)

    if (assignment) {
      throw new EntityAlreadyExistsException("O usuário já está atribuído à etapa.")
    }
  }


  async throwIfHistoryStageComplete(historyId: string){
    const history = await this.findById(historyId);

    if (history.concluidoEm) {
      throw new InvalidArgumentsException(`A etapa já foi concluída e não pode ser alterada.`)
    }
  }
}
