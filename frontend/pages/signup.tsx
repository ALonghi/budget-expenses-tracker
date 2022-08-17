import type {NextPage} from 'next'
import SignUp from "@components/AuthComponents/SignUp/signup";
import {UserState, userStateSelector} from "@context/redux/user/userSlice";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const LogIn: NextPage = () => {
    const userState: UserState = useSelector(userStateSelector)
    const router = useRouter()

    return (
        <>
            {!userState.isAuthenticated
                ? <SignUp/>
                : router.replace('/')
            }
        </>
    )
}

export default LogIn
