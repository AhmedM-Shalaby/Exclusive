"use server"
import { revalidateTag } from "next/cache";
import { fetchServerData } from "../../../api/httpHelper";

async function addToWishlist(id, token) {
    const ENDPOINT = `/wishlist`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },
        body: JSON.stringify({ productId: id }),
        cache: "no-store",
    };
    const result = await fetchServerData(ENDPOINT, options)
    revalidateTag("wishList")

    return result
}

export default addToWishlist;
