import type {NextPage} from 'next'
import {useEffect} from "react";
import {useRouter} from "next/router";

const OtherPages: NextPage = () => {
    const router = useRouter()
    useEffect(() => {
        router.replace(`/`)
    }, [])
    return (
        <>
        </>
    )
}

export default OtherPages
