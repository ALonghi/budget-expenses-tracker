import {XIcon,} from '@heroicons/react/outline'
import React, {ChangeEvent, useEffect, useState} from 'react'
import GoogleAuth from "@components/AuthComponents/GoogleAuth";
import isEmail from "validator/lib/isEmail";
import AuthService from "@service/authService";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {createNotification, ToastData} from "@context/redux/toast/toastSlice";
import {nanoid} from "nanoid";
import {saveAuthUser} from "@context/redux/user/userSlice";
import Spinner from "@components/Spinner/Spinner";

interface LoginData {
    email: string,
    password: string
}

const SignIn = () => {

    const router = useRouter()
    const [isOpen, setIsOpen] = useState<boolean>(false || '/login' === router?.pathname?.toString())
    const [loginData, setLoginData] = useState<LoginData>({} as LoginData)
    const [emailError, setEmailError] = useState<string>(`yep`)
    const [passwordError, setPasswordError] = useState<string>()
    const [isAsync, setIsAsync] = useState<boolean>(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (router?.pathname?.toString() === '/login')
            setIsOpen(true)
    }, [router?.pathname?.toString()])

    const updateLoginData = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.id) {
            case `email`:
                setEmailError(``)
            case `password`:
                setPasswordError(``)
        }

        setLoginData((prevData) => {
            const data: LoginData = {
                ...prevData,
                [e.target.id]: e.target.value
            }
            return data
        })
    }

    const validateInput = (): Promise<void> => {
        const {email, password} = loginData
        if (!isEmail(email)) {
            setEmailError(`L'indirizzo inserito non e' valido`)
            return Promise.reject()
        }
        if (!password) {
            setPasswordError(`Questo campo e' obbligatorio`)
            return Promise.reject()
        }
        if (password?.length < 6) {
            setPasswordError(`La password deve avere almeno 6 caratteri`)
            return Promise.reject()
        }
        return Promise.resolve()
    }

    const signWithEmail = () => {
        setIsAsync(true)
        validateInput()
            .then(() => AuthService.loginWithEmail(loginData.email, loginData.password))
            .then((userId) => dispatch(saveAuthUser(userId)))
            .then(() => {
                const notification: ToastData = {
                    id: nanoid(16),
                    details: `Login effettuato con successo.`,
                    type: `success`,
                    hidden: false
                }
                createNotification(dispatch, notification)
            })
            .catch(err => {
                console.error(`Was not able to complete registration successfully: ${err.message || err}`)
                const notification: ToastData = {
                    id: nanoid(16),
                    details: `Si è verificato un problema. Controlla i dati inseriti e riprova.`,
                    type: `error`,
                    hidden: false
                }
                createNotification(dispatch, notification)
            })
            .finally(() => setIsAsync(false))
    }

    const component = <>
        <div
            className={`fixed top-0 left-0 right-0 z-30 bg-slate-800 w-screen m-0 p-0 min-h-full flex appear`}>
            <div
                className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mx-auto ">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500 absolute top-5 right-5"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                    <div>
                        <h2 className="mt-3 text-2xl font-medium text-gray-900 text-center">Log into your account</h2>
                    </div>

                    <div className="mt-8">
                        <div>
                            <div>

                                <div className="mt-1 grid grid-cols-1 gap-2">
                                    {/*<FacebookAuth type={`login`}/>*/}
                                    <GoogleAuth type={`login`}/>
                                </div>
                            </div>

                            <div className="mt-6 relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300"/>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-slate-800 text-gray-500">or</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            onChange={updateLoginData}
                                            required
                                            className={`appearance-none block w-full px-3 py-2 
                                                border border-gray-300 rounded-md shadow-sm 
                                                placeholder-gray-400 focus:outline-none 
                                                focus:ring-indigo-500 focus:border-indigo-500 
                                                sm:text-sm ${emailError ? `border-danger` : ``}`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={updateLoginData}
                                            onKeyDown={(e) => e.key === 'Enter' ? signWithEmail() : null}
                                            required
                                            className={`${passwordError ? `border-danger` : ``} 
                                                appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                                                shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 
                                                focus:border-indigo-500 sm:text-sm`}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">

                                    <div className="text-sm ">
                                        {/*<a href="#" className="underline text-indigo-600 hover:text-indigo-500">*/}
                                        {/*    Password dimenticata?*/}
                                        {/*</a>*/}
                                    </div>
                                </div>

                                <div>
                                    <button onClick={signWithEmail}
                                            type="button"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent
                                            rounded-md shadow-sm text-base font-medium text-white
                                            bg-indigo-500 hover:bg-indigo-600 focus:outline-none
                                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                                            disabled={isAsync}
                                    >
                                        {isAsync ? <Spinner removeMargin={true} size={25}/> : `Sign In`}
                                    </button>
                                </div>
                                <p onClick={() => router.replace(`/signup`)}
                                   className={`underline text-neutral-400 text-sm text-center cursor-pointer`}>
                                    Don&apos;t have an account? Sign up</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    return (
        <>
            {isOpen
                ? component
                : <button onClick={() => router.replace('/login')}
                          className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                </button>
            }
        </>
    )
}


export default SignIn
