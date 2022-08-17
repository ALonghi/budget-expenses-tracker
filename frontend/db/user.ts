import {SearchTypes} from "@model/dao/QueryParamDAO";
import IUser from "@model/IUser";
import {countersCollection, db, usersCollection} from "@db/firebase";
import {doc, getDoc, getDocs, increment, query, runTransaction, updateDoc, where} from 'firebase/firestore/lite';

export default class UserOps {

    static async findUserById(userId: string): Promise<IUser | null> {
        try {
            const docRef = doc(usersCollection, userId)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                const user = docSnap.data() as IUser
                return Promise.resolve(user)
            } else {
                return Promise.resolve(null)
            }
        } catch (e: any) {
            console.error(`Error while getting cart for user ${userId}: ${e.message || e}`)
            return Promise.reject(e.message || e)
        }
    }

    static async findUserByEmail(email: string): Promise<IUser | null> {
        try {
            const q = query(usersCollection, where("email", SearchTypes.EQUAL, email))
            const querySnap = await getDocs(q)
            const results = querySnap.docs?.map(doc => doc.data() as IUser)
            const user = results?.length > 0 ? results[0] : null
            return Promise.resolve(user)
        } catch (e: any) {
            console.error(`Error while getting cart for email ${email}: ${e.message || e}`)
            return Promise.reject(e.message || e)
        }
    }

    static insertUser = async (user: IUser): Promise<void> => {
        try {
            return runTransaction(db, async transaction => {
                const usersCounterRef = doc(countersCollection, "users_counter")
                const counter = await transaction.get(usersCounterRef)
                let userToSave: IUser = user
                if (!counter.exists())
                    console.warn(`Counter for users do not exist`)
                else {
                    userToSave = {...user, customerNo: counter.data().counter + 1}
                    transaction.update(usersCounterRef, {
                        counter: increment(1),
                        updatedAt: new Date()
                    })
                }
                const userRef = doc(usersCollection, userToSave.id)
                await transaction.set(userRef, userToSave)
            })
        } catch (e: any) {
            console.error(`Error while creating user (${JSON.stringify(user)})`)
            return Promise.reject(e.message || e)
        }
    }
}
