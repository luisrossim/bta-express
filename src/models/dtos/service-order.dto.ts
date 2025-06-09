import { z } from "zod";

export const createServiceOrderSchema = z.object({
  clienteId: z.number().positive(),
  etapaId: z.number().positive()
})

export const measurementFormSchema = z.object({
  hasAutomacao: z.boolean(),
  hasOrcamentoBanco: z.boolean(),
  hasProjetoPlantio: z.boolean(),
  quantidadeSetores: z.number()
})

export const assistanceFormSchema = z.object({
  problema: z.string(),
  tipoEnergiaId: z.number().optional().nullable(),
  motobombaId: z.number().optional().nullable(),
  polegadasValvulasRegistro: z.number().optional().nullable(),
  diametroAdutoraMestre: z.string().optional().nullable(),
  observacoes: z.string().optional().nullable()
})

export type CreateServiceOrderDTO = z.infer<typeof createServiceOrderSchema>
export type MeasurementForm = z.infer<typeof measurementFormSchema>
export type AssistanceForm = z.infer<typeof assistanceFormSchema>
