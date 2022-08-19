/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import SelectMenu from "@components/SelectMenu";
import AmountInput from "@components/movements/AmountInput";

interface NewMovementPopupProps {
    isOpen: boolean,
    setIsOpen: Function,
    categories: any[]
    classes?: string,
}

const NewMovementPopup: React.FC<NewMovementPopupProps> = ({
                                                               isOpen = false,
                                                               setIsOpen,
                                                               categories,
                                                               classes,
                                                           }) => {


    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10 " onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className={`fixed z-10 inset-0 overflow-y-auto ${classes ? classes : ``}`}>
                    <div className="flex items-center  justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative bg-slate-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl
                                transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6 w-11/12">
                                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3"
                                                      className="text-md leading-6 font-medium text-gray-400 uppercase">
                                            New transaction
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <AmountInput classes={`mt-4`}/>
                                            <div className="mt-4 inset-y-0 left-0 flex flex-col items-start">
                                                <label htmlFor="amountCategory"
                                                       className="block text-sm font-medium text-gray-300 mb-3 text-left">
                                                    Category
                                                </label>
                                                <SelectMenu label={``} values={categories} classes={`m-none `}
                                                            selectBoxClasses={`bg-slate-700 h-full py-1.5 pl-3 pr-7 border-transparent 
                                                            bg-transparent text-gray-500 sm:text-sm rounded-md 
                    `}/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">

                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default NewMovementPopup
