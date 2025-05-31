import { fetchServerData } from "../../../utils/httpHelper"
export function getAllProducts(queries = "") {
    const ENDPOINT = `/products${queries}`
    return fetchServerData(ENDPOINT, ["products"])
}
