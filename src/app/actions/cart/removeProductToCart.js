"use server"
import { fetchServerData } from "@/utils/httpHelper";
import { revalidateTag } from 'next/cache';



async function removeProductToCart(ProductID, token) {
    const ENDPOINT = `/cart/${ProductID}`
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },
        cache: "no-store",
    };
    const result = await fetchServerData(ENDPOINT, options)
    revalidateTag("Cart")


    return result

}



export default removeProductToCart
