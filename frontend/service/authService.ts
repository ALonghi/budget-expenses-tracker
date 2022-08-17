import {
    AuthProvider,
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    UserCredential
} from "@firebase/auth";
import IUser, {RegistrationSource} from "@model/IUser";
import UserOps from "@db/user";

import {GoogleAuthProvider} from "firebase/auth";
import logging from "@utils/logging";

export default class AuthService {

    static loginWithEmail = (email: string, password: string): Promise<string> => {
        try {
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential: any) => userCredential?.user?.uid || '')
                .catch((err: any) => {
                    logging.error(`Error while logging user ${email}: ${err.message || err}`)
                    return Promise.reject(err)
                })
        } catch (e: any) {
            const errorMsg = `Error while signing in user: ${e.message || e}`
            logging.error(errorMsg)
            return Promise.reject(errorMsg)
        }
    }

    private static signWithSocial = (
        provider: AuthProvider,
        source: RegistrationSource
    ): Promise<string> => {
        const auth = getAuth();
        auth.languageCode = 'it';
        return signInWithPopup(auth, provider)
            .then(async (result: UserCredential) => {
                const user: IUser = {
                    id: result.user.uid,
                    email: result.user.email || "",
                    createdAt: new Date(),
                    source: source,
                }
                const existingUser = await UserOps.findUserById(user.id)
                if (!existingUser)
                    return UserOps.insertUser(user).then(() => user.id)
                return Promise.resolve(user.id)
            })
            .catch((e: any) => {
                logging.error(`Error while logging with ${provider.providerId}: ${e.messsage || e}`)
                return Promise.reject(e.messsage || e)
            })
    }

    static signWithGoogle = (): Promise<string> => {
        try {
            const provider = new GoogleAuthProvider();
            provider.addScope("https://www.googleapis.com/auth/userinfo.email")
            provider.addScope("https://www.googleapis.com/auth/userinfo.profile")
            provider.setCustomParameters({
                'display': 'popup'
            });
            return AuthService
                .signWithSocial(provider, RegistrationSource.GOOGLE)
                .catch(err => {
                    const errorMsg = `Google signin failed: ${err.message || err}`
                    console.error(errorMsg)
                    return Promise.reject(errorMsg)
                })
        } catch (e: any) {
            console.error(`Error while signing up with Google: ${e.message || e}`)
            return Promise.reject(e.message)
        }
    }

    static signUpWithFacebook = (): Promise<string> => {
        try {
            const provider = new FacebookAuthProvider();
            provider.addScope("public_profile")
            provider.addScope("email")
            provider.setCustomParameters({
                'display': 'popup'
            });
            return AuthService
                .signWithSocial(provider, RegistrationSource.FACEBOOK)
                .catch(err => {
                    const errorMsg = `Facebook signin failed: ${err.message || err}`
                    console.error(errorMsg)
                    return Promise.reject(errorMsg)
                })
        } catch (e: any) {
            console.error(`Error while signing up with Google: ${e.message || e}`)
            return Promise.reject(e.message)
        }

    }

    static logOut = (): Promise<void> => {
        const auth = getAuth();
        return signOut(auth)
            .catch((e: any) => Promise.reject(`Problem occurred when signing out user: ${e.message || e}`))
    }


    static signUpWithEmail = (email: string, password: string): Promise<void> => {
        try {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, email, password)
                .then(() => Promise.resolve())
                .catch((error: any) => {
                    console.error(`Error while creating user:  ${error.message || error}`)
                    return Promise.reject(error.message || error)
                });
        } catch (e: any) {
            console.error(`Sign Up Error : ${e.message || e}`)
            return Promise.reject(e.message || e)
        }
    }
}
