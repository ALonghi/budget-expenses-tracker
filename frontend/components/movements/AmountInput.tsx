import {AVAILABLE_CURRENCIES} from "@model/ICurrency";
import SelectMenu from "@components/SelectMenu";

interface AmountInputProps {
    classes?: string
}

const AmountInput: React.FC<AmountInputProps> = (props) => {
    return (
        <div className={`${props.classes ? props.classes : ``}  overflow-hidden`}>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-3 text-left">
                Amount
            </label>
            <div className="mt-1 relative rounded-md shadow-sm ">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only text-gray-200 ">
                        Currency
                    </label>
                    <SelectMenu label={``} values={AVAILABLE_CURRENCIES} classes={`m-none `}
                    selectBoxClasses={` h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md 
                    `}/>

                </div>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="w-7/12 bg-slate-700 focus:ring-indigo-500 focus:border-indigo-500 block border-transparent w-max-fit pl-20 sm:text-sm  rounded-md"
                    placeholder="10.00"
                />
            </div>
        </div>
    )
}

export default AmountInput