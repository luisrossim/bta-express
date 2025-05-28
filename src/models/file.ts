import { Anexo, Prisma } from "@prisma/client"

export type Attachment = Anexo;
export interface CreateAttach {
  historicoOsId: string
  url: string;
  tipo: string;
  descricao: string;
}