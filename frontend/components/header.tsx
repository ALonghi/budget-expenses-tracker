import {ChartBarIcon, CursorClickIcon, DocumentReportIcon, ViewGridIcon, XIcon,} from '@heroicons/react/outline'
import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import Link from "next/link";
import SignInButton from "@components/AuthComponents/SignIn/signin";
import {MenuIcon} from "@heroicons/react/solid";
import Signup from "../pages/signup";
import {useRouter} from "next/router";
import {UserState, userStateSelector} from "@context/redux/user/userSlice";
import {useSelector} from "react-redux";

const navigation = [
    {name: 'Overview', href: '/overview', icon: DocumentReportIcon},
    {name: 'Classifications', href: '/classifications', icon: ViewGridIcon},
    {name: 'Categories', href: '/categories', icon: CursorClickIcon},
    {name: 'Movements', href: '/movements', icon: ChartBarIcon},
]

const Header = () => {

    const router = useRouter()
    const userState: UserState = useSelector(userStateSelector)

    return (
        <>
            <Popover className="relative bg-slate-900 ">

                <header
                    className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10 w-full">
                    <div>
                        <Link href="/" className="flex cursor-pointer">
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex-1 md:flex md:items-center md:justify-between ">
                        <div className={`flex justify-items-start overflow-visible min-w-[60%] `}>
                            {navigation.map((link) => (
                                <Link key={link.name} href={link.href}>
                                    <p className="text-base font-medium mx-3 text-gray-800 hover:text-indigo-500 cursor-pointer">
                                        {link.name}
                                    </p>
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center md:mr-2">
                            <SignInButton/>
                            <a
                                href="#"
                                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </header>
                <div className="-mr-2 -my-2 absolute right-5 top-5 md:hidden">
                    <Popover.Button
                        className="bg-slate-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                    </Popover.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus
                                   className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-slate-800 divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button
                                            className="bg-slate-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                            >
                                                <div
                                                    className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                                    <item.icon className="h-6 w-6" aria-hidden="true"/>
                                                </div>
                                                <div
                                                    className="ml-4 text-base font-medium text-gray-100">{item.name}</div>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5">
                                <div className="mt-6 flex justify-center flex-col">
                                    {
                                        userState?.isAuthenticated
                                            ?
                                            <button
                                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                                            >Log out</button>
                                            : <>
                                                <Signup/>
                                                <button className="mt-6 text-center text-sm underline font-medium text-gray-500"
                                                        onClick={() => router.replace('/login')}>
                                                    Already have an account?
                                                </button>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}

export default Header
