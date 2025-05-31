"use server"

import { fetchServerData } from "@/utils/httpHelper"

export const loginUser = async (values) => {
    const ENDPOINT = `/auth/signin`
    const apiOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    }
    const res = await fetchServerData(ENDPOINT, apiOptions)
    return res
}
