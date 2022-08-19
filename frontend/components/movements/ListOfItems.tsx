import IMovement from "@model/IMovement";
import {useEffect, useState} from "react";

interface SortableTableProps {
    movements: IMovement[]
}

const isOfSameDay = (first: IDate, second: IDate) =>
    first.day === second.day &&
    first.month === second.month &&
    first.year === second.year

interface IDate {
    day: number,
    month: number,
    year: number,
}

interface MovementGrouped {
    date: IDate,
    data: IMovement[]
}

const ListOfItems: React.FC<SortableTableProps> = ({movements}) => {
    const [groupedMovements, setGroupedMovements] = useState<MovementGrouped[]>([])

    useEffect(() => {
        const elems = groupBy(movements)
        console.log(`calculated elems ${JSON.stringify(elems, null, 2)}`)
        setGroupedMovements(() => elems)
    }, [])

    function groupBy(list: IMovement[]) {
        let map: MovementGrouped[] = [];

        function onlyUnique(value: any, index: number, self: any) {
            return self.indexOf(value) === index;
        }

        list.forEach((item: IMovement) => {
            const mapKeys = map.map(e => e.date.day).filter(onlyUnique)
            const itemDate: IDate = {
                day: item.day,
                month: item.month,
                year: item.year
            }
            const indexOfElem = mapKeys?.indexOf(itemDate.day)
            if (indexOfElem >= 0)
                map = map.map(g =>
                    isOfSameDay(g.date, itemDate)
                        ? {date: g.date, data: [...g.data, item]}
                        : g
                )
            else
                map = [...map, {date: itemDate, data: [item]} as MovementGrouped]

        });
        return map.filter(onlyUnique);
    }

    return (
        <nav className="h-full overflow-y-auto" aria-label="Directory">
            {groupedMovements?.map((elems: MovementGrouped, index: number) => (
                <div key={index} className="relative rounded-lg mt-6 shadow-2xl">
                    <div
                        className="bg-slate-800 z-0 sticky top-0 border-b border-slate-700 rounded-t-lg
                        px-6 py-1 text-sm font-medium text-gray-500 ">
                        <div className={`flex justify-between `}>
                            <h3 className={`text-gray-200 font-light py-1`}>{elems.date.day === new Date().getDate()
                                ? 'Today'
                                : elems.date.day === new Date().getDate() - 1
                                    ? 'Yesterday'
                                    : `${elems.date.day}/${elems.date.month}/${elems.date.year}`
                            }</h3>
                        </div>
                    </div>
                    <ul role="list" className="relative z-0 divide-y divide-gray-700 divide-opacity-70">
                        {elems.data.map((m, i) => (
                            <li key={i} className={`bg-slate-800 ${i === elems.data.length - 1 ? `rounded-b-lg` : ``}`}>
                                <div
                                    className="relative px-6 py-5 flex items-center space-x-3
                                    focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                    <div className="flex-1 min-w-0">
                                        <a href="#" className="focus:outline-none">
                                            <p className="text-sm font-medium text-gray-200">{m.amount} {m.currency}</p>
                                            <p className="text-sm text-gray-300 truncate">{m.category}</p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
            }
        </nav>
    )
}

export default ListOfItems