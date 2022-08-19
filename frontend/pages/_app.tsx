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
            {process.env.NEXT_PUBLIC_APP_VERSION &&
                <div className={`w-full`}>
                  <p className={`my-8 ml-6 text-left  text-slate-600 `}>v {process.env.NEXT_PUBLIC_APP_VERSION}</p>
                </div>
            }
        </Provider>
    </>)
}

export default MyApp
