import { z } from "zod";

export const associateUsersToStageSchema = z.object({
  stageId: z.number().positive(),
  usersId: z.array(z.number())
})

export type AssociateUsersToStageDTO = z.infer<typeof associateUsersToStageSchema>
