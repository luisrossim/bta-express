import { z } from "zod";

export const associateUserToStageSchema = z.object({
  stageId: z.number().positive(),
  userId: z.number().positive(),
})

export type AssociateUserToStageDTO = z.infer<typeof associateUserToStageSchema>
