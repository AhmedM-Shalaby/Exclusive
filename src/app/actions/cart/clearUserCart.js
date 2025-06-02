"use server"
import { revalidateTag } from "next/cache";
import { fetchServerData } from "../../../utils/httpHelper";

async function clearUserCart(token) {
    const ENDPOINT = `/cart`
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },
        cache: "no-store",
    };
    const res = await fetchServerData(ENDPOINT, options)
    revalidateTag("Cart")
    return res

}

export default clearUserCart;
