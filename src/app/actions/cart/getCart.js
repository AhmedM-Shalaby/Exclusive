"use server"
import { fetchServerData } from "../../../api/httpHelper";

async function getUserCart(token) {
    const ENDPOINT = `/cart`

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "token": token,
        },
    };
    const res = await fetchServerData(ENDPOINT, options, ["Cart"])
    return res
}

export default getUserCart;
