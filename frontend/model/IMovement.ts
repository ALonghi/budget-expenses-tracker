import {z} from "zod"

const Movement = z.object({
    userId: z.string().min(1),
    day: z.number().min(1).max(31),
    month: z.number().min(1).max(12),
    year: z.number().min(2000).max(new Date().getFullYear() + 10),
    amount: z.number().min(0.01),
    currency: z.string().min(1),
    createdAt: z.string().min(1),
    movementType: z.string().min(1),
    categoryId: z.string().optional(),
    description: z.string().min(1).optional(),
    updatedAt: z.string().min(1).optional()
})

export type Movement = z.infer<typeof Movement>

export enum IMovementType {
    EXPENSE = "Expense",
    INCOME = "Income"
}

export const MOVEMENT_TYPES = [IMovementType.EXPENSE, IMovementType.INCOME]