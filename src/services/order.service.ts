import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { NotFoundException } from "@/exceptions/not-found.js";
import { Assistance, CreateServiceOrderDTO, Measurement } from "@/models/dtos/order.dto.js";
import { bucketName, client, getSignedUrl } from "@/config/s3client.js";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { CustomError } from "@/exceptions/custom-error.js";
import { AttachmentWithSignedUrl, CreateAttach } from "@/models/attachment.js";
import { AttachmentRepository } from "@/repositories/attachment.repository.js";
import { OrderRepository } from "@/repositories/order.repository.js";
import { OrderFilters } from "@/models/dtos/order-filters.js";
import { JwtPayload } from "jsonwebtoken";
import { UserWithIncludes } from "@/models/user.js";
import { AtribuicaoComUsuario } from "@/models/order-history.js";
import { UserService } from "./user.service.js";

export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private attachmentRepository: AttachmentRepository,
    private userService: UserService
  ){}


  async create(ordem: CreateServiceOrderDTO) {
    return await this.orderRepository.create(ordem);
  }


  async findById(orderId: string) {
    const result = await this.orderRepository.findById(orderId);

    if(!result){
      throw new NotFoundException('Ordem de serviço não encontrada.')
    }

    return result;
  }


  async findAll(filters: OrderFilters){
    return await this.orderRepository.findAll(filters);
  }


  async measurement(orderId: string, dto: Measurement){
    await this.findById(orderId);
    return await this.orderRepository.measurement(orderId, dto);
  }


  async assistance(orderId: string, dto: Assistance){
    await this.findById(orderId);
    return await this.orderRepository.assistance(orderId, dto);
  }


  async attachFile(orderId: string, file: any, requestUser: JwtPayload){
    const atribuicoes = await this.orderRepository.findLatestHistoryUsersByOrderId(orderId);
    const user = await this.userService.findByEmail(requestUser.login);

    this.throwIfAssignmentIsInvalid(atribuicoes , user);

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
      ordemServicoId: orderId,
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


  throwIfAssignmentIsInvalid(atribuicoes: AtribuicaoComUsuario[], userRequest: UserWithIncludes) {
    const isAssigned = atribuicoes.some(
      attr => attr.usuario?.id === userRequest.id
    );

    const isAdmin = userRequest.role.descricao === 'Admin';

    if (!isAssigned && !isAdmin) {
      throw new InvalidArgumentsException('Somente atribuídos ou administradores podem realizar essa ação.');
    }
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