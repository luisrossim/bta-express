import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { NotFoundException } from "@/exceptions/not-found.js";
import { AssignUserToHistoryDTO } from "@/models/dtos/assign-user-to-history.dto.js";
import { CreateServiceOrderDTO } from "@/models/dtos/create-service-order.dto.js";
import { StageFactory } from "@/models/stage.js";
import { ServiceOrderHistoryRepository } from "@/repositories/service-order-history.repository.js";
import { ServiceOrderRepository } from "@/repositories/service-order.repository.js";
import { UtilsService } from "@/utils/utils.service.js";
import { bucketName, client, getSignedUrl } from "@/config/s3client.js";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { CustomError } from "@/exceptions/custom-error.js";
import { AttachmentWithSignedUrl, CreateAttach } from "@/models/attachment.js";
import { AttachmentRepository } from "@/repositories/attachment.repository.js";

export class ServiceOrderService {
  private readonly serviceOrderRepository;
  private readonly historyRepository;
  private readonly attachmentRepository;


  constructor() {
    this.serviceOrderRepository = new ServiceOrderRepository();
    this.historyRepository = new ServiceOrderHistoryRepository();
    this.attachmentRepository = new AttachmentRepository();
  }


  async create(ordem: CreateServiceOrderDTO) {
    return await this.serviceOrderRepository.create(ordem);
  }


  async completeStage(historyId: string){
    const history = await this.findHistoryById(historyId);

    if(history.concluidoEm){
      const formattedDate = UtilsService.formatDateToPTBR(history.concluidoEm);
      throw new InvalidArgumentsException(`A etapa já foi concluída em: ${formattedDate}`)
    }

    return await this.historyRepository.completeStage(historyId);
  }

  
  async nextStage(historyId: string){
    const history = await this.findHistoryById(historyId);

    if(!history.concluidoEm) {
      throw new InvalidArgumentsException('A etapa precisa ser concluída antes de avançar');
    }

    const currentStage = StageFactory.create(history.etapaId);
    const nextStage = currentStage.next();

    return await this.historyRepository.create(history.ordemServicoId, nextStage.getId());
  }


  async assignUserToHistory(dto: AssignUserToHistoryDTO) {
    const history = await this.findHistoryById(dto.historyId);

    if(history.concluidoEm){
      throw new InvalidArgumentsException(`A etapa já foi concluída e não pode ser alterada.`)
    }

    return await this.historyRepository.assignUserToHistory(dto);
  }


  async attachFile(id: string, file: any){
    if (!this.fileTypeIsValid(file)){
      throw new InvalidArgumentsException("Apenas arquivos .jpg, .png ou .pdf são permitidos.");
    }

    if (!this.fileSizeIsValid(file)) {
      throw new InvalidArgumentsException("A imagem excede o tamanho máximo permitido de 5 MB");
    }

    const randomImageKey = crypto.randomUUID();

    const params = {
      Bucket: bucketName,
      Key: randomImageKey,
      Body: file.buffer,
      ContentType: file.mimetype
    }

    const command = new PutObjectCommand(params);

    try {
      await client.send(command);
    } catch(err: any) {
      throw new CustomError("Erro ao salvar arquivo no bucket.")
    }

    const attach: CreateAttach = {
      ordemServicoId: id,
      url: randomImageKey,
      tipo: file.mimetype,
      descricao: file.originalname,
    }

    await this.attachmentRepository.create(attach);
  }


  async getSignedUrlToAttachment(attachmentId: string): Promise<AttachmentWithSignedUrl> {
    const attachment = await this.attachmentRepository.findById(attachmentId);

    if(!attachment){
      throw new NotFoundException("Anexo não encontrado");
    }

    const getObjectParams = {
      Bucket: bucketName,
      Key: attachment.url
    }

    const command = new GetObjectCommand(getObjectParams);
    const signedUrl = await getSignedUrl(client, command, { expiresIn: 3600 });

    return {
      ...attachment,
      url_temporaria: signedUrl
    }
  }

   
  async findServiceOrderById(serviceOrderId: string) {
    const result = await this.serviceOrderRepository.findById(serviceOrderId);

    if(!result){
      throw new NotFoundException('Ordem de serviço não encontrada.')
    }

    return result;
  }


  async findHistoryById(historyId: string){
    const history = await this.historyRepository.findById(historyId);

    if(!history){
      throw new NotFoundException('Histórico da ordem de serviço não encontrado');
    }

    return history;
  }


  async findAll(){
    return await this.serviceOrderRepository.findAll();
  }


  fileTypeIsValid(file: any): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    return allowedTypes.includes(file.mimetype);
  }

  fileSizeIsValid(file: any): boolean {
    const maxSizeInBytes = 5 * 1024 * 1024;
    return file.size <= maxSizeInBytes;
  }
}