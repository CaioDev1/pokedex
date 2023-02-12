import { useEffect, useState } from "react"
import { useApiContext } from "./apiProvider"

export const useRequest = <T extends object>(request: {path: string, options: RequestInit}) => {
    const [data, setData] = useState<T>()
    const [error, setError] = useState<string | null>()

    const requester = useApiContext()

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await requester(request.path, request.options).catch()

                if (result.ok) {
                    setData(await result.json());
                    setError(null);
                } else {
                    setError(await result.text());
                }
            } catch (error: any) {
                setError(error.message)
            }
        }

        fetchData()
    }, [request, requester])

    return [data, error]
}