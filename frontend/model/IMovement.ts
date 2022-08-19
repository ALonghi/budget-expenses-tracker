export default interface IMovement {
    userId: string,
    day: number,
    month: number,
    year: number,
    amount: number,
    currency: ICurrency,
    createdAt: string,
    movementType: IMovementType
    category?: string,
    description?: string,
    updatedAt?: string
}

export enum ICurrency {
    CHF = "CHF",
    EUR = "EUR",
    USD = "USD"
}

export enum IMovementType {
    EXPENSE = "Expense",
    INCOME = "Income"
}

export const MOVEMENT_TYPES = [IMovementType.EXPENSE, IMovementType.INCOME]