import type {NextPage} from 'next'
import {useEffect, useState} from "react";
import {Category} from "@model/ICategory";
import CategoryPopup from "@components/categories/CategoryPopup";

const mockedCategories: Category[] = [
    {
        name: "Rent",
        userId: "12",
        createdAt: "123",
    },
    {
        name: "Grocery",
        userId: "12",
        createdAt: "123",
    }
]

const CategoriesPage: NextPage = () => {
    const [categories, setCategories] = useState<Category[]>([])
    const [selectedCategory, setSelectedCategory] = useState<Category | undefined>()

    useEffect(() => {
        setCategories(mockedCategories)
    }, [])
    return (
        <>
            <nav className="h-full w-10/12 mx-auto rounded-md overflow-y-auto" aria-label="Directory">
                {categories
                    ?.map(c => c.name?.at(0)?.toUpperCase() || "")
                    ?.sort((a, b) => a > b ? 0 : -1)
                    ?.map((letter: string, i) => (
                        <div key={letter} className="relative">
                            <div
                                className={`z-10 sticky top-0 border-b border-gray-700 bg-slate-800 px-6 py-1 text-sm font-medium text-gray-500
                            ${i > 0 ? `border-t` : ``}`}>
                                <h3>{letter}</h3>
                            </div>
                            <ul role="list" className="relative z-0 divide-y divide-gray-200">
                                {categories.filter(c => c.name.at(0)?.toUpperCase() === letter).map((category, i) => (
                                    <li key={i} className="bg-slate-800" onClick={() => setSelectedCategory(category)}>
                                        <div
                                            className="relative px-6 py-5 flex items-center space-x-3 hover:bg-slate-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                            <div className="flex-1 min-w-0">
                                                <a href="#" className="focus:outline-none">
                                                    {/* Extend touch target to entire panel */}
                                                    <span className="absolute inset-0" aria-hidden="true"/>
                                                    <p className="text-sm font-medium text-gray-200">{category.name}</p>
                                                    <p className="text-sm text-gray-300 truncate">{category.description}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                {selectedCategory &&
                    <CategoryPopup isOpen={!!selectedCategory} closePopup={() => setSelectedCategory(undefined)}/>
                }
            </nav>
        </>
    )
}

export default CategoriesPage
