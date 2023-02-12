import { PropsWithChildren, createContext, useContext, Context } from "react"
import { requester } from "./requester"

const ApiProviderContext: Context<typeof requester> = createContext(requester)

export const useApiContext = () => useContext(ApiProviderContext)

export const ApiProvider = ({children}: PropsWithChildren) => {
    return (
        <ApiProviderContext.Provider value={requester}>
            {children}
        </ApiProviderContext.Provider>
    )
}