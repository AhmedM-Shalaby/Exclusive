import { fetchServerData } from "../../../utils/httpHelper"
export const gatCategoy = () => {
    const ENDPOINT = `/categories`
    return fetchServerData(ENDPOINT)
}
