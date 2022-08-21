import type {NextPage} from 'next'
import ListOfItems from "@components/movements/ListOfItems";
import IMovement, {ICurrency, IMovementType} from "@model/IMovement";
import AddButton from "@components/movements/AddButton";
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/outline'
import {useEffect, useState} from "react";

const mockedMovements = [
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

const Movements: NextPage = () => {
    const [movements, setMovements] = useState<IMovement[]>([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        Promise
            .resolve()
            .then(() => setMovements(mockedMovements))
            .then(() => setLoading(false))

        return () => {
        }
    }, [])

    const movementsTotal = parseFloat(movements
        ?.reduce((c, p) => p.amount + c, 0)
        ?.toFixed(2))


    if (isLoading) return <p>Loading...</p>

    return (
        <div className={`flex mx-auto justify-center flex-col mx-4 relative`}>
            <div className={`flex justify-between`}>
                <h1 className={`my-4 ml-4 text-lg mr-auto text-white`}>Transactions</h1>
                <p className={`my-4 mr-6 font-light text-base
                ${movementsTotal > 0 ? `text-green-400` : `text-red-500`}`}>
                    {movementsTotal > 0 ? `+` : '-'} {movementsTotal.toFixed(2)}
                </p>
            </div>
            <div className={`rounded-full bg-slate-800 flex justify-between py-3 text-gray-500 font-light 
            `}>
                <ArrowLeftIcon className={`h-6 ml-4`}/>
                August 2022
                <ArrowRightIcon className={`h-6 mr-4 `}/>
            </div>
            <ListOfItems movements={movements}/>
            <AddButton/>
        </div>
    )
}

export default Movements
