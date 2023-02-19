import { useEffect, useRef, useState } from "react"
import { useApiContext } from "./apiProvider"

export interface IUseFetchRequestParams {
    path: string | (() => string),
    options?: RequestInit,
}

export const useFetch = <T extends object>(request?: IUseFetchRequestParams) => {
    const [requestParams, setRequestParams] = useState<IUseFetchRequestParams | undefined>(request)
    const [data, setData] = useState<T>()
    const currentStatus = useRef<FETCH_ACTIONS>('UNSTARTED')
    const [error, setError] = useState<string | null>()

    const requester = useApiContext()

    const fetchData = async () => {    
        if(!requestParams || currentStatus.current === 'LOADING') return 

        currentStatus.current = 'LOADING'

        try {
            const result = await requester(
                typeof requestParams.path == 'function' ? requestParams.path() : requestParams.path,
                requestParams.options
            )

            if (result.ok) {
                setData(await result.json())
                
                setError(null)
            } else {
                setError(await result.text())
            }
        } catch (error: any) {
            setError(error.message)
        }

        currentStatus.current = 'COMPLETED'
    }
    
    useEffect(() => {
        fetchData()
    }, [requestParams])

    return {data, error, status: currentStatus.current, setRequestParams}
}