import z from "zod";

export const orderFiltersSchema = z.object({
   stageId: z.coerce.number().optional(),
   userId: z.coerce.number().optional(),
   status: z.enum(["todos", "andamento", "concluida"]).optional()
})

export type OrderFilters = z.infer<typeof orderFiltersSchema>