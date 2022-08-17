import GoogleAuth from "@components/AuthComponents/GoogleAuth";
import Link from "next/link";
import React, {ChangeEvent, useEffect, useState} from "react";
import isEmail from 'validator/lib/isEmail';
import Spinner from "@components/Spinner/Spinner";
import AuthService from "../../../service/authService";
import {useDispatch, useSelector} from "react-redux";
import {createNotification, ToastData} from "@context/redux/toast/toastSlice";
import {nanoid} from "nanoid";
import {useRouter} from "next/router";
import {saveAuthUser, UserState, userStateSelector} from "@context/redux/user/userSlice";
import UserOps from "@db/user";
import IUser from "@model/IUser";
import logging from "@utils/logging";

interface SignupData {
    email: string,
    password: string,
    confirmPassword: string,
}

const Signup = () => {
    const [signupData, setSignupData] = useState<SignupData>({
        email: ``,
        password: ``,
        confirmPassword: ``
    })

    const dispatch = useDispatch()
    const router = useRouter()
    const userState: UserState = useSelector(userStateSelector)

    const [isOpen, setIsOpen] = useState<boolean>(false || '/signup' === router?.pathname?.toString())
    const [emailError, setEmailError] = useState<string>()
    const [passwordError, setPasswordError] = useState<string>()
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (router?.pathname?.toString() === '/signup' && !userState.isAuthenticated)
            setIsOpen(true)
        else if (userState.isAuthenticated)
            router.back()
    }, [router?.pathname?.toString()])

    const updateSignupData = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.id) {
            case `email`:
                setEmailError(``)
            case `password`:
                setPasswordError(``)
            case `confirmPassword`:
                setConfirmPasswordError(``)
        }

        setSignupData((prevData) => {
            const data: SignupData = {
                ...prevData,
                [e.target.id]: e.target.value
            }
            return data
        })
    }

    const validateInput = (): Promise<void> => {
        const {email, password, confirmPassword} = signupData
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
        if (password !== confirmPassword) {
            setConfirmPasswordError(`Le password inserite non coincidono`)
            return Promise.reject()
        }
        return Promise.resolve()
    }

    const registerWithEmail = () => {
        setIsLoading(true)
        validateInput()
            .then(() => {
                const {email, password} = signupData
                return UserOps
                    .findUserByEmail(email)
                    .then((user: IUser | null) => {
                        if (user) {
                            const notification: ToastData = {
                                id: nanoid(16),
                                details: `Esiste già un account registrato con l'e-mail inserita.`,
                                type: `error`,
                                hidden: false,
                            }
                            createNotification(dispatch, notification)
                            return Promise.resolve()
                        } else {
                            return AuthService
                                .signUpWithEmail(email, password)
                                .then(() => AuthService.loginWithEmail(email, password))
                                .then(userId => {
                                    const notification: ToastData = {
                                        id: nanoid(16),
                                        details: `Il tuo account è stato creato con successo.`,
                                        type: `success`,
                                        hidden: false,
                                        duration: 1500
                                    }
                                    createNotification(dispatch, notification)
                                    dispatch(saveAuthUser(userId))
                                    return router.replace(`/`)
                                })
                                .then(() => Promise.resolve())
                                .catch(err => {
                                    logging.error(`Error while registering/logging user ${signupData.email}: ${err.message || err}`)
                                    return Promise.reject(err)
                                })
                        }
                    })
            })
            .catch(err => {
                logging.error(`Was not able to complete registration successfully: ${err.message || err}`)
                const notification: ToastData = {
                    id: nanoid(16),
                    details: `Si è verificato un problema. Riprova più tardi`,
                    type: `error`,
                    hidden: false,
                }
                createNotification(dispatch, notification)
            })
            .finally(() => setIsLoading(false))
    }


    return (
        <>
            {isOpen
                ? <div className="min-h-full flex justify-center appear">
                    <div
                        className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                        <div className="mx-auto w-full max-w-sm lg:w-96">
                            <div>
                                <h2 className="mt-3 text-2xl font-medium text-gray-900 text-center">Crea il tuo
                                    account</h2>
                            </div>

                            <div className="mt-8">
                                <div>
                                    <div>

                                        <div className="mt-1 grid grid-cols-1 gap-2">
                                            {/*<FacebookAuth type={`register`}/>*/}
                                            <GoogleAuth type={`register`}/>
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
                                                    onChange={updateSignupData}
                                                    required
                                                    className={`appearance-none block w-full px-3 py-2 
                                                border border-gray-300 rounded-md shadow-sm 
                                                placeholder-gray-400 focus:outline-none 
                                                focus:ring-indigo-500 focus:border-indigo-500 
                                                sm:text-sm ${emailError ? `border-danger` : ``}`}

                                                />
                                                {emailError &&
                                                    <p className={`text-red-500 ml-2 mt-1`}>{emailError}</p>
                                                }
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="password"
                                                   className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    onChange={updateSignupData}
                                                    autoComplete="current-password"
                                                    required
                                                    className={`${passwordError ? `border-danger` : ``} 
                                                appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                                                shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 
                                                focus:border-indigo-500 sm:text-sm`}
                                                />
                                                {passwordError &&
                                                    <p className={`text-red-500 ml-2 mt-1`}>{passwordError}</p>
                                                }
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label htmlFor="confirmPassword"
                                                   className="block text-sm font-medium text-gray-700">
                                                Conferma Password
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    onChange={updateSignupData}
                                                    onKeyDown={(e) => e.key === 'Enter' ? registerWithEmail() : null}
                                                    required
                                                    className={`${confirmPasswordError ? `border-danger` : ``} appearance-none 
                                                block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                                                placeholder-gray-400 focus:outline-none focus:ring-indigo-500 
                                                focus:border-indigo-500 sm:text-sm`}
                                                />
                                                {confirmPasswordError &&
                                                    <p className={`text-red-500 ml-2 mt-1`}>{confirmPasswordError}</p>
                                                }
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">

                                            <div className="text-sm ">
                                                <Link href="/login" replace>
                                                    <p className="cursor-pointer text-neutral-600 hover:text-indigo-500 underline">
                                                        Already have an account?</p>
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                onClick={registerWithEmail}
                                                type="button"
                                                disabled={isLoading}
                                                className="w-full flex justify-center py-2 px-4 border border-transparent
                                            rounded-md shadow-sm text-base font-medium text-white
                                            bg-indigo-500 hover:bg-indigo-600 focus:outline-none
                                            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                                            >
                                                {isLoading ? <Spinner removeMargin={true} size={25}/> : `Registrati`}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <button onClick={() => router.replace('/signup')}
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign up
                </button>
            }

        </>
    )
}

export default Signup