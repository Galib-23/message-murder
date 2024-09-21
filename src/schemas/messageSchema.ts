import { z } from "zod";

export const messageSchema = z.object({
  content: z.string().min(10, {message: "content must be 10 chars"}).max(300, "conent cant be no longer than 300 chars")
});
