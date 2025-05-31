
"use server"

import { fetchServerData } from "@/utils/httpHelper";

export const signUP = async (values) => {
    const ENDPOINT = `/auth/signup`
    const apiOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    }
    const res = await fetchServerData(ENDPOINT, apiOptions);
    return res
}
