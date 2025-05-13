import { fetchServerData } from "./httpHelper";

async function getProduct(id) {
    const ENDPOINT = `/products/${id}`
    const data = fetchServerData(ENDPOINT)
    const product = await data

    return product.data
}

export default getProduct;
