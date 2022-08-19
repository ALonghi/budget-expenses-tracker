/* This example requires Tailwind CSS v2.0+ */
import {PlusSmIcon as PlusSmIconSolid} from '@heroicons/react/solid'
import {useState} from "react";
import NewMovementPopup from "@components/movements/NewMovementPopup";

export default function AddButton() {

    const [showPopup, setShowPopup] = useState<boolean>(false)

    return (
        <>
            <NewMovementPopup isOpen={showPopup} categories={["Expenses", "Ecc"]} setIsOpen={(value: boolean) => setShowPopup(value)}/>
            <button
                type="button"
                className="fixed bottom-7 right-7 inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white
                bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setShowPopup((prev) => !prev)}
            >
                <PlusSmIconSolid className="h-5 w-5" aria-hidden="true"/>
            </button>
        </>
    )
}