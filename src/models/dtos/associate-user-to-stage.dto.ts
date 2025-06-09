import { z } from "zod";

export const associatedSchema = z.object({
  stageId: z.number().positive(),
  userId: z.number().positive(),
})

export type AssociatedDTO = z.infer<typeof associatedSchema>
