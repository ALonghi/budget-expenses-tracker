import {combineReducers} from '@reduxjs/toolkit'
import {toastReducer} from "@context/redux/toast/toastSlice";
import {userReducer} from "@context/redux/user/userSlice";

const rootReducer = combineReducers({
    userReducer,
    toastReducer
})

export type RootState = ReturnType<any>

export default rootReducer