import type {NextPage} from 'next'
import ListOfItems from "@components/movements/ListOfItems";
import IMovement, {ICurrency, IMovementType} from "@model/IMovement";
import AddButton from "@components/movements/AddButton";


const Movements: NextPage = () => {
    const mockedMovements: IMovement[] = [
        {
            userId: "",
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 1,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 2,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 2,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 3,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 4,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 4,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 4,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 4,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        },
        {
            userId: "",
            day: new Date().getDate() - 4,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            amount: parseFloat(Math.random().toFixed(2)),
            currency: ICurrency.CHF,
            createdAt: new Date().getTime().toString(),
            movementType: IMovementType.EXPENSE,
            category: "lol",
        }
    ]
    return (
        <div className={`flex mx-auto justify-center flex-col mx-4 relative`}>
            <h1 className={`my-4 text-lg mr-auto text-white`}>Transactions</h1>
            <ListOfItems movements={mockedMovements}/>
            <AddButton />
        </div>
    )
}

export default Movements
