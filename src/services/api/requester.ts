const getUrl = (path: string) => {
    return `${process.env.REACT_APP_BASE_API_URL}${path}`
}

export const requester = (path: string, options: RequestInit) => {
    return fetch(getUrl(path), options)
}