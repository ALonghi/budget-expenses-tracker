import {z} from "zod";

const Category = z.object({
    name: z.string().min(1),
    userId: z.string().min(1),
    description: z.string().optional(),
    createdAt: z.string().min(1),
    updatedAt: z.string().min(1).optional()
})

export type Category = z.infer<typeof Category>

