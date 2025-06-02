"use server"
import { fetchServerData } from "@/utils/httpHelper";
import { revalidateTag } from 'next/cache';


async function editProductCart(object, token) {
    const ENDPOINT = `/cart/${object.productID}`
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },
        body: JSON.stringify({ count: object.count }),
        cache: "no-store",
    };
    const result = await fetchServerData(ENDPOINT, options)
    revalidateTag("Cart")

    return result

}



export default editProductCart
