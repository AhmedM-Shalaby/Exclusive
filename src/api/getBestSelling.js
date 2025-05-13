import { fetchServerData } from "./httpHelper"
export const getBestSelling = () => {
    const ENDPOINT = `/products?sort=-sold`
    return fetchServerData(ENDPOINT)
}
