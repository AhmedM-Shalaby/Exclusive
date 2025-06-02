"use server"
import { fetchServerData } from "@/utils/httpHelper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
export const createOrder = async () => {
    const Mytoken = cookies().get("token")?.value;
    const ENDPOINT = "/orders"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": Mytoken,
        },
        cache: "no-store",
    };

    const result = await fetchServerData(ENDPOINT, options)
    revalidateTag("Cart")
    revalidateTag("products")

    return result

}
