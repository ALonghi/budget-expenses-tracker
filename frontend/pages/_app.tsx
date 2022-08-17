import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Header from "@components/header";
import {Provider} from "react-redux";
import store from "@context/redux/store";

function MyApp({Component, pageProps}: AppProps) {
    return (<>
        <Provider store={store}>
            <Header/>
            <Component {...pageProps} />
        </Provider>
    </>)
}

export default MyApp