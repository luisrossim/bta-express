import { z } from "zod";

export const createOrderSchema = z.object({
  clienteId: z.number().positive(),
  etapaId: z.number().positive()
})

export const measurementSchema = z.object({
  hasAutomacao: z.boolean(),
  hasOrcamentoBanco: z.boolean(),
  hasProjetoPlantio: z.boolean(),
  quantidadeSetores: z.number()
})

export const assistanceSchema = z.object({
  problema: z.string(),
  tipoEnergiaId: z.number().optional().nullable(),
  motobombaId: z.number().optional().nullable(),
  polegadasValvulasRegistro: z.number().optional().nullable(),
  diametroAdutoraMestre: z.string().optional().nullable(),
  observacoes: z.string().optional().nullable()
})

export type CreateServiceOrderDTO = z.infer<typeof createOrderSchema>
export type Measurement = z.infer<typeof measurementSchema>
export type Assistance = z.infer<typeof assistanceSchema>
