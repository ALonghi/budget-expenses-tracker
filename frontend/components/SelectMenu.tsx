interface SelectMenuProps {
    label: string,
    values: string[],
    classes?: string
    selectBoxClasses?: string
}

const SelectMenu: React.FC<SelectMenuProps> = (props) => {
    return (
        <div className={props.classes ? props.classes : ``}>
            {props.label &&
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    {props.label}
                </label>
            }
            <select
                id={props.label}
                name={props.label}
                className={`pl-3 pr-10 py-2 text-base border-gray-300  focus:ring-slate-600 
                focus:border-slate-600 sm:text-sm rounded-md !h-full
                ${props.selectBoxClasses ? props.selectBoxClasses : ``}`}
                defaultValue={props.values[0]}
            >
                {props.values.map((v, i) =>
                    (<option key={i} value={v}>{v}</option>)
                )}
            </select>
        </div>
    )
}

export default SelectMenu