import { 
  Etapa as EtapaPrisma, 
  EtapaUsuario as EtapaUsuarioPrisma,
  Prisma 
} from "@prisma/client";

export type Etapa = EtapaPrisma;
export type EtapaUsuario = EtapaUsuarioPrisma;
export type EtapaUsuarioCreateInput = Prisma.EtapaUsuarioCreateInput 
