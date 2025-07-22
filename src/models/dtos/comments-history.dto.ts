import { z } from "zod";

export const commentsHistorySchema = z.object({
  observacoes: z.string()
})

export type CommentsHistoryDTO = z.infer<typeof commentsHistorySchema>
