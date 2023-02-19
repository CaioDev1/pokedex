import { useEffect, useMemo, useState } from "react";
import { IUseFetchRequestParams, useFetch } from "./useFetch"

export const usePaginationFetch = <T extends object>(request: {
    getUrl: (offset: number, pageSize: number) => string,
    options?: RequestInit | undefined,
    pageSize: number
}) => {
    const [offset, setOffset] = useState<number>(0)

    const getRequestParams: () => IUseFetchRequestParams = () => ({
        path: () => request.getUrl(offset, request.pageSize),
        options: request.options
    })

    const {data, error, status, setRequestParams} = useFetch<T>(getRequestParams())

    useEffect(() => {
        setRequestParams(getRequestParams())
    }, [offset])

    const nextPage = () => {
        if(status === 'COMPLETED') setOffset(offset => offset + 1)
    }
    const previousPage = () => {
        if(status === 'COMPLETED') setOffset(offset => Math.max(0, offset - 1))
    }

    const updatePage = (offset: number) => {
        if(status === 'COMPLETED') setOffset(offset)
    }

    return {data, error, status, nextPage, previousPage, setOffset: updatePage}
}