"use server"
import { fetchServerData } from "@/utils/httpHelper";
import { revalidateTag } from 'next/cache';


async function addToCart(body, token) {
    const ENDPOINT = "/cart"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },
        body: JSON.stringify({ ...body }),
        cache: "no-store",
    };

    const result = await fetchServerData(ENDPOINT, options)
    revalidateTag("Cart")

    return result

}



export default addToCart
