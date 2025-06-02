"use server"
import { revalidateTag } from "next/cache";
import { fetchServerData } from "../../../utils/httpHelper";

async function addToWishlist(id, token) {
    const ENDPOINT = `/wishlist/${id}`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },
        cache: "no-store",
    };
    const result = await fetchServerData(ENDPOINT, options)
    revalidateTag("wishList")

    return result
}

export default addToWishlist;
