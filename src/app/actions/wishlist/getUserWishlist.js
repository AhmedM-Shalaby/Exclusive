"use server"
import { fetchServerData } from "../../../api/httpHelper";

async function getUserWishlist(token) {
    const ENDPOINT = `/wishlist`

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },

    };
    const res = await fetchServerData(ENDPOINT, options, ["wishList"])
    return res
}

export default getUserWishlist;
