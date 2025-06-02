"use server"
import { fetchServerData } from "@/utils/httpHelper";
import { revalidateTag } from "next/cache";


async function deleteWishList(id, token) {
    const ENDPOINT = `/wishlist/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },
        cache: "no-store"
    };

    const result = await fetchServerData(ENDPOINT, options);
    revalidateTag("wishList")

    return result;
}

export default deleteWishList;
