import { fetchServerData } from "../../../utils/httpHelper";

async function getProduct(id) {
    const ENDPOINT = `/products/${id}`
    const res = fetchServerData(ENDPOINT)
    const data = await res
    return product.data
}

export default getProduct;
