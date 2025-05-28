import { Anexo } from "@prisma/client"

export type Attachment = Anexo;

export interface AttachmentWithSignedUrl extends Attachment {
  url_temporaria: string
}

export interface CreateAttach {
  ordemServicoId: string
  url: string;
  tipo: string;
  descricao: string;
}