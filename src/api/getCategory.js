import { fetchServerData } from "./httpHelper"
export const gatCategoy = () => {
    const ENDPOINT = `/categories`
    return fetchServerData(ENDPOINT)
}
